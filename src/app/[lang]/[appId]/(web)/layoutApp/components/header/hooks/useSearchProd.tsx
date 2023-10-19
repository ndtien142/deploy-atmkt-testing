import { QUERY_KEYS } from '@/common/constants/queryKeys.constant'
import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { getSearch } from '../../../service'

export default function useSearchProd(params:{
    page: number;
    limit: number;
    searchText?: string;
  }) {
  
    return useInfiniteQuery(
        [QUERY_KEYS.PRODUCT_LIST, params],
        ({ pageParam = 1 }) => getSearch(params, pageParam),
        {
          getNextPageParam: (lastPage, allPages) => {
            return lastPage?.meta?.currentPage === lastPage?.meta?.totalPages
              ? undefined
              : lastPage?.meta?.currentPage + 1;
          },
          cacheTime: 0,
        }
      );
}
