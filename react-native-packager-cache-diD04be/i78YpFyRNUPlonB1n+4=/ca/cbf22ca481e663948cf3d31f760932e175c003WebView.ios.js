
'use strict';

var _jsxFileName = '/Users/Torri/Documents/programming/barback_mobile/node_modules/react-native/Libraries/Components/WebView/WebView.ios.js';
var ActivityIndicator = require('ActivityIndicator');
var EdgeInsetsPropType = require('EdgeInsetsPropType');
var React = require('React');
var ReactNative = require('ReactNative');
var StyleSheet = require('StyleSheet');
var Text = require('Text');
var UIManager = require('UIManager');
var View = require('View');
var ViewPropTypes = require('ViewPropTypes');
var ScrollView = require('ScrollView');

var deprecatedPropType = require('deprecatedPropType');
var invariant = require('fbjs/lib/invariant');
var keyMirror = require('fbjs/lib/keyMirror');
var processDecelerationRate = require('processDecelerationRate');
var requireNativeComponent = require('requireNativeComponent');
var resolveAssetSource = require('resolveAssetSource');

var PropTypes = React.PropTypes;
var RCTWebViewManager = require('NativeModules').WebViewManager;

var BGWASH = 'rgba(255,255,255,0.8)';
var RCT_WEBVIEW_REF = 'webview';

var WebViewState = keyMirror({
  IDLE: null,
  LOADING: null,
  ERROR: null
});

var NavigationType = keyMirror({
  click: true,
  formsubmit: true,
  backforward: true,
  reload: true,
  formresubmit: true,
  other: true
});

var JSNavigationScheme = 'react-js-navigation';

var DataDetectorTypes = ['phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'];

var defaultRenderLoading = function defaultRenderLoading() {
  return React.createElement(
    View,
    { style: styles.loadingView, __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      }
    },
    React.createElement(ActivityIndicator, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      }
    })
  );
};
var defaultRenderError = function defaultRenderError(errorDomain, errorCode, errorDesc) {
  return React.createElement(
    View,
    { style: styles.errorContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    },
    React.createElement(
      Text,
      { style: styles.errorTextTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      },
      'Error loading page'
    ),
    React.createElement(
      Text,
      { style: styles.errorText, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      },
      'Domain: ' + errorDomain
    ),
    React.createElement(
      Text,
      { style: styles.errorText, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      },
      'Error Code: ' + errorCode
    ),
    React.createElement(
      Text,
      { style: styles.errorText, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      },
      'Description: ' + errorDesc
    )
  );
};

var WebView = function (_React$Component) {
  babelHelpers.inherits(WebView, _React$Component);

  function WebView() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, WebView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = WebView.__proto__ || Object.getPrototypeOf(WebView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      viewState: WebViewState.IDLE,
      lastErrorEvent: null,
      startInLoadingState: true
    }, _this.goForward = function () {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.goForward, null);
    }, _this.goBack = function () {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.goBack, null);
    }, _this.reload = function () {
      _this.setState({ viewState: WebViewState.LOADING });
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.reload, null);
    }, _this.stopLoading = function () {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.stopLoading, null);
    }, _this.postMessage = function (data) {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.postMessage, [String(data)]);
    }, _this.injectJavaScript = function (data) {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.injectJavaScript, [data]);
    }, _this._updateNavigationState = function (event) {
      if (_this.props.onNavigationStateChange) {
        _this.props.onNavigationStateChange(event.nativeEvent);
      }
    }, _this.getWebViewHandle = function () {
      return ReactNative.findNodeHandle(_this.refs[RCT_WEBVIEW_REF]);
    }, _this._onLoadingStart = function (event) {
      var onLoadStart = _this.props.onLoadStart;
      onLoadStart && onLoadStart(event);
      _this._updateNavigationState(event);
    }, _this._onLoadingError = function (event) {
      event.persist();var _this$props = _this.props,
          onError = _this$props.onError,
          onLoadEnd = _this$props.onLoadEnd;

      onError && onError(event);
      onLoadEnd && onLoadEnd(event);
      console.warn('Encountered an error loading page', event.nativeEvent);

      _this.setState({
        lastErrorEvent: event.nativeEvent,
        viewState: WebViewState.ERROR
      });
    }, _this._onLoadingFinish = function (event) {
      var _this$props2 = _this.props,
          onLoad = _this$props2.onLoad,
          onLoadEnd = _this$props2.onLoadEnd;

      onLoad && onLoad(event);
      onLoadEnd && onLoadEnd(event);
      _this.setState({
        viewState: WebViewState.IDLE
      });
      _this._updateNavigationState(event);
    }, _this._onMessage = function (event) {
      var onMessage = _this.props.onMessage;

      onMessage && onMessage(event);
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(WebView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.startInLoadingState) {
        this.setState({ viewState: WebViewState.LOADING });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var otherView = null;

      if (this.state.viewState === WebViewState.LOADING) {
        otherView = (this.props.renderLoading || defaultRenderLoading)();
      } else if (this.state.viewState === WebViewState.ERROR) {
        var errorEvent = this.state.lastErrorEvent;
        invariant(errorEvent != null, 'lastErrorEvent expected to be non-null');
        otherView = (this.props.renderError || defaultRenderError)(errorEvent.domain, errorEvent.code, errorEvent.description);
      } else if (this.state.viewState !== WebViewState.IDLE) {
        console.error('RCTWebView invalid state encountered: ' + this.state.loading);
      }

      var webViewStyles = [styles.container, styles.webView, this.props.style];
      if (this.state.viewState === WebViewState.LOADING || this.state.viewState === WebViewState.ERROR) {
        webViewStyles.push(styles.hidden);
      }

      var onShouldStartLoadWithRequest = this.props.onShouldStartLoadWithRequest && function (event) {
        var shouldStart = _this2.props.onShouldStartLoadWithRequest && _this2.props.onShouldStartLoadWithRequest(event.nativeEvent);
        RCTWebViewManager.startLoadWithResult(!!shouldStart, event.nativeEvent.lockIdentifier);
      };

      var decelerationRate = processDecelerationRate(this.props.decelerationRate);

      var source = this.props.source || {};
      if (this.props.html) {
        source.html = this.props.html;
      } else if (this.props.url) {
        source.uri = this.props.url;
      }

      var messagingEnabled = typeof this.props.onMessage === 'function';

      var webView = React.createElement(RCTWebView, {
        ref: RCT_WEBVIEW_REF,
        key: 'webViewKey',
        style: webViewStyles,
        source: resolveAssetSource(source),
        injectedJavaScript: this.props.injectedJavaScript,
        bounces: this.props.bounces,
        scrollEnabled: this.props.scrollEnabled,
        decelerationRate: decelerationRate,
        contentInset: this.props.contentInset,
        automaticallyAdjustContentInsets: this.props.automaticallyAdjustContentInsets,
        onLoadingStart: this._onLoadingStart,
        onLoadingFinish: this._onLoadingFinish,
        onLoadingError: this._onLoadingError,
        messagingEnabled: messagingEnabled,
        onMessage: this._onMessage,
        onShouldStartLoadWithRequest: onShouldStartLoadWithRequest,
        scalesPageToFit: this.props.scalesPageToFit,
        allowsInlineMediaPlayback: this.props.allowsInlineMediaPlayback,
        mediaPlaybackRequiresUserAction: this.props.mediaPlaybackRequiresUserAction,
        dataDetectorTypes: this.props.dataDetectorTypes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      });

      return React.createElement(
        View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 445
          }
        },
        webView,
        otherView
      );
    }
  }]);
  return WebView;
}(React.Component);

