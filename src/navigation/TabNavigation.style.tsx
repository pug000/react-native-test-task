import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import defaultTheme from 'src/styles/theme';

const tabBarStyle = {
  height: 50,
};

const tabBarItemStyle: StyleProp<ViewStyle> = {
  padding: 3.5,
  justifyContent: 'center',
};

const tabBarActiveTintColor = defaultTheme.colors.purple;

const tabBarInactiveTintColor = defaultTheme.colors.iconColor;

const tabBarLabelStyle: StyleProp<TextStyle> = {
  fontSize: 10,
  lineHeight: 18,
};

export {
  tabBarStyle,
  tabBarItemStyle,
  tabBarLabelStyle,
  tabBarActiveTintColor,
  tabBarInactiveTintColor,
};
