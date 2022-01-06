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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      fakePresale = _useState12[0],
      setFakePresale = _useState12[1];

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

            case 27:
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
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:title",
        content: "Mint A Bone"
      }, "ogtitle", false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:description",
        content: "Mint your Pocket Bone here"
      }, "ogdesc", false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, "ogtype", false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://bones.co/mint-page"
      }, "ogurl", false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:image",
        content: "https://bones.co/.gif"
      }, "ogimage", false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "https://bones.co/mint-page"
      }, "ogsitename", false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, "twcard", false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "twitter:domain",
        content: "bones.co"
      }, "twdomain", false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "twitter:url",
        content: "https://bones.co/mint-page"
      }, "twurl", false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Mint A Bone"
      }, "twtitle", false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:description",
        content: "Mint your Pocket Bone here"
      }, "twdesc", false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:image",
        content: "https://bones.co/Logo.png"
      }, "twimage", false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "page-header section-dark body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_indexnavbar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Container, {
        className: "text-center mt-auto mb-auto",
        children: [(!show && !presale || !show && presale && inWhitelist) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
              className: "ml-auto mr-auto mt-5 pt-5",
              md: "12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                className: "header",
                children: "Mint your Pocket Bones"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
              className: "ml-auto mr-auto mb-4",
              md: "12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "text",
                children: "0.07 ETH per Pocket Bones"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 25
          }, this)]
        }, void 0, true), (!show && !presale || !show && presale && inWhitelist) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
            className: "ml-auto mr-auto mb-4",
            md: "12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text",
              children: "0.07 ETH per Pocket Bones"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }, this), (!show && !presale || !show && presale && inWhitelist) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
            className: "ml-auto mr-auto mb-5",
            md: "5",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "outline mb-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                className: "white text bold",
                children: "Total Minted:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                className: "text  mx-0 px-0 my-0 py-0 bold",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                  children: tokensMinted
                }, void 0, false), " / ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                  children: "10,000"
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 17
            }, this), !signedIn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
              onClick: signIn,
              className: "btn metamask-btn",
              children: "Connect Wallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 19
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
              onClick: signOut,
              className: "btn mx-2 metamask-btn",
              children: "Sign out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 13
        }, this), !presale && !show && !fakePresale && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
            className: "ml-auto ",
            md: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Card, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "flex auth my-8 font-bold  justify-center items-center vw2",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                    className: "text white bold",
                    children: "1 PACK"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.07 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 23
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(1);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 1 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
            className: " mr-auto",
            md: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Card, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "flex auth my-8 font-bold  justify-center items-center vw2",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                    className: "text white bold",
                    children: "3 PACK"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.21 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 23
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(3);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 3 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 13
        }, this), !presale && !show && !fakePresale && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
            className: "ml-auto ",
            md: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Card, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "flex auth my-8 font-bold  justify-center items-center vw2",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                    className: "text white bold",
                    children: "6 PACK"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.42 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 23
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(6);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 6 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 294,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
            className: " mr-auto",
            md: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Card, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "flex auth my-8 font-bold  justify-center items-center vw2",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                    className: "text white bold",
                    children: "10 PACK"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.7 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 23
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(10);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 10 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 316,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 13
        }, this), presale && !show && inWhitelist && !fakePresale &&
        /*#__PURE__*/
        //whitelist presale in whitelist
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
            className: "ml-auto mr-auto",
            md: "6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Card, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "flex auth my-8 font-bold  justify-center items-center vw2",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                    className: "text white bold",
                    children: "1 PACK"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 340,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.07 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 23
                  }, this), !nothingForSale ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(1);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 1 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The presale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 350,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 339,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
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
            lineNumber: 363,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Sorry, You cannot mint at this time."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            activeClass: "active",
            href: "https://www.pocketbones.com/",
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
              className: "btn button mx-2 mb-1",
              children: "Back to the home page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 15
          }, this)]
        }, void 0, true), presale && !show && fakePresale &&
        /*#__PURE__*/
        //fake presale
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
              className: "ml-auto mr-auto",
              md: "6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Card, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                      className: "text white bold",
                      children: "1 PACK"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 384,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.07 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 385,
                      columnNumber: 25
                    }, this), !nothingForSale ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      onClick: function onClick() {
                        return mintBone(1);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 1 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 387,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The presale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 394,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 383,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 381,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
              className: "ml-auto mr-auto",
              md: "6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Card, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                      className: "text white bold",
                      children: "3 PACK"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 406,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.21 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 407,
                      columnNumber: 25
                    }, this), !nothingForSale ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      onClick: function onClick() {
                        return mintBone(3);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 3 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 409,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The presale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 416,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 405,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 404,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 403,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 402,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 15
          }, this)
        }, void 0, false), show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "header",
            children: "Thank you for minting!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Your Pocket Bone will arrive as soon as the transaction is processed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            activeClass: "active",
            href: "https://www.pocketbones.com/",
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
              className: "btn button mx-2 mb-1",
              children: "Back to the home page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 439,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 15
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(MintPage, "QtKLqo1FVJ0sXtxhc+9580CVF5k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWY5OGYzYjM1NTcyNzliOTAzYzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQSxTQUFTZSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCO0FBRGtCLGtCQUVjZCwrQ0FBUSxDQUFDLEtBQUQsQ0FGdEI7QUFBQSxNQUVYZSxRQUZXO0FBQUEsTUFFREMsV0FGQzs7QUFBQSxtQkFHd0JoQiwrQ0FBUSxDQUFDLElBQUQsQ0FIaEM7QUFBQSxNQUdYaUIsYUFIVztBQUFBLE1BR0lDLGdCQUhKOztBQUFBLG1CQUlvQmxCLCtDQUFRLENBQUMsS0FBRCxDQUo1QjtBQUFBLE1BSVhtQixXQUpXO0FBQUEsTUFJRUMsY0FKRixrQkFNbEI7OztBQU5rQixtQkFPc0JwQiwrQ0FBUSxDQUFDLElBQUQsQ0FQOUI7QUFBQSxNQU9YcUIsWUFQVztBQUFBLE1BT0dDLGVBUEgsa0JBU2xCOzs7QUFUa0IsbUJBVXNCdEIsK0NBQVEsQ0FBQyxDQUFELENBVjlCO0FBQUEsTUFVWHVCLFlBVlc7QUFBQSxNQVVHQyxlQVZIOztBQUFBLG1CQVdvQnhCLCtDQUFRLENBQUMsQ0FBRCxDQVg1QjtBQUFBLE1BV1h5QixXQVhXO0FBQUEsTUFXRUMsY0FYRjs7QUFBQSxtQkFZb0IxQiwrQ0FBUSxDQUFDLEtBQUQsQ0FaNUI7QUFBQSxNQVlYMkIsV0FaVztBQUFBLE1BWUVDLGNBWkY7O0FBQUEsbUJBYTBCNUIsK0NBQVEsQ0FBQyxLQUFELENBYmxDO0FBQUEsTUFhWDZCLGNBYlc7QUFBQSxNQWFLQyxpQkFiTDs7QUFBQSxtQkFjWTlCLCtDQUFRLENBQUMsS0FBRCxDQWRwQjtBQUFBLE1BY1grQixPQWRXO0FBQUEsTUFjRkMsVUFkRTs7QUFBQSxvQkFlZ0JoQywrQ0FBUSxDQUFDLENBQUQsQ0FmeEI7QUFBQSxNQWVYaUMsU0Fm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QUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Q0Y7QUFBQSxrQkFERjtBQWtURDs7R0FyYlFyQjs7S0FBQUE7QUF1YlQsK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUREUkVTUywgQUJJIH0gZnJvbSBcIi4uL2NvbmZpZy5qc1wiO1xyXG5pbXBvcnQgSW5kZXhOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXhuYXZiYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCwgQ2FyZEJvZHksIEJ1dHRvbiB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuZnVuY3Rpb24gTWludFBhZ2UoKSB7XHJcbiAgLy8gRk9SIFdBTExFVFxyXG4gIGNvbnN0IFtzaWduZWRJbiwgc2V0U2lnbmVkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbldoaXRlbGlzdCwgc2V0SW5XaGl0ZUxpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBGT1IgTUlOVElOR1xyXG4gIGNvbnN0IFtib25lQ29udHJhY3QsIHNldEJvbmVDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8gSU5GTyBGUk9NIFNNQVJUIENvbnRyYWN0XHJcbiAgY29uc3QgW3Rva2Vuc01pbnRlZCwgc2V0VG9rZW5zTWludGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbFN1cHBseSwgc2V0VG90YWxTdXBwbHldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NhbGVTdGFydGVkLCBzZXRTYWxlU3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25vdGhpbmdGb3JTYWxlLCBzZXROb3RoaW5nRm9yU2FsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ByZXNhbGUsIHNldFByZXNhbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtib25lUHJpY2UsIHNldEJvbmVQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Zha2VQcmVzYWxlLCBzZXRGYWtlUHJlc2FsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIk5vIEV0aGVyZXVtIGludGVyZmFjZSBpbmplY3RlZCBpbnRvIGJyb3dzZXIuIFJlYWQtb25seSBhY2Nlc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmV0aGVyZXVtXHJcbiAgICAgIC5lbmFibGUoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoYWNjb3VudHMpIHtcclxuICAgICAgICB3aW5kb3cud2ViMy5ldGgubmV0XHJcbiAgICAgICAgICAuZ2V0TmV0d29ya1R5cGUoKVxyXG4gICAgICAgICAgLy8gY2hlY2tzIGlmIGNvbm5lY3RlZCBuZXR3b3JrIGlzIG1haW5uZXQgKGNoYW5nZSB0aGlzIHRvIHJpbmtlYnkgaWYgeW91IHdhbm5hIHRlc3Qgb24gdGVzdG5ldClcclxuICAgICAgICAgIC50aGVuKChuZXR3b3JrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldHdvcmspO1xyXG4gICAgICAgICAgICBpZiAobmV0d29yayAhPT0gXCJtYWluXCIpIHtcclxuICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgIFwiWW91IGFyZSBvbiBcIiArXHJcbiAgICAgICAgICAgICAgICAgIG5ldHdvcmsgK1xyXG4gICAgICAgICAgICAgICAgICBcIiBuZXR3b3JrLiBDaGFuZ2UgbmV0d29yayB0byBtYWlubmV0IG9yIHlvdSB3b24ndCBiZSBhYmxlIHRvIGRvIGFueXRoaW5nIGhlcmVcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB3YWxsZXQgPSBhY2NvdW50c1swXTtcclxuICAgICAgICBzZXRXYWxsZXRBZGRyZXNzKHdhbGxldCk7XHJcbiAgICAgICAgc2V0U2lnbmVkSW4odHJ1ZSk7XHJcbiAgICAgICAgY2FsbENvbnRyYWN0RGF0YSh3YWxsZXQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICAgIHNldFNpZ25lZEluKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGNhbGxDb250cmFjdERhdGEod2FsbGV0KSB7XHJcbiAgICAvLyBsZXQgYmFsYW5jZSA9IGF3YWl0IHdlYjMuZXRoLmdldEJhbGFuY2Uod2FsbGV0KTtcclxuICAgIC8vIHNldFdhbGxldEJhbGFuY2UoYmFsYW5jZSlcclxuICAgIGNvbnN0IGJvbmVDb250cmFjdCA9IG5ldyB3aW5kb3cud2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHNldEJvbmVDb250cmFjdChib25lQ29udHJhY3QpO1xyXG5cclxuICAgIGNvbnN0IHNhbGVib29sID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMuaXNTYWxlQWN0aXZlKCkuY2FsbCgpO1xyXG4gICAgc2V0U2FsZVN0YXJ0ZWQoc2FsZWJvb2wpO1xyXG5cclxuICAgIGNvbnN0IHByZXNhbGVib29sID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMuaXNQcmVzYWxlQWN0aXZlKCkuY2FsbCgpO1xyXG4gICAgc2V0UHJlc2FsZShwcmVzYWxlYm9vbCk7XHJcblxyXG4gICAgY29uc3Qgd2hpdGVsaXN0Qm9vbCA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgIC5hZGRyZXNzSW5XaGl0ZWxpc3Qod2FsbGV0KVxyXG4gICAgICAuY2FsbCgpO1xyXG4gICAgc2V0SW5XaGl0ZUxpc3Qod2hpdGVsaXN0Qm9vbCk7XHJcblxyXG4gICAgc2V0Tm90aGluZ0ZvclNhbGUoIXByZXNhbGVib29sICYmICFzYWxlYm9vbCk7XHJcblxyXG4gICAgY29uc3QgdG90YWxTdXBwbHkgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kcy5NQVhfVE9LRU5TKCkuY2FsbCgpO1xyXG4gICAgc2V0VG90YWxTdXBwbHkodG90YWxTdXBwbHkpO1xyXG5cclxuICAgIGNvbnN0IGJvbmVQcmljZSA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzLnByaWNlKCkuY2FsbCgpO1xyXG4gICAgc2V0Qm9uZVByaWNlKGJvbmVQcmljZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zTWludGVkID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMudG90YWxTdXBwbHkoKS5jYWxsKCk7XHJcbiAgICBzZXRUb2tlbnNNaW50ZWQodG9rZW5zTWludGVkKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG1pbnRCb25lKGhvd19tYW55X2JvbmVzKSB7XHJcbiAgICBpZiAoYm9uZUNvbnRyYWN0KSB7XHJcbiAgICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKGJvbmVQcmljZSkgKiBob3dfbWFueV9ib25lcztcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHsgZnJvbTogd2FsbGV0QWRkcmVzcywgdmFsdWU6IHByaWNlIH0pO1xyXG4gICAgICBpZiAocHJlc2FsZSAmJiAhZmFrZVByZXNhbGUpIHtcclxuICAgICAgICBjb25zdCBnYXNBbW91bnQgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnByZXNhbGVNaW50KGhvd19tYW55X2JvbmVzKVxyXG4gICAgICAgICAgLmVzdGltYXRlR2FzKHsgZnJvbTogd2FsbGV0QWRkcmVzcywgdmFsdWU6IHByaWNlIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXN0aW1hdGVkIGdhc1wiLCBnYXNBbW91bnQpO1xyXG4gICAgICAgIGJvbmVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAucHJlc2FsZU1pbnQoaG93X21hbnlfYm9uZXMpXHJcbiAgICAgICAgICAuc2VuZCh7IGZyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZSwgZ2FzOiBTdHJpbmcoZ2FzQW1vdW50KSB9KVxyXG4gICAgICAgICAgLm9uKFwidHJhbnNhY3Rpb25IYXNoXCIsIGZ1bmN0aW9uIChoYXNoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNhY3Rpb25IYXNoXCIsIGhhc2gpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZ2FzQW1vdW50ID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC5taW50Qm9uZShob3dfbWFueV9ib25lcylcclxuICAgICAgICAgIC5lc3RpbWF0ZUdhcyh7IGZyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZSB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVzdGltYXRlZCBnYXNcIiwgZ2FzQW1vdW50KTtcclxuICAgICAgICBib25lQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLm1pbnRCb25lKGhvd19tYW55X2JvbmVzKVxyXG4gICAgICAgICAgLnNlbmQoeyBmcm9tOiB3YWxsZXRBZGRyZXNzLCB2YWx1ZTogcHJpY2UsIGdhczogU3RyaW5nKGdhc0Ftb3VudCkgfSlcclxuICAgICAgICAgIC5vbihcInRyYW5zYWN0aW9uSGFzaFwiLCBmdW5jdGlvbiAoaGFzaCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zYWN0aW9uSGFzaFwiLCBoYXNoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFNob3coIXNob3cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJXYWxsZXQgbm90IGNvbm5lY3RlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UG9ja2V0IEJvbmVzIHwgTWludDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTWludCBBIEJvbmVcIiBrZXk9XCJvZ3RpdGxlXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiTWludCB5b3VyIFBvY2tldCBCb25lIGhlcmVcIlxyXG4gICAgICAgICAga2V5PVwib2dkZXNjXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIga2V5PVwib2d0eXBlXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYm9uZXMuY28vbWludC1wYWdlXCJcclxuICAgICAgICAgIGtleT1cIm9ndXJsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2JvbmVzLmNvLy5naWZcIlxyXG4gICAgICAgICAga2V5PVwib2dpbWFnZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYm9uZXMuY28vbWludC1wYWdlXCJcclxuICAgICAgICAgIGtleT1cIm9nc2l0ZW5hbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIga2V5PVwidHdjYXJkXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZG9tYWluXCIgY29udGVudD1cImJvbmVzLmNvXCIga2V5PVwidHdkb21haW5cIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cInR3aXR0ZXI6dXJsXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2JvbmVzLmNvL21pbnQtcGFnZVwiXHJcbiAgICAgICAgICBrZXk9XCJ0d3VybFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJNaW50IEEgQm9uZVwiIGtleT1cInR3dGl0bGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiTWludCB5b3VyIFBvY2tldCBCb25lIGhlcmVcIlxyXG4gICAgICAgICAga2V5PVwidHdkZXNjXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjppbWFnZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9ib25lcy5jby9Mb2dvLnBuZ1wiXHJcbiAgICAgICAgICBrZXk9XCJ0d2ltYWdlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXIgc2VjdGlvbi1kYXJrIGJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgPEluZGV4TmF2YmFyIC8+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvIG1iLWF1dG9cIj5cclxuICAgICAgICAgIHsoKCFzaG93ICYmICFwcmVzYWxlKSB8fCAoIXNob3cgJiYgcHJlc2FsZSAmJiBpbldoaXRlbGlzdCkpICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0byBtdC01IHB0LTVcIiBtZD1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+TWludCB5b3VyIFBvY2tldCBCb25lczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0byBtYi00XCIgbWQ9XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjA3IEVUSCBwZXIgUG9ja2V0IEJvbmVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgeygoIXNob3cgJiYgIXByZXNhbGUpIHx8ICghc2hvdyAmJiBwcmVzYWxlICYmIGluV2hpdGVsaXN0KSkgJiYgKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG1iLTRcIiBtZD1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4wNyBFVEggcGVyIFBvY2tldCBCb25lczwvcD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgeygoIXNob3cgJiYgIXByZXNhbGUpIHx8ICghc2hvdyAmJiBwcmVzYWxlICYmIGluV2hpdGVsaXN0KSkgJiYgKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG1iLTVcIiBtZD1cIjVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0bGluZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ3aGl0ZSB0ZXh0IGJvbGRcIj5Ub3RhbCBNaW50ZWQ6PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQgIG14LTAgcHgtMCBteS0wIHB5LTAgYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDw+e3Rva2Vuc01pbnRlZH08Lz4gLyA8PjEwLDAwMDwvPlxyXG4gICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgeyFzaWduZWRJbiA/IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzaWduSW59IGNsYXNzTmFtZT1cImJ0biBtZXRhbWFzay1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2lnbk91dH0gY2xhc3NOYW1lPVwiYnRuIG14LTIgbWV0YW1hc2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2lnbiBvdXRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7IXByZXNhbGUgJiYgIXNob3cgJiYgIWZha2VQcmVzYWxlICYmIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+MSBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjA3IEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMSBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgU2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4zIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMjEgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAzIHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHshcHJlc2FsZSAmJiAhc2hvdyAmJiAhZmFrZVByZXNhbGUgJiYgKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBcIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj42IFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuNDIgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoNil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCA2IHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCIgbXItYXV0b1wiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjEwIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuNyBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2FsZVN0YXJ0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgxMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAxMCBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgU2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cHJlc2FsZSAmJiAhc2hvdyAmJiBpbldoaXRlbGlzdCAmJiAhZmFrZVByZXNhbGUgJiYgKFxyXG4gICAgICAgICAgICAvL3doaXRlbGlzdCBwcmVzYWxlIGluIHdoaXRlbGlzdFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+MSBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjA3IEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIHshbm90aGluZ0ZvclNhbGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBNaW50IDEgcGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHByZXNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3ByZXNhbGUgJiYgIXNob3cgJiYgIWluV2hpdGVsaXN0ICYmICFmYWtlUHJlc2FsZSAmJiAoXHJcbiAgICAgICAgICAgIC8vd2hpdGVsaXN0IHByZXNhbGUgbm90IGluIHdoaXRlbGlzdFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj5Zb3UmYXBvcztyZSBub3QgaW4gdGhlIHdoaXRlbGlzdDwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlNvcnJ5LCBZb3UgY2Fubm90IG1pbnQgYXQgdGhpcyB0aW1lLjwvcD5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnBvY2tldGJvbmVzLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgcGFzc0hyZWY9e3RydWV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICBCYWNrIHRvIHRoZSBob21lIHBhZ2VcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3ByZXNhbGUgJiYgIXNob3cgJiYgZmFrZVByZXNhbGUgJiYgKFxyXG4gICAgICAgICAgICAvL2Zha2UgcHJlc2FsZVxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0b1wiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+MSBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMDcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IW5vdGhpbmdGb3JTYWxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMSBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBwcmVzYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0b1wiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+MyBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMjEgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IW5vdGhpbmdGb3JTYWxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMyBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBwcmVzYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtzaG93ICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+VGhhbmsgeW91IGZvciBtaW50aW5nITwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgWW91ciBQb2NrZXQgQm9uZSB3aWxsIGFycml2ZSBhcyBzb29uIGFzIHRoZSB0cmFuc2FjdGlvbiBpc1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cucG9ja2V0Ym9uZXMuY29tL1wiXHJcbiAgICAgICAgICAgICAgICBwYXNzSHJlZj17dHJ1ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJhY2sgdG8gdGhlIGhvbWUgcGFnZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViMyIsIkFERFJFU1MiLCJBQkkiLCJJbmRleE5hdmJhciIsIkhlYWQiLCJMaW5rIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQnV0dG9uIiwiTWludFBhZ2UiLCJzaWduZWRJbiIsInNldFNpZ25lZEluIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJpbldoaXRlbGlzdCIsInNldEluV2hpdGVMaXN0IiwiYm9uZUNvbnRyYWN0Iiwic2V0Qm9uZUNvbnRyYWN0IiwidG9rZW5zTWludGVkIiwic2V0VG9rZW5zTWludGVkIiwidG90YWxTdXBwbHkiLCJzZXRUb3RhbFN1cHBseSIsInNhbGVTdGFydGVkIiwic2V0U2FsZVN0YXJ0ZWQiLCJub3RoaW5nRm9yU2FsZSIsInNldE5vdGhpbmdGb3JTYWxlIiwicHJlc2FsZSIsInNldFByZXNhbGUiLCJib25lUHJpY2UiLCJzZXRCb25lUHJpY2UiLCJzaG93Iiwic2V0U2hvdyIsImZha2VQcmVzYWxlIiwic2V0RmFrZVByZXNhbGUiLCJzaWduSW4iLCJ3aW5kb3ciLCJ3ZWIzIiwiZXRoZXJldW0iLCJhbGVydCIsImVuYWJsZSIsInRoZW4iLCJhY2NvdW50cyIsImV0aCIsIm5ldCIsImdldE5ldHdvcmtUeXBlIiwibmV0d29yayIsImNvbnNvbGUiLCJsb2ciLCJ3YWxsZXQiLCJjYWxsQ29udHJhY3REYXRhIiwiZXJyb3IiLCJzaWduT3V0IiwiQ29udHJhY3QiLCJtZXRob2RzIiwiaXNTYWxlQWN0aXZlIiwiY2FsbCIsInNhbGVib29sIiwiaXNQcmVzYWxlQWN0aXZlIiwicHJlc2FsZWJvb2wiLCJhZGRyZXNzSW5XaGl0ZWxpc3QiLCJ3aGl0ZWxpc3RCb29sIiwiTUFYX1RPS0VOUyIsInByaWNlIiwibWludEJvbmUiLCJob3dfbWFueV9ib25lcyIsIk51bWJlciIsImZyb20iLCJ2YWx1ZSIsInByZXNhbGVNaW50IiwiZXN0aW1hdGVHYXMiLCJnYXNBbW91bnQiLCJzZW5kIiwiZ2FzIiwiU3RyaW5nIiwib24iLCJoYXNoIl0sInNvdXJjZVJvb3QiOiIifQ==