"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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





var _jsxFileName = "C:\\Users\\Robert\\Documents\\Code\\nft\\PocketBone\\site\\pages\\index.js",
    _s = $RefreshSig$();






 // reactstrap components

 // core components

function MintPage() {
  _s();

  // for sign out button
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

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
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

  function signIn() {
    return _signIn.apply(this, arguments);
  }

  function _signIn() {
    _signIn = (0,C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (typeof window.web3 !== 'undefined') {
                // Use existing gateway
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
                // Handle error. Likely the user rejected the login
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

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    signIn(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function signOut() {
    return _signOut.apply(this, arguments);
  }

  function _signOut() {
    _signOut = (0,C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
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
    _callContractData = (0,C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(wallet) {
      var boneContract, salebool, presalebool, whitelistBool, totalSupply, bonePrice, tokensMinted;
      return C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
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
              // console.log("saleisActive" , salebool)
              setSaleStarted(salebool);
              _context3.next = 8;
              return boneContract.methods.isPresaleActive().call();

            case 8:
              presalebool = _context3.sent;
              // console.log("saleisActive" , salebool)
              setPresale(presalebool);
              _context3.next = 12;
              return boneContract.methods.addressInWhitelist(wallet).call();

            case 12:
              whitelistBool = _context3.sent;
              setInWhiteList(whitelistBool);
              setNothingForSale(presalebool && salebool);
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
    _mintBone = (0,C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(how_many_bones) {
      var price, gasAmount;
      return C_Users_Robert_Documents_Code_nft_PocketBone_site_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!boneContract) {
                _context4.next = 11;
                break;
              }

              price = Number(bonePrice) * how_many_bones;
              _context4.next = 4;
              return boneContract.methods.mintBone(how_many_bones).estimateGas({
                from: walletAddress,
                value: price
              });

            case 4:
              gasAmount = _context4.sent;
              console.log("estimated gas", gasAmount);
              console.log({
                from: walletAddress,
                value: price
              });

              if (presale) {
                boneContract.methods.presaleMint(how_many_bones).send({
                  from: walletAddress,
                  value: price,
                  gas: String(gasAmount)
                }).on('transactionHash', function (hash) {
                  console.log("transactionHash", hash);
                });
              } else {
                boneContract.methods.mintBone(how_many_bones).send({
                  from: walletAddress,
                  value: price,
                  gas: String(gasAmount)
                }).on('transactionHash', function (hash) {
                  console.log("transactionHash", hash);
                });
              }

              setShow(!show);
              _context4.next = 12;
              break;

            case 11:
              console.log("Wallet not connected");

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _mintBone.apply(this, arguments);
  }

  ;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: "Pocket Bones | Mint"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:title",
        content: "Mint A Bone"
      }, "ogtitle", false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:description",
        content: "Mint your Pocket Bone here"
      }, "ogdesc", false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, "ogtype", false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://bones.co/mint-page"
      }, "ogurl", false, {
        fileName: _jsxFileName,
        lineNumber: 159,
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
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, "twcard", false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "twitter:domain",
        content: "bones.co"
      }, "twdomain", false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        property: "twitter:url",
        content: "https://bones.co/mint-page"
      }, "twurl", false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:title",
        content: "Mint A Bone"
      }, "twtitle", false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:description",
        content: "Mint your Pocket Bone here"
      }, "twdesc", false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "twitter:image",
        content: "https://bones.co/Logo.png"
      }, "twimage", false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "page-header section-dark body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_indexnavbar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
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
              lineNumber: 176,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
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
              lineNumber: 183,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
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
                lineNumber: 191,
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
                lineNumber: 192,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 17
            }, this), !signedIn ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
              onClick: signIn,
              className: "btn metamask-btn",
              children: "Connect Wallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 21
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
              onClick: signOut,
              className: "btn mx-2 metamask-btn",
              children: "Sign out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
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
                    lineNumber: 211,
                    columnNumber: 27
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.07 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 27
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(1);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 1 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 31
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 16
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
                    lineNumber: 230,
                    columnNumber: 27
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.21 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 27
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(3);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 3 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 31
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 16
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 16
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
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
                    lineNumber: 253,
                    columnNumber: 27
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.42 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 27
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(6);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 6 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 31
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 16
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
                    lineNumber: 272,
                    columnNumber: 27
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.7 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 273,
                    columnNumber: 27
                  }, this), saleStarted ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(10);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 10 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 31
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The Sale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 16
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 16
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
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
                    lineNumber: 296,
                    columnNumber: 27
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "text",
                    children: "0.07 ETH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 27
                  }, this), !nothingForSale ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    onClick: function onClick() {
                      return mintBone(1);
                    },
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 1 pack"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 299,
                    columnNumber: 31
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The presale isn't active yet"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 303,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 16
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 13
        }, this), presale && !show && !inWhitelist && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "header",
            children: "You're not in the whitelist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Sorry, You cannot mint at this time."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            activeClass: "active",
            href: "/",
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
              className: "btn button mx-2 mb-1",
              children: "Back to the home page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 17
          }, this)]
        }, void 0, true), show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "header",
            children: "Thank you for minting!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text",
            children: "Your Pocket Bone will arrive as soon as the transaction is processed"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            activeClass: "active",
            href: "/",
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, {
              className: "btn button mx-2 mb-1",
              children: "Back to the home page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 17
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(MintPage, "14/hq6x/6RpcpzBAYggFyYNTZTo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODdmNGYyZWZmZDJhZTE0M2EyODUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FZQTs7QUFDQSxTQUFTZSxRQUFULEdBQW9CO0FBQUE7O0FBRWxCO0FBR0E7QUFMa0Isa0JBTWNkLCtDQUFRLENBQUMsS0FBRCxDQU50QjtBQUFBLE1BTVhlLFFBTlc7QUFBQSxNQU1EQyxXQU5DOztBQUFBLG1CQVF3QmhCLCtDQUFRLENBQUMsSUFBRCxDQVJoQztBQUFBLE1BUVhpQixhQVJXO0FBQUEsTUFRSUMsZ0JBUko7O0FBQUEsbUJBVW9CbEIsK0NBQVEsQ0FBQyxLQUFELENBVjVCO0FBQUEsTUFVWG1CLFdBVlc7QUFBQSxNQVVFQyxjQVZGLGtCQVlsQjs7O0FBWmtCLG1CQWFzQnBCLCtDQUFRLENBQUMsSUFBRCxDQWI5QjtBQUFBLE1BYVhxQixZQWJXO0FBQUEsTUFhR0MsZUFiSCxrQkFlbEI7OztBQWZrQixtQkFpQnNCdEIsK0NBQVEsQ0FBQyxDQUFELENBakI5QjtBQUFBLE1BaUJYdUIsWUFqQlc7QUFBQSxNQWlCR0MsZUFqQkg7O0FBQUEsbUJBbUJvQnhCLCtDQUFRLENBQUMsQ0FBRCxDQW5CNUI7QUFBQSxNQW1CWHlCLFdBbkJXO0FBQUEsTUFtQkVDLGNBbkJGOztBQUFBLG1CQXFCb0IxQiwrQ0FBUSxDQUFDLElBQUQsQ0FyQjVCO0FBQUEsTUFxQlgyQixXQXJCVztBQUFBLE1BcUJFQyxjQXJCRjs7QUFBQSxtQkF1QjBCNUIsK0NBQVEsQ0FBQyxLQUFELENBdkJsQztBQUFBLE1BdUJYNkIsY0F2Qlc7QUFBQSxNQXVCS0MsaUJBdkJMOztBQUFBLG1CQXlCWTlCLCtDQUFRLENBQUMsS0FBRCxDQXpCcEI7QUFBQSxNQXlCWCtCLE9BekJXO0FBQUEsTUF5QkZDLFVBekJFOztBQUFBLG9CQTJCZ0JoQywr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O0FBQUE7QUFBQSxrQkFGRixlQUdFLDhEQUFDLGtEQUFEO0FBQU0sdUJBQVcsRUFBQyxRQUFsQjtBQUEyQixnQkFBSSxFQUFDLEdBQWhDO0FBQW9DLG9CQUFRLEVBQUUsSUFBOUM7QUFBQSxtQ0FDRSw4REFBQyw4Q0FBRDtBQUFRLHVCQUFTLEVBQUMsc0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBLHdCQTlJTixFQXNKS2dCLElBQUksaUJBQ0g7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUcscUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0UsOERBQUMsa0RBQUQ7QUFBTSx1QkFBVyxFQUFDLFFBQWxCO0FBQTJCLGdCQUFJLEVBQUMsR0FBaEM7QUFBb0Msb0JBQVEsRUFBRSxJQUE5QztBQUFBLG1DQUNFLDhEQUFDLDhDQUFEO0FBQVEsdUJBQVMsRUFBQyxzQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUEsd0JBdkpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBLGtCQURGO0FBMExEOztHQTVUUXJCOztLQUFBQTtBQThUVCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQge0FERFJFU1MsIEFCSX0gZnJvbSBcIi4uL2NvbmZpZy5qc1wiXHJcbmltcG9ydCBJbmRleE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleG5hdmJhclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rICBmcm9tICduZXh0L2xpbmsnXHJcblxyXG4vLyByZWFjdHN0cmFwIGNvbXBvbmVudHNcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIFJvdyxcclxuICAgIENvbCxcclxuICAgIENhcmQsXHJcbiAgICBDYXJkQm9keSxcclxuICAgIEJ1dHRvblxyXG4gIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcblxyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmZ1bmN0aW9uIE1pbnRQYWdlKCkge1xyXG5cclxuICAvLyBmb3Igc2lnbiBvdXQgYnV0dG9uXHJcblxyXG5cclxuICAvLyBGT1IgV0FMTEVUXHJcbiAgY29uc3QgW3NpZ25lZEluLCBzZXRTaWduZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgW2luV2hpdGVsaXN0LCBzZXRJbldoaXRlTGlzdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgLy8gRk9SIE1JTlRJTkdcclxuICBjb25zdCBbYm9uZUNvbnRyYWN0LCBzZXRCb25lQ29udHJhY3RdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgLy8gSU5GTyBGUk9NIFNNQVJUIENvbnRyYWN0XHJcblxyXG4gIGNvbnN0IFt0b2tlbnNNaW50ZWQsIHNldFRva2Vuc01pbnRlZF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbdG90YWxTdXBwbHksIHNldFRvdGFsU3VwcGx5XSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGNvbnN0IFtzYWxlU3RhcnRlZCwgc2V0U2FsZVN0YXJ0ZWRdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgY29uc3QgW25vdGhpbmdGb3JTYWxlLCBzZXROb3RoaW5nRm9yU2FsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgW3ByZXNhbGUsIHNldFByZXNhbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IFtib25lUHJpY2UsIHNldEJvbmVQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuIFxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4oKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBVc2UgZXhpc3RpbmcgZ2F0ZXdheVxyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIk5vIEV0aGVyZXVtIGludGVyZmFjZSBpbmplY3RlZCBpbnRvIGJyb3dzZXIuIFJlYWQtb25seSBhY2Nlc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChhY2NvdW50cykge1xyXG4gICAgICAgIHdpbmRvdy53ZWIzLmV0aC5uZXQuZ2V0TmV0d29ya1R5cGUoKVxyXG4gICAgICAgIC8vIGNoZWNrcyBpZiBjb25uZWN0ZWQgbmV0d29yayBpcyBtYWlubmV0IChjaGFuZ2UgdGhpcyB0byByaW5rZWJ5IGlmIHlvdSB3YW5uYSB0ZXN0IG9uIHRlc3RuZXQpXHJcbiAgICAgICAgLnRoZW4oKG5ldHdvcmspID0+IHtjb25zb2xlLmxvZyhuZXR3b3JrKTtcclxuICAgICAgICAgIGlmKG5ldHdvcmsgIT09IFwibWFpblwiKXthbGVydChcIllvdSBhcmUgb24gXCIgKyBuZXR3b3JrKyBcIiBuZXR3b3JrLiBDaGFuZ2UgbmV0d29yayB0byBtYWlubmV0IG9yIHlvdSB3b24ndCBiZSBhYmxlIHRvIGRvIGFueXRoaW5nIGhlcmVcIil9IFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICAgbGV0IHdhbGxldCA9IGFjY291bnRzWzBdXHJcbiAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyh3YWxsZXQpXHJcbiAgICAgICAgc2V0U2lnbmVkSW4odHJ1ZSlcclxuICAgICAgICBjYWxsQ29udHJhY3REYXRhKHdhbGxldClcclxuICB9KVxyXG4gIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAvLyBIYW5kbGUgZXJyb3IuIExpa2VseSB0aGUgdXNlciByZWplY3RlZCB0aGUgbG9naW5cclxuICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gIH0pXHJcbiAgfVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IFxyXG4gICAgXHJcbiAgICBzaWduSW4oKVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtdKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduT3V0KCkge1xyXG4gICAgc2V0U2lnbmVkSW4oZmFsc2UpXHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGNhbGxDb250cmFjdERhdGEod2FsbGV0KSB7XHJcbiAgICAvLyBsZXQgYmFsYW5jZSA9IGF3YWl0IHdlYjMuZXRoLmdldEJhbGFuY2Uod2FsbGV0KTtcclxuICAgIC8vIHNldFdhbGxldEJhbGFuY2UoYmFsYW5jZSlcclxuICAgIGNvbnN0IGJvbmVDb250cmFjdCA9IG5ldyB3aW5kb3cud2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKVxyXG4gICAgc2V0Qm9uZUNvbnRyYWN0KGJvbmVDb250cmFjdClcclxuXHJcbiAgICBjb25zdCBzYWxlYm9vbCA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzLmlzU2FsZUFjdGl2ZSgpLmNhbGwoKSBcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2FsZWlzQWN0aXZlXCIgLCBzYWxlYm9vbClcclxuICAgIHNldFNhbGVTdGFydGVkKHNhbGVib29sKVxyXG5cclxuICAgIGNvbnN0IHByZXNhbGVib29sID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMuaXNQcmVzYWxlQWN0aXZlKCkuY2FsbCgpIFxyXG4gICAgLy8gY29uc29sZS5sb2coXCJzYWxlaXNBY3RpdmVcIiAsIHNhbGVib29sKVxyXG4gICAgc2V0UHJlc2FsZShwcmVzYWxlYm9vbClcclxuXHJcbiAgICBjb25zdCB3aGl0ZWxpc3RCb29sID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMuYWRkcmVzc0luV2hpdGVsaXN0KHdhbGxldCkuY2FsbCgpIFxyXG4gICAgc2V0SW5XaGl0ZUxpc3Qod2hpdGVsaXN0Qm9vbClcclxuXHJcbiAgICBzZXROb3RoaW5nRm9yU2FsZShwcmVzYWxlYm9vbCAmJiBzYWxlYm9vbClcclxuXHJcbiAgICBjb25zdCB0b3RhbFN1cHBseSA9IGF3YWl0IGJvbmVDb250cmFjdC5tZXRob2RzLk1BWF9UT0tFTlMoKS5jYWxsKCkgXHJcbiAgICBzZXRUb3RhbFN1cHBseSh0b3RhbFN1cHBseSlcclxuXHJcbiAgICBjb25zdCBib25lUHJpY2UgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kcy5wcmljZSgpLmNhbGwoKSBcclxuICAgIHNldEJvbmVQcmljZShib25lUHJpY2UpXHJcblxyXG4gICAgY29uc3QgdG9rZW5zTWludGVkID0gYXdhaXQgYm9uZUNvbnRyYWN0Lm1ldGhvZHMudG90YWxTdXBwbHkoKS5jYWxsKClcclxuICAgIHNldFRva2Vuc01pbnRlZCh0b2tlbnNNaW50ZWQpXHJcbiAgIFxyXG4gIH1cclxuICBcclxuICBhc3luYyBmdW5jdGlvbiBtaW50Qm9uZShob3dfbWFueV9ib25lcykge1xyXG4gICAgaWYgKGJvbmVDb250cmFjdCkge1xyXG4gXHJcbiAgICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKGJvbmVQcmljZSkgICogaG93X21hbnlfYm9uZXMgXHJcblxyXG4gICAgICBjb25zdCBnYXNBbW91bnQgPSBhd2FpdCBib25lQ29udHJhY3QubWV0aG9kcy5taW50Qm9uZShob3dfbWFueV9ib25lcykuZXN0aW1hdGVHYXMoe2Zyb206IHdhbGxldEFkZHJlc3MsIHZhbHVlOiBwcmljZX0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZXN0aW1hdGVkIGdhc1wiLGdhc0Ftb3VudClcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHtmcm9tOiB3YWxsZXRBZGRyZXNzLCB2YWx1ZTogcHJpY2V9KVxyXG4gICAgICBpZihwcmVzYWxlKXtcclxuICAgICAgICBib25lQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgICAucHJlc2FsZU1pbnQoaG93X21hbnlfYm9uZXMpXHJcbiAgICAgICAgICAgIC5zZW5kKHtmcm9tOiB3YWxsZXRBZGRyZXNzLCB2YWx1ZTogcHJpY2UsIGdhczogU3RyaW5nKGdhc0Ftb3VudCl9KVxyXG4gICAgICAgICAgICAub24oJ3RyYW5zYWN0aW9uSGFzaCcsIGZ1bmN0aW9uKGhhc2gpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNhY3Rpb25IYXNoXCIsIGhhc2gpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBib25lQ29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgICAubWludEJvbmUoaG93X21hbnlfYm9uZXMpXHJcbiAgICAgICAgICAgIC5zZW5kKHtmcm9tOiB3YWxsZXRBZGRyZXNzLCB2YWx1ZTogcHJpY2UsIGdhczogU3RyaW5nKGdhc0Ftb3VudCl9KVxyXG4gICAgICAgICAgICAub24oJ3RyYW5zYWN0aW9uSGFzaCcsIGZ1bmN0aW9uKGhhc2gpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNhY3Rpb25IYXNoXCIsIGhhc2gpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIH0gIFxyXG4gICAgICBzZXRTaG93KCFzaG93KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIldhbGxldCBub3QgY29ubmVjdGVkXCIpXHJcbiAgICB9XHJcbiAgICBcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBvY2tldCBCb25lcyB8IE1pbnQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk1pbnQgQSBCb25lXCIga2V5PVwib2d0aXRsZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJNaW50IHlvdXIgUG9ja2V0IEJvbmUgaGVyZVwiIGtleT1cIm9nZGVzY1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiBrZXk9XCJvZ3R5cGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vYm9uZXMuY28vbWludC1wYWdlXCIga2V5PVwib2d1cmxcIi8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2JvbmVzLmNvLy5naWZcIiBrZXk9XCJvZ2ltYWdlXCIvPiBcclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJodHRwczovL2JvbmVzLmNvL21pbnQtcGFnZVwiIGtleT1cIm9nc2l0ZW5hbWVcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIGtleT1cInR3Y2FyZFwiLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZG9tYWluXCIgY29udGVudD1cImJvbmVzLmNvXCIga2V5PVwidHdkb21haW5cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9ib25lcy5jby9taW50LXBhZ2VcIiBrZXk9XCJ0d3VybFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiTWludCBBIEJvbmVcIiBrZXk9XCJ0d3RpdGxlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJNaW50IHlvdXIgUG9ja2V0IEJvbmUgaGVyZVwiIGtleT1cInR3ZGVzY1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9ib25lcy5jby9Mb2dvLnBuZ1wiIGtleT1cInR3aW1hZ2VcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXIgc2VjdGlvbi1kYXJrIGJvZHlcIj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICA8SW5kZXhOYXZiYXIgLz5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG8gbWItYXV0b1wiPlxyXG4gICAgICAgICAgICB7ICgoIXNob3cgJiYgIXByZXNhbGUpIHx8ICghc2hvdyAmJiBwcmVzYWxlICYmIGluV2hpdGVsaXN0KSkgJiYgIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0byBtdC01IHB0LTVcIiBtZD1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCIgPk1pbnQgeW91ciBQb2NrZXQgQm9uZXM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyAoKCFzaG93ICYmICFwcmVzYWxlKSB8fCAoIXNob3cgJiYgcHJlc2FsZSAmJiBpbldoaXRlbGlzdCkpICYmKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtYXV0byBtci1hdXRvIG1iLTRcIiBtZD1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4wNyBFVEggcGVyIFBvY2tldCBCb25lczwvcD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsgKCghc2hvdyAmJiAhcHJlc2FsZSkgfHwgKCFzaG93ICYmIHByZXNhbGUgJiYgaW5XaGl0ZWxpc3QpKSAmJihcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0byBtYi01XCIgbWQ9XCI1XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGxpbmUgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwid2hpdGUgdGV4dCBib2xkXCI+VG90YWwgTWludGVkOjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0ICBteC0wIHB4LTAgbXktMCBweS0wIGJvbGRcIj48Pnt0b2tlbnNNaW50ZWR9PC8+IC8gPD4xMCwwMDA8Lz48L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7IXNpZ25lZEluID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzaWduSW59IGNsYXNzTmFtZT1cImJ0biBtZXRhbWFzay1idG5cIj5Db25uZWN0IFdhbGxldDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fSBjbGFzc05hbWU9XCJidG4gbXgtMiBtZXRhbWFzay1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNpZ24gb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsgIXByZXNhbGUgJiYgIXNob3cgJiYgKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjEgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuMDcgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gbWludEJvbmUoMSl9IGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAxIHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+MyBQQUNLPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+MC4yMSBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgzKX0gY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW50IDMgcGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIFNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsgIXByZXNhbGUgJiYgIXNob3cgJiYgKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gXCIgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhdXRoIG15LTggZm9udC1ib2xkICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdncyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgd2hpdGUgYm9sZFwiPjYgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuNDIgRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzYWxlU3RhcnRlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gbWludEJvbmUoNil9IGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCA2IHBhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIGNsYXNzTmFtZT1cImJ0biBidXR0b24gbXgtMiBtYi0xIFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBTYWxlIGlzbiZhcG9zO3QgYWN0aXZlIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiIG1yLWF1dG9cIiBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGF1dGggbXktOCBmb250LWJvbGQgIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB2dzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dCB3aGl0ZSBib2xkXCI+MTAgUEFDSzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPjAuNyBFVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NhbGVTdGFydGVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgxMCl9IGNsYXNzTmFtZT1cImJ0biBteC0yIG1iLTEgYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWludCAxMCBwYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMSBcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgU2FsZSBpc24mYXBvczt0IGFjdGl2ZSB5ZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7IHByZXNhbGUgJiYgIXNob3cgJiYgaW5XaGl0ZWxpc3QgJiYoXHJcbiAgICAgICAgICAgIC8vcHJlc2FsZVxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0b1wiIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYXV0aCBteS04IGZvbnQtYm9sZCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHZ3MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0IHdoaXRlIGJvbGRcIj4xIFBBQ0s8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj4wLjA3IEVUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IW5vdGhpbmdGb3JTYWxlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBtaW50Qm9uZSgxKX0gY2xhc3NOYW1lPVwiYnRuIG14LTIgbWItMSBidXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW50IDEgcGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTEgXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHByZXNhbGUgaXNuJmFwb3M7dCBhY3RpdmUgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsgcHJlc2FsZSAmJiAhc2hvdyAmJiAhaW5XaGl0ZWxpc3QgJiYoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJcIiA+WW91JmFwb3M7cmUgbm90IGluIHRoZSB3aGl0ZWxpc3Q8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlNvcnJ5LCBZb3UgY2Fubm90IG1pbnQgYXQgdGhpcyB0aW1lLjwvcD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCIgaHJlZj1cIi9cIiBwYXNzSHJlZj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbiBteC0yIG1iLTFcIj5CYWNrIHRvIHRoZSBob21lIHBhZ2U8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3Nob3cgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyXCIgPlRoYW5rIHlvdSBmb3IgbWludGluZyE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPllvdXIgUG9ja2V0IEJvbmUgd2lsbCBhcnJpdmUgYXMgc29vbiBhcyB0aGUgdHJhbnNhY3Rpb24gaXMgcHJvY2Vzc2VkPC9wPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIiBocmVmPVwiL1wiIHBhc3NIcmVmPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnV0dG9uIG14LTIgbWItMVwiPkJhY2sgdG8gdGhlIGhvbWUgcGFnZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludFBhZ2U7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXZWIzIiwiQUREUkVTUyIsIkFCSSIsIkluZGV4TmF2YmFyIiwiSGVhZCIsIkxpbmsiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDYXJkIiwiQ2FyZEJvZHkiLCJCdXR0b24iLCJNaW50UGFnZSIsInNpZ25lZEluIiwic2V0U2lnbmVkSW4iLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsImluV2hpdGVsaXN0Iiwic2V0SW5XaGl0ZUxpc3QiLCJib25lQ29udHJhY3QiLCJzZXRCb25lQ29udHJhY3QiLCJ0b2tlbnNNaW50ZWQiLCJzZXRUb2tlbnNNaW50ZWQiLCJ0b3RhbFN1cHBseSIsInNldFRvdGFsU3VwcGx5Iiwic2FsZVN0YXJ0ZWQiLCJzZXRTYWxlU3RhcnRlZCIsIm5vdGhpbmdGb3JTYWxlIiwic2V0Tm90aGluZ0ZvclNhbGUiLCJwcmVzYWxlIiwic2V0UHJlc2FsZSIsImJvbmVQcmljZSIsInNldEJvbmVQcmljZSIsInNob3ciLCJzZXRTaG93Iiwic2lnbkluIiwid2luZG93Iiwid2ViMyIsImV0aGVyZXVtIiwiYWxlcnQiLCJlbmFibGUiLCJ0aGVuIiwiYWNjb3VudHMiLCJldGgiLCJuZXQiLCJnZXROZXR3b3JrVHlwZSIsIm5ldHdvcmsiLCJjb25zb2xlIiwibG9nIiwid2FsbGV0IiwiY2FsbENvbnRyYWN0RGF0YSIsImVycm9yIiwic2lnbk91dCIsIkNvbnRyYWN0IiwibWV0aG9kcyIsImlzU2FsZUFjdGl2ZSIsImNhbGwiLCJzYWxlYm9vbCIsImlzUHJlc2FsZUFjdGl2ZSIsInByZXNhbGVib29sIiwiYWRkcmVzc0luV2hpdGVsaXN0Iiwid2hpdGVsaXN0Qm9vbCIsIk1BWF9UT0tFTlMiLCJwcmljZSIsIm1pbnRCb25lIiwiaG93X21hbnlfYm9uZXMiLCJOdW1iZXIiLCJlc3RpbWF0ZUdhcyIsImZyb20iLCJ2YWx1ZSIsImdhc0Ftb3VudCIsInByZXNhbGVNaW50Iiwic2VuZCIsImdhcyIsIlN0cmluZyIsIm9uIiwiaGFzaCJdLCJzb3VyY2VSb290IjoiIn0=