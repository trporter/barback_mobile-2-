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
import {
  cocktailList,
  yourCocktailList,
  Cocktail,
  YourCocktail,
  CocktailClass,
} from './cocktails.js';
import SearchBar from 'react-native-searchbar';
import fontAwesome from "react-native-vector-icons";

class AllCocktailsScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cocktailnames: [],
      results: [],
      value: ''
    };
    this._handleResults = this._handleResults.bind(this);
  }
  componentWillMount(){
    this.Lister();
  }
  _handleResults(results){
    this.setState({results});
  }
  Lister(){
    firebase.database().ref('/allcocktails').on('value', (snapshot) =>{
      if(snapshot.val() !== null){
        this.setState({cocktailnames: Object.keys(snapshot.val())});
      } else {
        this.setState({cocktailnames: ["No Cocktails?"]});
      }
    });
  }
  render(){
    const { navigate } = this.props.navigation;
    console.log(this.state.value);
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'teal' }}>
        <SearchBar
          data={this.state.cocktailnames}
          handleResults={this._handleResults}
          allDataOnEmptySearch
          hideBack
          showOnLoad/>
        <ScrollView style={{paddingTop:70}}>
        {this.state.results.length !== 0 ?
          this.state.results.map((result, i) => {
            return (
              <TouchableHighlight
              style={{paddingTop:5}}
              onPress={() => this.props.navigation.navigate('CocktailDetail')}>
                <Text key={i}>
                  {result}
                </Text>
              </TouchableHighlight>
            );
          })
          :
          <Text>No Matches</Text>
        }
        </ScrollView>
      </View>
    );
  }
}

module.exports = AllCocktailsScreen;

AppRegistry.registerComponent('AllCocktailsScreen', () => AllCocktailsScreen);
