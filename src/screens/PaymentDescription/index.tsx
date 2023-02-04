import { memo } from 'react';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';

import { linearGradientDegree, paymentOptions } from 'src/utils/constants';

import defaultTheme from 'src/styles/theme';

import DescriptionList from 'src/components/DescriptionList';

import type { StackParamList } from 'src/ts/types';

import FireIcon from 'src/assets/icons/fire.svg';

import {
  Container,
  PriceItem,
  StyledText,
  Wrapper,
  WrapperBottom,
  styles,
  StyledButton,
  WrapperButton,
} from './PaymentDescription.style';

function PaymentDescription() {
  const { params } = useRoute<RouteProp<StackParamList, 'PaymentDescription'>>();
  const { navigate } = useNavigation<StackNavigationProp<StackParamList>>();
  const [fontLoaded] = useFonts({
    'Poppins-Bold': require('src/assets/fonts/poppins/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('src/assets/fonts/poppins/Poppins-SemiBold.ttf'),
  });

  const navigateOnPress = () => navigate('Profile');

  if (!params.priceText) {
    navigate('Profile');
  }

  if (!fontLoaded) {
    return null;
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Wrapper>
        <StyledText
          $lineHeight="35px"
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{ fontFamily: 'Poppins-Bold', ...styles.firstTitle }}
        >
          You payment options:
        </StyledText>
        <WrapperBottom>
          <StyledText
            $color={defaultTheme.colors.pink}
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontFamily: 'Poppins-Bold', ...styles.secondTitle }}
          >
            Hot Work
          </StyledText>
          <FireIcon />
        </WrapperBottom>
      </Wrapper>
      <PriceItem>
        <StyledText
          $fontSize={defaultTheme.typography.title}
          $fontWeight={600}
          $lineHeight="26px"
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ fontFamily: 'Poppins-SemiBold', ...styles.priceTitle }}
        >
          {params.priceText}
        </StyledText>
      </PriceItem>
      <DescriptionList options={paymentOptions} />
      <WrapperButton>
        <StyledButton activeOpacity={0.6} onPress={navigateOnPress}>
          <LinearGradient
            {...deg(linearGradientDegree)}
            colors={['#7433FF', '#FFA3FD']}
            style={styles.button}
          >
            <StyledText
              $lineHeight="24px"
              $fontSize={defaultTheme.typography.subtitle}
              $color={defaultTheme.colors.white}
              $fontWeight={600}
              numberOfLines={1}
              style={{ fontFamily: 'Poppins-SemiBold', ...styles.buttonText }}
            >
              Change payment options
            </StyledText>
          </LinearGradient>
        </StyledButton>
      </WrapperButton>
    </Container>
  );
}

export default memo(PaymentDescription);
