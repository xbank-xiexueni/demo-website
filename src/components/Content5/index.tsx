import { Box, BoxProps, Collapse, Flex, Heading, Text } from '@chakra-ui/react';
import MyContainer from '../container';
import React, { FunctionComponent, useState } from 'react';

const DATA = [
  {
    title: 'What is PrimeX?',
    text: 'PrimeX is a comprehensive crypto OTC trading desk offering secure, reliable, and personalized trading services to both institutional and individual clients. With a strong background in traditional finance and expertise in cryptocurrencies, we deliver customized trading solutions, top-notch service, and robust security features.',
  },
  {
    title: 'What is crypto OTC trading?',
    text: 'xxx',
  },
  {
    title: 'What fees can I expect when trading on PrimeX?',
    text: 'xxx',
  },
  {
    title: 'What is the minimum order size for trading on PrimeX?',
    text: 'xxx',
  },
  {
    title: 'What deposit methods does PrimeX support?',
    text: 'xxx',
  },
  {
    title: 'How quickly does PrimeX settle trades?',
    text: 'xxx',
  },
  {
    title: `When is PrimeX's OTC team available?`,
    text: 'xxx',
  },
  {
    title: `How does PrimeX ensure optimal liquidity?`,
    text: 'xxx',
  },
  {
    title: `How does PrimeX handle large trades?`,
    text: 'xxx',
  },
];

const Item: FunctionComponent<
  BoxProps & {
    title: string;
    text: string;
  }
> = ({ title, text, ...rest }) => {
  const [flag, setFlag] = useState(false);
  return (
    <Box
      pb='24px'
      pt='32px'
      borderBottomWidth={1}
      borderColor={'rgba(235, 240, 255, 0.1)'}
      cursor={'pointer'}
      {...rest}
    >
      <Flex justify={'space-between'} onClick={() => setFlag((prev) => !prev)}>
        <Text fontSize={'22px'} fontFamily={'Forum'}>
          {title}
        </Text>
        <Box transform={`rotate(${flag ? 180 : 0}deg)`} transition={'all .3s'}>
          <svg
            width='32'
            height='33'
            viewBox='0 0 32 33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M24.0003 12.7383L16.0003 20.7383L7.99963 12.7383'
              stroke='#01E0B5'
              strokeWidth='2'
              strokeMiterlimit='10'
            />
          </svg>
        </Box>
      </Flex>
      <Collapse in={flag} animateOpacity>
        <Text mt='20px'>{text}</Text>
      </Collapse>
    </Box>
  );
};

const Content5 = () => {
  return (
    <Box bgColor={'blue.1'} id='faqs'>
      <MyContainer>
        <Flex
          justify={'space-between'}
          pt={{
            md: '160px',
            sm: '120px',
            xs: '120px',
          }}
          pb={{
            md: '267px',
            sm: '120px',
            xs: '120px',
          }}
          gap={{
            md: '80px',
            sm: '60px',
            xs: '60px',
          }}
          flexWrap={{
            md: 'nowrap',
            sm: 'wrap',
            xs: 'wrap',
          }}
        >
          <Heading
            w={{
              lg: '330px',
              md: '280px',
              sm: '100%',
              xs: '100%',
            }}
            color='green.1'
            fontSize={'40px'}
            lineHeight={'44px'}
            fontWeight={400}
          >
            Frequently Asked Questions
          </Heading>

          <Box
            w={{
              xl: '790px',
              lg: '700px',
              md: '500px',
              sm: '100%',
              xs: '100%',
            }}
          >
            {DATA.map(({ title, text }) => (
              <Item title={title} text={text} key={title} />
            ))}
          </Box>
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Content5;
