import { memo } from 'react';
import { Image } from 'react-native';
import { useFonts } from 'expo-font';

import type { UserData } from 'src/ts/interfaces';

import StarIcon from 'src/assets/icons/star.svg';
import SuccessVerifiedIcon from 'src/assets/icons/shield-check.svg';
import placeholderImage from 'src/assets/images/user-avatar-placeholder.png';

import {
  Avatar,
  AvatarWrapper,
  Container,
  InfoContainer,
  RatingContainer,
  RatingWrapper,
  StyledText,
  Title,
  StatusText,
  TopContainer,
  WrapperIcon,
  BottomContainer,
} from './UserInfo.style';

interface UserInfoProps {
  user: UserData;
}

function UserInfo({ user }: UserInfoProps) {
  const uriPlaceholderImage = Image.resolveAssetSource(placeholderImage).uri;

  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('src/assets/fonts/poppins/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('src/assets/fonts/poppins/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <AvatarWrapper>
        <Avatar source={{ uri: user.avatarUrl ?? uriPlaceholderImage }} />
      </AvatarWrapper>
      <InfoContainer>
        <TopContainer>
          <Title
            style={{ fontFamily: 'Poppins-SemiBold' }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {user.name}
          </Title>
          <StatusText numberOfLines={1} style={{ fontFamily: 'Poppins-Regular' }}>
            {user.status}
          </StatusText>
        </TopContainer>
        <RatingContainer>
          <RatingWrapper>
            <WrapperIcon>
              <StarIcon width={15} height={15} />
            </WrapperIcon>
            <StyledText numberOfLines={1} style={{ fontFamily: 'Poppins-Regular' }}>
              {user.rating}
            </StyledText>
          </RatingWrapper>
          <RatingWrapper>
            <StyledText numberOfLines={1} style={{ fontFamily: 'Poppins-Regular' }}>
              {`${user.review} review`}
            </StyledText>
          </RatingWrapper>
        </RatingContainer>
        <BottomContainer>
          <WrapperIcon>
            <SuccessVerifiedIcon />
          </WrapperIcon>
          <StyledText numberOfLines={1} style={{ fontFamily: 'Poppins-Regular' }}>
            Account verified
          </StyledText>
        </BottomContainer>
      </InfoContainer>
    </Container>
  );
}

export default memo(UserInfo);
