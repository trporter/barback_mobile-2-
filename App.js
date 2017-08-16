import {
  cocktailList,
  yourCocktailList,
  Cocktail,
  YourCocktail,
  CocktailClass,
} from './src/cocktails.js';
import React, { Component } from 'react';
import { styles } from './src/styles.js';
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
import UserProfile from './src/user.js';
import Login from './src/login.js';
import Account from './src/account.js';
import Signup from "./src/signUp.js";
import CocktailCreatorScreen from "./src/cocktailcreator.js";
import AllCocktailsDetail from "./src/allcocktaildetail.js";
import YourCocktailsDetail from "./src/yourcocktaildetail.js";
import YourCocktailsScreen from "./src/yourcocktailsscreen.js";
import AllCocktailsScreen from "./src/allcocktailsscreen.js";

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
    Home:                 { screen: MainScreenNavigator },
    AllCocktailsDetail:   { screen: AllCocktailsDetail },
    YourCocktailsDetail:  { screen: YourCocktailsDetail },
    CreateCocktail:       { screen: CocktailCreatorScreen },
    UserProfile:          { screen: UserProfile },
    Login:                { screen: Login },
    Signup:               { screen: Signup },
    Account:              { screen: Account },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

AppRegistry.registerComponent('Barback_mobile', () => SimpleApp);
