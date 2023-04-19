import { Box, Image, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import MyContainer from '../container';
import Icon from '../../images/headerIcon.png';
import { navigate } from 'gatsby';

const MENU_LIST = ['About us', 'Why PrimeX', 'How to trade with us', 'FAQs'];

const Header = () => {
  const isBrowser = typeof window !== 'undefined';
  return (
    <Box
      position={'absolute'}
      left={0}
      right={0}
      top={0}
      bg='transparent'
      zIndex={99}
    >
      <MyContainer>
        <Flex
          justify={'space-between'}
          h={{
            md: '152px',
            sm: '90px',
            xs: '90px',
          }}
          alignItems={'center'}
        >
          <Flex
            gap={2}
            onClick={() => {
              if (isBrowser) {
                window?.scrollTo(0, 0);
              }
            }}
            alignItems='center'
          >
            <Image src={Icon} h={'50px'} alt='icon' />
          </Flex>

          <Flex
            alignItems={'center'}
            gap={'60px'}
            display={{
              md: 'flex',
              sm: 'none',
              xs: 'none',
            }}
          >
            {MENU_LIST.map((item) => (
              <Box
                key={item}
                cursor={'pointer'}
                fontSize={'12px'}
                onClick={() => {
                  navigate(`#${item.toLowerCase().replaceAll(' ', '-')}`);
                }}
              >
                {item}
              </Box>
            ))}
            <Button
              borderRadius={26}
              borderWidth={1}
              borderColor={'font.primary'}
              fontSize={'12px'}
              fontWeight={'500'}
              px='16px'
              py='12px'
              bg='transparent'
              _hover={{
                backgroundColor: 'green.1',
                borderColor: 'green.1',
              }}
              onClick={() => {
                // 打开邮箱
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
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Header;
