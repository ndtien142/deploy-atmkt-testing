"use client";
import { Paper } from "@mui/material";
import AccountGeneralForm from "./components/AccountGeneralForm";
import { useSelector } from "@/common/redux/store";
import { PATH_AUTH } from "@/common/constants/path.constants";
import { useRouter } from "next/navigation";

const AccountGeneral = () => {
  const router = useRouter();
  const { accessToken, isLoggedIn } = useSelector((state) => state.authLogin);
  if (accessToken === "" || !isLoggedIn) {
    router.push(PATH_AUTH.login);
  }
  return (
    <Paper
      sx={{
        bgcolor: "#FFF",
        width: "100%",
        borderRadius: { xs: 0, md: "24px" },
        maxHeight: { xs: "auto", md: "934px" },
        padding: "36px",
      }}
    >
      <AccountGeneralForm />
    </Paper>
  );
};

export default AccountGeneral;
