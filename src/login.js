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

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }
  login(){
    this.setState({loading: true});
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password
    ).then(() =>
      {
        this.setState({loading: false});
        this.props.navigation.navigate('Home');
      }
    ).catch((error) =>
    {
      this.setState({loading: false});
      alert('Login Failed. Please try again '+error);
    });
  }
  goToSignup(){
    this.props.navigation.navigate('Signup');
  }
  render() {
    return (
      <View style={{paddingTop: 50}}>
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
          title="Sign Up"/>
      </View>
    );
  }
}

module.exports = Login;

AppRegistry.registerComponent('Login', () => Login);
