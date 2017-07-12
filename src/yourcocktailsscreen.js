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
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
Lister(arr){
  console.log(arr);
  return arr;
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
  componentWillMount(){
    this.Lister();
  }
  Lister(){
    firebase.database().ref(`${this.state.user.uid}` + '/cocktails').on('value', (snapshot) =>{
      if(snapshot.val() !== null){
        this.setState({cocktailnames: Object.keys(snapshot.val())});
      } else {
        this.setState({cocktailnames: ["Add Cocktails!"]});
      }
    });
  }
  render(){
    const { navigate } = this.props.navigation;
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
          {this.state.cocktailnames.map((name,i)=>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('CocktailDetail')}>
              <Text key={i}>
                {name}
              </Text>
            </TouchableHighlight>
          )}
        </ScrollView>
      </View>
    );
  }
}
//this.Lister(this.state.cocktailnames)
module.exports = YourCocktailsScreen;

AppRegistry.registerComponent('YourCocktailsScreen', () => YourCocktailsScreen);
