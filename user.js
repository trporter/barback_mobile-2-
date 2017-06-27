import * as firebase from 'firebase';
import React, { Component } from 'react';
import { Login } from './login';
import {
  AppRegistry,
  Text,
  Button,
  ScrollView,
  View,
  Picker,
  StyleSheet,
  TextInput,
  List,
  ListView,
  FlatList,
  TouchableHighlight,
} from 'react-native';


class UserProfile extends Component{
  render(){
    return(
      <View>
        <Text>hello world</Text>
      </View>
    );
  }
}

/*
async logout() {
  try {
    await firebase.auth().signOut();
    // Navigate to login view
  } catch (error) {
    console.log(error);
  }
}
*/

module.exports = UserProfile;

AppRegistry.registerComponent('UserProfile', () => UserProfile);
