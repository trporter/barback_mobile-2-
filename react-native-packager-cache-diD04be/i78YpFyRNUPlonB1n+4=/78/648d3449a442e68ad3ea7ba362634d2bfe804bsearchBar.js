var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/src/searchBar.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _styles = require('./styles.js');

var _reactNative = require('react-native');

var _reactNativeSearchbar = require('react-native-searchbar');

var _reactNativeSearchbar2 = babelHelpers.interopRequireDefault(_reactNativeSearchbar);

var _reactNativeVectorIcons = require('react-native-vector-icons');

var _reactNativeVectorIcons2 = babelHelpers.interopRequireDefault(_reactNativeVectorIcons);

var Search = function (_Component) {
  babelHelpers.inherits(Search, _Component);

  function Search(props) {
    babelHelpers.classCallCheck(this, Search);

    var _this = babelHelpers.possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      results: []
    };
    return _this;
  }

  babelHelpers.createClass(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNativeSearchbar2.default, {
        handleResults: this._handleResults,
        showOnLoad: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      });
    }
  }]);
  return Search;
}(_react.Component);

module.exports = Search;

_reactNative.AppRegistry.registerComponent('Search', function () {
  return Search;
});