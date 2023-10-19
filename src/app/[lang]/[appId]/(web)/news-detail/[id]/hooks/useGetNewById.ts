import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { getDetailNewById } from "../services";

export const useGetNewById = (id: string) => {
  const { data: newDetail, isLoading } = useQuery(
    [QUERY_KEYS.GET_NEW_DETAIL, id],
    () => getDetailNewById(parseInt(id))
  );

  return { newDetail, isLoading };
};
