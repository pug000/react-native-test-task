import { memo } from 'react';
import { View } from 'react-native';

import userData from 'src/utils/constants';

import UserInfo from 'src/components/UserInfo/UserInfo';

function Profile() {
  return (
    <View>
      <UserInfo user={userData} />
    </View>
  );
}

export default memo(Profile);
