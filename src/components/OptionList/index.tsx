import { memo } from 'react';
import { FlatList } from 'react-native';

import type { Option } from 'src/ts/interfaces';

import OptionItem from './OptionItem';

import Container from './OptionList.style';

interface OptionListProps {
  options: Option[];
  navigateOnPress: (priceText: string) => void;
}

function OptionList({ options, navigateOnPress }: OptionListProps) {
  return (
    <Container>
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <OptionItem option={item} navigateOnPress={navigateOnPress} />
        )}
        keyExtractor={({ id }) => id}
        contentContainerStyle={{ paddingBottom: 5 }}
      />
    </Container>
  );
}

export default memo(OptionList);
