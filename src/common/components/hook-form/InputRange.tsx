import { Input, Stack, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export function InputRange({ type }: any) {
  const { control, setValue } = useFormContext();

  const handleBlurInputRange = (value: [number, number]) => {
    const min = value[0];

    const max = value[1];

    if (min < 0) {
      setValue("priceRange", [0, max]);
    }
    // if (min > 200) {
    //   setValue('priceRange', [500, max]);
    // }
    if (max < 0) {
      setValue("priceRange", [min, 0]);
    }
    // if (max > 200) {
    //   setValue('priceRange', [min, 500]);
    // }
  };

  return (
    <Controller
      name="priceRange"
      control={control}
      render={({ field }) => {
        const isMin = type === "từ";
        const min = field.value[0] === 0 ? "" : field.value[0];

        const max = field.value[1] === 0 ? "" : field.value[1];

        return (
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ width: 1 }}
          >
            <Typography
              variant="caption"
              sx={{
                flexShrink: 0,
                color: "text.disabled",
                textTransform: "capitalize",
                fontWeight: "fontWeightBold",
              }}
            >
              {`${type}`}
            </Typography>

            <Input
              type="number"
              disableUnderline
              fullWidth
              size="small"
              value={isMin ? min : max}
              onChange={(event: any) =>
                isMin
                  ? field.onChange([Number(event.target.value), max])
                  : field.onChange([min, Number(event.target.value)])
              }
              onBlur={() => handleBlurInputRange(field.value)}
              inputProps={{
                step: 10,
                min: 0,
                max: 200,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
              sx={{
                pr: 1,
                py: 0.5,
                borderRadius: 0.75,
                typography: "body2",
                bgcolor: "grey.50012",
                "& .MuiInput-input": { p: 0, textAlign: "right" },
              }}
            />
          </Stack>
        );
      }}
    />
  );
}
