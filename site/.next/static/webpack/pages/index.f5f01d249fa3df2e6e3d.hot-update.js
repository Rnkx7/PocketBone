"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.js */ "./config.js");
/* harmony import */ var _components_indexnavbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/indexnavbar */ "./components/indexnavbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_fakewhitelist_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/fakewhitelist.js */ "./components/fakewhitelist.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Robert\\Documents\\Code\\crypto\\nft\\PocketBone\\site\\pages\\index.js",
    _s = $RefreshSig$();







 // reactstrap components

 // core components

function MintPage() {
  _s();

  // FOR WALLET
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      signedIn = _useState[0],
      setSignedIn = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      walletAddress = _useState2[0],
      setWalletAddress = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      inWhitelist = _useState3[0],
      setInWhiteList = _useState3[1]; // FOR MINTING


  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      boneContract = _useState4[0],
      setBoneContract = _useState4[1]; // INFO FROM SMART Contract


  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      tokensMinted = _useState5[0],
      setTokensMinted = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      totalSupply = _useState6[0],
      setTotalSupply = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      saleStarted = _useState7[0],
      setSaleStarted = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      nothingForSale = _useState8[0],
      setNothingForSale = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      presale = _useState9[0],
      setPresale = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      bonePrice = _useState10[0],
      setBonePrice = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      show = _useState11[0],
      setShow = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      fakePresale = _useState12[0],
      setFakePresale = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      inFakeWhitelist = _useState13[0],
      setinFakeWhitelist = _useState13[1];

  function signIn() {
    return _signIn.apply(this, arguments);
  }

  function _signIn() {
    _signIn = (0,C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (typeof window.web3 !== "undefined") {
                window.web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())(window.ethereum);
              } else {
                alert("No Ethereum interface injected into browser. Read-only access");
              }

              window.ethereum.enable().then(function (accounts) {
                window.web3.eth.net.getNetworkType() // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
                .then(function (network) {
                  console.log(network);

                  if (network !== "main") {
                    alert("You are on " + network + " network. Change network to mainnet or you won't be able to do anything here");
                  }
                });
                var wallet = accounts[0];
                setWalletAddress(wallet);
                setSignedIn(true);
                callContractData(wallet);
              })["catch"](function (error) {
                console.error(error);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _signIn.apply(this, arguments);
  }

  function signOut() {
    return _signOut.apply(this, arguments);
  }

  function _signOut() {
    _signOut = (0,C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setSignedIn(false);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _signOut.apply(this, arguments);
  }

  function callContractData(_x) {
    return _callContractData.apply(this, arguments);
  }

  function _callContractData() {
    _callContractData = (0,C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(wallet) {
      var boneContract, salebool, presalebool, whitelistBool, totalSupply, bonePrice, tokensMinted;
      return C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // let balance = await web3.eth.getBalance(wallet);
              // setWalletBalance(balance)
              boneContract = new window.web3.eth.Contract(_config_js__WEBPACK_IMPORTED_MODULE_5__.ABI, _config_js__WEBPACK_IMPORTED_MODULE_5__.ADDRESS);
              setBoneContract(boneContract);
              _context3.next = 4;
              return boneContract.methods.isSaleActive().call();

            case 4:
              salebool = _context3.sent;
              setSaleStarted(salebool);
              _context3.next = 8;
              return boneContract.methods.isPresaleActive().call();

            case 8:
              presalebool = _context3.sent;
              setPresale(presalebool);
              _context3.next = 12;
              return boneContract.methods.addressInWhitelist(wallet).call();

            case 12:
              whitelistBool = _context3.sent;
              setInWhiteList(whitelistBool);
              setNothingForSale(!presalebool && !salebool);
              _context3.next = 17;
              return boneContract.methods.MAX_TOKENS().call();

            case 17:
              totalSupply = _context3.sent;
              setTotalSupply(totalSupply);
              _context3.next = 21;
              return boneContract.methods.price().call();

            case 21:
              bonePrice = _context3.sent;
              setBonePrice(bonePrice);
              _context3.next = 25;
              return boneContract.methods.totalSupply().call();

            case 25:
              tokensMinted = _context3.sent;
              setTokensMinted(tokensMinted);

              if (_components_fakewhitelist_js__WEBPACK_IMPORTED_MODULE_9__.fakeWhitelist.includes(wallet)) {
                setInWhiteList(true);
              }

            case 28:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _callContractData.apply(this, arguments);
  }

  function mintBone(_x2) {
    return _mintBone.apply(this, arguments);
  }

  function _mintBone() {
    _mintBone = (0,C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(how_many_bones) {
      var price, gasAmount, _gasAmount;

      return C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!boneContract) {
                _context4.next = 19;
                break;
              }

              price = Number(bonePrice) * how_many_bones;
              console.log({
                from: walletAddress,
                value: price
              });

              if (!(presale && !fakePresale)) {
                _context4.next = 11;
                break;
              }

              _context4.next = 6;
              return boneContract.methods.presaleMint(how_many_bones).estimateGas({
                from: walletAddress,
                value: price
              })["catch"](function (error) {
                alert(error);
              });

            case 6:
              gasAmount = _context4.sent;
              console.log("estimated gas", gasAmount);
              boneContract.methods.presaleMint(how_many_bones).send({
                from: walletAddress,
                value: price,
                gas: String(gasAmount)
              }).on("transactionHash", function (hash) {
                console.log("transactionHash", hash);
              })["catch"](function (error) {
                alert(error);
              });
              _context4.next = 16;
              break;

            case 11:
              _context4.next = 13;
              return boneContract.methods.mintBone(how_many_bones).estimateGas({
                from: walletAddress,
                value: price
              })["catch"](function (error) {
                alert(error);
              });

            case 13:
              _gasAmount = _context4.sent;
              console.log("estimated gas", _gasAmount);
              boneContract.methods.mintBone(how_many_bones).send({
                from: walletAddress,
                value: price,
                gas: String(_gasAmount)
              }).on("transactionHash", function (hash) {
                console.log("transactionHash", hash);
              })["catch"](function (error) {
                alert(error);
              });

            case 16:
              setShow(!show);
              _context4.next = 20;
              break;

            case 19:
              console.log("Wallet not connected");

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _mintBone.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: "Pocket Bones | Mint"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:title",
        content: "Mint A Bone"
      }, "ogtitle", false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:description",
        content: "Mint your Pocket Bone here"
      }, "ogdesc", false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, "ogtype", false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://bones.co/mint-page"
      }, "ogurl", false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:image",
        content: "https://bones.co/.gif"
      }, "ogimage", false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "https://bones.co/mint-page"
      }, "ogsitename", false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, "twcard", false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "twitter:domain",
        content: "bones.co"
      }, "twdomain", false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "twitter:url",
        content: "https://bones.co/mint-page"
      }, "twurl", false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Mint A Bone"
      }, "twtitle", false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:description",
        content: "Mint your Pocket Bone here"
      }, "twdesc", false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:image",
        content: "https://bones.co/Logo.png"
      }, "twimage", false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "page-header section-dark body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_indexnavbar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Container, {
        className: "text-center mt-auto mb-auto",
        children: [(!show && !presale || !show && presale && inWhitelist || fakePresale && !show) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {
              className: "ml-auto mr-auto mt-5 pt-5",
              md: "12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                className: "header",
                children: "Mint your Pocket Bones"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {
              className: "ml-auto mr-auto mb-4",
              md: "12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "text",
                children: "0.07 ETH per Pocket Bones"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {
              className: "ml-auto mr-auto mb-5",
              md: "5",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "outline mb-3",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                  className: "white text bold",
                  children: "Total Minted:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                  className: "text  mx-0 px-0 my-0 py-0 bold",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                    children: tokensMinted
                  }, void 0, false), " / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                    children: "10,000"
                  }, void 0, false)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 19
              }, this), !signedIn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                onClick: signIn,
                className: "btn metamask-btn",
                children: "Connect Wallet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 21
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                onClick: signOut,
                className: "btn mx-2 metamask-btn",
                children: "Sign out"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 15
          }, this)]
        }, void 0, true), !presale && !show && !fakePresale && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {
              className: "ml-auto ",
              md: "6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Card, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.CardBody, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                      className: "text white bold",
                      children: "1 PACK"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.07 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 243,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      onClick: function onClick() {
                        return mintBone(1);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 1 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 252,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {
              className: " mr-auto",
              md: "6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Card, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.CardBody, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                      className: "text white bold",
                      children: "3 PACK"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 264,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.21 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      onClick: function onClick() {
                        return mintBone(3);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 3 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {
              className: "ml-auto ",
              md: "6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Card, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.CardBody, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                      className: "text white bold",
                      children: "6 PACK"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 288,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.42 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 289,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      onClick: function onClick() {
                        return mintBone(6);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 6 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 298,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {
              className: " mr-auto",
              md: "6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Card, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.CardBody, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                      className: "text white bold",
                      children: "10 PACK"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 310,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.7 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 311,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      onClick: function onClick() {
                        return mintBone(10);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 10 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 313,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 320,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 309,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 308,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 15
          }, this)]
        }, void 0, true), presale && !show && inWhitelist && !fakePresale &&
        /*#__PURE__*/
        //whitelist presale in whitelist
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {
            className: "ml-auto mr-auto",
            md: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Card, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.CardBody, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "flex auth my-8 font-bold  justify-center items-center vw2",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                    className: "text white bold",
                    children: "1 PACK"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.07 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 339,
                    columnNumber: 23
                  }, this), !nothingForSale ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                    onClick: function onClick() {
                      return mintBone(1);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 1 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The presale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 348,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 13
        }, this), presale && !show && !inWhitelist && !fakePresale &&
        /*#__PURE__*/
        //whitelist presale not in whitelist
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "header",
            children: "You're not in the whitelist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 361,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Sorry, You cannot mint at this time."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            activeClass: "active",
            href: "https://www.pocketbones.com/",
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
              className: "btn button mx-2 mb-1",
              children: "Back to the home page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 15
          }, this)]
        }, void 0, true), !show && fakePresale &&
        /*#__PURE__*/
        //fake presale
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {
              className: "ml-auto mr-auto",
              md: "6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Card, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.CardBody, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                      className: "text white bold",
                      children: "1 PACK"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 382,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.07 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 383,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                      children: [inFakeWhitelist, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                        onClick: function onClick() {
                          return mintBone(1);
                        },
                        className: "btn mx-2 mb-1 button",
                        children: "Mint 1 pack"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 387,
                        columnNumber: 29
                      }, this)]
                    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The presale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 395,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 381,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 380,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Col, {
              className: "ml-auto mr-auto",
              md: "6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Card, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.CardBody, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                      className: "text white bold",
                      children: "3 PACK"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 407,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.21 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 408,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      onClick: function onClick() {
                        return mintBone(3);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 3 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 410,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The presale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 417,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 406,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 405,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 403,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 15
          }, this)
        }, void 0, false), show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "header",
            children: "Thank you for minting!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Your Pocket Bone will arrive as soon as the transaction is processed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            activeClass: "active",
            href: "https://www.pocketbones.com/",
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
              className: "btn button mx-2 mb-1",
              children: "Back to the home page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 440,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 15
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(MintPage, "OQXtu2453KzZMCOGGScZgGLrUHE=");

