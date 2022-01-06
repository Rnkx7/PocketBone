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
        children: [(!show && !presale || !show && presale && inWhitelist || fakePresale) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
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
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 15
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
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
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
                  lineNumber: 208,
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
                  lineNumber: 209,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 19
              }, this), !signedIn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                onClick: signIn,
                className: "btn metamask-btn",
                children: "Connect Wallet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 21
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                onClick: signOut,
                className: "btn mx-2 metamask-btn",
                children: "Sign out"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 15
          }, this)]
        }, void 0, true), !presale && !show && !fakePresale && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
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
                      lineNumber: 263,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.07 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 264,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      onClick: function onClick() {
                        return mintBone(1);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 1 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 273,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 17
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
                      lineNumber: 285,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.21 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 286,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      onClick: function onClick() {
                        return mintBone(3);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 3 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 288,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 295,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 283,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
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
                      lineNumber: 309,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.42 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 310,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      onClick: function onClick() {
                        return mintBone(6);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 6 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 312,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 319,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 17
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
                      lineNumber: 331,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.7 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 332,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      onClick: function onClick() {
                        return mintBone(10);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 10 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 334,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 341,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 15
          }, this)]
        }, void 0, true), presale && !show && inWhitelist && !fakePresale &&
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
                    lineNumber: 407,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.07 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 408,
                    columnNumber: 23
                  }, this), !nothingForSale ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(1);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 1 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 410,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The presale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 417,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 405,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 402,
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
            lineNumber: 430,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Sorry, You cannot mint at this time."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 431,
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
              lineNumber: 437,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 432,
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
                      lineNumber: 451,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.07 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 452,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      onClick: function onClick() {
                        return mintBone(1);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 1 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 454,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The presale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 461,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 450,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 449,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 448,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 447,
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
                      lineNumber: 473,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      className: "text",
                      children: "0.21 ETH"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 474,
                      columnNumber: 25
                    }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      onClick: function onClick() {
                        return mintBone(3);
                      },
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 3 pack"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 476,
                      columnNumber: 27
                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The presale isn't active yet"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 483,
                      columnNumber: 27
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 472,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 471,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 470,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 469,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 446,
            columnNumber: 15
          }, this)
        }, void 0, false), show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "header",
            children: "Thank you for minting!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Your Pocket Bone will arrive as soon as the transaction is processed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 497,
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
              lineNumber: 506,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 501,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWNhYzRkYWM3MzM3YWQzOWVmZjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQSxTQUFTZSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCO0FBRGtCLGtCQUVjZCwrQ0FBUSxDQUFDLEtBQUQsQ0FGdEI7QUFBQSxNQUVYZSxRQUZXO0FBQUEsTUFFREMsV0FGQzs7QUFBQSxtQkFHd0JoQiwrQ0FBUSxDQUFDLElBQUQsQ0FIaEM7QUFBQSxNQUdYaUIsYUFIVztBQUFBLE1BR0lDLGdCQUhKOztBQUFBLG1CQUlvQmxCLCtDQUFRLENBQUMsS0FBRCxDQUo1QjtBQUFBLE1BSVhtQixXQUpXO0FBQUEsTUFJRUMsY0FKRixrQkFNbEI7OztBQU5rQixtQkFPc0JwQiwrQ0FBUSxDQUFDLElBQUQsQ0FQOUI7QUFBQSxNQU9YcUIsWUFQVztBQUFBLE1BT0dDLGVBUEgsa0JBU2xCOzs7QUFUa0IsbUJBVXNCdEIsK0NBQVEsQ0FBQyxDQUFELENBVjlCO0FBQUEsTUFVWHVCLFlBVlc7QUFBQSxNQVVHQyxlQVZIOztBQUFBLG1CQVdvQnhCLCtDQUFRLENBQUMsQ0FBRCxDQVg1QjtBQUFBLE1BV1h5QixXQVhXO0FBQUEsTUFXRUMsY0FYRjs7QUFBQSxtQkFZb0IxQiwrQ0FBUSxDQUFDLEtBQUQsQ0FaNUI7QUFBQSxNQVlYMkIsV0FaVztBQUFBLE1BWUVDLGNBWkY7O0FBQUEsbUJBYTBCNUIsK0NBQVEsQ0FBQyxLQUFELENBYmxDO0FBQUEsTUFhWDZCLGNBYlc7QUFBQSxNQWFLQyxpQkFiTDs7QUFBQSxtQkFjWTlCLCtDQUFRLENBQUMsS0FBRCxDQWRwQjtBQUFBLE1BY1grQixPQWRXO0FBQUEsTUFjRkMsVUFkRTs7QUFBQSxvQkFlZ0JoQywrQ0FBUSxDQUFDLENBQUQsQ0FmeEI7QUFBQSxNQWVYaUMsU0Fm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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHlCQTdQSixFQThTR2pDLElBQUksaUJBQ0g7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUcscUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBTUUsOERBQUMsa0RBQUQ7QUFDRSx1QkFBVyxFQUFDLFFBRGQ7QUFFRSxnQkFBSSxFQUFDLDhCQUZQO0FBR0Usb0JBQVEsRUFBRSxJQUhaO0FBQUEsbUNBS0UsOERBQUMsOENBQUQ7QUFBUSx1QkFBUyxFQUFDLHNCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQSx3QkEvU0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0NGO0FBQUEsa0JBREY7QUFxWEQ7O0dBeGZRckI7O0tBQUFBO0FBMGZULCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IEFERFJFU1MsIEFCSSB9IGZyb20gXCIuLi9jb25maWcuanNcIjtcclxuaW1wb3J0IEluZGV4TmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4bmF2YmFyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuLy8gcmVhY3RzdHJhcCBjb21wb25lbnRzXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQsIENhcmRCb2R5LCBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmZ1bmN0aW9uIE1pbnRQYWdlKCkge1xyXG4gIC8vIEZPUiBXQUxMRVRcclxuICBjb25zdCBbc2lnbmVkSW4sIHNldFNpZ25lZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW5XaGl0ZWxpc3QsIHNldEluV2hpdGVMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gRk9SIE1JTlRJTkdcclxuICBjb25zdCBbYm9uZUNvbnRyYWN0LCBzZXRCb25lQ29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vIElORk8gRlJPTSBTTUFSVCBDb250cmFjdFxyXG4gIGNvbnN0IFt0b2tlbnNNaW50ZWQsIHNldFRva2Vuc01pbnRlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxTdXBwbHksIHNldFRvdGFsU3VwcGx5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzYWxlU3RhcnRlZCwgc2V0U2FsZVN0YXJ0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtub3RoaW5nRm9yU2FsZSwgc2V0Tm90aGluZ0ZvclNhbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwcmVzYWxlLCBzZXRQcmVzYWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYm9uZVByaWNlLCBzZXRCb25lUHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmYWtlUHJlc2FsZSwgc2V0RmFrZVByZXNhbGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNpZ25JbigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LndlYjMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJObyBFdGhlcmV1bSBpbnRlcmZhY2UgaW5qZWN0ZWQgaW50byBicm93c2VyLiBSZWFkLW9ubHkgYWNjZXNzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5ldGhlcmV1bVxyXG4gICAgICAuZW5hYmxlKClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGFjY291bnRzKSB7XHJcbiAgICAgICAgd2luZG93LndlYjMuZXRoLm5ldFxyXG4gICAgICAgICAgLmdldE5ldHdvcmtUeXBlKClcclxuICAgICAgICAgIC8vIGNoZWNrcyBpZiBjb25uZWN0ZWQgbmV0d29yayBpcyBtYWlubmV0IChjaGFuZ2UgdGhpcyB0byByaW5rZWJ5IGlmIHlvdSB3YW5uYSB0ZXN0IG9uIHRlc3RuZXQpXHJcbiAgICAgICAgICAudGhlbigobmV0d29yaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXR3b3JrKTtcclxuICAgICAgICAgICAgaWYgKG5ldHdvcmsgIT09IFwibWFpblwiKSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICBcIllvdSBhcmUgb24gXCIgK1xyXG4gICAgICAgICAgICAgICAgICBuZXR3b3JrICtcclxuICAgICAgICAgICAgICAgICAgXCIgbmV0d29yay4gQ2hhbmdlIG5ldHdvcmsgdG8gbWFpbm5ldCBvciB5b3Ugd29uJ3QgYmUgYWJsZSB0byBkbyBhbnl0aGluZyBoZXJlXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBsZXQgd2FsbGV0ID0gYWNjb3VudHNbMF07XHJcbiAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyh3YWxsZXQpO1xyXG4gICAgICAgIHNldFNpZ25lZEluKHRydWUpO1xyXG4gICAgICAgIGNhbGxDb250cmFjdERhdGEod2FsbGV0KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKSB7XHJcbiAgICBzZXRTaWduZWRJbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBjYWxsQ29udHJhY3REYXRhKHdhbGxldCkge1xyXG4gICAgLy8gbGV0IGJhbGFuY2UgPSBhd2FpdCB3ZWIzLmV0aC5nZXRCYWxhbmNlKHdhbGxldCk7XHJcbiAgICAvLyBzZXRXYWxsZXRCYWxhbmNlKGJhbGFuY2UpXHJcbiAgICBjb25zdCBib25lQ29udHJhY3QgPSBuZXcgd2luZG93LndlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgICBzZXRCb25lQ29udHJhY3QoYm9uZUNvbnRyYWN0KTtcclxuXHJcbiAgICBjb25zdCBzYWxlYm9vbCA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzLmlzU2FsZUFjdGl2ZSgpLmNhbGwoKTtcclxuICAgIHNldFNhbGVTdGFydGVkKHNhbGVib29sKTtcclxuXHJcbiAgICBjb25zdCBwcmVzYWxlYm9vbCA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzLmlzUHJlc2FsZUFjdGl2ZSgpLmNhbGwoKTtcclxuICAgIHNldFByZXNhbGUocHJlc2FsZWJvb2wpO1xyXG5cclxuICAgIGNvbnN0IHdoaXRlbGlzdEJvb2wgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuYWRkcmVzc0luV2hpdGVsaXN0KHdhbGxldClcclxuICAgICAgLmNhbGwoKTtcclxuICAgIHNldEluV2hpdGVMaXN0KHdoaXRlbGlzdEJvb2wpO1xyXG5cclxuICAgIHNldE5vdGhpbmdGb3JTYWxlKCFwcmVzYWxlYm9vbCAmJiAhc2FsZWJvb2wpO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsU3VwcGx5ID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMuTUFYX1RPS0VOUygpLmNhbGwoKTtcclxuICAgIHNldFRvdGFsU3VwcGx5KHRvdGFsU3VwcGx5KTtcclxuXHJcbiAgICBjb25zdCBib25lUHJpY2UgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kcy5wcmljZSgpLmNhbGwoKTtcclxuICAgIHNldEJvbmVQcmljZShib25lUHJpY2UpO1xyXG5cclxuICAgIGNvbnN0IHRva2Vuc01pbnRlZCA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzLnRvdGFsU3VwcGx5KCkuY2FsbCgpO1xyXG4gICAgc2V0VG9rZW5zTWludGVkKHRva2Vuc01pbnRlZCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBtaW50Qm9uZShob3dfbWFueV9ib25lcykge1xyXG4gICAgaWYgKGJvbmVDb250cmFjdCkge1xyXG4gICAgICBjb25zdCBwcmljZSA9IE51bWJlcihib25lUHJpY2UpICogaG93X21hbnlfYm9uZXM7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh7IGZyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZSB9KTtcclxuICAgICAgaWYgKHByZXNhbGUgJiYgIWZha2VQcmVzYWxlKSB7XHJcbiAgICAgICAgY29uc3QgZ2FzQW1vdW50ID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC5wcmVzYWxlTWludChob3dfbWFueV9ib25lcylcclxuICAgICAgICAgIC5lc3RpbWF0ZUdhcyh7IGZyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZSB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVzdGltYXRlZCBnYXNcIiwgZ2FzQW1vdW50KTtcclxuICAgICAgICBib25lQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnByZXNhbGVNaW50KGhvd19tYW55X2JvbmVzKVxyXG4gICAgICAgICAgLnNlbmQoeyBmcm9tOiB3YWxsZXRBZGRyZXNzLCB2YWx1ZTogcHJpY2UsIGdhczogU3RyaW5nKGdhc0Ftb3VudCkgfSlcclxuICAgICAgICAgIC5vbihcInRyYW5zYWN0aW9uSGFzaFwiLCBmdW5jdGlvbiAoaGFzaCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zYWN0aW9uSGFzaFwiLCBoYXNoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGdhc0Ftb3VudCA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAubWludEJvbmUoaG93X21hbnlfYm9uZXMpXHJcbiAgICAgICAgICAuZXN0aW1hdGVHYXMoeyBmcm9tOiB3YWxsZXRBZGRyZXNzLCB2YWx1ZTogcHJpY2UgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlc3RpbWF0ZWQgZ2FzXCIsIGdhc0Ftb3VudCk7XHJcbiAgICAgICAgYm9uZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC5taW50Qm9uZShob3dfbWFueV9ib25lcylcclxuICAgICAgICAgIC5zZW5kKHsgZnJvbTogd2FsbGV0QWRkcmVzcywgdmFsdWU6IHByaWNlLCBnYXM6IFN0cmluZyhnYXNBbW91bnQpIH0pXHJcbiAgICAgICAgICAub24oXCJ0cmFuc2FjdGlvbkhhc2hcIiwgZnVuY3Rpb24gKGhhc2gpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2FjdGlvbkhhc2hcIiwgaGFzaCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRTaG93KCFzaG93KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IG5vdCBjb25uZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBvY2tldCBCb25lcyB8IE1pbnQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk1pbnQgQSBCb25lXCIga2V5PVwib2d0aXRsZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIk1pbnQgeW91ciBQb2NrZXQgQm9uZSBoZXJlXCJcclxuICAgICAgICAgIGtleT1cIm9nZGVzY1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIGtleT1cIm9ndHlwZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2JvbmVzLmNvL21pbnQtcGFnZVwiXHJcbiAgICAgICAgICBrZXk9XCJvZ3VybFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9ib25lcy5jby8uZ2lmXCJcclxuICAgICAgICAgIGtleT1cIm9naW1hZ2VcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2JvbmVzLmNvL21pbnQtcGFnZVwiXHJcbiAgICAgICAgICBrZXk9XCJvZ3NpdGVuYW1lXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIGtleT1cInR3Y2FyZFwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRvbWFpblwiIGNvbnRlbnQ9XCJib25lcy5jb1wiIGtleT1cInR3ZG9tYWluXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiXHJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9ib25lcy5jby9taW50LXBhZ2VcIlxyXG4gICAgICAgICAga2V5PVwidHd1cmxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiTWludCBBIEJvbmVcIiBrZXk9XCJ0d3RpdGxlXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIk1pbnQgeW91ciBQb2NrZXQgQm9uZSBoZXJlXCJcclxuICAgICAgICAgIGtleT1cInR3ZGVzY1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYm9uZXMuY28vTG9nby5wbmdcIlxyXG4gICAgICAgICAga2V5PVwidHdpbWFnZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyIHNlY3Rpb24tZGFyayBib2R5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgIDxJbmRleE5hdmJhciAvPlxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtYXV0byBtYi1hdXRvXCI+XHJcbiAgICAgICAgICB7KCghc2hvdyAmJiAhcHJlc2FsZSkgfHwgKCFzaG93ICYmIHByZXNhbGUgJiYgaW5XaGl0ZWxpc3QpIHx8IChmYWtlUHJlc2FsZSkpICAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG10LTUgcHQtNVwiIG1kPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPk1pbnQgeW91ciBQb2NrZXQgQm9uZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG1iLTRcIiBtZD1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjA3IEVUSCBwZXIgUG9ja2V0IEJvbmVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG1iLTVcIiBtZD1cIjVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRsaW5lIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwid2hpdGUgdGV4dCBib2xkXCI+VG90YWwgTWludGVkOjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQgIG14LTAgcHgtMCBteS0wIHB5LTAgYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPD57dG9rZW5zTWludGVkfTwvPiAvIDw+MTAsMDAwPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7IXNpZ25lZEluID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2lnbklufSBjbGFzc05hbWU9XCJidG4gbWV0YW1hc2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2lnbk91dH0gY2xhc3NOYW1lPVwiYnRuIG14LTIgbWV0YW1hc2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKiB7KCghc2hvdyAmJiAhcHJlc2FsZSkgfHwgKCFzaG93ICYmIHByZXNhbGUgJiYgaW5XaGl0ZWxpc3QpKSAmJiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC1hdXRvIG1yLWF1dG8gbWItNFwiIG1kPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjA3IEVUSCBwZXIgUG9ja2V0IEJvbmVzPC9wPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7KCghc2hvdyAmJiAhcHJlc2FsZSkgfHwgKCFzaG93ICYmIHByZXNhbGUgJiYgaW5XaGl0ZWxpc3QpKSAmJiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC1hdXRvIG1yLWF1dG8gbWItNVwiIG1kPVwiNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRsaW5lIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIndoaXRlIHRleHQgYm9sZFwiPlRvdGFsIE1pbnRlZDo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dCAgbXgtMCBweC0wIG15LTAgcHktMCBib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPD57dG9rZW5zTWludGVkfTwvPiAvIDw+MTAsMDAwPC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7IXNpZ25lZEluID8gKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3NpZ25Jbn0gY2xhc3NOYW1lPVwiYnRuIG1ldGFtYXNrLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fSBjbGFzc05hbWU9XCJidG4gbXgtMiBtZXRhbWFzay1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICB7IXByZXNhbGUgJiYgIXNob3cgJiYgIWZha2VQcmVzYWxlICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC1hdXRvIFwiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+MSBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMDcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2FsZVN0YXJ0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAxIHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjMgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjIxIEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMyBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBcIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjYgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjQyIEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgNiBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIiBtci1hdXRvXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xMCBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuNyBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgxMCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAxMCBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKiB7IXByZXNhbGUgJiYgIXNob3cgJiYgIWZha2VQcmVzYWxlICYmIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+NiBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjQyIEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgNiBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgU2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xMCBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoMTApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMTAgcGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfSAqL31cclxuICAgICAgICAgIHtwcmVzYWxlICYmICFzaG93ICYmIGluV2hpdGVsaXN0ICYmICFmYWtlUHJlc2FsZSAmJiAoXHJcbiAgICAgICAgICAgIC8vd2hpdGVsaXN0IHByZXNhbGUgaW4gd2hpdGVsaXN0XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC1hdXRvIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMDcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyFub3RoaW5nRm9yU2FsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMSBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcHJlc2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cHJlc2FsZSAmJiAhc2hvdyAmJiAhaW5XaGl0ZWxpc3QgJiYgIWZha2VQcmVzYWxlICYmIChcclxuICAgICAgICAgICAgLy93aGl0ZWxpc3QgcHJlc2FsZSBub3QgaW4gd2hpdGVsaXN0XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPllvdSZhcG9zO3JlIG5vdCBpbiB0aGUgd2hpdGVsaXN0PC9oMT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+U29ycnksIFlvdSBjYW5ub3QgbWludCBhdCB0aGlzIHRpbWUuPC9wPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cucG9ja2V0Ym9uZXMuY29tL1wiXHJcbiAgICAgICAgICAgICAgICBwYXNzSHJlZj17dHJ1ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJhY2sgdG8gdGhlIGhvbWUgcGFnZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cHJlc2FsZSAmJiAhc2hvdyAmJiBmYWtlUHJlc2FsZSAmJiAoXHJcbiAgICAgICAgICAgIC8vZmFrZSBwcmVzYWxlXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4wNyBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW50IDEgcGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcHJlc2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC1hdXRvIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjMgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjIxIEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMyBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBwcmVzYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtzaG93ICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+VGhhbmsgeW91IGZvciBtaW50aW5nITwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgWW91ciBQb2NrZXQgQm9uZSB3aWxsIGFycml2ZSBhcyBzb29uIGFzIHRoZSB0cmFuc2FjdGlvbiBpc1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cucG9ja2V0Ym9uZXMuY29tL1wiXHJcbiAgICAgICAgICAgICAgICBwYXNzSHJlZj17dHJ1ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJhY2sgdG8gdGhlIGhvbWUgcGFnZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViMyIsIkFERFJFU1MiLCJBQkkiLCJJbmRleE5hdmJhciIsIkhlYWQiLCJMaW5rIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQnV0dG9uIiwiTWludFBhZ2UiLCJzaWduZWRJbiIsInNldFNpZ25lZEluIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJpbldoaXRlbGlzdCIsInNldEluV2hpdGVMaXN0IiwiYm9uZUNvbnRyYWN0Iiwic2V0Qm9uZUNvbnRyYWN0IiwidG9rZW5zTWludGVkIiwic2V0VG9rZW5zTWludGVkIiwidG90YWxTdXBwbHkiLCJzZXRUb3RhbFN1cHBseSIsInNhbGVTdGFydGVkIiwic2V0U2FsZVN0YXJ0ZWQiLCJub3RoaW5nRm9yU2FsZSIsInNldE5vdGhpbmdGb3JTYWxlIiwicHJlc2FsZSIsInNldFByZXNhbGUiLCJib25lUHJpY2UiLCJzZXRCb25lUHJpY2UiLCJzaG93Iiwic2V0U2hvdyIsImZha2VQcmVzYWxlIiwic2V0RmFrZVByZXNhbGUiLCJzaWduSW4iLCJ3aW5kb3ciLCJ3ZWIzIiwiZXRoZXJldW0iLCJhbGVydCIsImVuYWJsZSIsInRoZW4iLCJhY2NvdW50cyIsImV0aCIsIm5ldCIsImdldE5ldHdvcmtUeXBlIiwibmV0d29yayIsImNvbnNvbGUiLCJsb2ciLCJ3YWxsZXQiLCJjYWxsQ29udHJhY3REYXRhIiwiZXJyb3IiLCJzaWduT3V0IiwiQ29udHJhY3QiLCJtZXRob2RzIiwiaXNTYWxlQWN0aXZlIiwiY2FsbCIsInNhbGVib29sIiwiaXNQcmVzYWxlQWN0aXZlIiwicHJlc2FsZWJvb2wiLCJhZGRyZXNzSW5XaGl0ZWxpc3QiLCJ3aGl0ZWxpc3RCb29sIiwiTUFYX1RPS0VOUyIsInByaWNlIiwibWludEJvbmUiLCJob3dfbWFueV9ib25lcyIsIk51bWJlciIsImZyb20iLCJ2YWx1ZSIsInByZXNhbGVNaW50IiwiZXN0aW1hdGVHYXMiLCJnYXNBbW91bnQiLCJzZW5kIiwiZ2FzIiwiU3RyaW5nIiwib24iLCJoYXNoIl0sInNvdXJjZVJvb3QiOiIifQ==