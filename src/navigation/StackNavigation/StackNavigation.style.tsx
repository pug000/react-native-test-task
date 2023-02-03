import defaultTheme from 'src/styles/theme';

const headerStyle = {
  borderBottomWidth: 1,
  borderColor: defaultTheme.colors.lineColor,
};

const initialHeaderTitleStyle = {
  paddingVertical: 15,
  fontSize: 20,
  lineHeight: 26,
};

const headerTitleStyle = {
  fontSize: 16,
  lineHeight: 24,
  paddingTop: 15,
  paddingBottom: 17,
  color: defaultTheme.colors.grey,
};

const headerTintColor = defaultTheme.colors.iconColor;

export { headerStyle, initialHeaderTitleStyle, headerTitleStyle, headerTintColor };
