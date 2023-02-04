import Payment from 'src/screens/Payment';
import PaymentDescription from 'src/screens/PaymentDescription';

import type { StackNavigationScreen } from 'src/ts/interfaces';

const stackNavigationScreens: StackNavigationScreen[] = [
  {
    name: 'Payment',
    screen: Payment,
    title: 'Change payment options',
  },
  {
    name: 'PaymentDescription',
    screen: PaymentDescription,
    title: 'Payment options',
  },
];

export default stackNavigationScreens;
