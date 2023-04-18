import {
  Box,
  Divider,
  Flex,
  Text,
  chakra,
  Image,
  Button,
  SlideFade,
} from '@chakra-ui/react';
import React, { useLayoutEffect, useRef, useState } from 'react';

import '@/style/global.scss';
import bg from '../../images/primaryBg.png';
import ResponsiveBox from '../ResponsiveBox';
import MyContainer from '../container';
import Header from '../Header';
import img1 from '../../images/content2/1.svg';
import img2 from '../../images/content2/2.svg';
import img3 from '../../images/content2/3.svg';
import img4 from '../../images/content2/4.svg';
import img5 from '../../images/content2/5.svg';
import img6 from '../../images/content2/6.svg';
import payImg from '../../images/content2/pay.svg';
import googleImg from '../../images/content2/google.svg';
import seqImg from '../../images/content2/seq.svg';
import useInViewport from 'ahooks/lib/useInViewport';
// t
import Fade from 'react-reveal/Fade';

const STEPS = [
  {
    svg: img1,
    title: 'Seasoned Expertise',
    text: `Leverage our team's extensive knowledge in both traditional finance and cryptocurrency markets for reliable advice and guidance.`,
  },
  {
    svg: img2,
    title: 'Optimal Liquidity',
    text: `Access best-in-class liquidity from a global network of vetted counter-parties, enabling competitive pricing and fast order execution.`,
  },
  {
    svg: img3,
    title: 'Robust Security',
    text: 'Benefit from cutting-edge security measures, including multi-signature cold storage, rigorous risk management protocols, two-factor authentication, encrypted communication, and regular security audits.',
  },
  {
    svg: img4,
    title: 'Regulatory Compliance',
    text: 'Count on our dedication to full regulatory compliance and strict KYC/AML procedures, ensuring the utmost platform integrity.',
  },
  {
    svg: img5,
    title: 'Tailored Service',
    text: 'Collaborate with dedicated account managers for customized trading solutions and attentive support that caters to your unique needs.',
  },
  {
    svg: img6,
    title: 'Transparent Pricing',
    text: 'Experience clarity and fairness with our straightforward fee structure, based on a percentage of the trade volume, devoid of hidden costs',
  },
];

const SUPPORTS = [
  {
    svg: payImg,
    title: 'Apple Pay',
    text: `Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking`,
  },
  {
    svg: googleImg,
    title: 'Google',
    text: `Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking`,
  },
  {
    svg: seqImg,
    title: 'Sequoia',
    text: `Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking`,
  },
];

