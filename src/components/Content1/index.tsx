import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { FunctionComponent, useMemo, useState } from 'react';

import '@/style/global.scss';
import bg from '../../images/primaryBg.png';
import ResponsiveBox from '../ResponsiveBox';
import MyContainer from '../container';
import Header from '../Header';
import Lottie from 'lottie-react';
import './index.css';
// @ts-ignore
import scrollJson from '../../constants/Scroll-helper.json';

export const CONTENT1_HEIGHT = 982;
const Content1: FunctionComponent<{
  windowSize: {
    width: number;
    height: number;
  };
}> = ({ windowSize: { width, height } }) => {
  const [enterX, setEnterX] = useState(0);
  const [currentX, setCurrentX] = useState('0px');

  // useLayoutEffect(() => {
  //   if (typeof window === 'undefined') return;
  //   const bgx = document.getElementById('bgx');
  //   if (!bgx) return;
  //   bgx.onmouseenter = (e) => {
  //     const enterX = e.clientX;
  //     const enterY = e.clientY;
  //     if (!bgx) return;
  //     const cliX = parseInt(bgx.style.backgroundPosition.split(' ')[0]) || 0;
  //     const cliY = parseInt(bgx.style.backgroundPosition.split(' ')[1]) || 0;

  //     bgx.onmousemove = (e) => {
  //       const currX = cliX + (e.clientX - enterX) * 0.2;
  //       const currY = cliY + (e.clientY - enterY) * 0.2;
  //       if (currX >= -200 && currX <= 0 && !!bgx) {
  //         bgx.style.setProperty('--x', currX + "px");
  //         bgx.style.setProperty('--y', currY + "px")
  //       }
  //     };
  //   };
  // }, []);

  const minHeight = useMemo(() => {
    if (!width) return 982;
    return (width * 982) / 1440;
  }, [width]);

  return (
    <Box position={'relative'}>
      <Header />

      <ResponsiveBox
        mobile={
          <Flex
            backgroundImage={bg}
            w='100vw'
            m={'0 auto'}
            minH={'844px'}
            backgroundSize={'cover'}
            bgPos={'center'}
            bgRepeat={'no-repeat'}
          >
            <MyContainer position={'relative'}>
              <Flex position={'absolute'} bottom={'124px'}>
                <Heading
                  fontSize={'44px'}
                  lineHeight={'1.2'}
                  textShadow={'1px 0px 2px rgba(0, 0, 0, 0.1)'}
                  fontWeight={400}
                >
                  Institutional-grade solutions with PrimeX.
                </Heading>
              </Flex>
              <Flex position={'absolute'} bottom={'24px'}>
                <Lottie
                  animationData={scrollJson}
                  loop={true}
                  style={{
                    width: '15px',
                    height: '40px',
                  }}
                />
              </Flex>
            </MyContainer>
          </Flex>
        }
        pc={
          <Flex
            backgroundImage={bg}
            w='100vw'
            m={'0 auto'}
            overflow={'hidden'}
            minH={{
              xl: `${minHeight * 0.9}px`,
              lg: `${minHeight}px`,
              md: `${minHeight}px`,
            }}
            backgroundSize={'125%'}
            id='bgx'
            backgroundRepeat={'no-repeat'}
            onMouseEnter={(e) => {
              setEnterX(e.clientX);
            }}
            onMouseMove={(e) => {
              const bgx = document.getElementById('bgx');
              if (!bgx) return;
              const cliX =
                parseInt(bgx.style.backgroundPosition.split(' ')[0]) || 0;
              // -100 100
              const currX = cliX + (e.clientX - enterX) * 0.2;
              if (currX > 0) {
                setCurrentX('0px');
              } else if (currX < -150) {
                setCurrentX(`${-150}px`);
              } else {
                setCurrentX(`${currX}px`);
              }
            }}
            onMouseLeave={() => {
              setCurrentX('center');
            }}
            transition={'all .8s'}
            className='bgx'
            style={{
              // @ts-ignore
              '--x': currentX,
            }}
          >
            <MyContainer position={'relative'}>
              <Flex
                position={'absolute'}
                top={{
                  xl:
                    minHeight * 0.9 < height
                      ? 'unset'
                      : `${(height || 982) - 80 - 160}px`,
                  lg:
                    minHeight < height
                      ? 'unset'
                      : `${(height || 982) - 80 - 160}px`,
                  md: 'unset',
                }}
                bottom={{
                  xl: minHeight * 0.9 < height ? '80px' : `unset`,
                  lg: minHeight < height ? '80px' : `unset`,
                  md: '80px',
                }}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
              >
                <Heading
                  fontSize={'66px'}
                  lineHeight={'1.2'}
                  textShadow={'1px 0px 2px rgba(0, 0, 0, 0.1)'}
                  w='80%'
                  fontWeight={400}
                >
                  Institutional-grade solutions with PrimeX.
                </Heading>
                <Lottie
                  animationData={scrollJson}
                  loop={true}
                  style={{
                    width: '15px',
                    height: '40px',
                  }}
                />
              </Flex>
            </MyContainer>
          </Flex>
        }
      />
    </Box>
  );
};

export default Content1;
