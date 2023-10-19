import { useMutation } from "react-query";
import { getWheelPrize } from "../detailWheel.service";

export const useGetWheelPrize = () => ({
  ...useMutation(getWheelPrize),
});
