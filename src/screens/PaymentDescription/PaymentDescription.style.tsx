import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

interface TitleProps {
  $color?: string;
  $fontSize?: string;
  $lineHeight?: string;
  $fontWeight?: number;
}

const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 0 16px;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const WrapperBottom = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled.Text<TitleProps>`
  font-size: ${({ $fontSize, theme }) => $fontSize ?? theme.typography.largeTitle};
  line-height: ${({ $lineHeight }) => $lineHeight ?? '36px'};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? 700};
  color: ${({ $color, theme }) => $color ?? theme.colors.dark};
`;

const PriceItem = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.lineColor};
  border-radius: 20px;
  margin-bottom: 24px;
`;

const WrapperButton = styled.View`
  margin-bottom: 20px;
`;

const StyledButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
`;

const styles = StyleSheet.create({
  firstTitle: {
    marginBottom: 8,
    paddingRight: 50,
    width: '100%',
  },
  secondTitle: {
    marginRight: 8,
  },
  priceTitle: {
    padding: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  button: {
    borderRadius: 30,
    width: '100%',
  },
  buttonText: {
    paddingVertical: 16,
    paddingHorizontal: 67,
    textAlign: 'center',
  },
});

export {
  Container,
  Wrapper,
  WrapperBottom,
  StyledText,
  PriceItem,
  WrapperButton,
  StyledButton,
  styles,
};
