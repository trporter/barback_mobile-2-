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
import Search from 'react-native-searchbar';
import fontAwesome from "react-native-vector-icons";

class YourCocktailsScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cocktailnames: [],
      results: [],
      user: firebase.auth().currentUser,
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
        <Search
          data={this.state.cocktailnames}
          handleResults={this._handleResults}
          allDataOnEmptySearch
          hideBack
          showOnLoad/>
        <View style={{backgroundColor: 'grey', paddingTop: 75}}>
          <Button
            onPress = {() => navigate('CreateCocktail')}
            title="Create"
            color="black" />
        </View>
        <ScrollView>
        {this.state.results.length !== 0 ?
          this.state.results.map((result, i) => {
            return (
              <TouchableHighlight
              style={{paddingTop:5}}
              onPress={() => navigate('YourCocktailsDetail', { cocktail: result })}>
                <Text key={i}>
                  {result}
                </Text>
              </TouchableHighlight>
            );
          })
          :
          this.state.cocktailnames.map((name, i) => {
            return (
              <TouchableHighlight
              style={{paddingTop:5}}
              onPress={() => navigate('YourCocktailsDetail', { cocktail: name })}>
                <Text key={i}>
                  {name}
                </Text>
              </TouchableHighlight>
            );
          })
        }
        </ScrollView>
      </View>
    );
  }
}

module.exports = YourCocktailsScreen;

AppRegistry.registerComponent('YourCocktailsScreen', () => YourCocktailsScreen);
