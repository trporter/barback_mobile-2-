import * as firebase from 'firebase';
import React, { Component } from 'react';
import { Login } from './login';
import UserProfile from './user.js';
import Signup from "./signUp.js";
import {
  AsyncStorage,
  ActivityIndicator,
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
  Header,Container,Title, Content, ListItem, InputGroup, Input, Icon
} from 'react-native';
import {
  NavigationActions,
} from 'react-navigation';

class Account extends Component {
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
    return (
      <View>
        <Text>hello</Text>
        <Button
          onPress={this.logout.bind(this)}
          title="Logout"
          color="black"
        />
      </View>
    );
  }
}

module.exports = Account;

AppRegistry.registerComponent('Account', () => Account);
