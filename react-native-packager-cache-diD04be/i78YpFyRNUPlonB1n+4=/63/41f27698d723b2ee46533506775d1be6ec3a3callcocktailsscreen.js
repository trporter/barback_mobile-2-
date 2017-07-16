var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/src/allcocktailsscreen.js';

var _reactNative = require('react-native');

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _firebase = require('firebase');

var firebase = babelHelpers.interopRequireWildcard(_firebase);

var _cocktails = require('./cocktails.js');

var _reactNativeSearchbar = require('react-native-searchbar');

var _reactNativeSearchbar2 = babelHelpers.interopRequireDefault(_reactNativeSearchbar);

var _reactNativeVectorIcons = require('react-native-vector-icons');

var _reactNativeVectorIcons2 = babelHelpers.interopRequireDefault(_reactNativeVectorIcons);

var AllCocktailsScreen = function (_Component) {
  babelHelpers.inherits(AllCocktailsScreen, _Component);

  function AllCocktailsScreen(props) {
    babelHelpers.classCallCheck(this, AllCocktailsScreen);

    var _this = babelHelpers.possibleConstructorReturn(this, (AllCocktailsScreen.__proto__ || Object.getPrototypeOf(AllCocktailsScreen)).call(this, props));

    _this.state = {
      cocktailnames: [],
      results: [],
      value: ''
    };
    _this._handleResults = _this._handleResults.bind(_this);
    return _this;
  }

  babelHelpers.createClass(AllCocktailsScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.Lister();
    }
  }, {
    key: '_handleResults',
    value: function _handleResults(results) {
      this.setState({ results: results });
    }
  }, {
    key: 'Lister',
    value: function Lister() {
      var _this2 = this;

      firebase.database().ref('/allcocktails').on('value', function (snapshot) {
        if (snapshot.val() !== null) {
          _this2.setState({ cocktailnames: Object.keys(snapshot.val()) });
        } else {
          _this2.setState({ cocktailnames: ["No Cocktails?"] });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var navigate = this.props.navigation.navigate;

      console.log(this.state.value);
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1, flexDirection: 'column', backgroundColor: 'teal' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        _react2.default.createElement(_reactNativeSearchbar2.default, {
          data: this.state.cocktailnames,
          handleResults: this._handleResults,
          getValue: this.state.value,
          allDataOnEmptySearch: true,
          hideBack: true,
          showOnLoad: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }),
        _react2.default.createElement(
          _reactNative.ScrollView,
          { style: { paddingTop: 70 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          this.state.results.length !== 0 ? this.state.results.map(function (result, i) {
            return _react2.default.createElement(
              _reactNative.TouchableHighlight,
              {
                style: { paddingTop: 5 },
                onPress: function onPress() {
                  return _this3.props.navigation.navigate('CocktailDetail');
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              _react2.default.createElement(
                _reactNative.Text,
                { key: i, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  }
                },
                result
              )
            );
          }) : _react2.default.createElement(
            _reactNative.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            'No Matches'
          )
        )
      );
    }
  }]);
  return AllCocktailsScreen;
}(_react.Component);

module.exports = AllCocktailsScreen;

_reactNative.AppRegistry.registerComponent('AllCocktailsScreen', function () {
  return AllCocktailsScreen;
});