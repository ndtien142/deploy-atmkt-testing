import {
  IArrayIdProductVariantDetail,
  IProductToVariants,
  IProductVariants,
  ITransformListAttribute,
  IVariantAttributeTermIdList,
} from "./interface";

export const transformProductIdAttributeWithTerm = (
  productVariants: IProductToVariants[]
) => {
  let arrayTransformIdAttribute: IArrayIdProductVariantDetail[] = [];

  if (!productVariants) {
    return [];
  }

  productVariants?.map((item) => {
    if (item) {
      let arrayAttributeTerms: IVariantAttributeTermIdList[] = [];
      item?.productVariant?.productAttributeTerms?.map((attributeTerm) => {
        arrayAttributeTerms.push({
          attributeId: attributeTerm?.productAttribute.id,
          termId:
            attributeTerm?.productAttributeTermDetails.find(
              (termDetail) => termDetail.lang === "VN"
            )?.id || attributeTerm.productAttributeTermDetails[0].id,
        });
      });
      arrayTransformIdAttribute.push({
        prodVariantId: item.id,
        variantAtributeList: arrayAttributeTerms,
        quantity: item?.productVariant?.quantity,
      });
    }
  });

  return arrayTransformIdAttribute;
};

export const listAttributeWithTermOfProduct = (
  productVariants: IProductToVariants[]
) => {
  let transformListTermValue: ITransformListAttribute[] = [];

  if (!productVariants) {
    return [];
  }

  productVariants?.map((itemVariant) => {
    if (itemVariant) {
      itemVariant?.productVariant?.productAttributeTerms?.map(
        (attributeTerm) => {
          const attribute =
            attributeTerm?.productAttribute.productAttributeDetails.find(
              (attributeItem) => attributeItem.lang === "VN"
            ) || attributeTerm.productAttribute.productAttributeDetails[0];

          const term =
            attributeTerm.productAttributeTermDetails.find(
              (termItem) => termItem.lang === "VN"
            ) || attributeTerm.productAttributeTermDetails[0];

          const indexTermValue = transformListTermValue.findIndex(
            (item) => item.id === attributeTerm.productAttribute.id
          );

          if (indexTermValue === -1) {
            transformListTermValue.push({
              id: attributeTerm.productAttribute.id,
              name: attribute.name,
              term: [
                {
                  id: term.id,
                  value: term.value,
                },
              ],
            });
          } else {
            const isContainTermValue = transformListTermValue[
              indexTermValue
            ].term.findIndex((item) => item.id === term.id);
            if (isContainTermValue === -1) {
              transformListTermValue[indexTermValue].term.push({
                id: term.id,
                value: term.value,
              });
            }
          }
        }
      );
    }
  });

  return transformListTermValue;
};

// ==========SELECT ATTRIBUTE==============
// Danh sách term bạn đã có (thay đổi giá trị này theo nhu cầu)
const existingTerms = [81, 90];

// Function find all possible attribute
export function findPossibleTerms(
  existingTerms: number[],
  data: IArrayIdProductVariantDetail[]
) {
  const possibleNextTerms = new Set();
  for (const variant of data) {
    const attributes = variant.variantAtributeList;
    for (const attribute of attributes) {
      const termId = attribute.termId;
      if (existingTerms.includes(termId)) {
        for (const otherAttribute of attributes) {
          if (otherAttribute.termId !== termId) {
            possibleNextTerms.add(otherAttribute.termId);
          }
        }
      }
    }
  }

  return Array.from(possibleNextTerms);
}

export function getAttributeTermsByAttributeId(
  data: IArrayIdProductVariantDetail[],
  attributeId: number
) {
  const attributeTerms = [];

  for (const variant of data) {
    const attributes = variant.variantAtributeList;
    for (const attribute of attributes) {
      if (attribute.attributeId === attributeId) {
        attributeTerms.push(attribute.termId);
      }
    }
  }

  return attributeTerms;
}

