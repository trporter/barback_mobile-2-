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
      this.setState({cocktail: Object.keys(snapshot.val())});
    });
  }
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.cocktail,
  });
  render() {
    const { params } = this.props.navigation.state;
    const back = () => {
      this.props.navigation.goBack(null);
    }
    console.log(this.state.cocktail);
    return (
      <View style={{paddingTop: 50}}>
        <Text>Details on {this.state.cocktail.name}</Text>
        <Button
          onPress={back}
          title="back" />
      </View>
    );
  }
}

module.exports = YourCocktailsDetail;

AppRegistry.registerComponent('AllCocktailsDetail', () => YourCocktailsDetail);
