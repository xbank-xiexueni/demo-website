import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import bg from '../../images/content4-bg.png';
import MyContainer from '../container';
import Fade from 'react-reveal/Fade';


const Content4 = () => {
  return (
    <Box
      backgroundImage={bg}
      backgroundSize={'cover'}
      w='100vw'
      h='748px'
      bgPos={'0 0'}
    >
      <MyContainer>
        <Flex
          pt={{
            md: '100px',
            sm: '12px',
            xs: '12px',
          }}
          pb='88px'
          flexDirection={'column'}
          justify={{
            md: 'space-between',
            xs: 'flex-start',
            sm: 'flex-start',
          }}
        >
          <Fade bottom>
            <Text
              fontSize={{
                md: '40px',
                sm: '36px',
                xs: '36px',
              }}
              w={{
                md: '680px',
                sm: '100%',
                xs: '100%',
              }}
            >
              Partner with PrimeX and experience the pinnacle of bespoke crypto
              trading. Embrace the future of finance with us.
            </Text>
          </Fade>

          <Button
            w='118px'
            bg='transparent'
            fontSize={'12px'}
            borderColor={'font.primary'}
            borderWidth={1}
            mt={{
              md: '300px',
              sm: '24px',
              xs: '24px',
            }}
            borderRadius={26}
            _hover={{
              bgColor: 'green.1',
              borderColor: 'green.1',
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
                  fill='#EBF0FF'
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