import {
  Box,
  Divider,
  Flex,
  Text,
  chakra,
  Image,
  Button,
  Heading,
  FlexProps,
  ImageProps,
  BoxProps,
  TextProps,
  HeadingProps,
  FlexboxProps,
} from '@chakra-ui/react';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

import '@/style/global.scss';
import bg from '../../images/primaryBg.png';
import ResponsiveBox from '../ResponsiveBox';
import MyContainer from '../container';

import img1 from '../../images/content3/Effortless Registration.png';
import img2 from '../../images/content3/Seamless Onboarding.png';
import img3 from '../../images/content3/Personalized Support.png';
import img4 from '../../images/content3/Secure Funding.png';
import img5 from '../../images/content3/Commence Trading.png';
import img6 from '../../images/content3/Swift Settlement & Withdrawal.png';

import useInViewport from 'ahooks/lib/useInViewport';
import Slider from 'react-slick';

const SUPPORTS = [
  {
    id: 1,
    svg: img1,
    title: 'Effortless Registration',
    text: `Complete our registration form and provide the required KYC/AML documents to set up your PrimeX account.`,
  },
  {
    svg: img2,
    id: 2,
    title: 'Seamless Onboarding',
    text: `Our compliance team will review your application swiftly and activate your account within 48 hours.`,
  },
  {
    id: 3,
    svg: img3,
    title: 'Personalized Support',
    text: `Upon approval, your dedicated account manager will be available to assist with trade execution, strategy, and market insights.`,
  },
  {
    id: 4,
    svg: img4,
    title: 'Secure Funding',
    text: 'Deposit cryptocurrency or fiat currency with confidence through our trusted banking partners.',
  },
  {
    id: 5,
    svg: img5,
    title: 'Commence Trading',
    text: `Start trading on our platform with your funded account, and make the most of your account manager's expertise.`,
  },
  {
    id: 6,
    svg: img6,
    title: 'Swift Settlement & Withdrawal',
    text: '1. Enjoy prompt and reliable settlement and secure withdrawals, providing peace of mind and complete control over your assets.',
  },
];

const OPTIONS = {
  rootMargin: '0px',
  threshold: 1,
};

const settings = {
  infinite: true,
  centerPadding: '12px',
  // slidesToShow: 5,
  swipeToSlide: true,
  arrows: false,
  dots: true,
};

const INITIAL_BOX_PROPS: FlexProps = {
  justify: 'space-between',
  flexWrap: { md: 'nowrap', xs: 'wrap', sm: 'wrap' },
  borderWidth: 1,
  borderColor: {
    md: 'transparent',
    sm: '#252A2F',
    xs: '#252A2F',
  },
  borderRadius: 12,
  p: {
    md: 0,
    sm: '36px',
    xs: '36px',
  },
  minW: '310px',
  mb: { md: '120px', sm: 0, xs: 0 },
  position: 'relative',
  transition: 'all 0.5s',
};

const INITIAL_IMAGE_PROPS: ImageProps = {
  boxSize: {
    md: '340px',
    sm: '240px',
    xs: '240px',
  },
  order: {
    md: 2,
    sm: 1,
    xs: 1,
  },
  position: 'absolute',
  right: 0,
  top: '-120px',
  transition: 'all 0.5s',
};

