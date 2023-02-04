import { memo } from 'react';
import { useFonts } from 'expo-font';

import { options } from 'src/utils/constants';

import OptionList from 'src/components/OptionList';

import { Container, StyledText, Title, Wrapper } from './Payment.style';

function Payment() {
  const [fontLoaded] = useFonts({
    'Poppins-Bold': require('src/assets/fonts/poppins/Poppins-Bold.ttf'),
    'Poppins-Regular': require('src/assets/fonts/poppins/Poppins-Regular.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <Title
          style={{ fontFamily: 'Poppins-Bold' }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Payment options:
        </Title>
        <StyledText
          style={{ fontFamily: 'Poppins-Regular' }}
          numberOfLines={4}
          ellipsizeMode="tail"
        >
          By subscribing, you will receive a number of benefits at a low cost. you can
          choose the most suitable subscription option for yourself.
        </StyledText>
      </Wrapper>
      <OptionList options={options} />
    </Container>
  );
}

export default memo(Payment);
