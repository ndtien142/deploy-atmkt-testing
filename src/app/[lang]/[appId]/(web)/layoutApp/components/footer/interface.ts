export interface IDataFooterConfig {
  SUBSCRIBE_MAIL?: {
    content: string;
    isUsed: boolean;
    title: string;
  };
  CONTACT: {
    address: string;
    phone: string;
    email: string;
    title: string;
  };
  ACCOUNT: {
    links: {
      title: string;
      link: string;
    }[];
    title: string;
  };
  SUPPORT: {
    links: {
      title: string;
      link: string;
    }[];
    title: string;
  };
  LINK_APP: {
    qrLink: string;
    googlePlayLink: string;
    appStoreLink: string;
    facebookLink: string;
    twitterLink: string;
    instagramLink: string;
    title: string;
    descText: string;
  };
}

export interface ICallback {
  onSuccess: VoidFunction;
  onError: Function;
}

export interface ISubscribeEmailForm {
  email: string;
}

export interface ISubscribeEmailSubmit {
  email: string;
  encouragementContent: string;
}
