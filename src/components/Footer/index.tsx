import { Box, Divider, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import MyContainer from '../container';
import LOGO from '../../images/footer/icon.png';

const Footer = () => {
  return (
    <Box bg='white' py='88px'>
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
          {/* <Image src={rightImg} h={'32px'} alt='logo' /> */}
        </Flex>
        <Divider color={'black.1'} />

        <Box pt='24px' color={'black.1'} fontSize={'12px'}>
          <Text mb='16px'>Copyright ©2024 PrimeX Trading ABN 40644087294 </Text>
          <Text mb='16px'>
            PrimeX Trading is registered with AUSTRAC as a DCE (digital currency
            exchange) service provider (DCE100730737-001).
          </Text>
          <Text mb='16px' fontWeight={700}>
            Disclaimer
          </Text>
          <Text whiteSpace={'pre-wrap'}>
            Trading digital assets involves substantial risk and may not be
            suitable for all investors. Digital asset values can experience high
            volatility, potentially leading to significant losses. Before
            trading digital assets, thoroughly assess your investment goals,
            experience level, and risk tolerance. Information on this website
            does not constitute distribution or use in jurisdictions where
            prohibited by law and does not create a registration requirement.
            This information is not professional investment, financial, or other
            advice; consult a qualified advisor for personalized guidance. We do
            not guarantee the accuracy or completeness of information on this
            website and are not liable for errors, omissions, or reliance on
            provided information. Website information is subject to change
            without notice, and we reserve the right to modify or discontinue
            website services without prior warning. By using this website, you
            acknowledge the risks of digital asset trading and release us from
            liability for any resulting losses or damages.
          </Text>
        </Box>
      </MyContainer>
    </Box>
  );
};

export default Footer;
