Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CocktailCreatorScreen = undefined;
var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/src/cocktailcreator.js';

var _reactNative = require('react-native');

var _firebase = require('firebase');

var firebase = babelHelpers.interopRequireWildcard(_firebase);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _styles = require('./styles.js');

var _cocktails = require('./cocktails.js');

var CocktailCreatorScreen = exports.CocktailCreatorScreen = function (_Component) {
  babelHelpers.inherits(CocktailCreatorScreen, _Component);

  function CocktailCreatorScreen() {
    babelHelpers.classCallCheck(this, CocktailCreatorScreen);

    var _this = babelHelpers.possibleConstructorReturn(this, (CocktailCreatorScreen.__proto__ || Object.getPrototypeOf(CocktailCreatorScreen)).call(this));

    _this.state = {
      user: firebase.auth().currentUser,
      textIngNumber: 0,
      ingredients: '',
      ingInput: [],
      textStepNumber: 0,
      steps: [],
      stepInput: [],
      types: [],
      mode: _reactNative.Picker.MODE_DIALOG,
      name: '',
      photo: ''
    };
    return _this;
  }

  babelHelpers.createClass(CocktailCreatorScreen, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var addIng = function addIng() {
        _this2.setState({ textIngNumber: _this2.state.textIngNumber += 1 });
        _this2.state.ingInput.push(_react2.default.createElement(_reactNative.TextInput, {
          onChangeText: function onChangeText(ing) {
            return _this2.setState({ ingredients: ing });
          },
          key: _this2.state.textIngNumber,
          style: { height: 20 },
          placeholder: 'Add ingredient',
          placeholderTextColor: 'black',
          backgroundColor: 'white', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }));
      };
      var removeIng = function removeIng() {
        _this2.setState({ textIngNumber: _this2.state.textIngNumber -= 1 });
        _this2.state.ingInput.pop();
      };
      var addStep = function addStep() {
        _this2.setState({ textStepNumber: _this2.state.textStepNumber += 1 });
        _this2.state.stepInput.push(_react2.default.createElement(_reactNative.TextInput, {
          onChangeText: function onChangeText(step) {
            return _this2.state.steps.push(step);
          },
          key: _this2.state.textStepNumber,
          style: { height: 20 },
          placeholder: 'Add Step',
          placeholderTextColor: 'black',
          backgroundColor: 'white', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }));
      };
      var removeStep = function removeStep() {
        _this2.setState({ textStepNumber: _this2.state.textStepNumber -= 1 });
        _this2.state.stepInput.pop();
      };
      var WriteCocktailData = function WriteCocktailData() {
        firebase.database().ref('' + _this2.state.user.uid + '/cocktails/' + ('' + _this2.state.name)).set({
          name: '' + _this2.state.name,
          ingredients: '' + _this2.state.ingredients,
          steps: '' + _this2.state.steps,
          type: '' + _this2.state.type
        });
        _this2.props.navigation.navigate('Your Cocktails');
      };
      var back = function back() {
        _this2.props.navigation.goBack(null);
      };
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1, flexDirection: 'column', backgroundColor: 'teal', paddingTop: 50 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        },
        _react2.default.createElement(
          _reactNative.ScrollView,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          },
          _react2.default.createElement(_reactNative.Button, {
            onPress: back,
            title: 'back',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          }),
          _react2.default.createElement(
            _reactNative.Text,
            { style: _styles.styles.createText, __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            },
            'Name your Cocktail'
          ),
          _react2.default.createElement(_reactNative.TextInput, {
            onChangeText: function onChangeText(name) {
              return _this2.setState({ name: name });
            },
            style: { height: 20 },
            placeholder: 'Name',
            placeholderTextColor: 'black',
            backgroundColor: 'white',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          }),
          _react2.default.createElement(
            _reactNative.Text,
            { style: _styles.styles.createText, __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              }
            },
            'What family?'
          ),
          _react2.default.createElement(
            _reactNative.Picker,
            {
              style: { backgroundColor: 'white' },
              selectedValue: this.state.types,
              onValueChange: function onValueChange(type) {
                return _this2.setState({ types: type });
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            },
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'whiskey', value: 'key0', __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              }
            }),
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'vodka', value: 'key1', __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            }),
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'gin', value: 'key2', __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            }),
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'rum', value: 'key3', __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              }
            }),
            _react2.default.createElement(_reactNative.Picker.Item, { label: 'other', value: 'key4', __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.Text,
            { style: _styles.styles.createText, __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              }
            },
            'List the ingredients'
          ),
          _react2.default.createElement(_reactNative.TextInput, {
            onChangeText: function onChangeText(ing) {
              return _this2.setState({ ingredients: ing });
            },
            style: { height: 20 },
            placeholder: 'Add Ingredient',
            placeholderTextColor: 'black',
            backgroundColor: 'white', __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            }
          }),
          this.state.ingInput,
          _react2.default.createElement(
            _reactNative.View,
            { style: { flex: .25, flexDirection: 'row' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              }
            },
            _react2.default.createElement(_reactNative.Button, {
              onPress: addIng,
              title: '+',
              color: 'black', __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            }),
            _react2.default.createElement(_reactNative.Button, {
              onPress: removeIng,
              title: '-',
              color: 'black', __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.Text,
            { style: _styles.styles.createText, __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              }
            },
            'Steps in your recipe'
          ),
          _react2.default.createElement(_reactNative.TextInput, {
            onChangeText: function onChangeText(step) {
              return _this2.state.steps.push(step);
            },
            style: { height: 20 },
            placeholder: 'Add step',
            placeholderTextColor: 'black',
            backgroundColor: 'white', __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          }),
          this.state.stepInput,
          _react2.default.createElement(
            _reactNative.View,
            { style: { flex: .25, flexDirection: 'row' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 140
              }
            },
            _react2.default.createElement(_reactNative.Button, {
              onPress: addStep,
              title: '+',
              color: 'black', __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              }
            }),
            _react2.default.createElement(_reactNative.Button, {
              onPress: removeStep,
              title: '-',
              color: 'black', __source: {
                fileName: _jsxFileName,
                lineNumber: 145
              }
            })
          ),
          _react2.default.createElement(_reactNative.Button, {
            onPress: WriteCocktailData,
            title: 'Finish',
            color: 'black',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            }
          })
        )
      );
    }
  }]);
  return CocktailCreatorScreen;
}(_react.Component);

module.exports = CocktailCreatorScreen;

_reactNative.AppRegistry.registerComponent('CocktailCreatorScreen', function () {
  return CocktailCreatorScreen;
});