import { useSnackbar } from 'notistack';
import { IShowMessage, MessageType } from '../constants/common.interfaces';


export default function useShowSnackbar() {
  const { enqueueSnackbar } = useSnackbar();
  function showSuccessSnackbar(message: string, config?: IShowMessage) {
    enqueueSnackbar(message, {
      style: {
        background: 'linear-gradient(to right bottom, #176B87, #64CCC5 , black)',
        textShadow: '0.5px 0.5px grey',
      },
      variant: MessageType.SUCCESS,
      ...config,
    });
  }
  function showErrorSnackbar(message: string, config?: IShowMessage) {
    enqueueSnackbar(message, {
      variant: MessageType.ERROR,
      ...config,
    });
  }
  return { showSuccessSnackbar, showErrorSnackbar };
}
