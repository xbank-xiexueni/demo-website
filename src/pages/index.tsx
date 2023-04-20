import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Box, useStatStyles } from '@chakra-ui/react';
// import { Link, Trans, useI18next } from 'gatsby-plugin-react-i18next';
import '../style/global.scss';
import Footer from '../components/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SEO } from '../components/SEO';
import Content1 from '../components/Content1';
import Content2 from '../components/Content2';
import Content3 from '../components/Content3';
import Content4 from '../components/Content4';
import Content5 from '../components/Content5';
import { useEffect } from 'react';
// import { Header as MyHeader } from '../components/WhyChoose/Item';

function debounce(func: () => void, wait: number) {
  let timeout: any; // 定时器变量
  return function () {
    clearTimeout(timeout); // 每次触发时先清除上一次的定时器,然后重新计时
    timeout = setTimeout(func, wait); // 指定 xx ms 后触发真正想进行的操作 handler
  };
}

const IndexPage = () => {
  // const { t, changeLanguage } = useI18next();
  // const { innerHeight } = window;
  const [windowW, setWindowW] = React.useState(0);
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const windowWidth =
      document.documentElement.clientWidth || document?.body?.clientWidth;
    setWindowW(windowWidth);
    addEventListener(
      'resize',
      debounce(() => {
        const windowWidth =
          document.documentElement.clientWidth || document?.body?.clientWidth;
        console.log(
          '🚀 ~ file: index.tsx:25 ~ addEventListener ~ windowWidth:',
          windowWidth
        );
        setWindowW(windowWidth);
      }, 500)
    );
    return () => {
      removeEventListener('resize', () => {});
    };
  }, []);
  return (
    <Box>
      {/* <Header /> */}

      <Content1 windowW={windowW} />

      <Content2 />

      <Content3 />

      <Content4 windowW={windowW} />

      <Content5 />

      {/* content1 */}

      {/* <Box id={DISCOVER_WEB3_ID}>
        <Utilities />
      </Box> */}

      <Footer />
    </Box>
  );
};

// export const query = graphql`
//   query ($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `;
export default IndexPage;

export const Head: HeadFC = () => <SEO />;
