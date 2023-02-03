import type { FC, MemoExoticComponent } from 'react';
import type { SvgProps } from 'react-native-svg';

/* eslint-disable import/prefer-default-export */
interface NavigationScreen {
  screen: MemoExoticComponent<() => JSX.Element | null>;
  name: string;
  icon: FC<SvgProps>;
}

export type { NavigationScreen };
