/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = readFromConsumerApi;
function readFromConsumerApi(key) {
    return function () {
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {
            var _window$NeosHostPlu;

            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);
        }

        throw new Error('You are trying to read from a consumer api that hasn\'t been initialized yet!');
    };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(1);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(1);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EMPTY = exports.EMPTY = 'EMPTY';
var PREVIEW = exports.PREVIEW = 'PREVIEW';
var CROPPING = exports.CROPPING = 'CROPPING';

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(1);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(14);

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _ImageEditor = __webpack_require__(37);

var _ImageEditor2 = _interopRequireDefault(_ImageEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _neosUiExtensibility2.default)('Ttree.Lab.ImageEditor:ImageEditor', {}, function (globalRegistry) {
    var editorsRegistry = globalRegistry.get('inspector').get('editors');
    editorsRegistry.set('Ttree.Lab.ImageEditor/Inspector/Editors/ImageEditor', {
        component: _ImageEditor2.default
    });
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createConsumerApi = undefined;

var _createConsumerApi = __webpack_require__(15);

var _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);

var _readFromConsumerApi = __webpack_require__(1);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('manifest');
exports.createConsumerApi = _createConsumerApi2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createConsumerApi;

var _package = __webpack_require__(16);

var _manifest = __webpack_require__(17);

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};

function createConsumerApi(manifests, exposureMap) {
    var api = {};

    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });

    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));

    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
    Object.defineProperty(window['@Neos:HostPluginAPI'], 'VERSION', createReadOnlyValue(_package.version));
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"name":"@neos-project/neos-ui-extensibility","version":"1.0.4","description":"Extensibility mechanisms for the Neos CMS UI","main":"./src/index.js","scripts":{"prebuild":"check-dependencies && yarn clean","test":"yarn jest -- -w 2 --coverage","test:watch":"yarn jest -- --watch","build":"exit 0","build:watch":"exit 0","clean":"rimraf ./lib ./dist","lint":"eslint src","jest":"NODE_ENV=test jest"},"devDependencies":{"@neos-project/babel-preset-neos-ui":"1.0.4","@neos-project/jest-preset-neos-ui":"1.0.4"},"dependencies":{"@neos-project/build-essentials":"1.0.4","@neos-project/positional-array-sorter":"1.0.4","babel-core":"^6.13.2","babel-eslint":"^7.1.1","babel-loader":"^7.1.2","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-object-rest-spread":"^6.20.1","babel-plugin-webpack-alias":"^2.1.1","babel-preset-es2015":"^6.13.2","babel-preset-react":"^6.3.13","babel-preset-stage-0":"^6.3.13","chalk":"^1.1.3","css-loader":"^0.28.4","file-loader":"^1.1.5","json-loader":"^0.5.4","postcss-loader":"^2.0.8","react-dev-utils":"^0.5.0","style-loader":"^0.19.0"},"bin":{"neos-react-scripts":"./bin/neos-react-scripts.js"},"jest":{"preset":"@neos-project/jest-preset-neos-ui"}}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (manifests) {
    return function manifest(identifier, options, bootstrap) {
        manifests.push(_defineProperty({}, identifier, {
            options: options,
            bootstrap: bootstrap
        }));
    };
};

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(1);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _machine;

var _states = __webpack_require__(7);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var chooseFromMedia = function chooseFromMedia() {
    console.log('Choose from media');
    var media = { media: 'foo' };
    return { name: _states.PREVIEW, media: media };
};
var chooseFromFile = function chooseFromFile() {
    console.log('Choose from file');
    var media = { media: 'foo' };
    return { name: _states.PREVIEW, media: media };
};

var previewSuccess = function previewSuccess() {
    console.log('Preview Success');
};

var previewError = function previewError() {
    console.log('Preview Error');
};

var clearSelection = function clearSelection() {
    console.log('Clear Asset Selection');
    return { name: _states.EMPTY };
};

var confirmCropping = function confirmCropping() {
    console.log('Confirm Cropping');
    var media = { media: 'foo' };
    return { name: _states.PREVIEW, media: media };
};

