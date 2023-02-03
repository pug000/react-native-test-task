import type { FC, MemoExoticComponent } from 'react';
import type { SvgProps } from 'react-native-svg';

interface NavigationScreen {
  screen: MemoExoticComponent<() => JSX.Element | null>;
  name: string;
  icon: FC<SvgProps>;
}

interface UserData {
  name: string;
  rating: number;
  review: number;
  status: string;
  avatarUrl: string | null;
}

export type { NavigationScreen, UserData };
