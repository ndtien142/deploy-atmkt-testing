"use client";

import { Box } from "@mui/material";
import Image from "next/image";

const QRScanContainer = ({isCatch}: {isCatch: boolean}) => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: '50%',
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "200px",
          width: "20vw",
          height: "20vw",
          minHeight: "200px",
          zIndex: 2,
        }}
      >
        <Image alt="qr-frame" src={isCatch ? '/assets/qr_frame_catched.svg' : '/assets/qr_frame.svg'} fill={true} />
      </Box>
    </>
  );
};

export default QRScanContainer;