WebView.JSNavigationScheme = JSNavigationScheme;
WebView.NavigationType = NavigationType;
WebView.propTypes = babelHelpers.extends({}, ViewPropTypes, {

  html: deprecatedPropType(PropTypes.string, 'Use the `source` prop instead.'),

  url: deprecatedPropType(PropTypes.string, 'Use the `source` prop instead.'),

  source: PropTypes.oneOfType([PropTypes.shape({
    uri: PropTypes.string,

    method: PropTypes.string,

    headers: PropTypes.object,

    body: PropTypes.string
  }), PropTypes.shape({
    html: PropTypes.string,

    baseUrl: PropTypes.string
  }), PropTypes.number]),

  renderError: PropTypes.func,
  renderLoading: PropTypes.func,

  onLoad: PropTypes.func,

  onLoadEnd: PropTypes.func,

  onLoadStart: PropTypes.func,

  onError: PropTypes.func,

  bounces: PropTypes.bool,

  decelerationRate: ScrollView.propTypes.decelerationRate,

  scrollEnabled: PropTypes.bool,

  automaticallyAdjustContentInsets: PropTypes.bool,

  contentInset: EdgeInsetsPropType,

  onNavigationStateChange: PropTypes.func,

  onMessage: PropTypes.func,

  startInLoadingState: PropTypes.bool,

  style: ViewPropTypes.style,

  dataDetectorTypes: PropTypes.oneOfType([PropTypes.oneOf(DataDetectorTypes), PropTypes.arrayOf(PropTypes.oneOf(DataDetectorTypes))]),

  javaScriptEnabled: PropTypes.bool,

  domStorageEnabled: PropTypes.bool,

  injectedJavaScript: PropTypes.string,

  userAgent: PropTypes.string,

  scalesPageToFit: PropTypes.bool,

  onShouldStartLoadWithRequest: PropTypes.func,

  allowsInlineMediaPlayback: PropTypes.bool,

  mediaPlaybackRequiresUserAction: PropTypes.bool,

  injectJavaScript: PropTypes.func,

  mixedContentMode: PropTypes.oneOf(['never', 'always', 'compatibility'])
});


var RCTWebView = requireNativeComponent('RCTWebView', WebView, {
  nativeOnly: {
    onLoadingStart: true,
    onLoadingError: true,
    onLoadingFinish: true,
    onMessage: true,
    messagingEnabled: PropTypes.bool
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BGWASH
  },
  errorText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 2
  },
  errorTextTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10
  },
  hidden: {
    height: 0,
    flex: 0 },
  loadingView: {
    backgroundColor: BGWASH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  webView: {
    backgroundColor: '#ffffff'
  }
});

module.exports = WebView;