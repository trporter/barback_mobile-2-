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
const SearchBar = require('./searchBar.js');

/*
.on("value",
  function(snapshot){
    for(i = 0; i < snapshot.val().length; i++){
      return i.name;
    };
  }
)
dataSource: ds.cloneWithRows(firebase.database().ref(`${this.state.user.uid}` + '/cocktails').on("value",
  function(snapshot){
    console.log(snapshot.val());
    this.state.cocktailnames.push(snapshot.val());
    console.log(this.state.cocktailnames);
  }
)),
<ListView
  dataSource={this.state.dataSource}
  renderRow={(rowData) =>
    <TouchableHighlight onPress={() => this.props.navigation.navigate('CocktailDetail', {
      cocktailName:  rowData.name.toString(),
      cocktailIng:   rowData.ing.toString(),
      cocktailSteps: rowData.steps.toString(),
      cocktailType:  rowData.type})}>
      <Text style={{padding: 5}}>{rowData}</Text>
    </TouchableHighlight>
  }
/>
for(i = 0; Object.keys(snapshot.val()).length; i++){
  names.i = snapshot.val().keys[i];
}
*/

class YourCocktailsScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cocktailnames: [],
      user: firebase.auth().currentUser,
    }
  }
  Lister(arr){
    this.state.cocktailnames = arr;
    console.log(this.state.cocktailnames);
  }
  componentWillMount(){
    firebase.database().ref(`${this.state.user.uid}` + '/cocktails').on("value",
      function(snapshot){
        Lister(Object.keys(snapshot.val()));
      }
    );
  }
  render(){
    const { navigate } = this.props.navigation;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'teal' }}>
        <View style={{backgroundColor: 'white', padding: 10, paddingTop: 50}}>
          <SearchBar/>
          <Button
            onPress = {() => navigate('CreateCocktail')}
            title="Create"
            color="black" />
        </View>
        <ScrollView>
          {this.state.cocktailnames}
        </ScrollView>
      </View>
    );
  }
}

module.exports = YourCocktailsScreen;

AppRegistry.registerComponent('YourCocktailsScreen', () => YourCocktailsScreen);
