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
import CocktailScreen from "./cocktailscreen.js";
import AllCocktailsScreen from "./allcocktailsscreen.js";
import YourCocktailsScreen from "./yourcocktailsscreen.js";
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
