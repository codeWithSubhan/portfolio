import traveling from '../../assests/traveling.jpg';
import reading from '../../assests/reading.jpg';
import learning from '../../assests/learning.webp';
import typing from '../../assests/typing.jpg';
import coding from '../../assests/coding.png';
import candy from '../../assests/candy.avif';
import carrom from '../../assests/carrom.jpg';
import kite from '../../assests/kite.jpg';
import rubix from '../../assests/rubx.jpg';
import ludo from '../../assests/ludo.jpg';
import shinchan from '../../assests/shinchan.jpg';
import perman from '../../assests/perman.jpeg';
import oggy from '../../assests/oggy.jpg';
import doreamon from '../../assests/doreamon.jpg';
import hotori from '../../assests/hotori.jpeg';

export const Data = [
  {
    id: 1,
    image: [traveling, coding, learning, typing, reading],
    title: 'Hobbies',
    description: [
      'travelling',
      'coding',
      'learning',
      'typing',
      'reading instruction',
    ],
  },
  {
    id: 2,
    image: [candy, ludo, carrom, kite, rubix],
    title: 'favorite Games',
    description: ['candy crush saga', 'ludo', 'carrom', 'kite', 'rubix cube'],
  },
  {
    id: 3,
    image: [shinchan, perman, oggy, doreamon, hotori],
    title: 'favorite Cartoons',
    description: [
      'shinchan 😍',
      'perman',
      'oggy and the cockroaches',
      'doraemon',
      'ninja hattori',
    ],
  },
];
