import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useLayoutEffect, useMemo } from 'react';

import '@/style/global.scss';
import bg from '../../images/primaryBg.png';
import ResponsiveBox from '../ResponsiveBox';
import MyContainer from '../container';
import Header from '../Header';
import Lottie from 'lottie-react';
import './index.css'
// @ts-ignore
import scrollJson from '../../constants/Scroll-helper.json';

export const CONTENT1_HEIGHT = 982;
const Content1 = () => {

  useEffect(() => {
    console.log('1.typeof document:',typeof document,typeof window === 'undefined','typeof window:',typeof window)
    if (typeof window === 'undefined') return;
    const bgx = document.getElementById('bgx');
    console.log('2. bgx:',bgx)
    if (!bgx) return;
    bgx.onmouseenter = (e) => {
      const enterX = e.clientX;
      console.log('3. enterX:',enterX)
      const enterY = e.clientY;
      if (!bgx) return;
      const cliX = parseInt(bgx.style.backgroundPosition.split(' ')[0]) || 0;
      const cliY = parseInt(bgx.style.backgroundPosition.split(' ')[1]) || 0;
      console.log('4. cliX:',cliX)

      bgx.onmousemove = (e) => {
        const currX = cliX + (e.clientX - enterX) * 0.2;
        const currY = cliY + (e.clientY - enterY) * 0.2;
        console.log('5. currX:',currX)

        if (currX >= -150 && currX <= 0 && !!bgx) {
          console.log('6. move')
          bgx.style.setProperty('--x', currX + "px");
          bgx.style.setProperty('--y', currY + "px")
        }
      };
    };
  }, []);

  const minHeight = useMemo(()=> {
    console.log('1. typeof document:',typeof document,typeof window === 'undefined','typeof window:',typeof window)

    if (typeof window === 'undefined') return 982; 
    console.log('2. typeof document:',typeof document,typeof window === 'undefined','typeof window:',typeof window)

    const windowWidth = document.documentElement.clientWidth || document?.body?.clientWidth
    console.log('3. windowWidth:',windowWidth)

    if(!windowWidth) return 982
    return windowWidth * 982 / 1440
  },[])
  
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
            minH={`${minHeight}px`}
            backgroundSize={'125%'}
            bgPos={'0 0'}
            id='bgx'
            className='bgx'
            transition={'all 1s'}
          >
            <MyContainer position={'relative'}>
              <Flex
                position={'absolute'}
                bottom={'80px'}
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
