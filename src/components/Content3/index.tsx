import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  FlexProps,
  ImageProps,
  chakra,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import '@/style/global.scss';
import MyContainer from '../container';

import img1 from '../../images/content3/Effortless Registration.png';
import img2 from '../../images/content3/Seamless Onboarding.png';
import img3 from '../../images/content3/Personalized Support.png';
import img4 from '../../images/content3/Secure Funding.png';
import img5 from '../../images/content3/Commence Trading.png';
import img6 from '../../images/content3/Swift Settlement & Withdrawal.png';

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
    text: 'Enjoy prompt and reliable settlement and secure withdrawals, providing peace of mind and complete control over your assets.',
  },
];

// const OPTIONS = {
//   rootMargin: '0px',
//   threshold: 1,
// };

const settings = {
  infinite: false,
  centerPadding: '100px',
  // slidesToShow: 5,
  swipeToSlide: true,
  arrows: false,
  dots: false,
  variableWidth: true,
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
    sm: '28px',
    xs: '28px',
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

const MARGIN_BOTTOM = 164;
const PADDING_Y = 400;

const Content3 = () => {
  // const ref0 = useRef(null);
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);
  // const ref4 = useRef(null);
  // const ref5 = useRef(null);
  // const [inViewport0, radio0] = useInViewport(ref0, OPTIONS);
  // const [inViewport1, radio1] = useInViewport(ref1, OPTIONS);
  // const [inViewport2, radio2] = useInViewport(ref2, OPTIONS);
  // const [inViewport3, radio3] = useInViewport(ref3, OPTIONS);
  // const [inViewport4, radio4] = useInViewport(ref4, OPTIONS);
  // const [inViewport5, radio5] = useInViewport(ref5, OPTIONS);

  const [current, setCurrent] = useState<number>();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const parentTop =
      (document.getElementById('bgx')?.clientHeight || 0) +
      PADDING_Y +
      MARGIN_BOTTOM +
      (document.getElementById('about-us')?.clientHeight || 0) +
      (document.getElementById('how-to-trade-with-us')?.clientHeight || 0) -
      document.documentElement.clientHeight * 0.5;
    if (!parentTop) return;

    const itemHeight = 340;
    addEventListener('scroll', (e) => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      const targetIndex = (scrollTop - parentTop) / itemHeight;
      if (targetIndex < 0 || targetIndex > 6) {
        setCurrent(undefined);
        return;
      }

      setCurrent(Math.ceil(targetIndex));
    });
    return () => {
      removeEventListener('scroll', () => {
        setCurrent(undefined);
      });
    };
  }, []);

  const [slideIndex1, setSlideIndex1] = useState(0);
  const [slideIndex2, setSlideIndex2] = useState(0);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  return (
    <Box
      position={'relative'}
      pt={{
        md: `${PADDING_Y}px`,
        sm: '240px',
        xs: '240px',
      }}
      pb="120px"
    >
      <MyContainer>
        <Heading
          id="how-to-trade-with-us"
          textAlign={'center'}
          px={{
            lg: '200px',
            md: '100px',
            sm: '20px',
            xs: '20px',
          }}
          color="green.1"
          mb={{
            md: `${MARGIN_BOTTOM}px`,
            sm: '100px',
            xs: '100px',
          }}
          fontSize={{
            md: '60px',
            xs: '46px',
            sm: '46px',
          }}
          fontWeight={400}
          lineHeight={1}
        >
          Streamlined Trading with Unparalleled Support
        </Heading>
        <Flex
          justifyContent={'flex-start'}
          alignItems={'center'}
          gap="8px"
          mb="60px"
          display={{
            md: 'flex',
            sm: 'none',
            xs: 'none',
          }}
        >
          <Box
            bgColor={'green.1'}
            w="9px"
            h="9px"
            display={'flex'}
            borderRadius={'100%'}
          />
          <Text fontSize={'12px'}>How to trade with us</Text>
        </Flex>

        {/* mobile xs  sliderRef2 */}
        <Flex
          display={{
            sm: 'none',
            xs: 'block',
          }}
          w="100%"
        >
          <Slider
            {...settings}
            ref={sliderRef2}
            beforeChange={(current, next) => setSlideIndex2(next)}
          >
            {SUPPORTS.map((item) => (
              <Box
                {...INITIAL_BOX_PROPS}
                key={item.id}
                h="502px"
                maxW="310px"
                mr="24px"
              >
                <Image src={item.svg} boxSize={'240px'} mb="16px" />
                <Box>
                  <Heading fontSize={'28px'} mb="20px" fontWeight={400}>
                    {item.title}
                  </Heading>
                  <Text opacity={0.8}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Slider>

          {/* dots */}
          <Flex
            my="30px"
            display={{
              sm: 'none',
              xs: 'flex',
            }}
            borderBottomColor="rgba(1, 224, 181, 0.05)"
            borderBottomWidth={2}
            position="relative"
          >
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <Flex
                cursor={'pointer'}
                w={'16.6%'}
                key={item}
                h="2px"
                onClick={(e) => {
                  console.log('aa');
                  if (!sliderRef2.current) return;
                  // @ts-ignore
                  sliderRef2.current?.slickGoTo(item);
                }}
              ></Flex>
            ))}
            <Box
              left={
                slideIndex2 === 1
                  ? `${1 * 16.6}%`
                  : slideIndex2 === 2
                  ? `${2 * 16.6}%`
                  : slideIndex2 === 3
                  ? `${3 * 16.6}%`
                  : slideIndex2 === 4
                  ? `${4 * 16.6}%`
                  : slideIndex2 === 5
                  ? `${5 * 16.6}%`
                  : 0
              }
              w="16.6%"
              position={'absolute'}
              bgColor={'green.1'}
              transition={'all 0.5s'}
              h="2px"
              bottom="-2px"
            />
          </Flex>
        </Flex>

        <Flex
          display={{
            md: 'none',
            sm: 'block',
            xs: 'none',
          }}
          w="100%"
        >
          <Slider
            {...settings}
            slidesToScroll={2}
            ref={sliderRef1}
            beforeChange={(current, next) => setSlideIndex1(next)}
          >
            {SUPPORTS.map((item) => (
              <Box
                {...INITIAL_BOX_PROPS}
                key={item.id}
                h="502px"
                maxW="310px"
                mr="24px"
              >
                <Image src={item.svg} boxSize={'240px'} mb="16px" />
                <Box>
                  <Heading fontSize={'28px'} mb="20px" fontWeight={400}>
                    {item.title}
                  </Heading>
                  <Text opacity={0.8}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Slider>
          <Flex
            my="30px"
            display={{
              sm: 'flex',
              xs: 'none',
            }}
            borderBottomColor="rgba(1, 224, 181, 0.05)"
            borderBottomWidth={2}
            position="relative"
          >
            {[0, 2, 4].map((item) => (
              <Flex
                cursor={'pointer'}
                w={'33.3%'}
                key={item}
                h="2px"
                onClick={(e) => {
                  console.log('aa');
                  if (!sliderRef1.current) return;
                  // @ts-ignore
                  sliderRef1.current?.slickGoTo(item);
                }}
              ></Flex>
            ))}
            <Box
              left={
                slideIndex1 === 2 ? '33.3%' : slideIndex1 === 4 ? '66.6%' : 0
              }
              w="33.3%"
              position={'absolute'}
              bgColor={'green.1'}
              transition={'all 0.5s'}
              h="2px"
              bottom="-2px"
            />
          </Flex>
        </Flex>

        {/* pc */}
        <Flex
          flexDir={'column'}
          gap={'120px'}
          display={{
            md: 'flex',
            sm: 'none',
            xs: 'none',
          }}
          position={'relative'}
        >
          <Box
            position={'absolute'}
            h="100%"
            w="2px"
            bgColor={'rgba(1, 224, 181, 0.05)'}
          />

          {SUPPORTS.map(({ id, title, text, svg }) => (
            <Flex {...INITIAL_BOX_PROPS} key={id}>
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
                borderLeftColor={current === id ? 'green.1' : 'transparent'}
                borderLeftWidth={2}
                opacity={current === id ? 1 : 0.3}
              >
                <Heading
                  fontSize={{
                    md: '40px',
                    sm: '28px',
                    xs: '28px',
                  }}
                  mb="20px"
                  fontWeight={400}
                >
                  {title}
                </Heading>
                <Text fontWeight={300} opacity={0.8}>
                  {text}
                </Text>
              </Box>
              <Image
                src={svg}
                opacity={current === id ? 1 : 0}
                {...INITIAL_IMAGE_PROPS}
              />
            </Flex>
          ))}
          {/* <Flex ref={ref0} {...INITIAL_BOX_PROPS}>
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
          </Flex> */}
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Content3;
