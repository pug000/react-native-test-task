type TabParamList = {
  Work: undefined;
  Task: undefined;
  Chat: undefined;
  StackNavigation: undefined;
};

type StackParamList = {
  Profile: undefined;
  Payment: undefined;
  PaymentDescription: undefined;
};

type NavigationCallback = () => JSX.Element | null;

export type { TabParamList, StackParamList, NavigationCallback };
