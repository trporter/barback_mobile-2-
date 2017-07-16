var _cocktails = require('./src/cocktails.js');

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _styles = require('./src/styles.js');

var _reactNative = require('react-native');

var _reactNavigation = require('react-navigation');

var _firebase = require('firebase');

var firebase = babelHelpers.interopRequireWildcard(_firebase);

var _user = require('./src/user.js');

var _user2 = babelHelpers.interopRequireDefault(_user);

var _login = require('./src/login.js');

var _login2 = babelHelpers.interopRequireDefault(_login);

var _account = require('./src/account.js');

var _account2 = babelHelpers.interopRequireDefault(_account);

var _signUp = require('./src/signUp.js');

var _signUp2 = babelHelpers.interopRequireDefault(_signUp);

var _cocktailcreator = require('./src/cocktailcreator.js');

var _cocktailcreator2 = babelHelpers.interopRequireDefault(_cocktailcreator);

var _cocktailscreen = require('./src/cocktailscreen.js');

var _cocktailscreen2 = babelHelpers.interopRequireDefault(_cocktailscreen);

var _allcocktailsscreen = require('./src/allcocktailsscreen.js');

var _allcocktailsscreen2 = babelHelpers.interopRequireDefault(_allcocktailsscreen);

var _yourcocktailsscreen = require('./src/yourcocktailsscreen.js');

var _yourcocktailsscreen2 = babelHelpers.interopRequireDefault(_yourcocktailsscreen);

var Search = require('./src/searchBar.js');

var config = {
  apiKey: "AIzaSyDAzkR17y2RvNJD-vav8kbCSeNEzmYRDGI",
  authDomain: "barback-70817.firebaseapp.com",
  databaseURL: "https://barback-70817.firebaseio.com",
  projectId: "barback-70817",
  storageBucket: "barback-70817.appspot.com",
  messagingSenderId: "651165027176"
};
firebase.initializeApp(config);

var HomeScreen = function (_Component) {
  babelHelpers.inherits(HomeScreen, _Component);

  function HomeScreen() {
    babelHelpers.classCallCheck(this, HomeScreen);
    return babelHelpers.possibleConstructorReturn(this, (HomeScreen.__proto__ || Object.getPrototypeOf(HomeScreen)).apply(this, arguments));
  }

  return HomeScreen;
}(_react.Component);

HomeScreen.navigationOptions = {
  title: 'Welcome'
};


var MainScreenNavigator = (0, _reactNavigation.TabNavigator)({
  "All Cocktails": {
    screen: _allcocktailsscreen2.default
  },
  "Your Cocktails": {
    screen: _yourcocktailsscreen2.default
  },
  "Account": {
    screen: _user2.default
  }
}, {
  tabBarOptions: {
    activeBackgroundColor: 'grey',
    labelStyle: {
      fontSize: 16,
      color: 'white',
      paddingBottom: 12
    },
    style: {
      backgroundColor: 'black'
    }
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'BarBack'
};

var SimpleApp = (0, _reactNavigation.StackNavigator)({
  Home: { screen: MainScreenNavigator },
  CocktailDetail: { screen: _cocktailscreen2.default },
  CreateCocktail: { screen: _cocktailcreator2.default },
  UserProfile: { screen: _user2.default },
  Login: { screen: _login2.default },
  Signup: { screen: _signUp2.default },
  Account: { screen: _account2.default }
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

_reactNative.AppRegistry.registerComponent('Barback_mobile', function () {
  return SimpleApp;
});