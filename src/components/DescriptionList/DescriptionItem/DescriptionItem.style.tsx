import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const WrapperIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  margin-right: 16px;
`;

const WrapperText = styled.View`
  display: flex;
  flex: 1;
  padding-right: 20px;
`;

const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
`;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export { Container, WrapperIcon, WrapperText, StyledText, styles };
