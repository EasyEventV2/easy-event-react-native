import { TabNavigator, TabBarBottom, createBottomTabNavigator } from 'react-navigation';
import Accepted from './Accepted';
import Unaccepted from './Unaccepted';
import Checked_in from './Checked_in';

export default TabNavigator({
  Unaccepted: {
    screen: Unaccepted
  },
  Checked_in: {
    screen: Checked_in
  },
  Accepted: {
    screen: Accepted
  },
}, {
    tabBarOptions: {
      activeTintColor: '#fb3',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,

  });