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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.Recore;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "window.Recore"
var external_window_Recore_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/_@ali_recore-loader@0.1.1-4@@ali/recore-loader/src?entry!./node_modules/_@ali_recore-loader@0.1.1-4@@ali/recore-loader/template/404.vx


function ViewFactory(V) {
  const A = {
    a1: {
      key: 'a1',
      views: [
        {
          key: 'v1',
          name: 'h1',
        },
        {
          key: 'v2',
          name: 'p',
        },
      ],
    },
  };
  function render1(area) {
    return V(
      'h1', area.p('v1'),
      [
        "404",
      ]
    )
  }
  function render2(area) {
    return V(
      'p', area.p('v2'),
      [
        "Generated by recore",
      ]
    )
  }
  function render3(area) {
    return V('Fragment', null,
      [
        render1(area),
        render2(area),
      ]
    );
  }
  return (controller) => Object(external_window_Recore_["X"])(controller.__m(A.a1), render3)
}

/* harmony default export */ var _404 = (Object(external_window_Recore_["compose"])(ViewFactory));

// CONCATENATED MODULE: ./src/pages/xswitch/xswitch.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var XSwitch =
/*#__PURE__*/
function (_ViewController) {
  _inherits(XSwitch, _ViewController);

  function XSwitch() {
    var _this;

    _classCallCheck(this, XSwitch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(XSwitch).apply(this, arguments));
    _this.on = false;
    return _this;
  }

  return XSwitch;
}(external_window_Recore_["ViewController"]);



__decorate([external_window_Recore_["observable"]], XSwitch.prototype, "on", void 0);
// CONCATENATED MODULE: ./node_modules/_@ali_recore-loader@0.1.1-4@@ali/recore-loader/src?entry!./src/pages/xswitch/index.vx



function xswitch_ViewFactory(V) {
  const A = {
    a1: {
      key: 'a1',
      views: [
        {
          key: 'v1',
          name: 'div',
          props: [
            {
              key: 'className.on',
              expr: function($scope,$area){return $scope.$("on")},
            },
          ]
        },
        {
          key: 'v2',
          name: 'input',
          props: [
            {
              key: 'type',
              value: "checkbox",
            },
            {
              key: 'x-model',
              expr: function($scope,$area){return $scope.$("on")},
            },
            {
              key: 'onChange',
              expr: function($scope,$area){return (...x) => Object(external_window_Recore_["xAssign"])(v=>$scope.$set("on",v),()=>$scope.$("on"),...x)},
            },
          ]
        },
      ],
      exprs: [
        {
          key: 'frag1',
          expr: function($scope,$area){return $scope.$("on")?"on":"off"},
        },
      ],
    },
  };
  function render1(area) {
    return V(
      'div', area.p('v1'),
      [
        "Hello World ",
        area.e('frag1'),
      ]
    )
  }
  function render2(area) {
    return V(
      'input', area.p('v2'),
      null
    )
  }
  function render3(area) {
    return V('Fragment', null,
      [
        render1(area),
        render2(area),
      ]
    );
  }
  return (controller) => Object(external_window_Recore_["X"])(controller.__m(A.a1), render3)
}

/* harmony default export */ var xswitch = (Object(external_window_Recore_["compose"])(xswitch_ViewFactory, XSwitch));

// CONCATENATED MODULE: ./node_modules/_@ali_recore-loader@0.1.1-4@@ali/recore-loader/src?router&asEntry!./src/router.ts






const pagesMap = {
  "./pages/options": _404,
  "./pages/xswitch": xswitch,
};

const routesConfig = {
  "baseDir": "./pages",
  "exact": true,
  "routes": [
    {
      "path": "/options.html",
      "main": "./options"
    },
    {
      "path": "/XSwitch.html",
      "main": "./xswitch"
    },
    {
      "path": "/",
      "main": "./xswitch"
    }
  ]
};


/* harmony default export */ var router = (Object(external_window_Recore_["createRouter"])(
  routesConfig
  , pagesMap
  , null
  , true
));
// CONCATENATED MODULE: ./node_modules/_@ali_recore-loader@0.1.1-4@@ali/recore-loader/src?boot!./node_modules/_@ali_nowa-recore-solution@0.3.1-9@@ali/nowa-recore-solution/src/template/bootstrap.js


Object(external_window_Recore_["runApp"])(router, {}); // 使用默认的 mode

/***/ })
/******/ ]);
//# sourceMappingURL=xswitch.js.map