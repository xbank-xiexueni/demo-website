import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Box } from '@chakra-ui/react';
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
// import { Header as MyHeader } from '../components/WhyChoose/Item';

const IndexPage = () => {
  // const { t, changeLanguage } = useI18next();
  // const { innerHeight } = window;
  return (
    <Box pb={{ xs: 70, sm: 70, md: 0 }}>
      {/* <Header /> */}

      <Content1 />

      <Content2 />

      <Content3 />


      <Content4 />

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
