import { memo } from 'react';
import { View, Text } from 'react-native';

function Task() {
  return (
    <View>
      <Text>Task</Text>
    </View>
  );
}

export default memo(Task);
