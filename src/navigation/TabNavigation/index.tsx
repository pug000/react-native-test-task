/* eslint-disable global-require */
/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';

import navigationScreens from 'src/utils/navigationScreens';

import {
  headerStyle,
  headerTitleStyle,
  tabBarActiveTintColor,
  tabBarInactiveTintColor,
  tabBarItemStyle,
  tabBarLabelStyle,
  tabBarStyle,
} from './TabNavigation.style';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const [fontLoaded] = useFonts({
    'Poppins-SemiBold': require('../assets/fonts/poppins/Poppins-SemiBold.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      initialRouteName="Work"
      screenOptions={{
        tabBarStyle,
        tabBarItemStyle,
        tabBarInactiveTintColor,
        tabBarLabelStyle,
        tabBarActiveTintColor,
        headerStyle,
        headerTitleStyle: {
          ...headerTitleStyle,
          fontWeight: '600',
          fontFamily: 'Poppins-SemiBold',
        },
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
