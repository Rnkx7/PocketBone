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

  var FAKE_PRESALE = false;

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

              if (!presale) {
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
        children: [(!show && !presale || !show && presale && inWhitelist) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
            className: "ml-auto mr-auto mt-5 pt-5",
            md: "12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              className: "header",
              children: "Mint your Pocket Bones"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 13
        }, this), (!show && !presale || !show && presale && inWhitelist) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Col, {
            className: "ml-auto mr-auto mb-4",
            md: "12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text",
              children: "0.07 ETH per Pocket Bones"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
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
                lineNumber: 211,
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
                lineNumber: 212,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 17
            }, this), !signedIn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
              onClick: signIn,
              className: "btn metamask-btn",
              children: "Connect Wallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 19
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
              onClick: signOut,
              className: "btn mx-2 metamask-btn",
              children: "Sign out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 13
        }, this), !presale && !show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
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
                    lineNumber: 235,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.07 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 23
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(1);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 1 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
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
                    lineNumber: 257,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.21 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 23
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(3);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 3 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }, this), !presale && !show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Row, {
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
                    lineNumber: 283,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.42 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 23
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(6);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 6 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 293,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
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
                    lineNumber: 305,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.7 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 306,
                    columnNumber: 23
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(10);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 10 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 315,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 304,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 13
        }, this), presale && !show && inWhitelist &&
        /*#__PURE__*/
        //presale
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
                    lineNumber: 332,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.07 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 333,
                    columnNumber: 23
                  }, this), !nothingForSale ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(1);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 1 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 335,
                    columnNumber: 25
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The presale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 331,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 13
        }, this), presale && !show && !inWhitelist &&
        /*#__PURE__*/
        //presale
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "header",
            children: "You're not in the whitelist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Sorry, You cannot mint at this time."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
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
              lineNumber: 362,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 15
          }, this)]
        }, void 0, true), show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "header",
            children: "Thank you for minting!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Your Pocket Bone will arrive as soon as the transaction is processed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 371,
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
              lineNumber: 380,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 375,
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

