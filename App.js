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
const SearchBar = require('./searchBar');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDAzkR17y2RvNJD-vav8kbCSeNEzmYRDGI",
  authDomain: "barback-70817.firebaseapp.com",
  databaseURL: "https://barback-70817.firebaseio.com",
  projectId: "barback-70817",
  storageBucket: "barback-70817.appspot.com",
  messagingSenderId: "651165027176"
});

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
    return (
      <View>
        <Text>Details on {params.cocktailName}</Text>
        <Text>Family</Text>
        <Text>{params.cocktailType}</Text>
        <Text>Ingredients</Text>
        <Text>{params.cocktailIng}</Text>
        <Text>Steps</Text>
        <Text>{params.cocktailSteps}</Text>
      </View>
    );
  }
}

class AllCocktailsScreen extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const { navigate } = this.props.navigation;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(cocktailList),
    };
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'teal' }}>
        <SearchBar/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('CocktailDetail', {
              cocktailName: rowData.name.toString(),
              cocktailIng: rowData.ing.toString(),
              cocktailSteps: rowData.steps.toString(),
              cocktailType: rowData.type.toString()})}>
              <Text style={{padding: 5}}>{rowData.name}</Text>
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
  }
  render(){
    const { navigate } = this.props.navigation;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(yourCocktailList),
    };
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'teal' }}>
        <View style={{backgroundColor: 'white', padding: 10}}>
          <SearchBar/>
          <Button
            onPress = {() => navigate('CreateCocktail')}
            title="Create"
            color="black"
          />
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('CocktailDetail', {
              cocktailName: rowData.name.toString(),
              cocktailIng: rowData.ing.toString(),
              cocktailSteps: rowData.steps.toString(),
              cocktailType: rowData.type})}>
              <Text style={{padding: 5}}>{rowData.name}</Text>
            </TouchableHighlight>
          }
        />
      </View>
    );
  }
}

class CocktailCreatorScreen extends Component{
  constructor() {
    super();
    this.state = {
      textIngNumber: 0,
      ingredients: [],
      ingInput: [],
      textStepNumber: 0,
      steps: [],
      stepInput: [],
      types: [],
      mode: Picker.MODE_DIALOG,
      name: '',
      photo: '',
    };
  }
  render(){
    const addIng = () => {
      this.setState({ textIngNumber: this.state.textIngNumber += 1});
      this.state.ingInput.push(
        <TextInput
          onChangeText={(ing) => this.state.ingredients.push(ing)}
          key = {this.state.textIngNumber}
          style={{height: 20}}
          placeholder="Add ingredient"
          placeholderTextColor='black'
          backgroundColor='white'
        />
      )
    }
    const removeIng = () => {
      this.setState({ textIngNumber: this.state.textIngNumber -= 1});
      this.state.ingInput.pop();
    }
    const addStep = () => {
      this.setState({ textStepNumber: this.state.textStepNumber += 1});
      this.state.stepInput.push(
        <TextInput
          onChangeText={(step) => this.state.steps.push(step)}
          key = {this.state.textStepNumber}
          style={{height: 20}}
          placeholder="Add Step"
          placeholderTextColor='black'
          backgroundColor='white'
        />
      )
    }
    const removeStep = () => {
      this.setState({ textStepNumber: this.state.textStepNumber -= 1});
      this.state.stepInput.pop();
    }
    const makeCocktail = () => {
      console.log(this.state.ingInput);
      console.log(this.state.ingredients);
      yourCocktailList.push(
        new Cocktail(
          this.state.photo,
          this.state.type,
          this.state.name,
          this.state.ingredients.reduce(function(a,b) {return a.length > b.length ? a : b; }),
          this.state.steps
        )
      );
      this.props.navigation.navigate('Your Cocktails');
    }
    return(
      <View style = {{flex: 1, flexDirection: 'column', backgroundColor: 'teal'}}>
        <ScrollView>
          <Text style = {styles.createText}>Name your Cocktail</Text>
          <TextInput
            onChangeText={(name) => this.setState({name: name})}
            style={{height: 20}}
            placeholder="Name"
            placeholderTextColor='black'
            backgroundColor='white'
          />
          <Text style = {styles.createText}>What family?</Text>
          <Picker
            style={{backgroundColor: 'white'}}
            selectedValue={this.state.types}
            onValueChange={(type) => this.setState({types: type})}>
            <Picker.Item label="whiskey" value="key0" />
            <Picker.Item label="vodka" value="key1" />
            <Picker.Item label="gin" value="key2" />
            <Picker.Item label="rum" value="key3" />
            <Picker.Item label="other" value="key4" />
          </Picker>
          <Text style = {styles.createText}>List the ingredients</Text>
          <TextInput
            onChangeText={(ing) => this.state.ingredients.push(ing)}
            style={{height: 20}}
            placeholder="Add Ingredient"
            placeholderTextColor='black'
            backgroundColor='white'
          />
          {this.state.ingInput}
          <View style={{flex: .25, flexDirection: 'row'}}>
            <Button
              onPress = {addIng}
              title="+"
              color="black"
            />
            <Button
              onPress = {removeIng}
              title="-"
              color="black"
            />
          </View>
          <Text style = {styles.createText}>Steps in your recipe</Text>
          <TextInput
            onChangeText={(step) => this.state.steps.push(step)}
            style={{height: 20}}
            placeholder="Add step"
            placeholderTextColor='black'
            backgroundColor='white'
          />
          {this.state.stepInput}
          <View style={{flex: .25, flexDirection: 'row'}}>
            <Button
              onPress = {addStep}
              title="+"
              color="black"
            />
            <Button
              onPress = {removeStep}
              title="-"
              color="black"
            />
          </View>
          <Button
            onPress = {makeCocktail}
            title="Finish"
            color="black"
          />
        </ScrollView>
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

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  CocktailDetail: { screen: CocktailScreen },
  CreateCocktail: { screen: CocktailCreatorScreen },
});

AppRegistry.registerComponent('Barback_mobile', () => SimpleApp);
