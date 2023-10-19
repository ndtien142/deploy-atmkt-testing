import {useQuery} from 'react-query';
import {IPhoneExisted} from '../interface';
import {checkPhoneExisted} from '../service';
import { QUERY_KEYS } from '@/common/constants/queryKeys.constant';

export const useCheckPhoneExisted = (params: IPhoneExisted) => {
  const { data: isPhoneExisted, refetch} = useQuery(
    [QUERY_KEYS.CHECK_PHONE_EXISTED],
    () => checkPhoneExisted(params),
    {enabled: false},
  );

  return { isPhoneExisted, refetch}
};
