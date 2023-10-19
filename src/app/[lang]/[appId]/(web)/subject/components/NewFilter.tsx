import { useForm } from "react-hook-form";
import {
  FormProvider,
  RHFMultiCheckbox,
  RHFTextField,
} from "@/common/components/hook-form";
import Iconify from "@/common/components/Iconify";
import { Button, InputAdornment, Stack } from "@mui/material";
import { useDispatch, useSelector } from "@/common/redux/store";
import { useEffect } from "react";
import {
  setCurrentPage,
  setCurrentSubject,
  setSearchText,
} from "../common/slice";
import _ from "lodash";
import { LoadingButton } from "@mui/lab";
import { useInView } from "react-intersection-observer";

type Props = {
  onFetchNextPageSubject: VoidFunction;
  isLoadingFetch: boolean;
  hasNextPage: boolean | undefined;
};

export const NewFilter = ({
  onFetchNextPageSubject,
  isLoadingFetch,
  hasNextPage,
}: Props) => {
  const dispatch = useDispatch();
  const { dataSubject, currentSubject } = useSelector((state) => state.subject);
  const methods = useForm();
  const { ref, inView } = useInView();
  const {
    reset,
    watch,
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    dispatch(setCurrentPage(1));
    dispatch(setCurrentSubject(data?.subjectIds || []));
    dispatch(setSearchText(data?.title || ""));
  };

  useEffect(() => {
    if (currentSubject.length > 0) setValue("subjectIds", currentSubject);
  }, [currentSubject]);

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <RHFTextField
            name="title"
            placeholder="Tìm kiếm"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon={"iconamoon:search-light"} />
                </InputAdornment>
              ),
            }}
          />
          <RHFMultiCheckbox
            name="subjectIds"
            options={dataSubject ?? []}
            sx={{ width: 1, paddingLeft: "11px" }}
          />

          <Stack justifyContent={"center"} spacing={2}>
            <LoadingButton
              variant="text"
              sx={{
                textDecoration: "underline",
                color: "primary",
              }}
              ref={ref}
              loading={isLoadingFetch}
              onClick={() => onFetchNextPageSubject()}
              disabled={!hasNextPage || isLoadingFetch}
            >
              Xem thêm
            </LoadingButton>
            <Button type="submit" variant="contained">
              Áp dụng
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </>
  );
};
