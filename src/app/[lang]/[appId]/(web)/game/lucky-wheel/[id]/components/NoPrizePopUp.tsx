import Image from "@/common/components/Image";
import { Box, Button, Card, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Modal } from "@mui/material";
import React from "react";
import { WHEEL_IMAGE } from "../../common/wheel.constants";

type Props = {
  open: boolean;
  onClose: () => void;
};
const NoPrizePopUp = ({ open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: 3,
          minWidth: { xs: "300px", md: "350px" },
          mx: "auto",
          borderRadius: { xs: "16px", md: "20px" },
        }}
      >
        <Stack
          spacing={{ xs: "30px", md: "45px" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: { md: "250px", lg: "300px" },
            }}
            width={"100%"}
          >
            <Image alt="pop up congrats" src={WHEEL_IMAGE.wheel_no_prize} />
          </Box>
          <Stack spacing={{ xs: "20px", md: "30px" }}>
            <Stack justifyItems={"center"} spacing={"10px"}>
              <Typography
                textAlign={"center"}
                fontSize={{ xs: "20px", md: "28px", lg: "32px" }}
                fontWeight={700}
                color={"#17181A"}
              >
                Oops... rất tiếc
              </Typography>
              <Typography
                textAlign={"center"}
                fontSize={{ xs: "16px", md: "18px", lg: "24px" }}
                fontWeight={700}
                color={"#666E80"}
                maxWidth={{ xs: "280px", md: "380px", lg: "480px" }}
              >
                Bạn chưa trúng quà nào. Chúc bạn may mắn lần sau!
              </Typography>
            </Stack>
            <Button
              onClick={onClose}
              variant="contained"
              sx={{
                padding: { xs: "8px 16px", md: "16px 24px" },
                borderRadius: "107px",
                bgcolor: "#1F8A70",
                fontSize: "18px",
                fontWeight: 700,
                width: { xs: "60%", md: "33%" },
                marginLeft: "auto!important",
                marginRight: "auto!important",
              }}
            >
              Tiếp tục
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Modal>
  );
};

export default NoPrizePopUp;
