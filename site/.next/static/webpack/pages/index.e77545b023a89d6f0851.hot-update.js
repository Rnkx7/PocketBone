"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/indexnavbar.js":
/*!***********************************!*\
  !*** ./components/indexnavbar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Robert\\Documents\\Code\\nft\\PocketBone\\site\\components\\indexnavbar.js",
    _s = $RefreshSig$();

 // nodejs library that concatenates strings


 // reactstrap components



function IndexNavbar() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState("navbar-transparent"),
      _React$useState2 = (0,C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      navbarColor = _React$useState2[0],
      setNavbarColor = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState("white"),
      _React$useState4 = (0,C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      brandColor = _React$useState4[0],
      setbrandColor = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState6 = (0,C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState5, 2),
      navbarCollapse = _React$useState6[0],
      setNavbarCollapse = _React$useState6[1];

  var toggleNavbarCollapse = function toggleNavbarCollapse() {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState8 = (0,C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState7, 2),
      dropdownOpen = _React$useState8[0],
      setDropdownOpen = _React$useState8[1];

  var toggle = function toggle() {
    return setDropdownOpen(function (prevState) {
      return !prevState;
    });
  };

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    var updateNavbarColor = function updateNavbarColor() {
      if (document.documentElement.scrollTop > 99 || document.body.scrollTop > 99) {
        setNavbarColor("");
        setbrandColor("black");
      } else if (document.documentElement.scrollTop < 1005 || document.body.scrollTop < 100) {
        setNavbarColor("navbar-transparent");
        setbrandColor("white");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("fixed-top", navbarColor),
    expand: "md",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "navbar-translate",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavbarBrand, {
          "data-placement": "bottom",
          href: "/",
          title: "Home",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("nav-brand", brandColor),
            children: "Pocket Bones"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          "aria-expanded": navbarCollapse,
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("navbar-toggler navbar-toggler", {
            toggled: navbarCollapse
          }),
          onClick: toggleNavbarCollapse,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "navbar-toggler-bar bar1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "navbar-toggler-bar bar2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "navbar-toggler-bar bar3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Collapse, {
        className: "justify-content-end",
        navbar: true,
        isOpen: navbarCollapse,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {
          navbar: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
              "data-placement": "bottom",
              href: "/",
              title: "Home",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "nav-text",
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
              "data-placement": "bottom",
              href: "/",
              title: "Mint",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "nav-text",
                children: "Mint"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
              "data-placement": "bottom",
              href: "/",
              title: "About Us",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "nav-text",
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
              "data-placement": "bottom",
              href: "/",
              title: "Roadmap",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "nav-text",
                children: "Roadmap"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
              "data-placement": "bottom",
              href: "/",
              title: "Team",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "nav-text",
                children: "Team"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
              "data-placement": "bottom",
              href: "/",
              title: "FAQ",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "nav-text",
                children: "FAQ"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
            nav: true,
            isOpen: dropdownOpen,
            toggle: toggle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.DropdownToggle, {
              nav: true,
              caret: true,
              className: "nav-text",
              children: "Socials"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.DropdownMenu, {
              className: "dropdown",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                "data-placement": "bottom",
                href: "https://discord.gg/WbmxKptxWE",
                title: "Discord",
                target: "blank",
                children: [!navbarCollapse && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                  width: "35",
                  alt: "",
                  height: "28",
                  src: "/discord.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 21
                }, this), navbarCollapse && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                  width: "35",
                  alt: "",
                  height: "35",
                  src: "/discord-1.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
                "data-placement": "bottom",
                href: "https://twitter.com/PocketBones",
                title: "Twitter",
                target: "blank",
                children: [!navbarCollapse && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                  width: "35",
                  alt: "",
                  height: "35",
                  src: "/twitter.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 21
                }, this), navbarCollapse && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                  width: "35",
                  alt: "",
                  height: "30",
                  src: "/twitter-black.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(IndexNavbar, "I6ShL7VCTENq+2QyorIFtu+DE8E=");

_c = IndexNavbar;
/* harmony default export */ __webpack_exports__["default"] = (IndexNavbar);

var _c;

