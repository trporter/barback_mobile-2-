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
    const {cocktailName} = state.params;
    const {cocktailType} = state.params;
    const {cocktailIng} = state.params;
    const {cocktailSteps} = state.params;
    return {
      title: isInfo ? "Cocktail Info" : cocktailName,
    };
  };
  render() {
    const { params } = this.props.navigation.state;
    const back = () => {
      this.props.navigation.goBack(null);
    }
    return (
      <View style={{paddingTop: 50}}>
        <Text>Details on {params.cocktailName}</Text>
        <Text>Family</Text>
        <Text>{params.cocktailType}</Text>
        <Text>Ingredients</Text>
        <Text>{params.cocktailIng}</Text>
        <Text>Steps</Text>
        <Text>{params.cocktailSteps}</Text>
        <Button
          onPress={back}
          title="back" />
      </View>
    );
  }
}

module.exports = CocktailScreen;

AppRegistry.registerComponent('CocktailScreen', () => CocktailScreen);
