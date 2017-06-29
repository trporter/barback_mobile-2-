import * as firebase from 'firebase';
import React, { Component } from 'react';
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
  Header,
  Container,
  Title,
  Content,
  ListItem,
  InputGroup,
  Input,
  Icon
} from 'react-native';
import {
  NavigationActions,
} from 'react-navigation';

/*
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      response: ""
    };

    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }
  async signup() {

    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

      this.setState({
        response: "account created"
      });

      setTimeout(() => {
        { navigateUser }
      }, 1500);

    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }

  }

  async login() {

    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

      this.setState({
        response: "Logged In!"
      });

      setTimeout(() => {
        { navigateAccount }
      }, 1500);

    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }

  }

  render() {
    const navigateUser = NavigationActions.navigate({
      routeName: "UserSreen",
      params: {},
    })
    const navigateAccount = NavigationActions.navigate({
      routeName: "Account",
      params: {},
    })
    return (
      <View>
        <Text>Sign Up</Text>
        <TextInput
          placeholder = "Email Adress"
          onChangeText = {(email) => this.setState({email})}
        />
        <TextInput
          placeholder = "Password"
          onChangeText = {(pword) => this.setState({password})}
        />
        <View>
          <Button onPress={this.signup}> Sign Up</Button>
        </View>
      </View>
    );
  }
} */

export default class Login extends Component {
  constructor(props){
    super(props);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }
  login(){
    this.setState({loading: true});
    // Log in and display an alert to tell the user what happened.
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password
    ).then(() =>
      {
        this.setState({loading: false});
        this.props.navigation.navigate('UserProfile');
      }
    ).catch((error) =>
    {
      this.setState({loading: false});
      alert('Login Failed. Please try again'+error);
    });
  }
  goToSignup(){
    this.props.navigation.navigate('Signup');
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 20}}
          placeholderTextColor='black'
          backgroundColor='white'
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholder={"Email Address"} />
        <TextInput
          style={{height: 20}}
          placeholderTextColor='black'
          backgroundColor='white'
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
          placeholder={"Password"} />
        <Button
          onPress={this.login.bind(this)}
          title="Login"/>
        <Button
          onPress={this.goToSignup.bind(this)}
          title="New Here?"/>
      </View>
    );
  }
}

module.exports = Login;

AppRegistry.registerComponent('Login', () => Login);
