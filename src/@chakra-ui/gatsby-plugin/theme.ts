import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  xs: '350px',
  sm: '668px',
  md: '968px',
  lg: '1200px',
  xl: '1400px',
  '2xl': '1920px',
};

// const theme = {
//   config: {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
//   },
//   colors: {
//     primary: '#0000FF',
//     secondary: '#E802E5',
//     // 提示文字
//     font: {
//       primary: '#FFFFFF',
//       tip: '#566E8C',
//     },
//     bg: {
//       gray: '#F2F5FA',
//     },
//     border: '#EFF4FB',
//   },
//   breakpoints,
//   // fonts: {
//   //   body: 'HarmonyOS',
//   //   heading: 'HarmonyOS',
//   //   mono: 'HarmonyOS',
//   // },
//   global: {
//     html: {
//       color: 'white',
//     },
//   },
// };
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    // useSystemColorMode: false,
  },
  colors: {
    font: {
      primary: '#EBF0FF',
      secondary: '#939393',
      tip: '#717A7B',
    },
    black: {
      1: '#000D33',
      2: '#05040A',
    },
    green: {
      1: '#01E0B5',
    },
    blue: {
      1: '#002EAA',
    },
  },
  breakpoints,
  fonts: {
    body: 'Roboto',
    heading: 'EB Garamond',
  },
  styles: {
    global: {
      html: {
        backgroundColor: 'black',
        color: 'font.primary',
      },
      body: {
        backgroundColor: 'black',
        color: 'font.primary',
      },
    },
  },
});

export default theme;
