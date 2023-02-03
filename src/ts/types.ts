type TabParamList = {
  Work: undefined;
  Task: undefined;
  Chat: undefined;
  StackNavigation: undefined;
};

type NavigationCallback = () => JSX.Element | null;

export type { TabParamList, NavigationCallback };
