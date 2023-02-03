/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import navigationScreens from 'src/utils/navigationScreens';

import {
  tabBarActiveTintColor,
  tabBarInactiveTintColor,
  tabBarItemStyle,
  tabBarLabelStyle,
  tabBarStyle,
} from './TabNavigation.style';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Work"
      screenOptions={{
        tabBarStyle,
        tabBarItemStyle,
        tabBarInactiveTintColor,
        tabBarLabelStyle,
        tabBarActiveTintColor,
      }}
    >
      {navigationScreens.map(({ screen, name, icon }) => {
        const Icon = icon;
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={screen}
            options={{
              title: name,
              tabBarLabel: name,
              tabBarIcon: ({ color }) => <Icon color={color} width={24} height={24} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default TabNavigation;
