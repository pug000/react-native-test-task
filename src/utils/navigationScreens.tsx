import { NavigationScreen } from 'src/ts/interfaces';

import Task from 'src/screens/Task';
import Chat from 'src/screens/Chat';
import Profile from 'src/screens/Profile';
import Work from 'src/screens/Work';

import WorkIcon from 'src/assets/icons/work.svg';
import TaskIcon from 'src/assets/icons/task.svg';
import ChatIcon from 'src/assets/icons/chat.svg';
import ProfileIcon from 'src/assets/icons/profile.svg';

const navigationScreens: NavigationScreen[] = [
  {
    screen: Work,
    name: 'Work',
    icon: WorkIcon,
  },
  {
    screen: Task,
    name: 'Task',
    icon: TaskIcon,
  },
  {
    screen: Chat,
    name: 'Chat',
    icon: ChatIcon,
  },
  {
    screen: Profile,
    name: 'Profile',
    icon: ProfileIcon,
  },
];

export default navigationScreens;
