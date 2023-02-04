import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { useLayoutEffect } from 'react';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import stackNavigationScreens from 'src/utils/stackNavigationScreens';
import { routesWithoutTabs } from 'src/utils/constants';

import Profile from 'src/screens/Profile';

import type { StackParamList } from 'src/ts/types';

import {
  headerStyle,
  initialHeaderTitleStyle,
  headerTitleStyle,
  headerTintColor,
} from './StackNavigation.style';

const Stack = createStackNavigator<StackParamList>();

function StackNavigation() {
  const route = useRoute();
  const { setOptions } = useNavigation();
  const [fontLoaded] = useFonts({
    'Poppins-SemiBold': require('src/assets/fonts/poppins/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('src/assets/fonts/poppins/Poppins-Regular.ttf'),
  });

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';

    if (routesWithoutTabs.includes(routeName)) {
      setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [route, setOptions]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle,
          headerTitleStyle: {
            ...initialHeaderTitleStyle,
            fontWeight: '600',
            fontFamily: 'Poppins-SemiBold',
          },
        }}
      />
      {stackNavigationScreens.map(({ name, screen, title }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={screen}
          options={{
            title,
            headerStyle,
            headerTitleAlign: 'center',
            headerTintColor,
            headerTitleStyle: {
              ...headerTitleStyle,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            },
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default StackNavigation;
