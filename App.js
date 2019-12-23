import React from 'react';
  import AppNavigator from './AppNavigator';
  

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
// const App = createAppContainer(MainNavigator);

//   export default class App extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         possibleFriends: [
//           'Allie',
//           'Gator',
//           'Lizzie',
//         ],
//         currentFriends: [],
//       }
//     }

//     addFriend = (index) => {
//       const {
//         currentFriends,
//         possibleFriends,
//       } = this.state

//       const addedFriend = possibleFriends.splice(index, 1)

//       currentFriends.push(addedFriend)

//       this.setState({
//         currentFriends,
//         possibleFriends,
//       })
//     }

//     render() {
//       return (<AppNavigator
//         screenProps={ {
//           currentFriends: this.state.currentFriends,
//           possibleFriends: this.state.possibleFriends,
//           addFriend: this.addFriend,
//         } }
//       />
//       );
//     }
//   }


