import * as Yup from 'yup';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Stack, Rating, Typography, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import Iconify from '@/common/components/Iconify';
import useTranslation from 'next-translate/useTranslation';
// components

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  margin: theme.spacing(3),
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------

type FormValuesProps = {
  rating: number | null;
  review: string;
  name: string;
};



export default function ProductDetailsReviewForm() {
  const {t} = useTranslation("common")
  const ReviewSchema = Yup.object().shape({
    rating: Yup.mixed().required('Rating is required'),
    review: Yup.string().required('Review is required'),
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  });

  const defaultValues = {
    rating: null,
    review: '',
    name: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ReviewSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = () => {

  };

  const onCancel = () => {

  };

  return (
    <Stack spacing={2} pt="20px" width={{xs:"100%",sm:"50%"}}>
      <Typography variant="h5" gutterBottom>
      {t('product.review')}

      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <div>
            <Stack spacing={1.5}>
              <Typography variant="body2"> {t('product.review')}</Typography>

              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <Rating
                    sx={{ width: "22%" }}
                    value={Number(field.value)}
                    onChange={(event, value) => {
                      field.onChange(value);
                    }}
                  />
                )}
              />
            </Stack>
            {!!errors.rating && <FormHelperText error> {errors.rating?.message}</FormHelperText>}
          </div>
          <RHFTextField name="name" label="Tiêu đề đánh giá *" />
          <RHFTextField name="review" label="Nội dung *" multiline rows={5} />



          <Stack direction="row" justifyContent="flex-start" spacing={1.5}>
            <Button color="inherit" sx={{ borderRadius: "20px" }} variant="outlined" onClick={onCancel}>
            {t('product.cancel')}
            </Button>
            <LoadingButton endIcon={
              <Iconify icon={"formkit:arrowright"} width={24} height={24} />
            } sx={{ borderRadius: "20px !important", background: "#1F8A70" }} type="submit" variant="contained" loading={isSubmitting}>
              {t('product.sendReview')}
            </LoadingButton>
          </Stack>
        </Stack>
      </FormProvider>
    </Stack>
  );
}
