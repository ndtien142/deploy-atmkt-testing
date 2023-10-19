import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import { IOrderLineItemReqDto } from "../../common/interface";
import TableHeadCustom from "@/common/components/table/TableHeadCustom";
import { TABLE_PAYMENT_PRODUCT_HEAD } from "../../../../checkout/constant";
import TableProductListRow from "./TableProductListRow";

type Props = {
  data: IOrderLineItemReqDto[] | undefined;
  paymentType: string;
};

export const ProductInfo = ({ data, paymentType }: Props) => {
  return (
    <Card sx={{ mb: 3 }} elevation={5}>
      <CardHeader
        title={
          <>
            <Typography variant="h6">Sản phẩm</Typography>
          </>
        }
      />
      <TableContainer>
        <Table>
          <TableHeadCustom headLabel={TABLE_PAYMENT_PRODUCT_HEAD} />

          <TableBody>
            {data?.map((row, index) => (
              <TableProductListRow
                key={index}
                row={row}
                paymentType={paymentType}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
