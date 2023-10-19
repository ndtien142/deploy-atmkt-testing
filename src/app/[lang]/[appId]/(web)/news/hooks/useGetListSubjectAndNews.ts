import { getListSubjectAndNew } from "./../services";
import { QUERY_KEYS } from "./../../../../../../common/constants/queryKeys.constant";
import { useInfiniteQuery, useQuery } from "react-query";
import { IParamSubjectAndNews, IResSubjectNews } from "./../interface";
export const useGetListSubjectAndNews = (params: IParamSubjectAndNews) => {
  const {
    data: dataSubjectNews,
    isLoading: isLoadingSubjectNews,
    fetchNextPage: fetchNextPageSubject,
    isFetchingNextPage: isFetchingNextPageSubject,
    hasNextPage: hasNextPageSubject,
  } = useInfiniteQuery(
    [QUERY_KEYS.CUSTOMER_SUBJECT_NEWS, params],
    ({ pageParam = params.page }) =>
      getListSubjectAndNew({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage: IResSubjectNews) => {
        const { meta } = lastPage;
        const { currentPage, totalPages } = meta;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      cacheTime: 0,
    }
  );

  return {
    dataSubjectNews,
    isLoadingSubjectNews,
    fetchNextPageSubject,
    isFetchingNextPageSubject,
    hasNextPageSubject,
  };
};