const Content2 = () => {
  const flex1Ref = useRef(null);
  const [inView, radio] = useInViewport(flex1Ref, {
    rootMargin: '20px',
    threshold: 0.9,
  });
  return (
    <Box
      bg='linear-gradient(180deg, #000228 7.52%, #2838E4 100%)'
      position={'relative'}
      id='about-us'
    >
      <MyContainer
        pt='40px'
        pb={{
          md: '440px',
          sm: '900px',
          xs: '900px',
        }}
      >
        {/* 1 */}
        <Fade bottom>
          <Flex
            py={{
              md: '120px',
              sm: '40px',
              xs: '40px',
            }}
            ref={flex1Ref}
            justifyContent={'space-between'}
            flexWrap={{
              md: 'nowrap',
              sm: 'wrap',
              xs: 'wrap',
            }}
            alignItems={'flex-start'}
          >
            <Flex justifyContent={'flex-start'} alignItems={'center'} gap='8px'>
              <Box
                bgColor={'green.1'}
                w='9px'
                h='9px'
                display={'flex'}
                borderRadius={'100%'}
              />
              <Text fontSize={'12px'}>ABOUT US</Text>
            </Flex>
            <Box
              w={{
                xl: '790px',
                lg: '700px',
                md: '700px',
              }}
            >
              <Text fontSize={'40px'} color={'green.1'} mb='24px'>
                Building Trust in the Crypto Frontier
              </Text>
              <Text>
                Established on a solid foundation with years of experience in
                traditional finance, PrimeX has a proven track record of
                excellence in the payment and FX sector. As the financial
                landscape shifted, we evolved into a premier crypto OTC trading
                firm. Our unwavering commitment to delivering trustworthy,
                institutional-grade solutions instils confidence in our
                clientele as they navigate the dynamic world of cryptocurrency.
                By combining unparalleled expertise, state-of-the-art
                technology, and an impeccable reputation, PrimeX provides a
                secure, efficient, and personalized trading experience for all
                participants in the digital asset ecosystem.
              </Text>
            </Box>
          </Flex>
        </Fade>

        {/* 2 */}
        <Fade bottom>
          <Flex
            className='foo-bottom2'
            justifyContent={'space-between'}
            flexWrap={{
              md: 'nowrap',
              sm: 'wrap',
              xs: 'wrap',
            }}
            alignItems={'flex-start'}
            pt={{
              md: '120px',
              sm: '40px',
              xs: '40px',
            }}
            id='why-primex'
          >
            <Flex justifyContent={'flex-start'} alignItems={'center'} gap='8px'>
              <Box
                bgColor={'green.1'}
                w='9px'
                h='9px'
                display={'flex'}
                borderRadius={'100%'}
              />
              <Text fontSize={'12px'}>WHY US</Text>
            </Flex>
            {/* 右边 */}
            <Box
              w={{
                xl: '790px',
                lg: '700px',
                md: '700px',
              }}
            >
              <Text
                fontSize={{
                  md: '32px',
                  sm: '28px',
                  xs: '28px',
                }}
                color={'green.1'}
              >
                Discover the PrimeX difference – a comprehensive crypto OTC
                trading desk for clients seeking secure and reliable service. We
                offer tailored opportunities, supported by our experienced team,
                in-depth research, and cutting-edge infrastructure. Our experts
                are available 24/7 to help you navigate the dynamic crypto
                markets.
              </Text>
              <Flex mt='100px' gap={'24px'} flexWrap={'wrap'}>
                {STEPS.map(({ svg, title, text }) => (
                  <Box
                    key={title}
                    borderTop={'1px solid rgba(235, 240, 255, 0.3)'}
                    pt='32px'
                    pb={{
                      md: '100px',
                      sm: '24px',
                      xs: '24px',
                    }}
                    w={{
                      xl: '242px',
                      lg: '200px',
                      md: '302px',
                      xs: '100%',
                      sm: '100%',
                    }}
                  >
                    <Image
                      src={svg}
                      h={{ md: '44px', sm: '32px', xs: '32px' }}
                      mb='32px'
                    />
                    <Text
                      fontSize={{
                        md: '40px',
                        sm: '28px',
                        xs: '28px',
                      }}
                      mb='16px'
                    >
                      {title}
                    </Text>
                    <Text>{text}</Text>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Fade>
      </MyContainer>

      <Box
        bg='white'
        position={'absolute'}
        bottom={'-60px'}
        left={'28px'}
        boxShadow={'0px 11px 18px rgba(0, 0, 0, 0.1)'}
        borderRadius={'26px'}
        right={'28px'}
        py={{
          md: '88px',
          sm: '32px',
          xs: '32px',
        }}
        px={{
          md: '108',
          sm: '32px',
          xs: '32px',
        }}
      >
        <Flex
          flexWrap={{
            md: 'nowrap',
            sm: 'wrap',
            xs: 'wrap',
          }}
          justify={'space-between'}
        >
          {SUPPORTS.map(({ svg, title, text }) => (
            <Box
              key={title}
              w={{
                md: '32%',
                sm: '100%',
                xs: '100%',
              }}
            >
              <Button
                bg={'white'}
                border='1px'
                borderRadius={'33px'}
                borderColor={'font.tip'}
                color='font.tip'
              >
                Assurance
              </Button>
              <Image src={svg} h='44px' my='28px' />
              <Text mb='12px' fontSize={'26px'} color='black.1'>
                {title}
              </Text>
              <Text color={'font.tip'} fontSize={'14px'}>
                {text}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Content2;
