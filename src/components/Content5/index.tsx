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
    text: 'Crypto OTC (Over-The-Counter) trading involves private transactions executed directly between parties, bypassing traditional exchange platforms. This approach allows for enhanced flexibility, tailored service, and more competitive pricing.',
  },
  {
    title: 'What fees can I expect when trading on PrimeX?',
    text: `At PrimeX, we maintain a transparent and fair pricing structure. Our OTC Desk doesn't charge any fees – the bid or offer price you see is all-inclusive.`,
  },
  {
    title: 'What is the minimum order size for trading on PrimeX?',
    text: 'To trade on PrimeX, you must place an order of at least $50,000 AUD.',
  },
  {
    title: 'What deposit methods does PrimeX support?',
    text: 'PrimeX provides a variety of free and instant AUD deposit options, such as PayID, Direct Deposit, and POLi. Additionally, we offer methods like BPAY and RTGS for added flexibility when transferring funds to your account.',
  },
  {
    title: 'How quickly does PrimeX settle trades?',
    text: 'At PrimeX, we prioritize prompt and reliable settlements. Most trades are settled on the same day.',
  },
  {
    title: `When is PrimeX's OTC team available?`,
    text: 'Our OTC team is available daily from 9 am to 6 pm. You can reach out via direct email, live chat, or phone support for any OTC-related questions.',
  },
  {
    title: `How does PrimeX ensure optimal liquidity?`,
    text: 'PrimeX establishes connections with a global network of vetted counter-parties, enabling us to deliver top-notch liquidity. This translates to competitive pricing and swift order execution for our clients.',
  },
  {
    title: `How does PrimeX handle large trades?`,
    text: 'For sizable trades, our OTC trading desk focuses on minimizing market impact and securing the most favorable price. We execute orders using a blend of algorithmic strategies and manual oversight, ensuring an efficient and discreet trading experience.',
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
      <Flex
        justify={'space-between'}
        onClick={() => setFlag((prev) => !prev)}
        alignItems={'flex-start'}
        gap={'32px'}
      >
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
        <Text mt='20px' fontWeight={'300'}>
          {text}
        </Text>
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
