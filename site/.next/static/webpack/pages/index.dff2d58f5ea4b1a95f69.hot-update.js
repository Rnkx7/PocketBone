"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
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










function saveWallet(_x, _x2, _x3, _x4) {
  return _saveWallet.apply(this, arguments);
} // core components


function _saveWallet() {
  _saveWallet = (0,C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(wallet, quantity, exists, id) {
    var response;
    return C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fetch("api/wallets", {
              method: "POST",
              body: JSON.stringify({
                id: true,
                address: wallet,
                quantity: quantity,
                exists: exists
              })
            });

          case 2:
            response = _context6.sent;

            if (response.ok) {
              _context6.next = 5;
              break;
            }

            throw new Error(response.statusText);

          case 5:
            _context6.next = 7;
            return response.json();

          case 7:
            return _context6.abrupt("return", _context6.sent);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _saveWallet.apply(this, arguments);
}

function MintPage(_ref) {
  _s();

  var initialWallets = _ref.initialWallets;

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

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      fakePresale = _useState12[0],
      setFakePresale = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      inFakeWhitelist = _useState13[0],
      setinFakeWhitelist = _useState13[1];

  var _useState14 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      mintCount = _useState14[0],
      setMintCount = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      exists = _useState15[0],
      setExists = _useState15[1];

  var _useState16 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      id = _useState16[0],
      setId = _useState16[1];

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

  function callContractData(_x5) {
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
              console.log(initialWallets);
              _components_fakewhitelist_js__WEBPACK_IMPORTED_MODULE_9__.fakeWhitelist.forEach(function (element) {
                if (element.toUpperCase() == wallet.toUpperCase()) {
                  setinFakeWhitelist(true);
                  initialWallets.forEach(function (item) {
                    if (item.address.toUpperCase() == wallet.toUpperCase()) {
                      setMintCount(item.mintcount);
                      setId(item.id);
                      setExists(true);
                      console.log(item.mintcount);
                    }
                  });
                }
              });

            case 29:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _callContractData.apply(this, arguments);
  }

  function mintBone(_x6) {
    return _mintBone.apply(this, arguments);
  }

  function _mintBone() {
    _mintBone = (0,C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(how_many_bones) {
      var price, gasAmount, _gasAmount;

      return C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!boneContract) {
                _context5.next = 19;
                break;
              }

              price = Number(bonePrice) * how_many_bones;
              console.log({
                from: walletAddress,
                value: price
              });

              if (!(presale && !fakePresale)) {
                _context5.next = 11;
                break;
              }

              _context5.next = 6;
              return boneContract.methods.presaleMint(how_many_bones).estimateGas({
                from: walletAddress,
                value: price
              })["catch"](function (error) {
                alert(error);
              });

            case 6:
              gasAmount = _context5.sent;
              console.log("estimated gas", gasAmount);
              boneContract.methods.presaleMint(how_many_bones).send({
                from: walletAddress,
                value: price,
                gas: String(gasAmount)
              }).on("transactionHash", function (hash) {
                console.log("transactionHash", hash);
                saveWallet(walletAddress, mintCount + how_many_bones, exists, id);
              })["catch"](function (error) {
                alert(error);
              });
              _context5.next = 16;
              break;

            case 11:
              _context5.next = 13;
              return boneContract.methods.mintBone(how_many_bones).estimateGas({
                from: walletAddress,
                value: price
              })["catch"](function (error) {
                alert(error);
              });

            case 13:
              _gasAmount = _context5.sent;
              console.log(mintCount);
              boneContract.methods.mintBone(how_many_bones).send({
                from: walletAddress,
                value: price,
                gas: String(_gasAmount)
              }).on("transactionHash", /*#__PURE__*/function () {
                var _ref2 = (0,C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(hash) {
                  return C_Users_Robert_Documents_Code_crypto_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          console.log("transactionHash", hash);
                          saveWallet(walletAddress, mintCount + how_many_bones, exists, id);
                          console.log(mintCount);

                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x7) {
                  return _ref2.apply(this, arguments);
                };
              }())["catch"](function (error) {
                alert(error);
              });

            case 16:
              setShow(!show);
              _context5.next = 20;
              break;

            case 19:
              console.log("Wallet not connected");

            case 20:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _mintBone.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: "Pocket Bones | Mint"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:title",
        content: "Mint A Bone"
      }, "ogtitle", false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:description",
        content: "Mint your Pocket Bone here"
      }, "ogdesc", false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, "ogtype", false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://bones.co/mint-page"
      }, "ogurl", false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:image",
        content: "https://bones.co/.gif"
      }, "ogimage", false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "https://bones.co/mint-page"
      }, "ogsitename", false, {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, "twcard", false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "twitter:domain",
        content: "bones.co"
      }, "twdomain", false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "twitter:url",
        content: "https://bones.co/mint-page"
      }, "twurl", false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Mint A Bone"
      }, "twtitle", false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:description",
        content: "Mint your Pocket Bone here"
      }, "twdesc", false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:image",
        content: "https://bones.co/Logo.png"
      }, "twimage", false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "page-header section-dark body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_indexnavbar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
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
                lineNumber: 249,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
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
                lineNumber: 254,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
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
                  lineNumber: 260,
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
                  lineNumber: 261,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 19
              }, this), !signedIn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                onClick: signIn,
                className: "btn metamask-btn",
                children: "Connect Wallet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 21
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                onClick: signOut,
                className: "btn mx-2 metamask-btn",
                children: "Sign out"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
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
                      lineNumber: 286,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.07 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 287,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      onClick: function onClick() {
                        return mintBone(1);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 1 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 289,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 296,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
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
                      lineNumber: 308,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.21 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 309,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      onClick: function onClick() {
                        return mintBone(3);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 3 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 311,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 318,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 281,
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
                      lineNumber: 332,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.42 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 333,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      onClick: function onClick() {
                        return mintBone(6);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 6 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 335,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 342,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 331,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 330,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
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
                      lineNumber: 354,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.7 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 355,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      onClick: function onClick() {
                        return mintBone(10);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 10 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 357,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 364,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 327,
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
                    lineNumber: 382,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.07 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 383,
                    columnNumber: 23
                  }, this), !nothingForSale ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                    onClick: function onClick() {
                      return mintBone(1);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 1 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 385,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The presale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 392,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 381,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 377,
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
            lineNumber: 405,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Sorry, You cannot mint at this time."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 406,
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
              lineNumber: 412,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 407,
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
                      lineNumber: 426,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.07 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 427,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                      children: inFakeWhitelist ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                        children: mintCount < 3 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                          onClick: function onClick() {
                            mintBone(1);
                          },
                          className: "btn mx-2 mb-1 button",
                          children: "Mint 1 pack"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 433,
                          columnNumber: 35
                        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                          onClick: function onClick() {
                            return mintBone(1);
                          },
                          className: "btn mx-2 mb-1 button",
                          disabled: true,
                          children: "You've already minted your presale PocketBones"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 442,
                          columnNumber: 35
                        }, this)
                      }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                        onClick: function onClick() {
                          return mintBone(1);
                        },
                        className: "btn mx-2 mb-1 button",
                        disabled: true,
                        children: "You are not in the presale list"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 453,
                        columnNumber: 31
                      }, this)
                    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The presale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 463,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 425,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 424,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 423,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 422,
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
                      lineNumber: 475,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.21 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 476,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                      children: inFakeWhitelist ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                        children: mintCount == 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                          onClick: function onClick() {
                            return mintBone(3);
                          },
                          className: "btn mx-2 mb-1 button",
                          children: "Mint 3 pack"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 482,
                          columnNumber: 35
                        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                          className: "btn mx-2 mb-1 button",
                          disabled: true,
                          children: "Not enough enough left, mint 1 instead"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 489,
                          columnNumber: 35
                        }, this)
                      }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                        className: "btn mx-2 mb-1 button",
                        disabled: true,
                        children: "You are not in the presale list"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 498,
                        columnNumber: 31
                      }, this)
                    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The presale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 504,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 474,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 473,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 472,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 421,
            columnNumber: 15
          }, this)
        }, void 0, false), show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "header",
            children: "Thank you for minting!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 517,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Your Pocket Bone will arrive as soon as the transaction is processed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 518,
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
              lineNumber: 527,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 522,
            columnNumber: 15
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(MintPage, "bcaAuZrCCN+UFOs+yE2M4gjQ1lY=");

