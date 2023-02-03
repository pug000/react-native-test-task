import { memo } from 'react';

import userData from 'src/utils/constants';

import UserInfo from 'src/components/UserInfo';

import Container from './Profile.style';

function Profile() {
  return (
    <Container>
      <UserInfo user={userData} />
    </Container>
  );
}

export default memo(Profile);
