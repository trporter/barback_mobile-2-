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
import {
  NavigationActions,
} from 'react-navigation';


class UserProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  componentWillMount() {
    var userData = firebase.auth().currentUser;
    this.setState({
      user: userData,
    });
  }
  logout() {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login');
    });
  }
  render() {
    const home = () => {
      NavigationActions.back('Home');
    }
    return (
      <View style={{paddingTop: 50}}>
        <Text>Welcome</Text>
        <Button
          onPress={this.logout.bind(this)}
          title="Logout"
          color="black"
        />
        <Button
          onPress={home}
          title="Home"
          color="black"
        />
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
