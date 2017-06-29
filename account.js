import * as firebase from 'firebase';
import React, { Component } from 'react';
import { Login } from './login';
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
  render(){
    return(
      <View>
        <Text>hello world</Text>
      </View>
    );
  }
}

module.exports = Account;

AppRegistry.registerComponent('Account', () => Account);
