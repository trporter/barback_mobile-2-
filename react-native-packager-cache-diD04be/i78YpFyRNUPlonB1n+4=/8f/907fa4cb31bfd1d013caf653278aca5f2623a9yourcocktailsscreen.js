var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/src/yourcocktailsscreen.js';

var _reactNative = require('react-native');

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _firebase = require('firebase');

var firebase = babelHelpers.interopRequireWildcard(_firebase);

var _searchBar = require('./searchBar.js');

var _searchBar2 = babelHelpers.interopRequireDefault(_searchBar);

var YourCocktailsScreen = function (_Component) {
  babelHelpers.inherits(YourCocktailsScreen, _Component);

  function YourCocktailsScreen(props) {
    babelHelpers.classCallCheck(this, YourCocktailsScreen);

    var _this = babelHelpers.possibleConstructorReturn(this, (YourCocktailsScreen.__proto__ || Object.getPrototypeOf(YourCocktailsScreen)).call(this, props));

    _this.state = {
      cocktailnames: [],
      user: firebase.auth().currentUser
    };
    return _this;
  }

  babelHelpers.createClass(YourCocktailsScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.Lister();
    }
  }, {
    key: 'Lister',
    value: function Lister() {
      var _this2 = this;

      firebase.database().ref('' + this.state.user.uid + '/cocktails').on('value', function (snapshot) {
        if (snapshot.val() !== null) {
          _this2.setState({ cocktailnames: Object.keys(snapshot.val()) });
        } else {
          _this2.setState({ cocktailnames: ["Add Cocktails!"] });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var navigate = this.props.navigation.navigate;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1, flexDirection: 'column', backgroundColor: 'teal' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        _react2.default.createElement(_searchBar2.default, { data: this.state.cocktailnames, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }),
        _react2.default.createElement(
          _reactNative.View,
          { style: { backgroundColor: 'grey', paddingTop: 75 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          _react2.default.createElement(_reactNative.Button, {
            onPress: function onPress() {
              return navigate('CreateCocktail');
            },
            title: 'Create',
            color: 'black', __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          })
        ),
        _react2.default.createElement(
          _reactNative.ScrollView,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          this.state.cocktailnames.map(function (name, i) {
            return _react2.default.createElement(
              _reactNative.TouchableHighlight,
              { onPress: function onPress() {
                  return _this3.props.navigation.navigate('CocktailDetail');
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              _react2.default.createElement(
                _reactNative.Text,
                { key: i, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  }
                },
                name
              )
            );
          })
        )
      );
    }
  }]);
  return YourCocktailsScreen;
}(_react.Component);

module.exports = YourCocktailsScreen;

_reactNative.AppRegistry.registerComponent('YourCocktailsScreen', function () {
  return YourCocktailsScreen;
});