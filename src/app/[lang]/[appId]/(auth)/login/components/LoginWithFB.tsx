"use client";

import Iconify from "@/common/components/Iconify";
import { unAuthorizedStatusCode } from "@/common/constants/config.constant";
import { PATH_AUTH, PATH_HOME } from "@/common/constants/path.constants";
import { useDispatch } from "@/common/redux/store";
import { auth } from "@/common/utils/firebase";
import { Box, Typography } from "@mui/material";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import {
  setFirIdToken,
  setFullName,
  setRegisterWithFirebase,
} from "../../register/slice";
import { useLoginWithFirToken } from "../hooks/useLoginWithFirToken";

const LoginWithFacebook = () => {
  const facebookProvider = new FacebookAuthProvider();
  const { t } = useTranslation('auth');
  const { mutate } = useLoginWithFirToken();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLoginWithFacebook = () => {
    signInWithPopup(auth, facebookProvider).then((result) => {
      const { user } = result;
      const userFullName = user?.displayName;
      user.getIdToken().then((idToken) => {
        mutate(
          {
            firIdToken: idToken,
          },
          {
            onSuccess: () => {
              router.push(PATH_HOME.root);
            },
            onError: (error) => {
              if (error.statusCode === unAuthorizedStatusCode) {
                dispatch(setRegisterWithFirebase(true));
                userFullName && dispatch(setFullName(userFullName));
                dispatch(setFirIdToken(idToken));
                router.push(PATH_AUTH.create_information);
              }
            },
          }
        );
      });
    });
  };

  return (
    <Box
      onClick={handleLoginWithFacebook}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "4px",
        p: 1,
        border: 1,
        borderColor: "#dce0e4",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      <Iconify
        icon={"logos:facebook"}
        sx={{
          width: "1.5rem",
          height: "1.5rem",
          mx: "3%",
        }}
      />
      <Typography variant="body2">{t('sign_in_with_facebook')}</Typography>
    </Box>
  );
};

export default LoginWithFacebook;