export function findPossibleNextTerms(
  existingTerms: number[],
  data: IArrayIdProductVariantDetail[]
) {
  const possibleNextTerms = new Set();

  for (const variant of data) {
    const attributes = variant.variantAtributeList;
    let isVariantValid = true;

    for (const existingTerm of existingTerms) {
      if (!attributes.some((attribute) => attribute.termId === existingTerm)) {
        isVariantValid = false;
        break;
      }
    }

    if (isVariantValid) {
      for (const attribute of attributes) {
        if (!existingTerms.includes(attribute.termId)) {
          possibleNextTerms.add(attribute.termId);
        }
      }
    }
  }

  return Array.from(possibleNextTerms);
}

export function findUnusedAttributes(
  data: IArrayIdProductVariantDetail[],
  existingTerms: number[]
) {
  const usedAttributeIds = existingTerms?.map((termId) => {
    const variantWithMatchingTerm = data.find((variant) =>
      variant.variantAtributeList.some(
        (attribute) => attribute.termId === termId
      )
    );

    if (variantWithMatchingTerm) {
      return variantWithMatchingTerm.variantAtributeList?.map(
        (attribute) => attribute.attributeId
      );
    } else {
      return [];
    }
  });

  const attributes: number[] = data.reduce<number[]>((acc, variant) => {
    const attributeIds = variant.variantAtributeList?.map(
      (attribute) => attribute.attributeId
    );
    acc.push(...attributeIds);
    return acc;
  }, []);
  // Lọc ra các attribute id chưa được sử dụng
  const unusedAttributeIds = attributes.filter(
    (id) => !usedAttributeIds.flat().includes(id)
  );

  return Array.from(new Set(unusedAttributeIds)); // Loại bỏ các id trùng lặp
}

export function isAttributeTermsConnectable(
  attributeId: number,
  existingTerms: number[],
  data: IArrayIdProductVariantDetail[]
) {
  const attributeTerms: number[] = data
    ?.filter((variant) => variant.variantAtributeList !== undefined)
    ?.map((variant) => {
      const attribute = variant.variantAtributeList.find(
        (attribute) => attribute.attributeId === attributeId
      );

      if (attribute !== undefined) {
        return attribute.termId;
      } else {
        return -1;
      }
    });
  const combinedTerms = [...existingTerms, ...attributeTerms];

  const isConnectable = data.some((variant) => {
    const variantTerms = variant?.variantAtributeList?.map(
      (attribute) => attribute.termId
    );
    return combinedTerms.every((term) => variantTerms.includes(term));
  });

  return isConnectable;
}

export function findAttributeIdByTermId(
  data: IArrayIdProductVariantDetail[],
  termIdToFind: number
) {
  for (const variant of data) {
    for (const attribute of variant.variantAtributeList) {
      if (attribute.termId === termIdToFind) {
        return attribute.attributeId;
      }
    }
  }
  return null;
}

export function uniqueTermIds(data: IArrayIdProductVariantDetail[]) {
  const termIds = new Set<number>();
  const resultList: number[] = [];

  data.forEach((item) => {
    if (item.variantAtributeList.length === 1) {
      item.variantAtributeList.forEach((attribute) => {
        const termId = attribute.termId;
        if (!termIds.has(termId)) {
          termIds.add(termId);
          resultList.push(termId);
        }
      });
    }
  });

  return resultList;
}

export function isAttributeTermCombinationExist(
  data: IArrayIdProductVariantDetail[],
  attributeTerms: number[][]
) {
  const variantTerms = data?.map((variant) => {
    return variant?.variantAtributeList?.map((attribute) => attribute.termId);
  });

  for (const terms of attributeTerms) {
    const isCombinationExist = terms.every((termId) => {
      return variantTerms.some((variant) => variant.includes(termId));
    });

    if (!isCombinationExist) {
      return false;
    }
  }

  return true;
}

export function findMatchingVariantId(
  data: IArrayIdProductVariantDetail[],
  attributeTerms: number[][]
) {
  let variantTerms = data?.map((variant) => {
    return {
      prodVariantId: variant?.prodVariantId,
      terms: variant?.variantAtributeList?.map(
        (attribute) => attribute?.termId
      ),
    };
  });

  for (const terms of attributeTerms) {
    variantTerms = variantTerms.filter((item) => {
      if (terms.length !== item.terms.length) return false;
      return terms.every((term) => item.terms.includes(term));
    });
  }

  if (variantTerms.length > 0) {
    return variantTerms[0].prodVariantId;
  } else {
    return null;
  }
}
