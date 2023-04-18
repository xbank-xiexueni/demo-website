import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import '@/style/global.scss';
import bg from '../../images/primaryBg.png';
import ResponsiveBox from '../ResponsiveBox';
import MyContainer from '../container';
import Header from '../Header';

const Content1 = () => {
  useLayoutEffect(() => {
    let bgx = document.getElementById('bgx');
    if (!bgx) return;

    bgx.onmouseenter = (e) => {
      let enterX = e.clientX;
      let enterY = e.clientY;
      if (!bgx) return;
      let cliX = parseInt(bgx.style.backgroundPosition.split(' ')[0]) || 0;
      let cliY = parseInt(bgx.style.backgroundPosition.split(' ')[1]) || 0;
      bgx.onmousemove = (e) => {
        let currX = cliX + (e.clientX - enterX) * 0.2;
        let currY = cliY + (e.clientY - enterY) * 0.2;
        if (currX >= -150 && currX <= 0 && !!bgx) {
          // @ts-ignore
          bgx.style['background-position'] = `${currX}px ${currY}px`;
        }
      };
    };
  }, []);
  return (
    <Box position={'relative'}>
      <Header />

      <ResponsiveBox
        mobile={
          <Flex
            backgroundImage={bg}
            w='100vw'
            m={'0 auto'}
            minH={'800px'}
            backgroundSize={'cover'}
            bgPos={'center'}
            bgRepeat={'no-repeat'}
          >
            <MyContainer position={'relative'}>
              <Flex position={'absolute'} bottom={'80px'} flexWrap={'wrap'}>
                <Text
                  fontSize={'44px'}
                  lineHeight={'1.2'}
                  textShadow={'1px 0px 2px rgba(0, 0, 0, 0.1)'}
                  letterSpacing={'-0.2px'}
                >
                  Institutional-grade solutions with PrimeX.
                </Text>
                lot
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
            minH={'982px'}
            backgroundSize={'120%'}
            bgPos={'0 0'}
            id='bgx'
            transition={'all .8s cubic-bezier(0.1, 0.7, 0.7, 1);'}
          >
            <MyContainer position={'relative'}>
              <Flex
                position={'absolute'}
                bottom={'80px'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
              >
                <Text
                  fontSize={'66px'}
                  lineHeight={'1.2'}
                  textShadow={'1px 0px 2px rgba(0, 0, 0, 0.1)'}
                  w='80%'
                >
                  Institutional-grade solutions with PrimeX.
                </Text>
                lot
              </Flex>
            </MyContainer>
          </Flex>
        }
      />
    </Box>
  );
};

export default Content1;
