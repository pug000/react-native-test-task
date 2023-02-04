import { memo } from 'react';
import { FlatList } from 'react-native';

import type { Option } from 'src/ts/interfaces';

import OptionItem from './OptionItem';

import Container from './OptionList.style';

interface OptionListProps {
  options: Option[];
}

function OptionList({ options }: OptionListProps) {
  return (
    <Container>
      <FlatList
        data={options}
        renderItem={({ item }) => <OptionItem option={item} />}
        keyExtractor={({ id }) => id}
        contentContainerStyle={{ paddingBottom: 5 }}
      />
    </Container>
  );
}

export default memo(OptionList);
