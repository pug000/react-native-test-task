import { useFonts } from 'expo-font';
import { memo } from 'react';

import { StyledText } from 'src/components/UserInfo/UserInfo.style';

import type { PaymentOption } from 'src/ts/interfaces';

import { Container, styles, WrapperIcon, WrapperText } from './DescriptionItem.style';

interface DescriptionItemProps {
  options: PaymentOption[];
  option: PaymentOption;
  index: number;
}

function DescriptionItem({ options, option, index }: DescriptionItemProps) {
  const { Icon } = option;
  const [fontLoaded] = useFonts({
    'Poppins-Regular': require('src/assets/fonts/poppins/Poppins-Regular.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Container style={{ marginBottom: index !== options.length - 1 ? 16 : 0 }}>
      <WrapperIcon>
        <Icon />
      </WrapperIcon>
      <WrapperText>
        <StyledText
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{ fontFamily: 'Poppins-Regular', ...styles.text }}
        >
          {option.text}
        </StyledText>
      </WrapperText>
    </Container>
  );
}

export default memo(DescriptionItem);
