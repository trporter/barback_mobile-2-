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
      email: '',
      password: '',
      user: ''
    }
  }
  signup() {
    this.setState({loading: true});
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password).then(() => {
        alert('Your account was created!');
        this.setState({
          email: '',
          password: '',
          loading: false,
          user: firebase.auth().currentUser,
        });
        this.props.navigation.navigate('Home');
      }).catch((error) => {
        this.setState({loading: false});
        alert("Account creation failed: " + error.message );
        });
  }
  render() {
    const back = () => {
      this.props.navigation.goBack(null)
    }
    return (
      <View style={{paddingTop: 50}}>
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
        <Button
          onPress={back}
          title="Back"/>
      </View>
    );
  }
}

  module.exports = Signup;

  AppRegistry.registerComponent('Signup', () => Signup);
