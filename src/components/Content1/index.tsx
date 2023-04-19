import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';

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

  const [enterP,setEnterP] = useState({
    enterX:0,
    enterY:0
  })
  const [currentP,setCurrentP] = useState({
    currX:0,
    currY:0
  })

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

  const minHeight = useMemo(()=> {
    if (typeof window === 'undefined') return 982; 
    const windowWidth = document.documentElement.clientWidth || document?.body?.clientWidth
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
            id='bgx'
            onMouseEnter={(e)=> {
              setEnterP({
                enterX:e.clientX,
                enterY:e.clientY
              })
            }}
            onMouseMove={(e)=> {
              const bgx = document.getElementById('bgx');
              if(!bgx) return
              const {enterX,enterY} = enterP
              const cliX = parseInt(bgx.style.backgroundPosition.split(' ')[0]) || 0;
              const cliY = parseInt(bgx.style.backgroundPosition.split(' ')[1]) || 0;
              const currX = cliX + (e.clientX - enterX) * 0.2;
              const currY = cliY + (e.clientY - enterY) * 0.2;
              if (currX >= -500 && currX <= 0) {
                setCurrentP({
                  currX,
                  currY
                })
              }
            }}
            className='bgx'
            transition={'all 1s'}
            style={{
              // @ts-ignore
              '--x':`${currentP?.currX}px`,
              '--y':`${currentP?.currY}px`,
            }}
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
