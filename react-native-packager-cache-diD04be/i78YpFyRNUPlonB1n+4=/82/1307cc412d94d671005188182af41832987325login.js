Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/src/login.js';

var _firebase = require('firebase');

var firebase = babelHelpers.interopRequireWildcard(_firebase);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var Login = function (_Component) {
  babelHelpers.inherits(Login, _Component);

  function Login(props) {
    babelHelpers.classCallCheck(this, Login);

    var _this = babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      loading: false,
      email: '',
      password: ''
    };
    return _this;
  }

  babelHelpers.createClass(Login, [{
    key: 'login',
    value: function login() {
      var _this2 = this;

      this.setState({ loading: true });
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function () {
        _this2.setState({ loading: false });
        _this2.props.navigation.navigate('Home');
      }).catch(function (error) {
        _this2.setState({ loading: false });
        alert('Login Failed. Please try again ' + error);
      });
    }
  }, {
    key: 'goToSignup',
    value: function goToSignup() {
      this.props.navigation.navigate('Signup');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { paddingTop: 50 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
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
          placeholder: "Email Address", __source: {
            fileName: _jsxFileName,
            lineNumber: 60
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
          placeholder: "Password", __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: this.login.bind(this),
          title: 'Login', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }),
        _react2.default.createElement(_reactNative.Button, {
          onPress: this.goToSignup.bind(this),
          title: 'New Here?', __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        })
      );
    }
  }]);
  return Login;
}(_react.Component);

exports.default = Login;


module.exports = Login;

_reactNative.AppRegistry.registerComponent('Login', function () {
  return Login;
});