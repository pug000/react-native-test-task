import type { FC, MemoExoticComponent } from 'react';
import type { SvgProps } from 'react-native-svg';

import type { TabParamList, StackParamList, NavigationCallback } from './types';

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

interface Option {
  id: string;
  priceText: string;
  text: string;
  discount: string | null;
  discountPercent: string | null;
}

interface StackNavigationScreen extends Pick<TabNavigationScreen, 'screen' | 'title'> {
  name: keyof StackParamList;
}

export type { TabNavigationScreen, StackNavigationScreen, Option, UserData };
