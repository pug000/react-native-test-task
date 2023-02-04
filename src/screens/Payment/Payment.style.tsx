import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 24px;
  flex: 1;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 0 16px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.typography.largeTitle};
  line-height: 35px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.typography.subtitle};
  line-height: 24px;
  font-weight: 400;
  align-items: center;
`;

export { Container, Wrapper, Title, StyledText };