_c = MintPage;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGZmMmQ1OGY1ZWE0YjFhOTVmNjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztTQWFlZ0I7O0VBZ0JmOzs7O3dXQWhCQSxrQkFBMEJDLE1BQTFCLEVBQWtDQyxRQUFsQyxFQUE0Q0MsTUFBNUMsRUFBb0RDLEVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3lCQyxLQUFLLENBQUMsYUFBRCxFQUFnQjtBQUMxQ0MsY0FBQUEsTUFBTSxFQUFFLE1BRGtDO0FBRTFDQyxjQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CTCxnQkFBQUEsRUFBRSxFQUFFLElBRGU7QUFFbkJNLGdCQUFBQSxPQUFPLEVBQUVULE1BRlU7QUFHbkJDLGdCQUFBQSxRQUFRLEVBQUVBLFFBSFM7QUFJbkJDLGdCQUFBQSxNQUFNLEVBQUVBO0FBSlcsZUFBZjtBQUZvQyxhQUFoQixDQUQ5Qjs7QUFBQTtBQUNRUSxZQUFBQSxRQURSOztBQUFBLGdCQVVPQSxRQUFRLENBQUNDLEVBVmhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQVdVLElBQUlDLEtBQUosQ0FBVUYsUUFBUSxDQUFDRyxVQUFuQixDQVhWOztBQUFBO0FBQUE7QUFBQSxtQkFhZUgsUUFBUSxDQUFDSSxJQUFULEVBYmY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWlCQSxTQUFTQyxRQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjs7QUFDcEM7QUFEb0Msa0JBRUpoQywrQ0FBUSxDQUFDLEtBQUQsQ0FGSjtBQUFBLE1BRTdCaUMsUUFGNkI7QUFBQSxNQUVuQkMsV0FGbUI7O0FBQUEsbUJBR01sQywr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QUZGLGVBTUUsOERBQUMsa0RBQUQ7QUFDRSx1QkFBVyxFQUFDLFFBRGQ7QUFFRSxnQkFBSSxFQUFDLDhCQUZQO0FBR0Usb0JBQVEsRUFBRSxJQUhaO0FBQUEsbUNBS0UsOERBQUMsK0NBQUQ7QUFBUSx1QkFBUyxFQUFDLHNCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQSx3QkFsUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0NGO0FBQUEsa0JBREY7QUF3VkQ7O0dBbGZRdEI7O0tBQUFBOztBQW9mVCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBRERSRVNTLCBBQkkgfSBmcm9tIFwiLi4vY29uZmlnLmpzXCI7XHJcbmltcG9ydCBJbmRleE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleG5hdmJhclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZmFrZVdoaXRlbGlzdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zha2V3aGl0ZWxpc3QuanNcIjtcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQsIENhcmRCb2R5LCBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCB3YWxsZXRzID0gYXdhaXQgcHJpc21hLndhbGxldHMuZmluZE1hbnkoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaW5pdGlhbFdhbGxldHM6IHdhbGxldHMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVXYWxsZXQod2FsbGV0LCBxdWFudGl0eSwgZXhpc3RzLCBpZCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJhcGkvd2FsbGV0c1wiLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpZDogdHJ1ZSxcclxuICAgICAgYWRkcmVzczogd2FsbGV0LFxyXG4gICAgICBxdWFudGl0eTogcXVhbnRpdHksXHJcbiAgICAgIGV4aXN0czogZXhpc3RzLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gIH1cclxuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuZnVuY3Rpb24gTWludFBhZ2UoeyBpbml0aWFsV2FsbGV0cyB9KSB7XHJcbiAgLy8gRk9SIFdBTExFVFxyXG4gIGNvbnN0IFtzaWduZWRJbiwgc2V0U2lnbmVkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbldoaXRlbGlzdCwgc2V0SW5XaGl0ZUxpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBGT1IgTUlOVElOR1xyXG4gIGNvbnN0IFtib25lQ29udHJhY3QsIHNldEJvbmVDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gSU5GTyBGUk9NIFNNQVJUIENvbnRyYWN0XHJcbiAgY29uc3QgW3Rva2Vuc01pbnRlZCwgc2V0VG9rZW5zTWludGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbFN1cHBseSwgc2V0VG90YWxTdXBwbHldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NhbGVTdGFydGVkLCBzZXRTYWxlU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25vdGhpbmdGb3JTYWxlLCBzZXROb3RoaW5nRm9yU2FsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ByZXNhbGUsIHNldFByZXNhbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtib25lUHJpY2UsIHNldEJvbmVQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Zha2VQcmVzYWxlLCBzZXRGYWtlUHJlc2FsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaW5GYWtlV2hpdGVsaXN0LCBzZXRpbkZha2VXaGl0ZWxpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttaW50Q291bnQsIHNldE1pbnRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZXhpc3RzLCBzZXRFeGlzdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4oKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy53ZWIzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiTm8gRXRoZXJldW0gaW50ZXJmYWNlIGluamVjdGVkIGludG8gYnJvd3Nlci4gUmVhZC1vbmx5IGFjY2Vzc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuZXRoZXJldW1cclxuICAgICAgLmVuYWJsZSgpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChhY2NvdW50cykge1xyXG4gICAgICAgIHdpbmRvdy53ZWIzLmV0aC5uZXRcclxuICAgICAgICAgIC5nZXROZXR3b3JrVHlwZSgpXHJcbiAgICAgICAgICAvLyBjaGVja3MgaWYgY29ubmVjdGVkIG5ldHdvcmsgaXMgbWFpbm5ldCAoY2hhbmdlIHRoaXMgdG8gcmlua2VieSBpZiB5b3Ugd2FubmEgdGVzdCBvbiB0ZXN0bmV0KVxyXG4gICAgICAgICAgLnRoZW4oKG5ldHdvcmspID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV0d29yayk7XHJcbiAgICAgICAgICAgIGlmIChuZXR3b3JrICE9PSBcIm1haW5cIikge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgXCJZb3UgYXJlIG9uIFwiICtcclxuICAgICAgICAgICAgICAgICAgbmV0d29yayArXHJcbiAgICAgICAgICAgICAgICAgIFwiIG5ldHdvcmsuIENoYW5nZSBuZXR3b3JrIHRvIG1haW5uZXQgb3IgeW91IHdvbid0IGJlIGFibGUgdG8gZG8gYW55dGhpbmcgaGVyZVwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHdhbGxldCA9IGFjY291bnRzWzBdO1xyXG4gICAgICAgIHNldFdhbGxldEFkZHJlc3Mod2FsbGV0KTtcclxuICAgICAgICBzZXRTaWduZWRJbih0cnVlKTtcclxuICAgICAgICBjYWxsQ29udHJhY3REYXRhKHdhbGxldCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduT3V0KCkge1xyXG4gICAgc2V0U2lnbmVkSW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gY2FsbENvbnRyYWN0RGF0YSh3YWxsZXQpIHtcclxuICAgIC8vIGxldCBiYWxhbmNlID0gYXdhaXQgd2ViMy5ldGguZ2V0QmFsYW5jZSh3YWxsZXQpO1xyXG4gICAgLy8gc2V0V2FsbGV0QmFsYW5jZShiYWxhbmNlKVxyXG4gICAgY29uc3QgYm9uZUNvbnRyYWN0ID0gbmV3IHdpbmRvdy53ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgc2V0Qm9uZUNvbnRyYWN0KGJvbmVDb250cmFjdCk7XHJcblxyXG4gICAgY29uc3Qgc2FsZWJvb2wgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kcy5pc1NhbGVBY3RpdmUoKS5jYWxsKCk7XHJcbiAgICBzZXRTYWxlU3RhcnRlZChzYWxlYm9vbCk7XHJcblxyXG4gICAgY29uc3QgcHJlc2FsZWJvb2wgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kcy5pc1ByZXNhbGVBY3RpdmUoKS5jYWxsKCk7XHJcbiAgICBzZXRQcmVzYWxlKHByZXNhbGVib29sKTtcclxuXHJcbiAgICBjb25zdCB3aGl0ZWxpc3RCb29sID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgLmFkZHJlc3NJbldoaXRlbGlzdCh3YWxsZXQpXHJcbiAgICAgIC5jYWxsKCk7XHJcbiAgICBzZXRJbldoaXRlTGlzdCh3aGl0ZWxpc3RCb29sKTtcclxuXHJcbiAgICBzZXROb3RoaW5nRm9yU2FsZSghcHJlc2FsZWJvb2wgJiYgIXNhbGVib29sKTtcclxuXHJcbiAgICBjb25zdCB0b3RhbFN1cHBseSA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzLk1BWF9UT0tFTlMoKS5jYWxsKCk7XHJcbiAgICBzZXRUb3RhbFN1cHBseSh0b3RhbFN1cHBseSk7XHJcblxyXG4gICAgY29uc3QgYm9uZVByaWNlID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMucHJpY2UoKS5jYWxsKCk7XHJcbiAgICBzZXRCb25lUHJpY2UoYm9uZVByaWNlKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnNNaW50ZWQgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kcy50b3RhbFN1cHBseSgpLmNhbGwoKTtcclxuICAgIHNldFRva2Vuc01pbnRlZCh0b2tlbnNNaW50ZWQpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGluaXRpYWxXYWxsZXRzKVxyXG5cclxuICAgIGZha2VXaGl0ZWxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudC50b1VwcGVyQ2FzZSgpID09IHdhbGxldC50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgc2V0aW5GYWtlV2hpdGVsaXN0KHRydWUpO1xyXG4gICAgICAgIGluaXRpYWxXYWxsZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLmFkZHJlc3MudG9VcHBlckNhc2UoKSA9PSB3YWxsZXQudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBzZXRNaW50Q291bnQoaXRlbS5taW50Y291bnQpO1xyXG4gICAgICAgICAgICBzZXRJZChpdGVtLmlkKVxyXG4gICAgICAgICAgICBzZXRFeGlzdHModHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ubWludGNvdW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBtaW50Qm9uZShob3dfbWFueV9ib25lcykge1xyXG4gICAgaWYgKGJvbmVDb250cmFjdCkge1xyXG4gICAgICBjb25zdCBwcmljZSA9IE51bWJlcihib25lUHJpY2UpICogaG93X21hbnlfYm9uZXM7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh7IGZyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZSB9KTtcclxuICAgICAgaWYgKHByZXNhbGUgJiYgIWZha2VQcmVzYWxlKSB7XHJcbiAgICAgICAgY29uc3QgZ2FzQW1vdW50ID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC5wcmVzYWxlTWludChob3dfbWFueV9ib25lcylcclxuICAgICAgICAgIC5lc3RpbWF0ZUdhcyh7IGZyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZSB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVzdGltYXRlZCBnYXNcIiwgZ2FzQW1vdW50KTtcclxuICAgICAgICBib25lQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnByZXNhbGVNaW50KGhvd19tYW55X2JvbmVzKVxyXG4gICAgICAgICAgLnNlbmQoeyBmcm9tOiB3YWxsZXRBZGRyZXNzLCB2YWx1ZTogcHJpY2UsIGdhczogU3RyaW5nKGdhc0Ftb3VudCkgfSlcclxuICAgICAgICAgIC5vbihcInRyYW5zYWN0aW9uSGFzaFwiLCBmdW5jdGlvbiAoaGFzaCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zYWN0aW9uSGFzaFwiLCBoYXNoKTtcclxuICAgICAgICAgICAgc2F2ZVdhbGxldCh3YWxsZXRBZGRyZXNzLCBtaW50Q291bnQgKyBob3dfbWFueV9ib25lcywgZXhpc3RzLCBpZCApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZ2FzQW1vdW50ID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC5taW50Qm9uZShob3dfbWFueV9ib25lcylcclxuICAgICAgICAgIC5lc3RpbWF0ZUdhcyh7IGZyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZSB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtaW50Q291bnQpO1xyXG4gICAgICAgIGJvbmVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAubWludEJvbmUoaG93X21hbnlfYm9uZXMpXHJcbiAgICAgICAgICAuc2VuZCh7IGZyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZSwgZ2FzOiBTdHJpbmcoZ2FzQW1vdW50KSB9KVxyXG4gICAgICAgICAgLm9uKFwidHJhbnNhY3Rpb25IYXNoXCIsIGFzeW5jIGZ1bmN0aW9uIChoYXNoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNhY3Rpb25IYXNoXCIsIGhhc2gpO1xyXG4gICAgICAgICAgICBzYXZlV2FsbGV0KHdhbGxldEFkZHJlc3MsIG1pbnRDb3VudCArIGhvd19tYW55X2JvbmVzLCBleGlzdHMsIGlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWludENvdW50KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFNob3coIXNob3cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJXYWxsZXQgbm90IGNvbm5lY3RlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UG9ja2V0IEJvbmVzIHwgTWludDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTWludCBBIEJvbmVcIiBrZXk9XCJvZ3RpdGxlXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiTWludCB5b3VyIFBvY2tldCBCb25lIGhlcmVcIlxyXG4gICAgICAgICAga2V5PVwib2dkZXNjXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIga2V5PVwib2d0eXBlXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYm9uZXMuY28vbWludC1wYWdlXCJcclxuICAgICAgICAgIGtleT1cIm9ndXJsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2JvbmVzLmNvLy5naWZcIlxyXG4gICAgICAgICAga2V5PVwib2dpbWFnZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYm9uZXMuY28vbWludC1wYWdlXCJcclxuICAgICAgICAgIGtleT1cIm9nc2l0ZW5hbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIga2V5PVwidHdjYXJkXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZG9tYWluXCIgY29udGVudD1cImJvbmVzLmNvXCIga2V5PVwidHdkb21haW5cIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cInR3aXR0ZXI6dXJsXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2JvbmVzLmNvL21pbnQtcGFnZVwiXHJcbiAgICAgICAgICBrZXk9XCJ0d3VybFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJNaW50IEEgQm9uZVwiIGtleT1cInR3dGl0bGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiTWludCB5b3VyIFBvY2tldCBCb25lIGhlcmVcIlxyXG4gICAgICAgICAga2V5PVwidHdkZXNjXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjppbWFnZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9ib25lcy5jby9Mb2dvLnBuZ1wiXHJcbiAgICAgICAgICBrZXk9XCJ0d2ltYWdlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXIgc2VjdGlvbi1kYXJrIGJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgPEluZGV4TmF2YmFyIC8+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvIG1iLWF1dG9cIj5cclxuICAgICAgICAgIHsoKCFzaG93ICYmICFwcmVzYWxlKSB8fFxyXG4gICAgICAgICAgICAoIXNob3cgJiYgcHJlc2FsZSAmJiBpbldoaXRlbGlzdCkgfHxcclxuICAgICAgICAgICAgKGZha2VQcmVzYWxlICYmICFzaG93KSkgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0byBtdC01IHB0LTVcIiBtZD1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj5NaW50IHlvdXIgUG9ja2V0IEJvbmVzPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0byBtYi00XCIgbWQ9XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4wNyBFVEggcGVyIFBvY2tldCBCb25lczwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0byBtYi01XCIgbWQ9XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0bGluZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIndoaXRlIHRleHQgYm9sZFwiPlRvdGFsIE1pbnRlZDo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0ICBteC0wIHB4LTAgbXktMCBweS0wIGJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDw+e3Rva2Vuc01pbnRlZH08Lz4gLyA8PjEwLDAwMDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgeyFzaWduZWRJbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3NpZ25Jbn0gY2xhc3NOYW1lPVwiYnRuIG1ldGFtYXNrLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3NpZ25PdXR9IGNsYXNzTmFtZT1cImJ0biBteC0yIG1ldGFtYXNrLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2lnbiBvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7IXByZXNhbGUgJiYgIXNob3cgJiYgIWZha2VQcmVzYWxlICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC1hdXRvIFwiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+MSBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMDcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2FsZVN0YXJ0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAxIHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjMgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjIxIEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMyBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBcIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjYgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjQyIEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgNiBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIiBtci1hdXRvXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xMCBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuNyBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgxMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAxMCBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtwcmVzYWxlICYmICFzaG93ICYmIGluV2hpdGVsaXN0ICYmICFmYWtlUHJlc2FsZSAmJiAoXHJcbiAgICAgICAgICAgIC8vd2hpdGVsaXN0IHByZXNhbGUgaW4gd2hpdGVsaXN0XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC1hdXRvIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMDcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyFub3RoaW5nRm9yU2FsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMSBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcHJlc2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cHJlc2FsZSAmJiAhc2hvdyAmJiAhaW5XaGl0ZWxpc3QgJiYgIWZha2VQcmVzYWxlICYmIChcclxuICAgICAgICAgICAgLy93aGl0ZWxpc3QgcHJlc2FsZSBub3QgaW4gd2hpdGVsaXN0XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPllvdSZhcG9zO3JlIG5vdCBpbiB0aGUgd2hpdGVsaXN0PC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+U29ycnksIFlvdSBjYW5ub3QgbWludCBhdCB0aGlzIHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cucG9ja2V0Ym9uZXMuY29tL1wiXHJcbiAgICAgICAgICAgICAgICBwYXNzSHJlZj17dHJ1ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJhY2sgdG8gdGhlIGhvbWUgcGFnZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7IXNob3cgJiYgZmFrZVByZXNhbGUgJiYgKFxyXG4gICAgICAgICAgICAvL2Zha2UgcHJlc2FsZVxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0b1wiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+MSBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMDcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2FsZVN0YXJ0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbkZha2VXaGl0ZWxpc3QgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21pbnRDb3VudCA8IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW50Qm9uZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW50IDEgcGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91JmFwb3M7dmUgYWxyZWFkeSBtaW50ZWQgeW91ciBwcmVzYWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvY2tldEJvbmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhcmUgbm90IGluIHRoZSBwcmVzYWxlIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcHJlc2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC1hdXRvIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjMgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjIxIEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5GYWtlV2hpdGVsaXN0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttaW50Q291bnQgPT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAzIHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90IGVub3VnaCBlbm91Z2ggbGVmdCwgbWludCAxIGluc3RlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhcmUgbm90IGluIHRoZSBwcmVzYWxlIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcHJlc2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7c2hvdyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPlRoYW5rIHlvdSBmb3IgbWludGluZyE8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIFlvdXIgUG9ja2V0IEJvbmUgd2lsbCBhcnJpdmUgYXMgc29vbiBhcyB0aGUgdHJhbnNhY3Rpb24gaXNcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnBvY2tldGJvbmVzLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgcGFzc0hyZWY9e3RydWV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICBCYWNrIHRvIHRoZSBob21lIHBhZ2VcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbnRQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjMiLCJBRERSRVNTIiwiQUJJIiwiSW5kZXhOYXZiYXIiLCJIZWFkIiwiTGluayIsImZha2VXaGl0ZWxpc3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDYXJkIiwiQ2FyZEJvZHkiLCJCdXR0b24iLCJzYXZlV2FsbGV0Iiwid2FsbGV0IiwicXVhbnRpdHkiLCJleGlzdHMiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJNaW50UGFnZSIsImluaXRpYWxXYWxsZXRzIiwic2lnbmVkSW4iLCJzZXRTaWduZWRJbiIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwiaW5XaGl0ZWxpc3QiLCJzZXRJbldoaXRlTGlzdCIsImJvbmVDb250cmFjdCIsInNldEJvbmVDb250cmFjdCIsInRva2Vuc01pbnRlZCIsInNldFRva2Vuc01pbnRlZCIsInRvdGFsU3VwcGx5Iiwic2V0VG90YWxTdXBwbHkiLCJzYWxlU3RhcnRlZCIsInNldFNhbGVTdGFydGVkIiwibm90aGluZ0ZvclNhbGUiLCJzZXROb3RoaW5nRm9yU2FsZSIsInByZXNhbGUiLCJzZXRQcmVzYWxlIiwiYm9uZVByaWNlIiwic2V0Qm9uZVByaWNlIiwic2hvdyIsInNldFNob3ciLCJmYWtlUHJlc2FsZSIsInNldEZha2VQcmVzYWxlIiwiaW5GYWtlV2hpdGVsaXN0Iiwic2V0aW5GYWtlV2hpdGVsaXN0IiwibWludENvdW50Iiwic2V0TWludENvdW50Iiwic2V0RXhpc3RzIiwic2V0SWQiLCJzaWduSW4iLCJ3aW5kb3ciLCJ3ZWIzIiwiZXRoZXJldW0iLCJhbGVydCIsImVuYWJsZSIsInRoZW4iLCJhY2NvdW50cyIsImV0aCIsIm5ldCIsImdldE5ldHdvcmtUeXBlIiwibmV0d29yayIsImNvbnNvbGUiLCJsb2ciLCJjYWxsQ29udHJhY3REYXRhIiwiZXJyb3IiLCJzaWduT3V0IiwiQ29udHJhY3QiLCJtZXRob2RzIiwiaXNTYWxlQWN0aXZlIiwiY2FsbCIsInNhbGVib29sIiwiaXNQcmVzYWxlQWN0aXZlIiwicHJlc2FsZWJvb2wiLCJhZGRyZXNzSW5XaGl0ZWxpc3QiLCJ3aGl0ZWxpc3RCb29sIiwiTUFYX1RPS0VOUyIsInByaWNlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0b1VwcGVyQ2FzZSIsIml0ZW0iLCJtaW50Y291bnQiLCJtaW50Qm9uZSIsImhvd19tYW55X2JvbmVzIiwiTnVtYmVyIiwiZnJvbSIsInZhbHVlIiwicHJlc2FsZU1pbnQiLCJlc3RpbWF0ZUdhcyIsImdhc0Ftb3VudCIsInNlbmQiLCJnYXMiLCJTdHJpbmciLCJvbiIsImhhc2giXSwic291cmNlUm9vdCI6IiJ9