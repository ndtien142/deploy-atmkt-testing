import { Typography, Stack } from "@mui/material";
import { IAppPolicy } from "../../common/interface";
import { useSelector } from "react-redux";
import { RootState, useDispatch } from "@/common/redux/store";
import { setIdActive, setIsOpenDrawer } from "../common/term.slice";

type Props = { appPolicy: IAppPolicy };

export default function TermItem({ appPolicy }: Props) {
  const dispatch = useDispatch();
  const { idActive } = useSelector((state: RootState) => state.term);

  return (
    <Stack spacing={1}>
      <Typography
        sx={{
          "&:hover": {
            color: "primary.main",
          },
          color: idActive === appPolicy?.id ? "primary.main" : "inherit",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(setIdActive(appPolicy?.id));
          dispatch(setIsOpenDrawer(false));
        }}
      >
        {appPolicy?.appPolicyDetail?.title}
      </Typography>
    </Stack>
  );
}
