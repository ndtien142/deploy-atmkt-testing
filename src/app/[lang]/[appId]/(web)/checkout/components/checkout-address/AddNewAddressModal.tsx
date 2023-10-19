import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Input,
  Stack,
} from "@mui/material";
import {
  FormProvider,
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@/common/components/hook-form";
import { useForm } from "react-hook-form";
import { NewAddressSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IDataNewAddress,
  IFormProvince,
  IParamsSearchProvince,
  IProvinceItem,
} from "../../interface";
import Iconify from "@/common/components/Iconify";
import { dispatch, useSelector } from "@/common/redux/store";
import {
  setOpenModalAddAddress,
  setSearchTextProvince,
  setTypeProvinceParams,
} from "../../order.slice";
import { useGetProvinceData } from "../../hooks/useGetProvinceData";
import RHFSelectPagination from "./RHFSelectPagination";
import { useAddAddress } from "../../hooks/useAddAddress";
import useShowSnackbar from "@/common/hooks/useShowSnackbar";

export default function AddNewAddressModal() {
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const { openModalAddAddress, provinceParams } = useSelector(
    (state) => state.checkout
  );
  const methods = useForm<IFormProvince>({
    resolver: yupResolver(NewAddressSchema()),
  });

  const {
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    watch,
  } = methods;

  const paramsProvince: IParamsSearchProvince = {
    type: provinceParams.type === "" ? "PROVINCE" : provinceParams.type,
    parentId: provinceParams.parentId,
    searchText: provinceParams.searchText,
    page: 1,
    limit: 20,
  };

  const {
    data: dataProvince,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetProvinceData(paramsProvince);

  const arrProvince =
    dataProvince?.pages
      ?.map((item) =>
        item?.items?.map((itemProvince: any) => {
          return {
            id: itemProvince.id,
            name: itemProvince.name,
          };
        })
      )
      .flat() || [];

  const { mutate } = useAddAddress({
    onSuccess: (data) => {
      reset();
      showSuccessSnackbar("Thêm địa chỉ thành công");
      dispatch(setOpenModalAddAddress(false));
    },
    onError: () => {
      showErrorSnackbar("Thêm địa chỉ thất bại");
    },
  });

  const onSubmit = (data: IFormProvince) => {
    const dataSubmit: IDataNewAddress = {
      address1: data.address1,
      address2: data.address1,
      provinceId: parseInt(data.province?.toString() || ""),
      districtId: parseInt(data.district?.toString() || ""),
      wardId: parseInt(data.ward?.toString() || ""),
      name: data.name,
      phone: data.phone,
      isDefault: data.isDefault,
    };
    mutate(dataSubmit);
  };

  const handleClose = () => {
    reset({
      address1: "",
      district: null,
      ward: null,
      province: null,
      name: "",
      phone: "",
    });
    dispatch(setOpenModalAddAddress(false));
  };

  const handleScrollAttribute = (event: any) => {
    const listBoxNode = event?.currentTarget;
    const position = listBoxNode?.scrollTop + listBoxNode?.clientHeight;
    if (listBoxNode.scrollHeight - position <= 1) {
      fetchNextPage();
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openModalAddAddress}
      onClose={handleClose}
    >
      <DialogTitle sx={{ fontSize: "24px!important" }}>
        Thêm địa chỉ mới
      </DialogTitle>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={3}>
            <Box
              sx={{
                display: "grid",
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
              }}
            >
              <RHFTextField name="name" label="Tên người nhận" />
              <RHFTextField name="phone" label="Số điện thoại" />
            </Box>

            <RHFSelectPagination
              onClick={() => {
                dispatch(setSearchTextProvince(""));
                dispatch(
                  setTypeProvinceParams({ type: "PROVINCE", parentId: 0 })
                );
              }}
              onChange={(e) => {
                dispatch(setSearchTextProvince(e.target.value));
              }}
              name="province"
              options={arrProvince}
              labelProp="name"
              label="Chọn tỉnh thành"
              listBoxScroll={handleScrollAttribute}
              loadingScroll={isFetchingNextPage}
              isLoading={isLoading}
              sx={{
                "& .MuiInputBase-root.Mui-disabled": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    backgroundColor: "rgba(103, 99, 101, 0.1)",
                  },
                },
              }}
            />

            <RHFSelectPagination
              onClick={() => {
                dispatch(setSearchTextProvince(""));
                dispatch(
                  setTypeProvinceParams({
                    type: "DISTRICT",
                    parentId: watch("province") || 0,
                  })
                );
              }}
              onChange={(e) => {
                dispatch(setSearchTextProvince(e.target.value));
              }}
              name="district"
              options={arrProvince}
              labelProp="name"
              label="Chọn quận/ huyện"
              listBoxScroll={handleScrollAttribute}
              loadingScroll={isFetchingNextPage}
              isLoading={isLoading}
              sx={{
                "& .MuiInputBase-root.Mui-disabled": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    backgroundColor: "rgba(103, 99, 101, 0.1)",
                  },
                },
              }}
            />

            <RHFSelectPagination
              onClick={() => {
                dispatch(setSearchTextProvince(""));
                dispatch(
                  setTypeProvinceParams({
                    type: "WARD",
                    parentId: watch("district") || 0,
                  })
                );
              }}
              onChange={(e) => {
                dispatch(setSearchTextProvince(e.target.value));
              }}
              name="ward"
              options={arrProvince}
              labelProp="name"
              label="Chọn xã/ phường"
              listBoxScroll={handleScrollAttribute}
              loadingScroll={isFetchingNextPage}
              isLoading={isLoading}
              sx={{
                "& .MuiInputBase-root.Mui-disabled": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    backgroundColor: "rgba(103, 99, 101, 0.1)",
                  },
                },
              }}
            />

            <RHFTextField name="address1" label="Số nhà, tên đường" />

            <RHFCheckbox
              name="isDefault"
              label="Đặt làm địa chỉ mặc định."
              sx={{ mt: 3 }}
            />
            {/* <RHFCheckbox
              name="isSaveAddress"
              label="Lưu địa chỉ."
              sx={{ mt: 3 }}
            /> */}
          </Stack>
        </DialogContent>

        <Divider />

        <DialogActions sx={{ p: 3 }}>
          <Button
            color="inherit"
            variant="text"
            onClick={handleClose}
            sx={{ fontSize: "16px" }}
          >
            Hủy
          </Button>
          <Button
            size="large"
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "rgba(31, 138, 112, 1)",
              borderRadius: 5,
              fontSize: "18px",
            }}
          >
            Cập nhật <Iconify icon={"grommet-icons:link-next"} sx={{ ml: 1 }} />
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
