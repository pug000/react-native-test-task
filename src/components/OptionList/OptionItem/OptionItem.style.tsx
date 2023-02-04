import styled from 'styled-components/native';

interface ItemWrapperProps {
  $borderColor?: string;
}

interface StyledTextProps {
  $color?: string;
  $lineHeight?: string;
  $fontSize?: string;
  $fontWeight?: number;
  $textDecoration?: string;
  $letterSpacing?: string;
}

const ItemWrapper = styled.View<ItemWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 116px;
  border-radius: 20px;
  padding: 16px;
  border: 2px solid;
  border-color: ${({ theme, $borderColor }) => $borderColor ?? theme.colors.lineColor};
  position: relative;
`;

const StyledText = styled.Text<StyledTextProps>`
  font-size: ${({ theme, $fontSize }) => $fontSize ?? theme.typography.text};
  line-height: ${({ $lineHeight }) => $lineHeight ?? '20px'};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? 400};
  color: ${({ theme, $color }) => $color ?? theme.colors.grey};
  text-decoration-line: ${({ $textDecoration }) => $textDecoration ?? 'none'};
  text-align: center;
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing ?? 0};
`;

const DiscountView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 20px;
  top: 0;
  right: -2px;
  width: 53px;
  height: 26px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple};
`;

export { ItemWrapper, StyledText, DiscountView };
