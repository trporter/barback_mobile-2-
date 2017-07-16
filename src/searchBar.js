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
import SearchBar from 'react-native-searchbar';
import fontAwesome from "react-native-vector-icons";
//const reactNativeVectorIconsRequiredStyles = "@font-face { src:url("+fontAwesome+");font-family: FontAwesome; }";

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    }
  }
  render(){
    return(
        <SearchBar
          handleResults={this._handleResults}
          showOnLoad
        />
    );
  }
}

module.exports = Search;

AppRegistry.registerComponent('Search', () => Search);
