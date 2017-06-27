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
/*
class Account extends Component{
  constructor(props) {
    super(props);

    this.getView();

    this.state = {
      userLoaded: false,
      initialView: null,
    };

    this.getView = this.getView.bind(this);
  }
  getView() {
    firebase.auth().onAuthStateChanged((user) => {

      let initialView = user ? "UserSCreen" : "Login";

      this.setState({
        userLoaded: true,
        initialView: initialView,
      })
    })
  }
  render(){
    const navigateUser = NavigationActions.navigate({
      routeName: "UserProfile",
    })
    const navigateLogin = NavigationActions.navigate({
      routeName: "Login",
    })
    if(this.state.userLoaded){
      return (

      );
    } else {
      return(
        null
      );
    }
  }
}
*/
export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
    }
  }
  componentWillMount() {
    // get the current user from firebase
    // const userData = this.props.firebaseApp.auth().currentUser;
    AsyncStorage.getItem('userData').then((user_data_json) => {
      let userData = JSON.parse(user_data_json);
      this.setState({
        user: userData,
        loading: false
      });
    });
  }
  render() {
    // If we are loading then we display the indicator, if the account is null and we are not loading
    // Then we display nothing. If the account is not null then we display the account info.
    const content = this.state.loading ?
    <ActivityIndicator size="large"/> :
    this.state.user &&
    <Content>
      <View>
        <Text>{this.state.user.email}</Text>
      </View>
      <Button onPress={this.logout.bind(this)}>
        Logout
      </Button>
    </Content>
    ;
    // console.log("loading user",this.state.user,this.state.loading);
    return (
      <Container>
        <Header>
          <Title>Header</Title>
        </Header>
        {content}
      </Container>
    );
  }
  logout() {
    // logout, once that is complete, return the user to the login screen.
    AsyncStorage.removeItem('userData').then(() => {
      this.props.firebaseApp.auth().signOut().then(() => {
        this.props.navigation.navigate('Login');
      });
    });

  }
}

module.exports = Account;

AppRegistry.registerComponent('Account', () => Account);