var closeCropping = function closeCropping() {
    console.log('Close Cropping');
    var media = { media: 'foo' };
    return { name: _states.PREVIEW, media: media };
};

var showCropping = function showCropping() {
    console.log('Show Cropping');
    var media = { media: 'foo' };
    return { name: _states.CROPPING, media: media };
};

var machine = (_machine = {}, _defineProperty(_machine, _states.EMPTY, {
    chooseFromMedia: chooseFromMedia,
    chooseFromFile: chooseFromFile
}), _defineProperty(_machine, _states.PREVIEW, {
    previewSuccess: previewSuccess,
    previewError: previewError,
    showCropping: showCropping,
    clearSelection: clearSelection
}), _defineProperty(_machine, _states.CROPPING, {
    confirmCropping: confirmCropping,
    closeCropping: closeCropping
}), _machine);

exports.default = machine;

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactUiComponents = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Empty = (_temp = _class = function (_Component) {
    _inherits(Empty, _Component);

    function Empty() {
        _classCallCheck(this, Empty);

        return _possibleConstructorReturn(this, (Empty.__proto__ || Object.getPrototypeOf(Empty)).apply(this, arguments));
    }

    _createClass(Empty, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                chooseFromMedia = _props.chooseFromMedia,
                chooseFromFile = _props.chooseFromFile;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'I\'m empty'
                    )
                ),
                _react2.default.createElement(
                    _reactUiComponents.Button,
                    { onClick: chooseFromMedia, style: 'brand' },
                    'Media'
                ),
                _react2.default.createElement(
                    _reactUiComponents.Button,
                    { onClick: chooseFromFile, style: 'brand' },
                    'File'
                )
            );
        }
    }]);

    return Empty;
}(_react.Component), _class.propTypes = {
    chooseFromMedia: _propTypes2.default.func.isRequired,
    chooseFromFile: _propTypes2.default.func.isRequired
}, _temp);
exports.default = Empty;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactUiComponents = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = (_temp = _class = function (_Component) {
    _inherits(Preview, _Component);

    function Preview() {
        _classCallCheck(this, Preview);

        return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
    }

    _createClass(Preview, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                clearSelection = _props.clearSelection,
                showCropping = _props.showCropping;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Preview'
                    )
                ),
                _react2.default.createElement(
                    _reactUiComponents.Button,
                    { onClick: clearSelection, style: 'brand' },
                    'Clear Me'
                ),
                _react2.default.createElement(
                    _reactUiComponents.Button,
                    { onClick: showCropping, style: 'brand' },
                    'Crop Me'
                )
            );
        }
    }]);

    return Preview;
}(_react.Component), _class.propTypes = {
    clearSelection: _propTypes2.default.func.isRequired,
    showCropping: _propTypes2.default.func.isRequired
}, _temp);
exports.default = Preview;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactUiComponents = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cropping = (_temp = _class = function (_Component) {
    _inherits(Cropping, _Component);

    function Cropping() {
        _classCallCheck(this, Cropping);

        return _possibleConstructorReturn(this, (Cropping.__proto__ || Object.getPrototypeOf(Cropping)).apply(this, arguments));
    }

    _createClass(Cropping, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                close = _props.close,
                confirm = _props.confirm;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Cropping'
                    )
                ),
                _react2.default.createElement(
                    _reactUiComponents.Button,
                    { onClick: close, style: 'brand' },
                    'Close'
                ),
                _react2.default.createElement(
                    _reactUiComponents.Button,
                    { onClick: confirm, style: 'brand' },
                    'Confirm'
                )
            );
        }
    }]);

    return Cropping;
}(_react.Component), _class.propTypes = {
    close: _propTypes2.default.func.isRequired,
    confirm: _propTypes2.default.func.isRequired
}, _temp);
exports.default = Cropping;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _neosUiDecorators = __webpack_require__(30);

var _states = __webpack_require__(7);

var _machine = __webpack_require__(31);

var _machine2 = _interopRequireDefault(_machine);

var _Automata2 = __webpack_require__(38);

