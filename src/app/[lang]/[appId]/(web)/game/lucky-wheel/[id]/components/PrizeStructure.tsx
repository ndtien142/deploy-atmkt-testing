import {
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { GameGift } from "../../common/wheel.interface";

interface Props {
  gameGift: GameGift[];
}

const PrizeStructure = ({ gameGift }: Props) => {
  const gameGiftWinner = gameGift?.filter((item) => item.isWinnable) || [];

  return (
    <Stack spacing={{ xs: "24px", md: "32px" }}>
      <Typography
        fontSize={{ xs: "16px", md: "24px" }}
        color={"#666E80"}
        textAlign={"center"}
      >
        QUÉT MÃ NHẬN QUÀ
        <Typography
          fontSize={{ xs: "16px", md: "24px" }}
          color={"#1F8A70"}
          textAlign={"center"}
        >
          LÁI SH MODE VỀ NHÀ
        </Typography>
      </Typography>
      <Card
        sx={{
          borderRadius: "24px",
          border: "1px solid #00A55D",
          overflow: "hidden",
        }}
      >
        <Stack width={"100%"} height={"100%"}>
          <Box
            width={"100%"}
            sx={{
              background: "#1F8A70",
              py: "10px",
            }}
          >
            <Typography
              fontSize={"20px"}
              fontWeight={700}
              color={"#FFF"}
              textAlign={"center"}
            >
              CƠ CẤU GIẢI THƯỞNG
            </Typography>
          </Box>
          <Box width={"100%"}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    style={{
                      borderRight: "1px solid #00A55D",
                      borderBottom: "1px solid #00A55D",
                      color: "#1F8A70",
                    }}
                  >
                    Quà vòng quay may mắn
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    color="#00A55D"
                    style={{
                      color: "#1F8A70",
                      borderBottom: "1px solid #00A55D",
                    }}
                  >
                    Số lượng
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gameGiftWinner?.map((item, index) => {
                  return (
                    <TableRow key={`${item?.name} + ${index}`}>
                      <TableCell
                        align="center"
                        style={{
                          borderRight: "1px solid #00A55D",
                          borderBottom:
                            gameGift.length - 1 !== index
                              ? "1px solid #00A55D"
                              : "",
                        }}
                      >
                        {item?.name}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          borderBottom:
                            gameGift.length - 1 !== index
                              ? "1px solid #00A55D"
                              : "",
                        }}
                      >
                        {item?.quantity}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Stack>
      </Card>
    </Stack>
  );
};

export default PrizeStructure;
