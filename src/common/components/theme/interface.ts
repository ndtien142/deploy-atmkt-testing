export interface IDataThemeConfig {
  themeConfig: {
    logo: {
      fileId: number;
      imgLink: string;
      isEnable: boolean;
    };
    hoverColor: string;
    darkerColor: string;
    lighterColor: string;
    primaryColor: string;
  };
}

export interface ITheme {
  primaryColor: string;
  hoverColor: string;
  lighterColor: string;
  darkerColor: string;
}

export interface ILogo {
  isEnable: boolean;
  imgLink: string;
}

export interface InitialState {
  theme?: ITheme;
  logo?: ILogo;
}
