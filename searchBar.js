import React, { Component } from 'react';
import { styles } from './styles.js';
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

class SearchBar extends Component {
  render(){
    return(
      <View style={{backgroundColor: 'white', padding: 10}}>
        <TextInput
          style={{height: 20}}
          placeholder="Search"
          placeholderTextColor= 'black'
        />
      </View>
    );
  }
}

module.exports = SearchBar;
