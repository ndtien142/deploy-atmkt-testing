"use client";
import Iconify from "@/common/components/Iconify";
import { unAuthorizedStatusCode } from "@/common/constants/config.constant";
import { PATH_AUTH, PATH_HOME } from "@/common/constants/path.constants";
import { useDispatch } from "@/common/redux/store";
import { auth } from "@/common/utils/firebase";
import { Box, Typography } from "@mui/material";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import {
  setFirIdToken,
  setFullName,
  setRegisterWithFirebase,
} from "../../register/slice";
import { useLoginWithFirToken } from "../hooks/useLoginWithFirToken";

const LoginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const { t } = useTranslation('auth');
  const dispatch = useDispatch();
  const { mutate } = useLoginWithFirToken();
  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          const userFullName = user?.displayName;
          user?.getIdToken().then((idToken) =>
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
            )
          );
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box
      onClick={handleLoginWithGoogle}
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
        icon={"flat-color-icons:google"}
        sx={{
          width: "1.5rem",
          height: "1.5rem",
          mx: '3%',
        }}
      />
      <Typography variant="body2">{t('sign_in_with_google')}</Typography>
    </Box>
  );
};

export default LoginWithGoogle;