_c = MintPage;
/* harmony default export */ __webpack_exports__["default"] = (MintPage);

var _c;

$RefreshReg$(_c, "MintPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjVmMDFkMjQ5ZmEzZGYyZTZlM2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQSxTQUFTZ0IsUUFBVCxHQUFvQjtBQUFBOztBQUNsQjtBQURrQixrQkFFY2YsK0NBQVEsQ0FBQyxLQUFELENBRnRCO0FBQUEsTUFFWGdCLFFBRlc7QUFBQSxNQUVEQyxXQUZDOztBQUFBLG1CQUd3QmpCLCtDQUFRLENBQUMsSUFBRCxDQUhoQztBQUFBLE1BR1hrQixhQUhXO0FBQUEsTUFHSUMsZ0JBSEo7O0FBQUEsbUJBSW9CbkIsK0NBQVEsQ0FBQyxLQUFELENBSjVCO0FBQUEsTUFJWG9CLFdBSlc7QUFBQSxNQUlFQyxjQUpGLGtCQU1sQjs7O0FBTmtCLG1CQU9zQnJCLCtDQUFRLENBQUMsSUFBRCxDQVA5QjtBQUFBLE1BT1hzQixZQVBXO0FBQUEsTUFPR0MsZUFQSCxrQkFTbEI7OztBQVRrQixtQkFVc0J2QiwrQ0FBUSxDQUFDLENBQUQsQ0FWOUI7QUFBQSxNQVVYd0IsWUFWVztBQUFBLE1BVUdDLGVBVkg7O0FBQUEsbUJBV29CekIsK0NBQVEsQ0FBQyxDQUFELENBWDVCO0FBQUEsTUFXWDBCLFdBWFc7QUFBQSxNQVdFQyxjQVhGOztBQUFBLG1CQVlvQjNCLCtDQUFRLENBQUMsS0FBRCxDQVo1QjtBQUFBLE1BWVg0QixXQVpXO0FBQUEsTUFZRUMsY0FaRjs7QUFBQSxtQkFhMEI3QiwrQ0FBUSxDQUFDLEtBQUQsQ0FibEM7QUFBQSxNQWFYOEIsY0FiVztBQUFBLE1BYUtDLGlCQWJMOztBQUFBLG1CQWNZL0IsK0NBQVEsQ0FBQyxLQUFELENBZHBCO0FBQUEsTUFjWGdDLE9BZFc7QUFBQSxNQWNGQyxVQWRFOztBQUFBLG9CQWVnQmpDLCtDQUFRLENBQUMsQ0FBRCxDQWZ4QjtBQUFBLE1B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QU8sRUFBRTtBQUFBLCtCQUFNNEMsUUFBUSxDQUFDLENBQUQsQ0FBZDtBQUFBLHVCQURYO0FBRUUsK0JBQVMsRUFBQyxzQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFEVSxnQkFRViw4REFBQywrQ0FBRDtBQUFRLCtCQUFTLEVBQUMsdUJBQWxCO0FBQTBDLDhCQUFRLE1BQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYseUJBbExKLEVBc09HcEMsSUFBSSxpQkFDSDtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFNRSw4REFBQyxrREFBRDtBQUNFLHVCQUFXLEVBQUMsUUFEZDtBQUVFLGdCQUFJLEVBQUMsOEJBRlA7QUFHRSxvQkFBUSxFQUFFLElBSFo7QUFBQSxtQ0FLRSw4REFBQywrQ0FBRDtBQUFRLHVCQUFTLEVBQUMsc0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBLHdCQXZPSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Q0Y7QUFBQSxrQkFERjtBQTZTRDs7R0FyYlFyQjs7S0FBQUE7QUF1YlQsK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUREUkVTUywgQUJJIH0gZnJvbSBcIi4uL2NvbmZpZy5qc1wiO1xyXG5pbXBvcnQgSW5kZXhOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXhuYXZiYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGZha2VXaGl0ZWxpc3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mYWtld2hpdGVsaXN0LmpzXCI7XHJcblxyXG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCwgQ2FyZEJvZHksIEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuZnVuY3Rpb24gTWludFBhZ2UoKSB7XHJcbiAgLy8gRk9SIFdBTExFVFxyXG4gIGNvbnN0IFtzaWduZWRJbiwgc2V0U2lnbmVkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbldoaXRlbGlzdCwgc2V0SW5XaGl0ZUxpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBGT1IgTUlOVElOR1xyXG4gIGNvbnN0IFtib25lQ29udHJhY3QsIHNldEJvbmVDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gSU5GTyBGUk9NIFNNQVJUIENvbnRyYWN0XHJcbiAgY29uc3QgW3Rva2Vuc01pbnRlZCwgc2V0VG9rZW5zTWludGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbFN1cHBseSwgc2V0VG90YWxTdXBwbHldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NhbGVTdGFydGVkLCBzZXRTYWxlU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25vdGhpbmdGb3JTYWxlLCBzZXROb3RoaW5nRm9yU2FsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ByZXNhbGUsIHNldFByZXNhbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtib25lUHJpY2UsIHNldEJvbmVQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Zha2VQcmVzYWxlLCBzZXRGYWtlUHJlc2FsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2luRmFrZVdoaXRlbGlzdCwgc2V0aW5GYWtlV2hpdGVsaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIk5vIEV0aGVyZXVtIGludGVyZmFjZSBpbmplY3RlZCBpbnRvIGJyb3dzZXIuIFJlYWQtb25seSBhY2Nlc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmV0aGVyZXVtXHJcbiAgICAgIC5lbmFibGUoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoYWNjb3VudHMpIHtcclxuICAgICAgICB3aW5kb3cud2ViMy5ldGgubmV0XHJcbiAgICAgICAgICAuZ2V0TmV0d29ya1R5cGUoKVxyXG4gICAgICAgICAgLy8gY2hlY2tzIGlmIGNvbm5lY3RlZCBuZXR3b3JrIGlzIG1haW5uZXQgKGNoYW5nZSB0aGlzIHRvIHJpbmtlYnkgaWYgeW91IHdhbm5hIHRlc3Qgb24gdGVzdG5ldClcclxuICAgICAgICAgIC50aGVuKChuZXR3b3JrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldHdvcmspO1xyXG4gICAgICAgICAgICBpZiAobmV0d29yayAhPT0gXCJtYWluXCIpIHtcclxuICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgIFwiWW91IGFyZSBvbiBcIiArXHJcbiAgICAgICAgICAgICAgICAgIG5ldHdvcmsgK1xyXG4gICAgICAgICAgICAgICAgICBcIiBuZXR3b3JrLiBDaGFuZ2UgbmV0d29yayB0byBtYWlubmV0IG9yIHlvdSB3b24ndCBiZSBhYmxlIHRvIGRvIGFueXRoaW5nIGhlcmVcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB3YWxsZXQgPSBhY2NvdW50c1swXTtcclxuICAgICAgICBzZXRXYWxsZXRBZGRyZXNzKHdhbGxldCk7XHJcbiAgICAgICAgc2V0U2lnbmVkSW4odHJ1ZSk7XHJcbiAgICAgICAgY2FsbENvbnRyYWN0RGF0YSh3YWxsZXQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICAgIHNldFNpZ25lZEluKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGNhbGxDb250cmFjdERhdGEod2FsbGV0KSB7XHJcbiAgICAvLyBsZXQgYmFsYW5jZSA9IGF3YWl0IHdlYjMuZXRoLmdldEJhbGFuY2Uod2FsbGV0KTtcclxuICAgIC8vIHNldFdhbGxldEJhbGFuY2UoYmFsYW5jZSlcclxuICAgIGNvbnN0IGJvbmVDb250cmFjdCA9IG5ldyB3aW5kb3cud2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHNldEJvbmVDb250cmFjdChib25lQ29udHJhY3QpO1xyXG5cclxuICAgIGNvbnN0IHNhbGVib29sID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMuaXNTYWxlQWN0aXZlKCkuY2FsbCgpO1xyXG4gICAgc2V0U2FsZVN0YXJ0ZWQoc2FsZWJvb2wpO1xyXG5cclxuICAgIGNvbnN0IHByZXNhbGVib29sID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMuaXNQcmVzYWxlQWN0aXZlKCkuY2FsbCgpO1xyXG4gICAgc2V0UHJlc2FsZShwcmVzYWxlYm9vbCk7XHJcblxyXG4gICAgY29uc3Qgd2hpdGVsaXN0Qm9vbCA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgIC5hZGRyZXNzSW5XaGl0ZWxpc3Qod2FsbGV0KVxyXG4gICAgICAuY2FsbCgpO1xyXG4gICAgc2V0SW5XaGl0ZUxpc3Qod2hpdGVsaXN0Qm9vbCk7XHJcblxyXG4gICAgc2V0Tm90aGluZ0ZvclNhbGUoIXByZXNhbGVib29sICYmICFzYWxlYm9vbCk7XHJcblxyXG4gICAgY29uc3QgdG90YWxTdXBwbHkgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kcy5NQVhfVE9LRU5TKCkuY2FsbCgpO1xyXG4gICAgc2V0VG90YWxTdXBwbHkodG90YWxTdXBwbHkpO1xyXG5cclxuICAgIGNvbnN0IGJvbmVQcmljZSA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzLnByaWNlKCkuY2FsbCgpO1xyXG4gICAgc2V0Qm9uZVByaWNlKGJvbmVQcmljZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zTWludGVkID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMudG90YWxTdXBwbHkoKS5jYWxsKCk7XHJcbiAgICBzZXRUb2tlbnNNaW50ZWQodG9rZW5zTWludGVkKTtcclxuXHJcbiAgICBpZiAoZmFrZVdoaXRlbGlzdC5pbmNsdWRlcyh3YWxsZXQpKSB7XHJcbiAgICAgIHNldEluV2hpdGVMaXN0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbWludEJvbmUoaG93X21hbnlfYm9uZXMpIHtcclxuICAgIGlmIChib25lQ29udHJhY3QpIHtcclxuICAgICAgY29uc3QgcHJpY2UgPSBOdW1iZXIoYm9uZVByaWNlKSAqIGhvd19tYW55X2JvbmVzO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coeyBmcm9tOiB3YWxsZXRBZGRyZXNzLCB2YWx1ZTogcHJpY2UgfSk7XHJcbiAgICAgIGlmIChwcmVzYWxlICYmICFmYWtlUHJlc2FsZSkge1xyXG4gICAgICAgIGNvbnN0IGdhc0Ftb3VudCA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAucHJlc2FsZU1pbnQoaG93X21hbnlfYm9uZXMpXHJcbiAgICAgICAgICAuZXN0aW1hdGVHYXMoeyBmcm9tOiB3YWxsZXRBZGRyZXNzLCB2YWx1ZTogcHJpY2UgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlc3RpbWF0ZWQgZ2FzXCIsIGdhc0Ftb3VudCk7XHJcbiAgICAgICAgYm9uZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC5wcmVzYWxlTWludChob3dfbWFueV9ib25lcylcclxuICAgICAgICAgIC5zZW5kKHsgZnJvbTogd2FsbGV0QWRkcmVzcywgdmFsdWU6IHByaWNlLCBnYXM6IFN0cmluZyhnYXNBbW91bnQpIH0pXHJcbiAgICAgICAgICAub24oXCJ0cmFuc2FjdGlvbkhhc2hcIiwgZnVuY3Rpb24gKGhhc2gpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2FjdGlvbkhhc2hcIiwgaGFzaCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBnYXNBbW91bnQgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLm1pbnRCb25lKGhvd19tYW55X2JvbmVzKVxyXG4gICAgICAgICAgLmVzdGltYXRlR2FzKHsgZnJvbTogd2FsbGV0QWRkcmVzcywgdmFsdWU6IHByaWNlIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXN0aW1hdGVkIGdhc1wiLCBnYXNBbW91bnQpO1xyXG4gICAgICAgIGJvbmVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAubWludEJvbmUoaG93X21hbnlfYm9uZXMpXHJcbiAgICAgICAgICAuc2VuZCh7IGZyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZSwgZ2FzOiBTdHJpbmcoZ2FzQW1vdW50KSB9KVxyXG4gICAgICAgICAgLm9uKFwidHJhbnNhY3Rpb25IYXNoXCIsIGZ1bmN0aW9uIChoYXNoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNhY3Rpb25IYXNoXCIsIGhhc2gpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0U2hvdyghc2hvdyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIldhbGxldCBub3QgY29ubmVjdGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qb2NrZXQgQm9uZXMgfCBNaW50PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNaW50IEEgQm9uZVwiIGtleT1cIm9ndGl0bGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJNaW50IHlvdXIgUG9ja2V0IEJvbmUgaGVyZVwiXHJcbiAgICAgICAgICBrZXk9XCJvZ2Rlc2NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiBrZXk9XCJvZ3R5cGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXHJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9ib25lcy5jby9taW50LXBhZ2VcIlxyXG4gICAgICAgICAga2V5PVwib2d1cmxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYm9uZXMuY28vLmdpZlwiXHJcbiAgICAgICAgICBrZXk9XCJvZ2ltYWdlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9ib25lcy5jby9taW50LXBhZ2VcIlxyXG4gICAgICAgICAga2V5PVwib2dzaXRlbmFtZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiBrZXk9XCJ0d2NhcmRcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpkb21haW5cIiBjb250ZW50PVwiYm9uZXMuY29cIiBrZXk9XCJ0d2RvbWFpblwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYm9uZXMuY28vbWludC1wYWdlXCJcclxuICAgICAgICAgIGtleT1cInR3dXJsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIk1pbnQgQSBCb25lXCIga2V5PVwidHd0aXRsZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJNaW50IHlvdXIgUG9ja2V0IEJvbmUgaGVyZVwiXHJcbiAgICAgICAgICBrZXk9XCJ0d2Rlc2NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2JvbmVzLmNvL0xvZ28ucG5nXCJcclxuICAgICAgICAgIGtleT1cInR3aW1hZ2VcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlciBzZWN0aW9uLWRhcmsgYm9keVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICA8SW5kZXhOYXZiYXIgLz5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG8gbWItYXV0b1wiPlxyXG4gICAgICAgICAgeygoIXNob3cgJiYgIXByZXNhbGUpIHx8XHJcbiAgICAgICAgICAgICghc2hvdyAmJiBwcmVzYWxlICYmIGluV2hpdGVsaXN0KSB8fFxyXG4gICAgICAgICAgICAoZmFrZVByZXNhbGUgJiYgIXNob3cpKSAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG10LTUgcHQtNVwiIG1kPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPk1pbnQgeW91ciBQb2NrZXQgQm9uZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG1iLTRcIiBtZD1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjA3IEVUSCBwZXIgUG9ja2V0IEJvbmVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG1iLTVcIiBtZD1cIjVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRsaW5lIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwid2hpdGUgdGV4dCBib2xkXCI+VG90YWwgTWludGVkOjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQgIG14LTAgcHgtMCBteS0wIHB5LTAgYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPD57dG9rZW5zTWludGVkfTwvPiAvIDw+MTAsMDAwPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7IXNpZ25lZEluID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2lnbklufSBjbGFzc05hbWU9XCJidG4gbWV0YW1hc2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2lnbk91dH0gY2xhc3NOYW1lPVwiYnRuIG14LTIgbWV0YW1hc2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHshcHJlc2FsZSAmJiAhc2hvdyAmJiAhZmFrZVByZXNhbGUgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4wNyBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW50IDEgcGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgU2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCIgbXItYXV0b1wiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+MyBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMjEgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2FsZVN0YXJ0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAzIHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC1hdXRvIFwiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+NiBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuNDIgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2FsZVN0YXJ0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoNil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCA2IHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjEwIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC43IEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDEwKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW50IDEwIHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3ByZXNhbGUgJiYgIXNob3cgJiYgaW5XaGl0ZWxpc3QgJiYgIWZha2VQcmVzYWxlICYmIChcclxuICAgICAgICAgICAgLy93aGl0ZWxpc3QgcHJlc2FsZSBpbiB3aGl0ZWxpc3RcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0b1wiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjEgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4wNyBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IW5vdGhpbmdGb3JTYWxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAxIHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBwcmVzYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtwcmVzYWxlICYmICFzaG93ICYmICFpbldoaXRlbGlzdCAmJiAhZmFrZVByZXNhbGUgJiYgKFxyXG4gICAgICAgICAgICAvL3doaXRlbGlzdCBwcmVzYWxlIG5vdCBpbiB3aGl0ZWxpc3RcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+WW91JmFwb3M7cmUgbm90IGluIHRoZSB3aGl0ZWxpc3Q8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5Tb3JyeSwgWW91IGNhbm5vdCBtaW50IGF0IHRoaXMgdGltZS48L3A+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5wb2NrZXRib25lcy5jb20vXCJcclxuICAgICAgICAgICAgICAgIHBhc3NIcmVmPXt0cnVlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgQmFjayB0byB0aGUgaG9tZSBwYWdlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHshc2hvdyAmJiBmYWtlUHJlc2FsZSAmJiAoXHJcbiAgICAgICAgICAgIC8vZmFrZSBwcmVzYWxlXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4wNyBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpbkZha2VXaGl0ZWxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMSBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHByZXNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4zIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4yMSBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW50IDMgcGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcHJlc2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7c2hvdyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPlRoYW5rIHlvdSBmb3IgbWludGluZyE8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIFlvdXIgUG9ja2V0IEJvbmUgd2lsbCBhcnJpdmUgYXMgc29vbiBhcyB0aGUgdHJhbnNhY3Rpb24gaXNcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnBvY2tldGJvbmVzLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgcGFzc0hyZWY9e3RydWV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICBCYWNrIHRvIHRoZSBob21lIHBhZ2VcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbnRQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjMiLCJBRERSRVNTIiwiQUJJIiwiSW5kZXhOYXZiYXIiLCJIZWFkIiwiTGluayIsImZha2VXaGl0ZWxpc3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDYXJkIiwiQ2FyZEJvZHkiLCJCdXR0b24iLCJNaW50UGFnZSIsInNpZ25lZEluIiwic2V0U2lnbmVkSW4iLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsImluV2hpdGVsaXN0Iiwic2V0SW5XaGl0ZUxpc3QiLCJib25lQ29udHJhY3QiLCJzZXRCb25lQ29udHJhY3QiLCJ0b2tlbnNNaW50ZWQiLCJzZXRUb2tlbnNNaW50ZWQiLCJ0b3RhbFN1cHBseSIsInNldFRvdGFsU3VwcGx5Iiwic2FsZVN0YXJ0ZWQiLCJzZXRTYWxlU3RhcnRlZCIsIm5vdGhpbmdGb3JTYWxlIiwic2V0Tm90aGluZ0ZvclNhbGUiLCJwcmVzYWxlIiwic2V0UHJlc2FsZSIsImJvbmVQcmljZSIsInNldEJvbmVQcmljZSIsInNob3ciLCJzZXRTaG93IiwiZmFrZVByZXNhbGUiLCJzZXRGYWtlUHJlc2FsZSIsImluRmFrZVdoaXRlbGlzdCIsInNldGluRmFrZVdoaXRlbGlzdCIsInNpZ25JbiIsIndpbmRvdyIsIndlYjMiLCJldGhlcmV1bSIsImFsZXJ0IiwiZW5hYmxlIiwidGhlbiIsImFjY291bnRzIiwiZXRoIiwibmV0IiwiZ2V0TmV0d29ya1R5cGUiLCJuZXR3b3JrIiwiY29uc29sZSIsImxvZyIsIndhbGxldCIsImNhbGxDb250cmFjdERhdGEiLCJlcnJvciIsInNpZ25PdXQiLCJDb250cmFjdCIsIm1ldGhvZHMiLCJpc1NhbGVBY3RpdmUiLCJjYWxsIiwic2FsZWJvb2wiLCJpc1ByZXNhbGVBY3RpdmUiLCJwcmVzYWxlYm9vbCIsImFkZHJlc3NJbldoaXRlbGlzdCIsIndoaXRlbGlzdEJvb2wiLCJNQVhfVE9LRU5TIiwicHJpY2UiLCJpbmNsdWRlcyIsIm1pbnRCb25lIiwiaG93X21hbnlfYm9uZXMiLCJOdW1iZXIiLCJmcm9tIiwidmFsdWUiLCJwcmVzYWxlTWludCIsImVzdGltYXRlR2FzIiwiZ2FzQW1vdW50Iiwic2VuZCIsImdhcyIsIlN0cmluZyIsIm9uIiwiaGFzaCJdLCJzb3VyY2VSb290IjoiIn0=