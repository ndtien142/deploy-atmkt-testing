import { useMutation } from "react-query";
import { postDeviceToken } from "../services";

export const usePostDeviceToken = () => {
  return useMutation(postDeviceToken);
};
