import Task from 'src/screens/Task';
import Chat from 'src/screens/Chat';
import Work from 'src/screens/Work';

import WorkIcon from 'src/assets/icons/work.svg';
import TaskIcon from 'src/assets/icons/task.svg';
import ChatIcon from 'src/assets/icons/chat.svg';
import ProfileIcon from 'src/assets/icons/profile.svg';
import StackNavigation from 'src/navigation/StackNavigation';

import type { TabNavigationScreen } from 'src/ts/interfaces';

const tabNavigationScreens: TabNavigationScreen[] = [
  {
    screen: Work,
    name: 'Work',
    title: 'Work',
    icon: WorkIcon,
    headerShown: true,
  },
  {
    screen: Task,
    name: 'Task',
    title: 'Task',
    icon: TaskIcon,
    headerShown: true,
  },
  {
    screen: Chat,
    name: 'Chat',
    title: 'Chat',
    icon: ChatIcon,
    headerShown: true,
  },
  {
    screen: StackNavigation,
    name: 'StackNavigation',
    title: 'Profile',
    icon: ProfileIcon,
    headerShown: false,
  },
];

export default tabNavigationScreens;
