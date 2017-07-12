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
const SearchBar = require('./searchBar.js');

class AllCocktailsScreen extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const { navigate } = this.props.navigation;
    const log = () => {
      console.log(database);
    }
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(cocktailList),
    };
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'teal', paddingTop: 50 }}>
        <SearchBar/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={log}>
              <Text style={{padding: 5}}>test</Text>
            </TouchableHighlight>
          }
        />
      </View>
    );
  }
}

module.exports = AllCocktailsScreen;

AppRegistry.registerComponent('AllCocktailsScreen', () => AllCocktailsScreen);
