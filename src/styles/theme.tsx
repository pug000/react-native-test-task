import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string;
      green: string;
      grey: string;
      purple: string;
      pink: string;
      white: string;
      backgroundGrey: string;
      backgroundWhite: string;
    };
    typography: {
      largeTitle: string;
      title: string;
      subtitle: string;
      text: string;
      smallText: string;
    };
  }
}

const defaultTheme: DefaultTheme = {
  colors: {
    dark: '#14142B',
    green: '#00966D',
    grey: '#4E4B66',
    purple: '#5F2EEA',
    pink: '#ED2E7E',
    white: '#F3EFFF',
    backgroundGrey: '#EFF0F6',
    backgroundWhite: '#F7F7FC',
  },
  typography: {
    largeTitle: '32px',
    title: '20px',
    subtitle: '16px',
    text: '14px',
    smallText: '10px',
  },
};

export default defaultTheme;
