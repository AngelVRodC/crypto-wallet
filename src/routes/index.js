import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BTC from '../containers/BTC';
import {currency} from '../constants';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={currency.BTC} component={BTC} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
