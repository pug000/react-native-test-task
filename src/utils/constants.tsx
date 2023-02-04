import ThumbsUpIcon from 'src/assets/icons/thumbs-up.svg';
import ConfigureIcon from 'src/assets/icons/configure.svg';
import CloseIcon from 'src/assets/icons/close.svg';
import EmojiSmile from 'src/assets/icons/emoji-smile.svg';
import StarOutlinedIcon from 'src/assets/icons/star-outlined.svg';

import type { Option, PaymentOption, UserData } from 'src/ts/interfaces';

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

const paymentOptions: PaymentOption[] = [
  {
    id: '1',
    Icon: ThumbsUpIcon,
    text: 'Raising an ad once a week, but no more than 2 ads per week',
  },
  {
    id: '2',
    Icon: ConfigureIcon,
    text: 'The ability to sort employees by rating and number of reviews',
  },
  {
    id: '3',
    Icon: CloseIcon,
    text: 'Partial deactivation of ads',
  },
  {
    id: '4',
    Icon: EmojiSmile,
    text: 'Premium status "regular user" after 5 completed transactions',
  },
  {
    id: '5',
    Icon: StarOutlinedIcon,
    text: 'Activity points system',
  },
];

const linearGradientDegree = 114.44;

export { userData, options, routesWithoutTabs, paymentOptions, linearGradientDegree };
