import { Table, TableBody, TableContainer, Typography } from "@mui/material";
import { TABLE_CART_PRODUCT_HEAD } from "../../constant";
import CheckoutProductListRow from "./CheckoutProductListRow";
import { ICartItem } from "../../interface";
import TableHeadCustom from "@/common/components/table/TableHeadCustom";
import { Stack } from "@mui/material";
import useTranslation from "next-translate/useTranslation";

type Props = {
  products: ICartItem[];
  onDelete: (id: string) => void;
  onDecreaseQuantity: (id: string, quantity: number) => void;
  onIncreaseQuantity: (id: string, quantity: number) => void;
};

export default function CheckoutProductList({
  products,
  onDelete,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: Props) {
  const { t } = useTranslation("common");
  const listOutOfStock = products.filter(
    (item) => item?.product?.productToVariants[0].productVariant.quantity === 0
  );
  const listProduct = products.filter(
    (item) => item?.product?.productToVariants[0].productVariant.quantity > 0
  );
  return (
    <TableContainer>
      <Table>
        <TableHeadCustom headLabel={TABLE_CART_PRODUCT_HEAD} />

        <TableBody>
          {listProduct?.map((row) => (
            <CheckoutProductListRow
              key={row.productToVariantIds[0]}
              row={row}
              onDelete={() => onDelete(row.productToVariantIds[0].toString())}
              onDecrease={() =>
                onDecreaseQuantity(
                  row.productToVariantIds[0].toString(),
                  row?.quantity
                )
              }
              onIncrease={() =>
                onIncreaseQuantity(
                  row.productToVariantIds[0].toString(),
                  row?.quantity
                )
              }
            />
          ))}
        </TableBody>
        {listOutOfStock?.length > 0 ? (
          <>
            <Typography fontWeight={600} sx={{ pt: 2, pl: 2 }}>
              {t("product.productNotExist", {
                number: listOutOfStock?.length,
              })}
            </Typography>
            <TableBody>
              {listOutOfStock?.map((row) => (
                <CheckoutProductListRow
                  key={row.productToVariantIds[0]}
                  row={row}
                  onDelete={() =>
                    onDelete(row.productToVariantIds[0].toString())
                  }
                  onDecrease={() =>
                    onDecreaseQuantity(
                      row.productToVariantIds[0].toString(),
                      row?.quantity
                    )
                  }
                  onIncrease={() =>
                    onIncreaseQuantity(
                      row.productToVariantIds[0].toString(),
                      row?.quantity
                    )
                  }
                />
              ))}
            </TableBody>
          </>
        ) : (
          <></>
        )}
      </Table>
    </TableContainer>
  );
}
