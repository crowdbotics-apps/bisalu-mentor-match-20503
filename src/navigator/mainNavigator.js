import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings104622Navigator from '../features/Settings104622/navigator';
import UserProfile104615Navigator from '../features/UserProfile104615/navigator';
import Settings104614Navigator from '../features/Settings104614/navigator';
import Settings104612Navigator from '../features/Settings104612/navigator';
import SignIn2104610Navigator from '../features/SignIn2104610/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings104622: { screen: Settings104622Navigator },
UserProfile104615: { screen: UserProfile104615Navigator },
Settings104614: { screen: Settings104614Navigator },
Settings104612: { screen: Settings104612Navigator },
SignIn2104610: { screen: SignIn2104610Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
