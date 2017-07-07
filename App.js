import {
  cocktailList,
  yourCocktailList,
  Cocktail,
  YourCocktail,
  CocktailClass,
} from './cocktails.js';
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
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import * as firebase from 'firebase';
import UserProfile from './user.js';
import Login from './login.js';
import Account from './account.js';
import Signup from "./signUp.js";
import CocktailCreatorScreen from "./cocktailcreator.js";
const SearchBar = require('./searchBar.js');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDAzkR17y2RvNJD-vav8kbCSeNEzmYRDGI",
  authDomain: "barback-70817.firebaseapp.com",
  databaseURL: "https://barback-70817.firebaseio.com",
  projectId: "barback-70817",
  storageBucket: "barback-70817.appspot.com",
  messagingSenderId: "651165027176"
};
firebase.initializeApp(config);

class HomeScreen extends Component{
  static navigationOptions = {
    title: 'Welcome',
  };
}

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

//firebase.database().ref().on('value',...)

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

class YourCocktailsScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      user: firebase.auth().currentUser,
    }
  }
  render(){
    const { navigate } = this.props.navigation;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(
        firebase.database().ref(`${this.state.user.uid}` + '/cocktails').once('value')
      ),
    };
    const item = () => {
      console.log(rowData);
      if(rowData === null){
        return "Cocktails go here!";
      } else {
        return rowData;
      }
    }
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'teal' }}>
        <View style={{backgroundColor: 'white', padding: 10, paddingTop: 50}}>
          <SearchBar/>
          <Button
            onPress = {() => navigate('CreateCocktail')}
            title="Create"
            color="black" />
        </View>
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
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  //tabs at bottom
  "All Cocktails": {
    screen: AllCocktailsScreen
  },
  "Your Cocktails": {
    screen: YourCocktailsScreen
  },
  "Account": {
    screen: UserProfile
  },
}, {
  tabBarOptions: {
    activeBackgroundColor: 'grey',
    labelStyle: {
      fontSize: 16,
      color: 'white',
      paddingBottom: 12,
    },
    style: {
      backgroundColor: 'black',
    },
  },
});

//figure out how to style the header!!!
MainScreenNavigator.navigationOptions = {
  title: 'BarBack',
};

const SimpleApp = StackNavigator(
  {
    Home:           { screen: MainScreenNavigator },
    CocktailDetail: { screen: CocktailScreen },
    CreateCocktail: { screen: CocktailCreatorScreen },
    UserProfile:    { screen: UserProfile },
    Login:          { screen: Login },
    Signup:         { screen: Signup },
    Account:        { screen: Account },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

AppRegistry.registerComponent('Barback_mobile', () => SimpleApp);
