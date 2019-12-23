import React from 'react';
  

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Mainpage from './src/Mainpage';
import Test from './src/test';
import SearchResult from './src/searchresult';

const MainNavigator = createStackNavigator({
  Mainpage: {screen: Mainpage},
  SearchResult: {screen: SearchResult},
  Test: {screen: Test},
});

const App = createAppContainer(MainNavigator);

export default App;