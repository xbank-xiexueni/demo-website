import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { FunctionComponent, useMemo, useRef } from 'react';
import bg from '../../images/content4-bg.png';
import MyContainer from '../container';
import Fade from 'react-reveal/Fade';
import useHover from 'ahooks/lib/useHover';

const Content4: FunctionComponent<{
  windowSize: {
    width: number;
    height: number;
  };
}> = ({ windowSize: { width } }) => {
  const height = useMemo(() => {
    if (!width) return 748;
    return (width * 748) / 1440;
  }, [width]);

  const mobileHeight = useMemo(() => {
    if (!width) return 748;
    return (width * 748) / 390;
  }, [width]);

  const ref = useRef(null);
  const isHovering = useHover(ref);
  return (
    <Box
      backgroundImage={bg}
      backgroundSize={'cover'}
      w='100vw'
      h={{
        xl: `${height * 0.9}px`,
        lg: `${height}px`,
        md: `${height}px`,
        sm: `${mobileHeight}px`,
        xs: `${mobileHeight}px`,
      }}
      bgPos={'0 0'}
      position={'relative'}
    >
      <MyContainer>
        <Flex
          pt={{
            md: '100px',
            sm: '12px',
            xs: '12px',
          }}
          flexDirection={'column'}
          justify={{
            md: 'space-between',
            xs: 'flex-start',
            sm: 'flex-start',
          }}
        >
          <Fade bottom opposite cascade duration={1500} distance='3000px'>
            <Heading
              fontSize={{
                md: '40px',
                sm: '36px',
                xs: '36px',
              }}
              w={{
                md: '680px',
                sm: '90%',
                xs: '90%',
              }}
              fontWeight={'400'}
            >
              Partner with PrimeX and experience the pinnacle of bespoke crypto
              trading. Embrace the future of finance with us.
            </Heading>
          </Fade>

          <Button
            w='118px'
            bg='transparent'
            fontSize={'12px'}
            fontWeight={'500'}
            borderColor={'font.primary'}
            borderWidth={1}
            mt={{
              md: '52px',
              sm: '24px',
              xs: '24px',
            }}
            ref={ref}
            borderRadius={26}
            _hover={{
              backgroundColor: 'green.1',
              borderColor: 'green.1',
              color: 'black.2',
            }}
            onClick={() => {
              // 打开邮箱
              if (typeof window === 'undefined') return;
              window.location.href = 'mailto:info@primextrading.com.au';
            }}
          >
            Get in Touch
            <svg
              width='16'
              height='17'
              viewBox='0 0 16 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_1_142)'>
                <path
                  d='M4.22815 4.46632L4.22815 5.79568L9.49374 5.8004L3.75675 11.5374L4.69956 12.4802L10.4366 6.7432L10.4318 12.0088L11.7706 12.0088L11.7706 4.46632L4.22815 4.46632Z'
                  fill={isHovering ? '#05040A' : '#EBF0FF'}
                />
              </g>
              <defs>
                <clipPath id='clip0_1_142'>
                  <rect
                    width='16'
                    height='16'
                    fill='white'
                    transform='translate(0 16.2375) rotate(-90)'
                  />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Content4;