var _Automata3 = _interopRequireDefault(_Automata2);

var _Empty = __webpack_require__(34);

var _Empty2 = _interopRequireDefault(_Empty);

var _Preview = __webpack_require__(35);

var _Preview2 = _interopRequireDefault(_Preview);

var _Cropping = __webpack_require__(36);

var _Cropping2 = _interopRequireDefault(_Cropping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageEditor = (_dec = (0, _neosUiDecorators.neos)(function (globalRegistry) {
    return {
        secondaryEditorsRegistry: globalRegistry.get('inspector').get('secondaryEditors')
    };
}), _dec(_class = (_temp = _class2 = function (_Automata) {
    _inherits(ImageEditor, _Automata);

    function ImageEditor(props) {
        var _this$prepareMachine;

        _classCallCheck(this, ImageEditor);

        var _this = _possibleConstructorReturn(this, (ImageEditor.__proto__ || Object.getPrototypeOf(ImageEditor)).call(this, props));

        _this.prepareMachine(_machine2.default, _states.EMPTY, (_this$prepareMachine = {}, _defineProperty(_this$prepareMachine, _states.EMPTY, function () {
            return _react2.default.createElement(_Empty2.default, {
                chooseFromMedia: function chooseFromMedia() {
                    return _this.transition('chooseFromMedia');
                }, chooseFromFile: function chooseFromFile() {
                    return _this.transition('chooseFromFile');
                }
            });
        }), _defineProperty(_this$prepareMachine, _states.PREVIEW, function () {
            return _react2.default.createElement(_Preview2.default, {
                clearSelection: function clearSelection() {
                    return _this.transition('clearSelection');
                },
                showCropping: function showCropping() {
                    return _this.transition('showCropping');
                }
            });
        }), _defineProperty(_this$prepareMachine, _states.CROPPING, function () {
            return _react2.default.createElement(_Cropping2.default, {
                confirm: function confirm() {
                    return _this.transition('confirmCropping');
                },
                close: function close() {
                    return _this.transition('closeCropping');
                }
            });
        }), _this$prepareMachine));
        return _this;
    }

    return ImageEditor;
}(_Automata3.default), _class2.propTypes = {
    // The propertyName this editor is used for, coming from the inspector
    identifier: _propTypes2.default.string,

    value: _propTypes2.default.oneOfType([_propTypes2.default.shape({
        __identifier: _propTypes2.default.string
    }), _propTypes2.default.string]),
    // "hooks" are the hooks specified by commit()
    hooks: _propTypes2.default.object,

    commit: _propTypes2.default.func.isRequired,
    renderSecondaryInspector: _propTypes2.default.func.isRequired,
    secondaryEditorsRegistry: _propTypes2.default.object.isRequired,

    options: _propTypes2.default.object,
    highlight: _propTypes2.default.bool,

    // Public API:
    // I18N key
    fileChooserLabel: _propTypes2.default.string,

    allowedFileTypes: _propTypes2.default.string
}, _temp)) || _class);
exports.default = ImageEditor;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Automata = function (_Component) {
    _inherits(Automata, _Component);

    function Automata() {
        _classCallCheck(this, Automata);

        return _possibleConstructorReturn(this, (Automata.__proto__ || Object.getPrototypeOf(Automata)).apply(this, arguments));
    }

    _createClass(Automata, [{
        key: 'prepareMachine',
        value: function prepareMachine(machine, state, renderMap) {
            this.machine = machine;

            this.renderMap = renderMap;

            this.state = {
                current: state
            };
        }
    }, {
        key: 'transition',
        value: function transition(action) {
            var currentState = this.state.current;
            var transition = this.machine[currentState][action];

            if (transition) {
                var _transition = transition(currentState),
                    name = _transition.name,
                    state = _objectWithoutProperties(_transition, ['name']);

                this.setState(_extends({
                    current: name
                }, state));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var current = this.state.current;

            return this.renderMap[current]();
        }
    }]);

    return Automata;
}(_react.Component);

exports.default = Automata;

/***/ })
/******/ ]);
//# sourceMappingURL=Plugin.js.map