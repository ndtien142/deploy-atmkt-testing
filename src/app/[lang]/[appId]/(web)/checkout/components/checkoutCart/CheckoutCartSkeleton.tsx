import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
  Stack,
} from "@mui/material";
import { TABLE_CART_PRODUCT_HEAD } from "../../constant";
import TableHeadCustom from "@/common/components/table/TableHeadCustom";

export const CheckoutCartSkeleton = () => {
  return (
    <TableContainer>
      <Table>
        <TableHeadCustom headLabel={TABLE_CART_PRODUCT_HEAD} />

        <TableBody>
          {Array(7)
            .fill(7)
            .map((_, index) => (
              <TableRow key={index}>
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      marginRight: 3,
                    }}
                  />

                  <Stack spacing={0.5} width={"100%"}>
                    <Skeleton
                      variant="text"
                      width={"60%"}
                      sx={{ maxWidth: 240 }}
                    />
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Skeleton
                        variant="text"
                        width={"35%"}
                        sx={{ maxWidth: 240 }}
                      />
                      <Skeleton
                        variant="text"
                        width={"35%"}
                        sx={{ maxWidth: 240 }}
                      />
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Skeleton
                        variant="text"
                        width={"35%"}
                        sx={{ maxWidth: 240 }}
                      />
                      <Skeleton
                        variant="text"
                        width={"35%"}
                        sx={{ maxWidth: 240 }}
                      />
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Stack width="100%" justifyContent={"center"} direction="row">
                    <Skeleton
                      variant="text"
                      width={"35%"}
                      sx={{ maxWidth: 240 }}
                    />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack width="100%" justifyContent={"center"} direction="row">
                    <Skeleton
                      variant="text"
                      width={"35%"}
                      sx={{ maxWidth: 240 }}
                    />
                  </Stack>
                </TableCell>

                <TableCell align="center">
                  <Stack width="100%" justifyContent={"right"} direction="row">
                    <Skeleton
                      variant="text"
                      width={"35%"}
                      sx={{ maxWidth: 240 }}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
