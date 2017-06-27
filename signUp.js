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
  Header,Container,Title, Content, ListItem, InputGroup, Input, Icon
} from 'react-native';
import {
  NavigationActions,
} from 'react-navigation';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // used to display a progress indicator if waiting for a network response.
      loading: false,
      // entered credentials
      email: '',
      password: ''
    }
  }
  // A method to passs the username and password to firebase and make a new user account
  signup() {
    this.setState({
      // When waiting for the firebase server show the loading indicator.
      loading: true
    });
    // Make a call to firebase to create a new user.
    this.props.firebaseApp.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password).then(() => {
        // then and catch are methods that we call on the Promise returned from
        // createUserWithEmailAndPassword
        alert('Your account was created!');
        this.setState({
          // Clear out the fields when the user logs in and hide the progress indicator.
          email: '',
          password: '',
          loading: false
        });
        this.props.navigator.push({
          component: Login
        });
      }).catch((error) => {
        // Leave the fields filled when an error occurs and hide the progress indicator.
        this.setState({
          loading: false
        });
        alert("Account creation failed: " + error.message );
      });
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
            placeholder="Email Address" />
          <TextInput
            style={{height: 20}}
            placeholderTextColor='black'
            backgroundColor='white'
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder="Password" />
          <Button
            onPress={this.signup.bind(this)}
            title="Signup"/>
        </View>
      );
    }
  }

  module.exports = Signup;
