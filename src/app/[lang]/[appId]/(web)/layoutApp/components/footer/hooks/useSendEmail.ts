import { useMutation } from "react-query";
import { sendEmail } from "../service";
import { ICallback } from "../interface";

export const useSendEmail = (callback: ICallback) => {
  return useMutation(sendEmail, {
    onSuccess: () => {
      callback.onSuccess && callback.onSuccess();
    },
    onError: (err) => {
      callback.onError && callback.onError(err);
    },
  });
};
