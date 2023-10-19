"use client";

import { useCallback, useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { Modal, Box, Stack, IconButton } from "@mui/material";
import QRScanContainer from "./QRScanContainer";
import Iconify from "@/common/components/Iconify";
import { setCodeScanned, setOpenScanPopup } from "../../common/slice";
import { useDispatch, useSelector } from "@/common/redux/store";
import { useAddPoint } from "../../common/hooks/useAddPoint";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "100%",
    md: "30vw",
  },
  minWidth: "350px",
  height: {
    xs: "100%",
    md: "auto",
  },
  borderRadius: { xs: 0, md: "24px" },
  backgroundColor: "black",
  p: 3,
};
export const QRScanPopup = ({ open }: { open: boolean }) => {
  const [isFrontCamera, setFrontCamera] = useState(false);
  const [cameraId, setCameraId] = useState<MediaStreamTrack[] | null>(null);
  const dispatch = useDispatch();
  const { code } = useSelector((state) => state.addPoint);
  const [isCatch, setCatch] = useState<boolean>(false);
  const { mutate } = useAddPoint();
  const router = useRouter();
  const { showErrorSnackbar } = useShowSnackbar();
  const setCamera = () => {
    setFrontCamera(!isFrontCamera);
  };

  const handleCloseCamera = async () => {
    if(cameraId) {
      cameraId?.forEach((track) => track.stop());
    }
    dispatch(setOpenScanPopup(false))
  }
  useEffect(() => {
    if (isCatch) {
      mutate(
        {
          code,
        },
        {
          onSuccess: () => {
            router.push(PATH_HOME.add_point_success);
            dispatch(setOpenScanPopup(false));
            setCatch(false);
          },
          onError: (error: any) => {
            showErrorSnackbar(error?.message);
            setTimeout(() => setCatch(false), 3000);
          },
        }
      );
    }
  }, [isCatch]);
  const getCameraPermission = useCallback(() => {
    navigator?.mediaDevices
      ?.getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        setCameraId(stream.getTracks())
      })
      .catch((err: any) => {
        if (err?.name === 'NotAllowedError') {
          dispatch(setOpenScanPopup(false));
        }
      });
  }, [])
  useEffect(() => {
    getCameraPermission();
  }, []);
  return (
    <>
      {/* {isAccessCamera && ( */}
      <Modal open={open}>
        <>
          <Box sx={style}>
            <Stack
              direction={"row"}
              alignItems={"start"}
              justifyContent={"space-between"}
              sx={{
                zIndex: 2,
                position: "absolute",
                m: {
                  xs: 2,
                  md: 0,
                },
              }}
            >
              <IconButton onClick={handleCloseCamera}>
                <Iconify
                  icon={"majesticons:close"}
                  sx={{ width: "24px", height: "24px" }}
                />
              </IconButton>
              <IconButton onClick={setCamera}>
                <Iconify
                  icon={"jam:refresh-reverse"}
                  sx={{ width: "24px", height: "24px" }}
                />
              </IconButton>
            </Stack>
            {isFrontCamera ? (
              <QrReader
                key="user"
                scanDelay={300}
                constraints={{
                  facingMode: "user",
                }}
                ViewFinder={() => QRScanContainer({ isCatch })}
                onResult={(result, error) => {
                  if (result) {
                    dispatch(setCodeScanned(result?.getText()));
                    setCatch(true);
                  }
                }}
                videoStyle={{
                  width: "100%",
                  height: "100%",
                }}
                containerStyle={{
                  width: "100%",
                  height: "350px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                videoContainerStyle={{
                  width: "100%",
                  position: "static",
                  paddingTop: "0 !important",
                }}
              />
            ) : (
              <QrReader
                key="environment"
                scanDelay={300}
                constraints={{
                  facingMode: "environment",
                }}
                ViewFinder={() => QRScanContainer({ isCatch })}
                onResult={(result, error) => {
                  if (result) {
                    dispatch(setCodeScanned(result?.getText()));
                    setCatch(true);
                  }
                }}
                videoStyle={{
                  width: "100%",
                  height: "100%",
                }}
                containerStyle={{
                  width: "100%",
                  height: "450px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                videoContainerStyle={{
                  width: "100%",
                  position: "static",
                  paddingTop: "0 !important",
                }}
              />
            )}
          </Box>
        </>
      </Modal>
      {/* )} */}
    </>
  );
};
