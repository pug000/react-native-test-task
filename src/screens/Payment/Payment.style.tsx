import styled from 'styled-components/native';

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
