/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';

import tabNavigationScreens from 'src/utils/tabNavigationScreens';

import type { TabParamList } from 'src/ts/types';

import {
  headerStyle,
  headerTitleStyle,
  tabBarActiveTintColor,
  tabBarInactiveTintColor,
  tabBarItemStyle,
  tabBarLabelStyle,
} from './TabNavigation.style';

const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigation() {
  const [fontLoaded] = useFonts({
    'Poppins-SemiBold': require('src/assets/fonts/poppins/Poppins-SemiBold.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      initialRouteName="Work"
      screenOptions={{
        tabBarItemStyle,
        tabBarInactiveTintColor,
        tabBarLabelStyle,
        tabBarActiveTintColor,
        headerStyle,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          ...headerTitleStyle,
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          fontFamily: 'Poppins-SemiBold',
        },
      }}
    >
      {tabNavigationScreens.map(({ screen, name, title, icon, headerShown }) => {
        const Icon = icon;
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={screen}
            options={{
              title,
              tabBarLabel: title,
              headerShown,
              tabBarIcon: ({ color }) => <Icon color={color} width={24} height={24} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default TabNavigation;
