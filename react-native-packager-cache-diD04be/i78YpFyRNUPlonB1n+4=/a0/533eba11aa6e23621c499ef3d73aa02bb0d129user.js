var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/src/user.js';

var _firebase = require('firebase');

var firebase = babelHelpers.interopRequireWildcard(_firebase);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _login = require('./login');

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var UserProfile = function (_Component) {
  babelHelpers.inherits(UserProfile, _Component);

  function UserProfile(props) {
    babelHelpers.classCallCheck(this, UserProfile);

    var _this = babelHelpers.possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).call(this, props));

    _this.state = {
      user: null,
      cocktails: []
    };
    return _this;
  }

  babelHelpers.createClass(UserProfile, [{
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
        { style: { paddingTop: 50 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          'Welcome'
        ),
        _react2.default.createElement(_reactNative.Button, {
          onPress: this.logout.bind(this),
          title: 'Logout',
          color: 'black',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        })
      );
    }
  }]);
  return UserProfile;
}(_react.Component);

module.exports = UserProfile;

_reactNative.AppRegistry.registerComponent('UserProfile', function () {
  return UserProfile;
});