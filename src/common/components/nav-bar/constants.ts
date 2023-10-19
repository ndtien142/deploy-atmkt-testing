interface IFunctionList {
    name: string;
    navigateTo: string;
  }
  

export const functionList: IFunctionList[] = [
  {
    name: 'Video',
    navigateTo: '/video',
  },
  {
    name: 'Podcast',
    navigateTo: '/podcast',
  },
  {
    name: 'Cộng đồng',
    navigateTo: '/community',
  },
  {
    name: 'Đăng nhập',
    navigateTo: '/login',
  },
];

