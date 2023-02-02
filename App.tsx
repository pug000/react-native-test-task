import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';

import Chat from 'src/pages/Chat';
import Profile from 'src/pages/Profile';
import Task from 'src/pages/Task';
import Work from 'src/pages/Work';
import defaultTheme from 'src/styles/theme';

import RouterPageName from 'src/ts/enums';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RouterPageName.work}>
          <Stack.Screen
            name={RouterPageName.work}
            component={Work}
            options={{ title: RouterPageName.work }}
          />
          <Stack.Screen
            name={RouterPageName.task}
            component={Task}
            options={{ title: RouterPageName.task }}
          />
          <Stack.Screen
            name={RouterPageName.chat}
            component={Chat}
            options={{ title: RouterPageName.chat }}
          />
          <Stack.Screen
            name={RouterPageName.profile}
            component={Profile}
            options={{ title: RouterPageName.profile }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
