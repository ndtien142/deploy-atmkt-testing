import { QUERY_KEYS } from '@/common/constants/queryKeys.constant';
import { useQuery } from 'react-query';
import { getHomeConfig } from '../services';
import { ITypeSections } from '../interfaces';

export function useGetHomeConfig() {
  const { data: dataHomeConfig, isLoading, refetch: refetchHomeConfig, isRefetching: isRefetchingHomeConfig } = useQuery(
    [QUERY_KEYS.HOME_CONFIG],
    getHomeConfig,
    // {
    //   select: (data) => {
    //     return {
    //       bannerData: data?.sections?.filter((itemSections: any) => 
    //         itemSections.type === ITypeSections.BANNER
    //       ),
    //       normalServiceData: data?.sections?.filter(
    //         (itemSections : any) => itemSections?.type === ITypeSections.NORMAL_SERVICE
    //       ),
    //       horizontalProductData1: data?.sections?.filter(
    //         (itemSections : any) =>
    //           itemSections?.type === ITypeSections.HORIZONTAL_PRODUCT_LIST_1
    //       ),
    //       horizontalProductData2: data?.sections?.filter(
    //         (itemSections : any) =>
    //           itemSections?.type === ITypeSections.HORIZONTAL_PRODUCT_LIST_2
    //       ),
    //       bannerPromotionData: data?.sections?.filter((itemSections : any) => 
    //         itemSections.type === ITypeSections.PROMOTION_BANNER
    //       ),
    //     };
    //   },
    //   cacheTime: 60000,
    //   staleTime: 10000,
    // }
  );
  return { dataHomeConfig, isLoading, refetchHomeConfig, isRefetchingHomeConfig };
}
