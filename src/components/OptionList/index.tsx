import { memo } from 'react';

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
      {options.map((option, index) => (
        <OptionItem
          key={option.id}
          options={options}
          option={option}
          index={index}
          navigateOnPress={navigateOnPress}
        />
      ))}
    </Container>
  );
}

export default memo(OptionList);
