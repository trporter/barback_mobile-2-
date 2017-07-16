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
import Search from './searchBar.js';

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
        <Search data={this.state.cocktailnames}/>
        <View style={{backgroundColor: 'grey', paddingTop: 75}}>
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

module.exports = YourCocktailsScreen;

AppRegistry.registerComponent('YourCocktailsScreen', () => YourCocktailsScreen);
