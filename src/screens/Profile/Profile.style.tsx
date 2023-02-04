import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 16px 0 16px;
`;

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.View`
  max-width: 300px;
  flex: 1;
`;

const WrapperIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.subtitle};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
  margin-bottom: 4px;
`;

const StyledText = styled.Text`
  font-size: ${({ theme }) => theme.typography.text};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 400;
`;

export { Container, ItemContainer, Wrapper, WrapperIcon, Subtitle, StyledText };
