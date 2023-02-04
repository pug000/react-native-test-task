import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import defaultTheme from './src/styles/theme';

import TabNavigation from './src/navigation/TabNavigation';

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: defaultTheme.colors.backgroundWhite,
  },
};

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <TabNavigation />
          <StatusBar />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