const Content3 = () => {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const [inViewport0, radio0] = useInViewport(ref0, OPTIONS);
  const [inViewport1, radio1] = useInViewport(ref1, OPTIONS);
  const [inViewport2, radio2] = useInViewport(ref2, OPTIONS);
  const [inViewport3, radio3] = useInViewport(ref3, OPTIONS);
  const [inViewport4, radio4] = useInViewport(ref4, OPTIONS);
  const [inViewport5, radio5] = useInViewport(ref5, OPTIONS);

  return (
    <Box position={'relative'} py='240px'>
      <MyContainer>
        <Heading
          id='how-to-trade-with-us'
          textAlign={'center'}
          px={{
            lg: '200px',
            md: '100px',
            sm: '20px',
            xs: '20px',
          }}
          color='green.1'
          mb={{
            md: '164px',
            sm: '128px',
            xs: '128px',
          }}
          fontSize={{
            md: '60px',
            xs: '46px',
            sm: '46px',
          }}
          fontWeight={400}
        >
          Streamlined Trading with Unparalleled Support
        </Heading>
        <Flex
          justifyContent={'flex-start'}
          alignItems={'center'}
          gap='8px'
          mb='60px'
        >
          <Box
            bgColor={'green.1'}
            w='9px'
            h='9px'
            display={'flex'}
            borderRadius={'100%'}
          />
          <Text fontSize={'12px'}>How to trade with us</Text>
        </Flex>

        {/* mobile  */}
        <Flex
          display={{
            md: 'none',
            sm: 'block',
            xs: 'block',
          }}
          w='100%'
        >
          <Slider {...settings}>
            {SUPPORTS.map((item) => (
              <Box {...INITIAL_BOX_PROPS} key={item.id} h='502px' maxW='310px'>
                <Box pl={0} order={2}>
                  <Heading fontSize={'28px'} mb='20px' fontWeight={400}>
                    {item.title}
                  </Heading>
                  <Text>{item.text}</Text>
                </Box>
                <Image src={item.svg} boxSize={'240px'} order={1} />
              </Box>
            ))}
          </Slider>
        </Flex>

        {/* pc */}
        <Flex
          id='content3-position'
          flexDir={{ md: 'column', sm: 'row', xs: 'row' }}
          overflowX={{
            md: 'unset',
            sm: 'scroll',
            xs: 'scroll',
          }}
          gap={'120px'}
          display={{
            md: 'flex',
            sm: 'none',
            xs: 'none',
          }}
        >
          <Flex ref={ref0} {...INITIAL_BOX_PROPS}>
            <Box
              pl={{
                md: '72px',
                sm: '0',
                xs: '0',
              }}
              w={{
                md: '50%',
                sm: '100%',
                xs: '100%',
              }}
              order={{
                md: 1,
                sm: 2,
                xs: 3,
              }}
              borderLeftColor={
                inViewport0 ? 'green.1' : 'rgba(1, 224, 181, 0.05)'
              }
              borderLeftWidth={2}
              opacity={inViewport0 ? 1 : 0.3}
            >
              <Heading
                fontSize={{
                  md: '40px',
                  sm: '28px',
                  xs: '28px',
                }}
                mb='20px'
                fontWeight={400}
              >
                {SUPPORTS[0].title}
              </Heading>
              <Text fontWeight={300}>{SUPPORTS[0].text}</Text>
            </Box>
            <Image
              src={SUPPORTS[0].svg}
              opacity={inViewport0 ? 1 : 0}
              {...INITIAL_IMAGE_PROPS}
            />
          </Flex>

          <Flex ref={ref1} {...INITIAL_BOX_PROPS}>
            <Box
              pl={{
                md: '72px',
                sm: '0',
                xs: '0',
              }}
              w={{
                md: '50%',
                sm: '100%',
                xs: '100%',
              }}
              order={{
                md: 1,
                sm: 2,
                xs: 3,
              }}
              borderLeftColor={
                inViewport1 ? 'green.1' : 'rgba(1, 224, 181, 0.05)'
              }
              borderLeftWidth={2}
              opacity={inViewport1 ? 1 : 0.3}
            >
              <Heading
                fontSize={{
                  md: '40px',
                  sm: '28px',
                  xs: '28px',
                }}
                fontWeight={400}
                mb='20px'
              >
                {SUPPORTS[1].title}
              </Heading>
              <Text fontWeight={300}>{SUPPORTS[1].text}</Text>
            </Box>
            <Image
              src={SUPPORTS[1].svg}
              opacity={inViewport1 ? 1 : 0}
              {...INITIAL_IMAGE_PROPS}
            />
          </Flex>
          <Flex ref={ref2} {...INITIAL_BOX_PROPS}>
            <Box
              pl={{
                md: '72px',
                sm: '0',
                xs: '0',
              }}
              w={{
                md: '50%',
                sm: '100%',
                xs: '100%',
              }}
              order={{
                md: 1,
                sm: 2,
                xs: 3,
              }}
              borderLeftColor={
                inViewport2 ? 'green.1' : 'rgba(1, 224, 181, 0.05)'
              }
              borderLeftWidth={2}
              opacity={inViewport2 ? 1 : 0.3}
            >
              <Heading
                fontSize={{
                  md: '40px',
                  sm: '28px',
                  xs: '28px',
                }}
                fontWeight={400}
                mb='20px'
              >
                {SUPPORTS[2].title}
              </Heading>
              <Text fontWeight={300}>{SUPPORTS[2].text}</Text>
            </Box>
            <Image
              src={SUPPORTS[2].svg}
              opacity={inViewport2 ? 1 : 0}
              {...INITIAL_IMAGE_PROPS}
            />
          </Flex>
          <Flex ref={ref3} {...INITIAL_BOX_PROPS}>
            <Box
              pl={{
                md: '72px',
                sm: '0',
                xs: '0',
              }}
              w={{
                md: '50%',
                sm: '100%',
                xs: '100%',
              }}
              order={{
                md: 1,
                sm: 2,
                xs: 3,
              }}
              borderLeftColor={
                inViewport3 ? 'green.1' : 'rgba(1, 224, 181, 0.05)'
              }
              borderLeftWidth={2}
              opacity={inViewport3 ? 1 : 0.3}
            >
              <Heading
                fontSize={{
                  md: '40px',
                  sm: '28px',
                  xs: '28px',
                }}
                mb='20px'
                fontWeight='400'
              >
                {SUPPORTS[3].title}
              </Heading>
              <Text fontWeight={300}>{SUPPORTS[3].text}</Text>
            </Box>
            <Image
              src={SUPPORTS[3].svg}
              opacity={inViewport3 ? 1 : 0}
              {...INITIAL_IMAGE_PROPS}
            />
          </Flex>
          <Flex ref={ref4} {...INITIAL_BOX_PROPS}>
            <Box
              pl={{
                md: '72px',
                sm: '0',
                xs: '0',
              }}
              w={{
                md: '50%',
                sm: '100%',
                xs: '100%',
              }}
              order={{
                md: 1,
                sm: 2,
                xs: 3,
              }}
              borderLeftColor={
                inViewport4 ? 'green.1' : 'rgba(1, 224, 181, 0.05)'
              }
              borderLeftWidth={2}
              opacity={inViewport4 ? 1 : 0.3}
            >
              <Heading
                fontSize={{
                  md: '40px',
                  sm: '28px',
                  xs: '28px',
                }}
                fontWeight='400'
                mb='20px'
              >
                {SUPPORTS[4].title}
              </Heading>
              <Text fontWeight={300}>{SUPPORTS[4].text}</Text>
            </Box>
            <Image
              src={SUPPORTS[4].svg}
              opacity={inViewport4 ? 1 : 0}
              {...INITIAL_IMAGE_PROPS}
            />
          </Flex>
          <Flex ref={ref5} {...INITIAL_BOX_PROPS}>
            <Box
              pl={{
                md: '72px',
                sm: '0',
                xs: '0',
              }}
              w={{
                md: '50%',
                sm: '100%',
                xs: '100%',
              }}
              order={{
                md: 1,
                sm: 2,
                xs: 3,
              }}
              borderLeftColor={
                inViewport5 ? 'green.1' : 'rgba(1, 224, 181, 0.05)'
              }
              borderLeftWidth={2}
              opacity={inViewport5 ? 1 : 0.3}
            >
              <Heading
                fontSize={{
                  md: '40px',
                  sm: '28px',
                  xs: '28px',
                }}
                fontWeight='400'
                mb='20px'
              >
                {SUPPORTS[5].title}
              </Heading>
              <Text fontWeight={300}>{SUPPORTS[5].text}</Text>
            </Box>
            <Image
              src={SUPPORTS[5].svg}
              opacity={inViewport5 ? 1 : 0}
              {...INITIAL_IMAGE_PROPS}
            />
          </Flex>
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Content3;
