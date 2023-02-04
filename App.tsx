import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';

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
      <NavigationContainer theme={theme}>
        <TabNavigation />
        <StatusBar />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
