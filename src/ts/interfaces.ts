import type { FC, MemoExoticComponent } from 'react';
import type { SvgProps } from 'react-native-svg';

import type { TabParamList, NavigationCallback } from './types';

interface TabNavigationScreen {
  screen: NavigationCallback | MemoExoticComponent<() => JSX.Element | null>;
  name: keyof TabParamList;
  title: string;
  icon: FC<SvgProps>;
  headerShown: boolean;
}

interface UserData {
  name: string;
  rating: number;
  review: number;
  status: string;
  avatarUrl: string | null;
}

export type { TabNavigationScreen, UserData };
