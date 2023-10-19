import { Table, TableBody, TableContainer } from "@mui/material";
import TableHeadCustom from "@/common/components/table/TableHeadCustom";
import { TABLE_PAYMENT_PRODUCT_HEAD } from "../../constant";
import { ICartItem } from "../../interface";
import TableProductListRow from "./TableProductListRow";

type Props = {
  products: ICartItem[];
};

export default function TableProductList({ products }: Props) {
  return (
    <TableContainer>
      <Table>
        <TableHeadCustom headLabel={TABLE_PAYMENT_PRODUCT_HEAD} />

        <TableBody>
          {products?.map((row) => (
            <TableProductListRow key={row?.productToVariantIds[0]} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
