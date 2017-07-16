var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/src/account.js';

var _firebase = require('firebase');

var firebase = babelHelpers.interopRequireWildcard(_firebase);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _login = require('./login');

var _user = require('./user.js');

var _user2 = babelHelpers.interopRequireDefault(_user);

var _signUp = require('./signUp.js');

var _signUp2 = babelHelpers.interopRequireDefault(_signUp);

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var Account = function (_Component) {
  babelHelpers.inherits(Account, _Component);

  function Account(props) {
    babelHelpers.classCallCheck(this, Account);

    var _this = babelHelpers.possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));

    _this.state = {
      user: null
    };
    return _this;
  }

  babelHelpers.createClass(Account, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var userData = firebase.auth().currentUser;
      this.setState({
        user: userData
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      var _this2 = this;

      firebase.auth().signOut().then(function () {
        _this2.props.navigation.navigate('Login');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          'hello'
        ),
        _react2.default.createElement(_reactNative.Button, {
          onPress: this.logout.bind(this),
          title: 'Logout',
          color: 'black',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        })
      );
    }
  }]);
  return Account;
}(_react.Component);

module.exports = Account;

_reactNative.AppRegistry.registerComponent('Account', function () {
  return Account;
});