/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import { options } from 'src/utils/constants';

import OptionList from 'src/components/OptionList';

import { StackParamList } from 'src/ts/types';
import { Container, StyledText, Title, Wrapper } from './Payment.style';

function Payment() {
  const { navigate } = useNavigation<StackNavigationProp<StackParamList>>();
  const [fontLoaded] = useFonts({
    'Poppins-Bold': require('src/assets/fonts/poppins/Poppins-Bold.ttf'),
    'Poppins-Regular': require('src/assets/fonts/poppins/Poppins-Regular.ttf'),
  });

  const navigateOnPress = useCallback((priceText: string) => {
    navigate('PaymentDescription', {
      priceText,
    });
  }, []);

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
      <OptionList options={options} navigateOnPress={navigateOnPress} />
    </Container>
  );
}

export default memo(Payment);
