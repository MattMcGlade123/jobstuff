import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      lightGrey: string;
      grey: string;
    };
    devices: {
      medium: string;
      large: string;
    }
  }
}
