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
import * as firebase from 'firebase';
import React, { Component } from 'react';
import { styles } from './styles.js';
import {
  cocktailList,
  yourCocktailList,
  Cocktail,
  YourCocktail,
  CocktailClass,
} from './cocktails.js';

export class CocktailCreatorScreen extends Component{
  constructor() {
    super();
    this.state = {
      user: firebase.auth().currentUser,
      textIngNumber: 0,
      ingredients: '',
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
          onChangeText={(ing) => this.setState({ingredients: ing})}
          key = {this.state.textIngNumber}
          style={{height: 20}}
          placeholder="Add ingredient"
          placeholderTextColor='black'
          backgroundColor='white' />
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
          backgroundColor='white' />
      )
    }
    const removeStep = () => {
      this.setState({ textStepNumber: this.state.textStepNumber -= 1});
      this.state.stepInput.pop();
    }
    const WriteCocktailData = () => {
      firebase.database().ref(`${this.state.user.uid}` + '/cocktails/' + `${this.state.name}`).set({
        name: `${this.state.name}`,
        ingredients: `${this.state.ingredients}`,
        steps: `${this.state.steps}`,
        type: `${this.state.type}`,
      });
      this.props.navigation.navigate('Your Cocktails');
    }
    const back = () => {
      this.props.navigation.goBack(null);
    }
    return(
      <View style = {{flex: 1, flexDirection: 'column', backgroundColor: 'teal', paddingTop: 50}}>
        <ScrollView>
          <Button
            onPress = {back}
            title = 'back'
          />
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
            onChangeText={(ing) => this.setState({ingredients: ing})}
            style={{height: 20}}
            placeholder="Add Ingredient"
            placeholderTextColor='black'
            backgroundColor='white' />
          {this.state.ingInput}
          <View style={{flex: .25, flexDirection: 'row'}}>
            <Button
              onPress = {addIng}
              title="+"
              color="black" />
            <Button
              onPress = {removeIng}
              title="-"
              color="black" />
          </View>
          <Text style = {styles.createText}>Steps in your recipe</Text>
          <TextInput
            onChangeText={(step) => this.state.steps.push(step)}
            style={{height: 20}}
            placeholder="Add step"
            placeholderTextColor='black'
            backgroundColor='white' />
          {this.state.stepInput}
          <View style={{flex: .25, flexDirection: 'row'}}>
            <Button
              onPress = {addStep}
              title="+"
              color="black" />
            <Button
              onPress = {removeStep}
              title="-"
              color="black" />
          </View>
          <Button
            onPress = {WriteCocktailData}
            title="Finish"
            color="black"
          />
        </ScrollView>
      </View>
    );
  }
}

module.exports = CocktailCreatorScreen;

AppRegistry.registerComponent('CocktailCreatorScreen', () => CocktailCreatorScreen);
