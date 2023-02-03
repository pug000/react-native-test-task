import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 26px;
`;

const AvatarWrapper = styled.View`
  display: flex;
  margin-right: 16px;
  border-radius: 45px;
`;

const Avatar = styled.Image`
  width: 72px;
  height: 72px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.subtitle};
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  width: 161px;
  margin-right: 16px;
`;

const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;

const BottomContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RatingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  height: 20px;
`;

const StyledText = styled.Text`
  font-size: ${({ theme }) => theme.typography.text};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.dark};
`;

const WrapperIcon = styled.View`
  margin-right: 4px;
`;

const StatusText = styled.Text`
  font-size: ${({ theme }) => theme.typography.text};
  line-height: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundGreen};
  color: ${({ theme }) => theme.colors.green};
  padding: 2px 8px;
  border-radius: 8px;
`;

export {
  Container,
  AvatarWrapper,
  Avatar,
  InfoContainer,
  StatusText,
  Title,
  TopContainer,
  RatingContainer,
  BottomContainer,
  RatingWrapper,
  WrapperIcon,
  StyledText,
};
