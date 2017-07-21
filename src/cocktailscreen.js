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

class CocktailScreen extends Component{
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {cocktail} = state.params;
    return {
      title: isInfo ? "Cocktail Info" : cocktail.name,
    };
  };
  render() {
    console.log(params.cocktail)
    const { params } = this.props.navigation.state;
    const back = () => {
      this.props.navigation.goBack(null);
    }
    return (
      <View style={{paddingTop: 50}}>
        <Text>Details on {params.cocktail.name}</Text>
        <Button
          onPress={back}
          title="back" />
      </View>
    );
  }
}

module.exports = CocktailScreen;

AppRegistry.registerComponent('CocktailScreen', () => CocktailScreen);
