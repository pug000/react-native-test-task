import { TouchableHighlight } from 'react-native';
import { useFonts } from 'expo-font';
import { memo } from 'react';

import defaultTheme from 'src/styles/theme';

import type { Option } from 'src/ts/interfaces';

import { DiscountView, ItemWrapper, StyledText } from './OptionItem.style';

interface OptionItemProps {
  option: Option;
  navigateOnPress: (priceText: string) => void;
}

function OptionItem({ option, navigateOnPress }: OptionItemProps) {
  const [fontLoaded] = useFonts({
    'Poppins-SemiBold': require('src/assets/fonts/poppins/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('src/assets/fonts/poppins/Poppins-Regular.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="none"
      onPress={() => navigateOnPress(option.priceText)}
    >
      <ItemWrapper
        $borderColor={option.discount ? defaultTheme.colors.purple : undefined}
      >
        {option.discount && (
          <StyledText
            $textDecoration="line-through"
            style={{ fontFamily: 'Poppins-Regular' }}
          >
            {option.discount}
          </StyledText>
        )}
        <StyledText
          $color={option.discount ? defaultTheme.colors.purple : undefined}
          $fontSize="20px"
          $lineHeight="32px"
          style={{ fontFamily: 'Poppins-SemiBold' }}
        >
          {option.priceText}
        </StyledText>
        <StyledText
          $fontSize={defaultTheme.typography.subtitle}
          $lineHeight="24px"
          $fontWeight={400}
          style={{ fontFamily: 'Poppins-Regular' }}
        >
          {option.text}
        </StyledText>
        {option.discount && (
          <DiscountView>
            <StyledText
              $color={defaultTheme.colors.white}
              $fontWeight={600}
              style={{ fontFamily: 'Poppins-SemiBold' }}
            >
              {option.discountPercent}
            </StyledText>
          </DiscountView>
        )}
      </ItemWrapper>
    </TouchableHighlight>
  );
}

export default memo(OptionItem);
