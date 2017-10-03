import {
  cocktailList,
  yourCocktailList,
  Cocktail,
  YourCocktail,
  CocktailClass,
} from './cocktails.js';
import {
  AppRegistry,
  Alert,
  Text,
  Button,
  ScrollView,
  View,
  Picker,
  Image,
  StyleSheet,
  TextInput,
  List,
  ListView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import React, { Component } from 'react';
import * as firebase from 'firebase';

class YourCocktailsDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cocktail: {},
      user: firebase.auth().currentUser,
    }
  }
  componentWillMount(){
    firebase.database().ref(`${this.state.user.uid}` + '/cocktails/' + `${this.props.navigation.state.params.cocktail}`).on('value', (snapshot) =>{
      this.setState({cocktail: snapshot.val()});
    });
    //retrieve photo here???
  }
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.cocktail,
  });
  render() {
    const { params } = this.props.navigation.state;
    const back = () => {
      this.props.navigation.goBack(null);
    }
    const del = () => {
      this.props.navigation.goBack(null);
      setTimeout(() =>
        firebase.database().ref(`${this.state.user.uid}` + '/cocktails/' + `${this.props.navigation.state.params.cocktail}`).remove(),
        1000
      );
    }
    return (
      <View style={{paddingTop: 50}}>
        <Text>{this.state.cocktail.photo}</Text>
        <Text>Details on {this.state.cocktail.name}</Text>
        <Text>List of ingredients:</Text>
        <Text>{this.state.cocktail.ingredients}</Text>
        <Text>List of steps:</Text>
        <Text>{this.state.cocktail.steps}</Text>
        <Text>Type:</Text>
        <Text>{this.state.cocktail.type}</Text>
        <Button
          onPress={back}
          title="back" />
        <Button
          onPress={del}
          title="delete" />
      </View>
    );
  }
}

module.exports = YourCocktailsDetail;

AppRegistry.registerComponent('AllCocktailsDetail', () => YourCocktailsDetail);