$RefreshReg$(_c, "IndexNavbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTc3NTQ1YjAyM2E4OWQ2ZjA4NTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtDQUdBOztBQUNBOztBQWFBLFNBQVNhLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSx3QkFDaUJiLHFEQUFBLENBQWUsb0JBQWYsQ0FEakI7QUFBQTtBQUFBLE1BQ2RlLFdBRGM7QUFBQSxNQUNEQyxjQURDOztBQUFBLHlCQUVlaEIscURBQUEsQ0FBZSxPQUFmLENBRmY7QUFBQTtBQUFBLE1BRWRpQixVQUZjO0FBQUEsTUFFRkMsYUFGRTs7QUFBQSx5QkFHdUJsQixxREFBQSxDQUFlLEtBQWYsQ0FIdkI7QUFBQTtBQUFBLE1BR2RtQixjQUhjO0FBQUEsTUFHRUMsaUJBSEY7O0FBS3JCLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQ0QsSUFBQUEsaUJBQWlCLENBQUMsQ0FBQ0QsY0FBRixDQUFqQjtBQUNBRyxJQUFBQSxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxNQUFuQyxDQUEwQyxVQUExQztBQUNELEdBSEQ7O0FBTHFCLHlCQVVpQnpCLHFEQUFBLENBQWUsS0FBZixDQVZqQjtBQUFBO0FBQUEsTUFVaEIwQixZQVZnQjtBQUFBLE1BVUZDLGVBVkU7O0FBWXZCLE1BQU1GLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTUUsZUFBZSxDQUFDLFVBQUFDLFNBQVM7QUFBQSxhQUFJLENBQUNBLFNBQUw7QUFBQSxLQUFWLENBQXJCO0FBQUEsR0FBZjs7QUFFRTVCLEVBQUFBLHNEQUFBLENBQWdCLFlBQU07QUFDcEIsUUFBTThCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixVQUNFUixRQUFRLENBQUNDLGVBQVQsQ0FBeUJRLFNBQXpCLEdBQXFDLEVBQXJDLElBQ0FULFFBQVEsQ0FBQ1UsSUFBVCxD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QUFBa0IscUJBQUcsRUFBQyxFQUF0QjtBQUF5Qix3QkFBTSxFQUFDLElBQWhDO0FBQXFDLHFCQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtSEQ7O0dBeEpRTjs7S0FBQUE7QUEwSlQsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleG5hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIHN0cmluZ3NcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7XHJcbiAgQ29sbGFwc2UsXHJcbiAgTmF2YmFyQnJhbmQsXHJcbiAgTmF2YmFyLFxyXG4gIE5hdkl0ZW0sXHJcbiAgTmF2TGluayxcclxuICBOYXYsXHJcbiAgQ29udGFpbmVyLFxyXG4gIERyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIERyb3Bkb3duTWVudVxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleE5hdmJhcigpIHtcclxuICBjb25zdCBbbmF2YmFyQ29sb3IsIHNldE5hdmJhckNvbG9yXSA9IFJlYWN0LnVzZVN0YXRlKFwibmF2YmFyLXRyYW5zcGFyZW50XCIpO1xyXG4gIGNvbnN0IFticmFuZENvbG9yLCBzZXRicmFuZENvbG9yXSA9IFJlYWN0LnVzZVN0YXRlKFwid2hpdGVcIik7XHJcbiAgY29uc3QgW25hdmJhckNvbGxhcHNlLCBzZXROYXZiYXJDb2xsYXBzZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU5hdmJhckNvbGxhcHNlID0gKCkgPT4ge1xyXG4gICAgc2V0TmF2YmFyQ29sbGFwc2UoIW5hdmJhckNvbGxhcHNlKTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LW9wZW5cIik7XHJcbiAgfTtcclxuXHJcbmNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5jb25zdCB0b2dnbGUgPSAoKSA9PiBzZXREcm9wZG93bk9wZW4ocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlTmF2YmFyQ29sb3IgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gOTl8fFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gOTlcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2V0TmF2YmFyQ29sb3IoXCJcIik7XHJcbiAgICAgICAgc2V0YnJhbmRDb2xvcihcImJsYWNrXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPDEwMDUgfHxcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA8IDEwMFxyXG4gICAgICApIHtcclxuICAgICAgICBzZXROYXZiYXJDb2xvcihcIm5hdmJhci10cmFuc3BhcmVudFwiKTtcclxuICAgICAgICBzZXRicmFuZENvbG9yKFwid2hpdGVcIik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlTmF2YmFyQ29sb3IpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVOYXZiYXJDb2xvcik7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2YmFyIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImZpeGVkLXRvcFwiLCBuYXZiYXJDb2xvcil9IGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItdHJhbnNsYXRlXCI+XHJcbiAgICAgICAgICA8TmF2YmFyQnJhbmRcclxuICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiSG9tZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJuYXYtYnJhbmRcIiwgYnJhbmRDb2xvcil9PlBvY2tldCBCb25lczwvaDY+XHJcbiAgICAgICAgICA8L05hdmJhckJyYW5kPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtuYXZiYXJDb2xsYXBzZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXJcIiwge1xyXG4gICAgICAgICAgICAgIHRvZ2dsZWQ6IG5hdmJhckNvbGxhcHNlLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTmF2YmFyQ29sbGFwc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWJhciBiYXIxXCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItYmFyIGJhcjJcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1iYXIgYmFyM1wiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q29sbGFwc2VcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIlxyXG4gICAgICAgICAgbmF2YmFyXHJcbiAgICAgICAgICBpc09wZW49e25hdmJhckNvbGxhcHNlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxOYXYgbmF2YmFyPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJIb21lXCJcclxuICAgICAgICAgICAgICA+IDxoMyBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPkhvbWU8L2gzPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJNaW50XCJcclxuICAgICAgICAgICAgICA+IDxoMyBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPk1pbnQ8L2gzPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBYm91dCBVc1wiXHJcbiAgICAgICAgICAgICAgPiA8aDMgY2xhc3NOYW1lPVwibmF2LXRleHRcIj5BYm91dDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlJvYWRtYXBcIlxyXG4gICAgICAgICAgICAgID4gPGgzIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+Um9hZG1hcDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlRlYW1cIlxyXG4gICAgICAgICAgICAgID4gPGgzIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+VGVhbTwvaDM+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkZBUVwiXHJcbiAgICAgICAgICAgICAgPiA8aDMgY2xhc3NOYW1lPVwibmF2LXRleHRcIj5GQVE8L2gzPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8RHJvcGRvd24gbmF2IGlzT3Blbj17ZHJvcGRvd25PcGVufSB0b2dnbGU9e3RvZ2dsZX0gPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBuYXYgY2FyZXQgY2xhc3NOYW1lPVwibmF2LXRleHRcIj5cclxuICAgICAgICAgICAgICAgIFNvY2lhbHNcclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIFxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuZ2cvV2JteEtwdHhXRVwiXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGlzY29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgeyFuYXZiYXJDb2xsYXBzZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPVwiMzVcIiBhbHQ9XCJcIiBoZWlnaHQ9XCIyOFwiIHNyYz1cIi9kaXNjb3JkLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgKX0gXHJcbiAgICAgICAgICAgICAgICAgIHtuYXZiYXJDb2xsYXBzZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHdpZHRoPVwiMzVcIiBhbHQ9XCJcIiBoZWlnaHQ9XCIzNVwiIHNyYz1cIi9kaXNjb3JkLTEucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICApfSBcclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIFxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1BvY2tldEJvbmVzXCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUd2l0dGVyXCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7IW5hdmJhckNvbGxhcHNlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9XCIzNVwiIGFsdD1cIlwiIGhlaWdodD1cIjM1XCIgc3JjPVwiL3R3aXR0ZXIucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7bmF2YmFyQ29sbGFwc2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjM1XCIgYWx0PVwiXCIgaGVpZ2h0PVwiMzBcIiBzcmM9XCIvdHdpdHRlci1ibGFjay5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTmF2YmFyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4TmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc25hbWVzIiwiSW1hZ2UiLCJDb2xsYXBzZSIsIk5hdmJhckJyYW5kIiwiTmF2YmFyIiwiTmF2SXRlbSIsIk5hdkxpbmsiLCJOYXYiLCJDb250YWluZXIiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiRHJvcGRvd25NZW51IiwiSW5kZXhOYXZiYXIiLCJ1c2VTdGF0ZSIsIm5hdmJhckNvbG9yIiwic2V0TmF2YmFyQ29sb3IiLCJicmFuZENvbG9yIiwic2V0YnJhbmRDb2xvciIsIm5hdmJhckNvbGxhcHNlIiwic2V0TmF2YmFyQ29sbGFwc2UiLCJ0b2dnbGVOYXZiYXJDb2xsYXBzZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwicHJldlN0YXRlIiwidXNlRWZmZWN0IiwidXBkYXRlTmF2YmFyQ29sb3IiLCJzY3JvbGxUb3AiLCJib2R5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFudXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlZCJdLCJzb3VyY2VSb290IjoiIn0=