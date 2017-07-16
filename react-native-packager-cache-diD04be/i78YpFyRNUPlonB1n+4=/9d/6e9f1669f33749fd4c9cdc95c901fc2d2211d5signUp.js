Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/src/signUp.js';

var _firebase = require('firebase');

var firebase = babelHelpers.interopRequireWildcard(_firebase);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var Signup = function (_Component) {
  babelHelpers.inherits(Signup, _Component);

  function Signup(props) {
    babelHelpers.classCallCheck(this, Signup);

    var _this = babelHelpers.possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.state = {
      loading: false,
      email: '',
      password: '',
      user: ''
    };
    return _this;
  }

  babelHelpers.createClass(Signup, [{
    key: 'signup',
    value: function signup() {
      var _this2 = this;

      this.setState({ loading: true });
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function () {
        alert('Your account was created!');
        _this2.setState({
          email: '',
          password: '',
          loading: false,
          user: firebase.auth().currentUser
        });
        _this2.props.navigation.navigate('Home');
      }).catch(function (error) {
        _this2.setState({ loading: false });
        alert("Account creation failed: " + error.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var back = function back() {
        _this3.props.navigation.goBack(null);
      };
      return _react2.default.createElement(
        _reactNative.View,
        { style: { paddingTop: 50 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        _react2.default.createElement(_reactNative.TextInput, {
          style: { height: 20 },
          placeholderTextColor: 'black',
          backgroundColor: 'white',
          onChangeText: function onChangeText(text) {
            return _this3.setState({ email: text });
          },
          value: this.state.email,
          placeholder: 'Email Address', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }),
        _react2.default.createElement(_reactNative.TextInput, {
          style: { height: 20 },
          placeholderTextColor: 'black',
          backgroundColor: 'white',
          onChangeText: function onChangeText(text) {
            return _this3.setState({ password: text });
          },
          value: this.state.password,
          secureTextEntry: true,
          placeholder: 'Password', __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: this.signup.bind(this),
          title: 'Signup', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: back,
          title: 'Back', __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        })
      );
    }
  }]);
  return Signup;
}(_react.Component);

exports.default = Signup;


module.exports = Signup;

_reactNative.AppRegistry.registerComponent('Signup', function () {
  return Signup;
});