import { Box, Divider, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import MyContainer from '../container';
import LOGO from '../../images/footer/icon.png';
import rightImg from '../../images/footer/right.png';

const Footer = () => {
  return (
    <Box bg='white' py='80px'>
      <MyContainer>
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          flexWrap={{
            md: 'nowrap',
            sm: 'wrap',
            xs: 'wrap',
          }}
          gap={'24px'}
          mb='24px'
        >
          <Image src={LOGO} h={'50px'} alt='logo' />
          <Image src={rightImg} h={'32px'} alt='logo' />
        </Flex>
        <Divider color={'black.1'} />

        <Box pt='24px' color={'black.1'} fontSize={'12px'}>
          <Text>
            Copyright ©2022 PrimeX INTERNATIONAL (AUS) PTY LTD. All rights
            reserved.
          </Text>
          <Flex gap={'24px'} mt='4px' mb='32px'>
            <Flex alignItems={'center'} gap={'4px'}>
              <svg
                width='8'
                height='9'
                viewBox='0 0 8 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.5'
                  d='M1.60889 3.7005C2.24889 4.95828 3.28 5.98495 4.53778 6.62939L5.51556 5.65161C5.63556 5.53161 5.81333 5.49161 5.96889 5.54495C6.46667 5.70939 7.00444 5.79828 7.55556 5.79828C7.8 5.79828 8 5.99828 8 6.24273V7.79384C8 8.03828 7.8 8.23828 7.55556 8.23828C3.38222 8.23828 0 4.85606 0 0.682726C0 0.438281 0.2 0.238281 0.444444 0.238281H2C2.24444 0.238281 2.44444 0.438281 2.44444 0.682726C2.44444 1.23828 2.53333 1.77161 2.69778 2.26939C2.74667 2.42495 2.71111 2.59828 2.58667 2.72273L1.60889 3.7005Z'
                  fill='#000D33'
                />
              </svg>
              <Text>0800 537 635</Text>
            </Flex>
            <Flex gap={'4px'} alignItems={'center'}>
              <svg
                width='6'
                height='9'
                viewBox='0 0 6 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.5'
                  d='M2.8 0.238281C1.252 0.238281 0 1.49028 0 3.03828C0 5.13828 2.8 8.23828 2.8 8.23828C2.8 8.23828 5.6 5.13828 5.6 3.03828C5.6 1.49028 4.348 0.238281 2.8 0.238281ZM2.8 4.03828C2.248 4.03828 1.8 3.59028 1.8 3.03828C1.8 2.48628 2.248 2.03828 2.8 2.03828C3.352 2.03828 3.8 2.48628 3.8 3.03828C3.8 3.59028 3.352 4.03828 2.8 4.03828Z'
                  fill='#000D33'
                />
              </svg>
              <Text>3rd Avenue, 83 Manhattan, London, UK</Text>
            </Flex>
          </Flex>
        </Box>
        <Box w='100%'>
          <Text
            fontSize={'12px'}
            transform={'scale(0.83,0.83)'}
            transformOrigin='0 0'
            color={'font.secondary'}
            whiteSpace={'pre-wrap'}
          >
            These materials are for general information purposes only and are
            not investment advice or a recommendation or solicitation to buy,
            sell or hold any crypto asset or to engage in any specific trading
            strategy. Some crypto products and markets are unregulated, and you
            may not be protected by government compensation and/or regulatory
            protection schemes. The unpredictable nature of the crypto asset
            markets can lead to loss of funds. Tax may be payable on any return
            and/or on any increase in the value of your crypto assets and you
            should seek independent advice on your taxation position.
          </Text>
        </Box>
      </MyContainer>
    </Box>
  );
};

export default Footer;
