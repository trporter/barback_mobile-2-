import {
  cocktailList,
  yourCocktailList,
  Cocktail,
  YourCocktail,
  CocktailClass,
} from './cocktails.js';
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
import React, { Component } from 'react';
import * as firebase from 'firebase';

class AllCocktailsDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cocktail: {},
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: "cocktail",
  });
  render() {
    firebase.database().ref('/allcocktails/' + `${params.cocktail}`).on('value', (snapshot) =>{
      this.setState({cocktail: Object.keys(snapshot.val())});
    });
    const back = () => {
      this.props.navigation.goBack(null);
    }
    console.log(this.state.cocktail);
    return (
      <View style={{paddingTop: 50}}>
        <Text>Details on </Text>
        <Button
          onPress={back}
          title="back" />
      </View>
    );
  }
}

module.exports = AllCocktailsDetail;

AppRegistry.registerComponent('AllCocktailsDetail', () => AllCocktailsDetail);
