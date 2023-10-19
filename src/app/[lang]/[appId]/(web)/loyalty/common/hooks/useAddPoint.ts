import { useDispatch } from "@/common/redux/store";
import { customerAccumulatePoint } from "../service";
import { useMutation } from "react-query";
import { setAddPointSuccess, setIsOpenModalGift } from "../slice";

export const useAddPoint = () => {
  const dispatch = useDispatch();
  const { mutate, isLoading } = useMutation(customerAccumulatePoint, {
    onSuccess: (data) => {
      if (
        !!data.addedGamePlayTimes.length ||
        data.addedLoyaltyCodeGiftProduct
      ) {
        dispatch(setIsOpenModalGift(true));
      }
      dispatch(setAddPointSuccess(data));
    },
  });

  return { mutate, isLoading };
};
