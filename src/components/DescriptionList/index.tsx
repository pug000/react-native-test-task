import { memo } from 'react';

import type { PaymentOption } from 'src/ts/interfaces';

import DescriptionItem from './DescriptionItem';

import Container from './DescriptionList.style';

interface DescriptionListProps {
  options: PaymentOption[];
}

function DescriptionList({ options }: DescriptionListProps) {
  return (
    <Container>
      {options.map((option, index) => (
        <DescriptionItem
          key={option.id}
          options={options}
          option={option}
          index={index}
        />
      ))}
    </Container>
  );
}

export default memo(DescriptionList);
