import type { Option, UserData } from 'src/ts/interfaces';

const userData: UserData = {
  name: 'Dmitry Saitov',
  rating: 0,
  review: 0,
  status: 'Beginner',
  avatarUrl: null,
};

const options: Option[] = [
  {
    id: '1',
    priceText: '$15/in month',
    text: 'Automatic push notifications to performers',
    discount: null,
    discountPercent: null,
  },
  {
    id: '2',
    priceText: '$35/in month',
    text: 'Premium status "regular user"',
    discount: '$60/in month',
    discountPercent: '25%',
  },
  {
    id: '3',
    priceText: '$30/in month',
    text: 'Premium task design',
    discount: null,
    discountPercent: null,
  },
];

const routesWithoutTabs = ['Payment', 'PaymentDescription'];

export { userData, options, routesWithoutTabs };
