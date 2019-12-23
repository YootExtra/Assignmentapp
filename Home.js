import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
          <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Profile', {name: 'Jane'})}
          />
        );
      }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });