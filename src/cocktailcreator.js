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
      textIngNumber: 0, //# of ingredients - 1
      ingredients: [], //set ingredients list
      ingInput: [], //each ingredient / input
      textStepNumber: 0,
      steps: [],
      stepInput: [],
      type:'',
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
          onChangeText={(ing) => this.state.ingredients[this.state.textIngNumber] = ing}
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
          onChangeText={(step) => this.state.steps[this.state.textStepNumber] = step}
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
            selectedValue={this.state.type}
            onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
            <Picker.Item label="whiskey" value="whiskey" />
            <Picker.Item label="vodka" value="vodka" />
            <Picker.Item label="gin" value="gin" />
            <Picker.Item label="rum" value="rum" />
            <Picker.Item label="other" value="other" />
          </Picker>
          <Text style = {styles.createText}>List the ingredients</Text>
          <TextInput
            onChangeText={(ing) => this.state.ingredients[this.state.textIngNumber] = ing}
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
            onChangeText={(step) => this.state.steps[this.state.textStepNumber] = step}
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
