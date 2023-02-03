/* eslint-disable react-hooks/exhaustive-deps */
import { memo } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';

import userData from 'src/utils/constants';

import UserInfo from 'src/components/UserInfo';

import type { StackParamList, TabParamList } from 'src/ts/types';

import ArrowNextIcon from 'src/assets/icons/arrow-next.svg';

import {
  Container,
  ItemContainer,
  Wrapper,
  Subtitle,
  StyledText,
  WrapperIcon,
} from './Profile.style';

type ProfileScreenNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'StackNavigation'>,
  StackNavigationProp<StackParamList>
>;

function Profile() {
  const { navigate } = useNavigation<ProfileScreenNavigation>();

  const navigateOnPress = () => navigate('Payment');

  return (
    <Container>
      <UserInfo user={userData} />
      <View>
        <ItemContainer>
          <Wrapper>
            <Subtitle
              style={{ fontFamily: 'Poppins-SemiBold' }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Payment options
            </Subtitle>
            <StyledText
              style={{ fontFamily: 'Poppins-Regular' }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Find out the current, choose a new
            </StyledText>
          </Wrapper>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="none"
            onPress={navigateOnPress}
          >
            <WrapperIcon>
              <ArrowNextIcon width={8} height={15} />
            </WrapperIcon>
          </TouchableHighlight>
        </ItemContainer>
      </View>
    </Container>
  );
}

export default memo(Profile);