_s(MintPage, "nN65OjwKabpHLkth0R9meqm1uP4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTBiMTk4ZDM2Y2VlYWUxMTExYjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQSxTQUFTZSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCO0FBRGtCLGtCQUVjZCwrQ0FBUSxDQUFDLEtBQUQsQ0FGdEI7QUFBQSxNQUVYZSxRQUZXO0FBQUEsTUFFREMsV0FGQzs7QUFBQSxtQkFHd0JoQiwrQ0FBUSxDQUFDLElBQUQsQ0FIaEM7QUFBQSxNQUdYaUIsYUFIVztBQUFBLE1BR0lDLGdCQUhKOztBQUFBLG1CQUlvQmxCLCtDQUFRLENBQUMsS0FBRCxDQUo1QjtBQUFBLE1BSVhtQixXQUpXO0FBQUEsTUFJRUMsY0FKRixrQkFNbEI7OztBQU5rQixtQkFPc0JwQiwrQ0FBUSxDQUFDLElBQUQsQ0FQOUI7QUFBQSxNQU9YcUIsWUFQVztBQUFBLE1BT0dDLGVBUEgsa0JBU2xCOzs7QUFUa0IsbUJBVXNCdEIsK0NBQVEsQ0FBQyxDQUFELENBVjlCO0FBQUEsTUFVWHVCLFlBVlc7QUFBQSxNQVVHQyxlQVZIOztBQUFBLG1CQVdvQnhCLCtDQUFRLENBQUMsQ0FBRCxDQVg1QjtBQUFBLE1BV1h5QixXQVhXO0FBQUEsTUFXRUMsY0FYRjs7QUFBQSxtQkFZb0IxQiwrQ0FBUSxDQUFDLEtBQUQsQ0FaNUI7QUFBQSxNQVlYMkIsV0FaVztBQUFBLE1BWUVDLGNBWkY7O0FBQUEsbUJBYTBCNUIsK0NBQVEsQ0FBQyxLQUFELENBYmxDO0FBQUEsTUFhWDZCLGNBYlc7QUFBQSxNQWFLQyxpQkFiTDs7QUFBQSxtQkFjWTlCLCtDQUFRLENBQUMsS0FBRCxDQWRwQjtBQUFBLE1BY1grQixPQWRXO0FBQUEsTUFjRkMsVUFkRTs7QUFBQSxvQkFlZ0JoQywrQ0FBUSxDQUFDLENBQUQsQ0FmeEI7QUFBQSxNQWVYaUMsU0Fm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QUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUEsd0JBakxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdDRjtBQUFBLGtCQURGO0FBdVBEOztHQTFYUXJCOztLQUFBQTtBQTRYVCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBRERSRVNTLCBBQkkgfSBmcm9tIFwiLi4vY29uZmlnLmpzXCI7XHJcbmltcG9ydCBJbmRleE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleG5hdmJhclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbi8vIHJlYWN0c3RyYXAgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkLCBDYXJkQm9keSwgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5mdW5jdGlvbiBNaW50UGFnZSgpIHtcclxuICAvLyBGT1IgV0FMTEVUXHJcbiAgY29uc3QgW3NpZ25lZEluLCBzZXRTaWduZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2luV2hpdGVsaXN0LCBzZXRJbldoaXRlTGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIEZPUiBNSU5USU5HXHJcbiAgY29uc3QgW2JvbmVDb250cmFjdCwgc2V0Qm9uZUNvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyBJTkZPIEZST00gU01BUlQgQ29udHJhY3RcclxuICBjb25zdCBbdG9rZW5zTWludGVkLCBzZXRUb2tlbnNNaW50ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsU3VwcGx5LCBzZXRUb3RhbFN1cHBseV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2FsZVN0YXJ0ZWQsIHNldFNhbGVTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbm90aGluZ0ZvclNhbGUsIHNldE5vdGhpbmdGb3JTYWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJlc2FsZSwgc2V0UHJlc2FsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2JvbmVQcmljZSwgc2V0Qm9uZVByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBGQUtFX1BSRVNBTEUgPSBmYWxzZTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIk5vIEV0aGVyZXVtIGludGVyZmFjZSBpbmplY3RlZCBpbnRvIGJyb3dzZXIuIFJlYWQtb25seSBhY2Nlc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmV0aGVyZXVtXHJcbiAgICAgIC5lbmFibGUoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoYWNjb3VudHMpIHtcclxuICAgICAgICB3aW5kb3cud2ViMy5ldGgubmV0XHJcbiAgICAgICAgICAuZ2V0TmV0d29ya1R5cGUoKVxyXG4gICAgICAgICAgLy8gY2hlY2tzIGlmIGNvbm5lY3RlZCBuZXR3b3JrIGlzIG1haW5uZXQgKGNoYW5nZSB0aGlzIHRvIHJpbmtlYnkgaWYgeW91IHdhbm5hIHRlc3Qgb24gdGVzdG5ldClcclxuICAgICAgICAgIC50aGVuKChuZXR3b3JrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldHdvcmspO1xyXG4gICAgICAgICAgICBpZiAobmV0d29yayAhPT0gXCJtYWluXCIpIHtcclxuICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgIFwiWW91IGFyZSBvbiBcIiArXHJcbiAgICAgICAgICAgICAgICAgIG5ldHdvcmsgK1xyXG4gICAgICAgICAgICAgICAgICBcIiBuZXR3b3JrLiBDaGFuZ2UgbmV0d29yayB0byBtYWlubmV0IG9yIHlvdSB3b24ndCBiZSBhYmxlIHRvIGRvIGFueXRoaW5nIGhlcmVcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB3YWxsZXQgPSBhY2NvdW50c1swXTtcclxuICAgICAgICBzZXRXYWxsZXRBZGRyZXNzKHdhbGxldCk7XHJcbiAgICAgICAgc2V0U2lnbmVkSW4odHJ1ZSk7XHJcbiAgICAgICAgY2FsbENvbnRyYWN0RGF0YSh3YWxsZXQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICAgIHNldFNpZ25lZEluKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGNhbGxDb250cmFjdERhdGEod2FsbGV0KSB7XHJcbiAgICAvLyBsZXQgYmFsYW5jZSA9IGF3YWl0IHdlYjMuZXRoLmdldEJhbGFuY2Uod2FsbGV0KTtcclxuICAgIC8vIHNldFdhbGxldEJhbGFuY2UoYmFsYW5jZSlcclxuICAgIGNvbnN0IGJvbmVDb250cmFjdCA9IG5ldyB3aW5kb3cud2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHNldEJvbmVDb250cmFjdChib25lQ29udHJhY3QpO1xyXG5cclxuICAgIGNvbnN0IHNhbGVib29sID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMuaXNTYWxlQWN0aXZlKCkuY2FsbCgpO1xyXG4gICAgc2V0U2FsZVN0YXJ0ZWQoc2FsZWJvb2wpO1xyXG5cclxuICAgIGNvbnN0IHByZXNhbGVib29sID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMuaXNQcmVzYWxlQWN0aXZlKCkuY2FsbCgpO1xyXG4gICAgc2V0UHJlc2FsZShwcmVzYWxlYm9vbCk7XHJcblxyXG4gICAgY29uc3Qgd2hpdGVsaXN0Qm9vbCA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgIC5hZGRyZXNzSW5XaGl0ZWxpc3Qod2FsbGV0KVxyXG4gICAgICAuY2FsbCgpO1xyXG4gICAgc2V0SW5XaGl0ZUxpc3Qod2hpdGVsaXN0Qm9vbCk7XHJcblxyXG4gICAgc2V0Tm90aGluZ0ZvclNhbGUoIXByZXNhbGVib29sICYmICFzYWxlYm9vbCk7XHJcblxyXG4gICAgY29uc3QgdG90YWxTdXBwbHkgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kcy5NQVhfVE9LRU5TKCkuY2FsbCgpO1xyXG4gICAgc2V0VG90YWxTdXBwbHkodG90YWxTdXBwbHkpO1xyXG5cclxuICAgIGNvbnN0IGJvbmVQcmljZSA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzLnByaWNlKCkuY2FsbCgpO1xyXG4gICAgc2V0Qm9uZVByaWNlKGJvbmVQcmljZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zTWludGVkID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMudG90YWxTdXBwbHkoKS5jYWxsKCk7XHJcbiAgICBzZXRUb2tlbnNNaW50ZWQodG9rZW5zTWludGVkKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG1pbnRCb25lKGhvd19tYW55X2JvbmVzKSB7XHJcbiAgICBpZiAoYm9uZUNvbnRyYWN0KSB7XHJcbiAgICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKGJvbmVQcmljZSkgKiBob3dfbWFueV9ib25lcztcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHsgZnJvbTogd2FsbGV0QWRkcmVzcywgdmFsdWU6IHByaWNlIH0pO1xyXG4gICAgICBpZiAocHJlc2FsZSkge1xyXG4gICAgICAgIGNvbnN0IGdhc0Ftb3VudCA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAucHJlc2FsZU1pbnQoaG93X21hbnlfYm9uZXMpXHJcbiAgICAgICAgICAuZXN0aW1hdGVHYXMoeyBmcm9tOiB3YWxsZXRBZGRyZXNzLCB2YWx1ZTogcHJpY2UgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlc3RpbWF0ZWQgZ2FzXCIsIGdhc0Ftb3VudCk7XHJcbiAgICAgICAgYm9uZUNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC5wcmVzYWxlTWludChob3dfbWFueV9ib25lcylcclxuICAgICAgICAgIC5zZW5kKHsgZnJvbTogd2FsbGV0QWRkcmVzcywgdmFsdWU6IHByaWNlLCBnYXM6IFN0cmluZyhnYXNBbW91bnQpIH0pXHJcbiAgICAgICAgICAub24oXCJ0cmFuc2FjdGlvbkhhc2hcIiwgZnVuY3Rpb24gKGhhc2gpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2FjdGlvbkhhc2hcIiwgaGFzaCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBnYXNBbW91bnQgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLm1pbnRCb25lKGhvd19tYW55X2JvbmVzKVxyXG4gICAgICAgICAgLmVzdGltYXRlR2FzKHsgZnJvbTogd2FsbGV0QWRkcmVzcywgdmFsdWU6IHByaWNlIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXN0aW1hdGVkIGdhc1wiLCBnYXNBbW91bnQpO1xyXG4gICAgICAgIGJvbmVDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAubWludEJvbmUoaG93X21hbnlfYm9uZXMpXHJcbiAgICAgICAgICAuc2VuZCh7IGZyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZSwgZ2FzOiBTdHJpbmcoZ2FzQW1vdW50KSB9KVxyXG4gICAgICAgICAgLm9uKFwidHJhbnNhY3Rpb25IYXNoXCIsIGZ1bmN0aW9uIChoYXNoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNhY3Rpb25IYXNoXCIsIGhhc2gpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0U2hvdyghc2hvdyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIldhbGxldCBub3QgY29ubmVjdGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Qb2NrZXQgQm9uZXMgfCBNaW50PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNaW50IEEgQm9uZVwiIGtleT1cIm9ndGl0bGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJNaW50IHlvdXIgUG9ja2V0IEJvbmUgaGVyZVwiXHJcbiAgICAgICAgICBrZXk9XCJvZ2Rlc2NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiBrZXk9XCJvZ3R5cGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXHJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9ib25lcy5jby9taW50LXBhZ2VcIlxyXG4gICAgICAgICAga2V5PVwib2d1cmxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYm9uZXMuY28vLmdpZlwiXHJcbiAgICAgICAgICBrZXk9XCJvZ2ltYWdlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9ib25lcy5jby9taW50LXBhZ2VcIlxyXG4gICAgICAgICAga2V5PVwib2dzaXRlbmFtZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiBrZXk9XCJ0d2NhcmRcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpkb21haW5cIiBjb250ZW50PVwiYm9uZXMuY29cIiBrZXk9XCJ0d2RvbWFpblwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYm9uZXMuY28vbWludC1wYWdlXCJcclxuICAgICAgICAgIGtleT1cInR3dXJsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIk1pbnQgQSBCb25lXCIga2V5PVwidHd0aXRsZVwiIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJNaW50IHlvdXIgUG9ja2V0IEJvbmUgaGVyZVwiXHJcbiAgICAgICAgICBrZXk9XCJ0d2Rlc2NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2JvbmVzLmNvL0xvZ28ucG5nXCJcclxuICAgICAgICAgIGtleT1cInR3aW1hZ2VcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlciBzZWN0aW9uLWRhcmsgYm9keVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICA8SW5kZXhOYXZiYXIgLz5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG8gbWItYXV0b1wiPlxyXG4gICAgICAgICAgeygoIXNob3cgJiYgIXByZXNhbGUpIHx8ICghc2hvdyAmJiBwcmVzYWxlICYmIGluV2hpdGVsaXN0KSkgJiYgKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG10LTUgcHQtNVwiIG1kPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIj5NaW50IHlvdXIgUG9ja2V0IEJvbmVzPC9oMT5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgeygoIXNob3cgJiYgIXByZXNhbGUpIHx8ICghc2hvdyAmJiBwcmVzYWxlICYmIGluV2hpdGVsaXN0KSkgJiYgKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG1iLTRcIiBtZD1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4wNyBFVEggcGVyIFBvY2tldCBCb25lczwvcD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgeygoIXNob3cgJiYgIXByZXNhbGUpIHx8ICghc2hvdyAmJiBwcmVzYWxlICYmIGluV2hpdGVsaXN0KSkgJiYgKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG1iLTVcIiBtZD1cIjVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0bGluZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ3aGl0ZSB0ZXh0IGJvbGRcIj5Ub3RhbCBNaW50ZWQ6PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQgIG14LTAgcHgtMCBteS0wIHB5LTAgYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDw+e3Rva2Vuc01pbnRlZH08Lz4gLyA8PjEwLDAwMDwvPlxyXG4gICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgeyFzaWduZWRJbiA/IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzaWduSW59IGNsYXNzTmFtZT1cImJ0biBtZXRhbWFzay1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2lnbk91dH0gY2xhc3NOYW1lPVwiYnRuIG14LTIgbWV0YW1hc2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2lnbiBvdXRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7IXByZXNhbGUgJiYgIXNob3cgJiYgKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBcIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMDcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAxIHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCIgbXItYXV0b1wiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjMgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4yMSBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c2FsZVN0YXJ0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gbXgtMiBtYi0xIGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBNaW50IDMgcGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgeyFwcmVzYWxlICYmICFzaG93ICYmIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+NiBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjQyIEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgNiBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgU2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xMCBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbWludEJvbmUoMTApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMTAgcGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3ByZXNhbGUgJiYgIXNob3cgJiYgaW5XaGl0ZWxpc3QgJiYgIChcclxuICAgICAgICAgICAgLy9wcmVzYWxlXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC1hdXRvIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMDcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyFub3RoaW5nRm9yU2FsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1pbnRCb25lKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnQgMSBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcHJlc2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7cHJlc2FsZSAmJiAhc2hvdyAmJiAhaW5XaGl0ZWxpc3QgJiYgKFxyXG4gICAgICAgICAgICAvL3ByZXNhbGVcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+WW91JmFwb3M7cmUgbm90IGluIHRoZSB3aGl0ZWxpc3Q8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5Tb3JyeSwgWW91IGNhbm5vdCBtaW50IGF0IHRoaXMgdGltZS48L3A+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5wb2NrZXRib25lcy5jb20vXCJcclxuICAgICAgICAgICAgICAgIHBhc3NIcmVmPXt0cnVlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgQmFjayB0byB0aGUgaG9tZSBwYWdlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtzaG93ICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCI+VGhhbmsgeW91IGZvciBtaW50aW5nITwvaDE+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgWW91ciBQb2NrZXQgQm9uZSB3aWxsIGFycml2ZSBhcyBzb29uIGFzIHRoZSB0cmFuc2FjdGlvbiBpc1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cucG9ja2V0Ym9uZXMuY29tL1wiXHJcbiAgICAgICAgICAgICAgICBwYXNzSHJlZj17dHJ1ZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJhY2sgdG8gdGhlIGhvbWUgcGFnZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViMyIsIkFERFJFU1MiLCJBQkkiLCJJbmRleE5hdmJhciIsIkhlYWQiLCJMaW5rIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQnV0dG9uIiwiTWludFBhZ2UiLCJzaWduZWRJbiIsInNldFNpZ25lZEluIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJpbldoaXRlbGlzdCIsInNldEluV2hpdGVMaXN0IiwiYm9uZUNvbnRyYWN0Iiwic2V0Qm9uZUNvbnRyYWN0IiwidG9rZW5zTWludGVkIiwic2V0VG9rZW5zTWludGVkIiwidG90YWxTdXBwbHkiLCJzZXRUb3RhbFN1cHBseSIsInNhbGVTdGFydGVkIiwic2V0U2FsZVN0YXJ0ZWQiLCJub3RoaW5nRm9yU2FsZSIsInNldE5vdGhpbmdGb3JTYWxlIiwicHJlc2FsZSIsInNldFByZXNhbGUiLCJib25lUHJpY2UiLCJzZXRCb25lUHJpY2UiLCJzaG93Iiwic2V0U2hvdyIsIkZBS0VfUFJFU0FMRSIsInNpZ25JbiIsIndpbmRvdyIsIndlYjMiLCJldGhlcmV1bSIsImFsZXJ0IiwiZW5hYmxlIiwidGhlbiIsImFjY291bnRzIiwiZXRoIiwibmV0IiwiZ2V0TmV0d29ya1R5cGUiLCJuZXR3b3JrIiwiY29uc29sZSIsImxvZyIsIndhbGxldCIsImNhbGxDb250cmFjdERhdGEiLCJlcnJvciIsInNpZ25PdXQiLCJDb250cmFjdCIsIm1ldGhvZHMiLCJpc1NhbGVBY3RpdmUiLCJjYWxsIiwic2FsZWJvb2wiLCJpc1ByZXNhbGVBY3RpdmUiLCJwcmVzYWxlYm9vbCIsImFkZHJlc3NJbldoaXRlbGlzdCIsIndoaXRlbGlzdEJvb2wiLCJNQVhfVE9LRU5TIiwicHJpY2UiLCJtaW50Qm9uZSIsImhvd19tYW55X2JvbmVzIiwiTnVtYmVyIiwiZnJvbSIsInZhbHVlIiwicHJlc2FsZU1pbnQiLCJlc3RpbWF0ZUdhcyIsImdhc0Ftb3VudCIsInNlbmQiLCJnYXMiLCJTdHJpbmciLCJvbiIsImhhc2giXSwic291cmNlUm9vdCI6IiJ9