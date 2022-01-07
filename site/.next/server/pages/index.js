(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "web3"
const external_web3_namespaceObject = require("web3");
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_namespaceObject);
;// CONCATENATED MODULE: ./config.js
// GET YOUR INFURA API ENDPOINT FROM https://infura.io/
// https://mainnet.infura.io/v3/53316bd8102e4482849ca5f4b2be716c
const INFURA_ADDRESS = "https://rinkeby.infura.io/v3/53316bd8102e4482849ca5f4b2be716c"; // address contract belongs to

const ADDRESS = "0x7B13C0D3dFd3c651B2E3cB4cc492A64572fa89e2";
const ABI = //abi from etherscan
[{
  inputs: [],
  stateMutability: "payable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "approved",
    type: "address"
  }, {
    indexed: true,
    internalType: "uint256",
    name: "tokenId",
    type: "uint256"
  }],
  name: "Approval",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "operator",
    type: "address"
  }, {
    indexed: false,
    internalType: "bool",
    name: "approved",
    type: "bool"
  }],
  name: "ApprovalForAll",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "previousOwner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "OwnershipTransferred",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    indexed: true,
    internalType: "uint256",
    name: "tokenId",
    type: "uint256"
  }],
  name: "Transfer",
  type: "event"
}, {
  inputs: [],
  name: "MAX_BY_MINT_WHITELIST",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "MAX_TOKENS",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "PRESALE_TOKENS",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "SHUTOFF",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address[]",
    name: "addresses",
    type: "address[]"
  }],
  name: "addToWhiteList",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "addr",
    type: "address"
  }],
  name: "addressInWhitelist",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    internalType: "uint256",
    name: "tokenId",
    type: "uint256"
  }],
  name: "approve",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }],
  name: "balanceOf",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "baseURI",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "flipPresaleStatus",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "flipSaleStatus",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "tokenId",
    type: "uint256"
  }],
  name: "getApproved",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_to",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_reserveAmount",
    type: "uint256"
  }],
  name: "giftTokens",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "operator",
    type: "address"
  }],
  name: "isApprovedForAll",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "isPresaleActive",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "isSaleActive",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "_count",
    type: "uint256"
  }],
  name: "mintBone",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "name",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "tokenId",
    type: "uint256"
  }],
  name: "ownerOf",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "_count",
    type: "uint256"
  }],
  name: "presaleMint",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "price",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address[]",
    name: "addresses",
    type: "address[]"
  }],
  name: "removeFromWhiteList",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "renounceOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    internalType: "uint256",
    name: "tokenId",
    type: "uint256"
  }],
  name: "safeTransferFrom",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    internalType: "uint256",
    name: "tokenId",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "_data",
    type: "bytes"
  }],
  name: "safeTransferFrom",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "operator",
    type: "address"
  }, {
    internalType: "bool",
    name: "approved",
    type: "bool"
  }],
  name: "setApprovalForAll",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "string",
    name: "_baseURI",
    type: "string"
  }],
  name: "setBaseURI",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes4",
    name: "interfaceId",
    type: "bytes4"
  }],
  name: "supportsInterface",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "symbol",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }],
  name: "tokenByIndex",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }],
  name: "tokenOfOwnerByIndex",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "tokenId",
    type: "uint256"
  }],
  name: "tokenURI",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_owner",
    type: "address"
  }],
  name: "tokensByOwner",
  outputs: [{
    internalType: "uint256[]",
    name: "",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalSupply",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    internalType: "uint256",
    name: "tokenId",
    type: "uint256"
  }],
  name: "transferFrom",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "transferOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "w1",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "w2",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "withdrawAll",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}];
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "reactstrap"
const external_reactstrap_namespaceObject = require("reactstrap");
;// CONCATENATED MODULE: ./components/indexnavbar.js


 // nodejs library that concatenates strings


 // reactstrap components



function IndexNavbar() {
  const [navbarColor, setNavbarColor] = external_react_default().useState("navbar-transparent");
  const [brandColor, setbrandColor] = external_react_default().useState("white");
  const [navbarCollapse, setNavbarCollapse] = external_react_default().useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const [dropdownOpen, setDropdownOpen] = external_react_default().useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  external_react_default().useEffect(() => {
    const updateNavbarColor = () => {
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
  return /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Navbar, {
    className: external_classnames_default()("fixed-top", navbarColor),
    expand: "md",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.Container, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "navbar-translate",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.NavbarBrand, {
          "data-placement": "bottom",
          href: "https://www.pocketbones.com/",
          title: "Home",
          children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: external_classnames_default()("nav-brand", brandColor),
            children: "Pocket Bones"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          "aria-expanded": navbarCollapse,
          className: external_classnames_default()("navbar-toggler navbar-toggler", {
            toggled: navbarCollapse
          }),
          onClick: toggleNavbarCollapse,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "navbar-toggler-bar bar1"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "navbar-toggler-bar bar2"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "navbar-toggler-bar bar3"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Collapse, {
        className: "justify-content-end",
        navbar: true,
        isOpen: navbarCollapse,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.Nav, {
          navbar: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.NavItem, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.NavLink, {
              "data-placement": "bottom",
              href: "https://www.pocketbones.com/",
              title: "Home",
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "nav-text",
                children: "Home"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.NavItem, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.NavLink, {
              "data-placement": "bottom",
              href: "/",
              title: "Mint",
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "nav-text",
                children: "Mint"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.NavItem, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.NavLink, {
              "data-placement": "bottom",
              href: "https://www.pocketbones.com/#About",
              title: "About Us",
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "nav-text",
                children: "About"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.NavItem, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.NavLink, {
              "data-placement": "bottom",
              href: "https://www.pocketbones.com/#Roadmap",
              title: "Roadmap",
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "nav-text",
                children: "Roadmap"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.NavItem, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.NavLink, {
              "data-placement": "bottom",
              href: "https://www.pocketbones.com/#Team",
              title: "Team",
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "nav-text",
                children: "Team"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.NavItem, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.NavLink, {
              "data-placement": "bottom",
              href: "https://www.pocketbones.com/#FAQ",
              title: "FAQ",
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "nav-text",
                children: "FAQ"
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.Dropdown, {
            nav: true,
            isOpen: dropdownOpen,
            toggle: toggle,
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.DropdownToggle, {
              nav: true,
              caret: true,
              className: "nav-text",
              children: "Socials"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.DropdownMenu, {
              className: "dropdown",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.NavLink, {
                "data-placement": "bottom",
                href: "https://discord.gg/WbmxKptxWE",
                title: "Discord",
                target: "blank",
                children: [!navbarCollapse && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  width: "35",
                  alt: "",
                  height: "28",
                  src: "/discord.png"
                }), navbarCollapse && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  width: "35",
                  alt: "",
                  height: "35",
                  src: "/discord-1.png"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.NavLink, {
                "data-placement": "bottom",
                href: "https://twitter.com/PocketBones",
                title: "Twitter",
                target: "blank",
                children: [!navbarCollapse && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  width: "35",
                  alt: "",
                  height: "35",
                  src: "/twitter.png"
                }), navbarCollapse && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  width: "35",
                  alt: "",
                  height: "30",
                  src: "/twitter-black.png"
                })]
              })]
            })]
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const indexnavbar = (IndexNavbar);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/fakewhitelist.js
const fakeWhitelist = ["0x80D6364C875b68b5A1e83e5d6dde7Ad9b12b62B6", "0x98eAfb43BB4688d12C561eda173fCe11e7d2c911", "0xdb734624D5f1F53508121684d222e5393fAB2843", "0xC4AA5efbbdFaEe70A94C48bdF82450C29EE9aEc5", "0x7f391BAD72ABde3A6c7eDBd60aaEd2c002Ac61e8"];
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(212);
;// CONCATENATED MODULE: ./pages/index.js












const prisma = new client_.PrismaClient();
async function getServerSideProps() {
  const wallets = await prisma.wallets.findMany();
  return {
    props: {
      initialWallets: wallets
    }
  };
}

async function saveWallet(wallet, quantity, exists) {
  const response = await fetch("api/wallets", {
    method: "POST",
    body: JSON.stringify({
      id: wallet,
      quantity: quantity,
      exists: exists
    })
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
} // core components


function MintPage({
  initialWallets
}) {
  // FOR WALLET
  const {
    0: signedIn,
    1: setSignedIn
  } = (0,external_react_.useState)(false);
  const {
    0: walletAddress,
    1: setWalletAddress
  } = (0,external_react_.useState)(null);
  const {
    0: inWhitelist,
    1: setInWhiteList
  } = (0,external_react_.useState)(false); // FOR MINTING

  const {
    0: boneContract,
    1: setBoneContract
  } = (0,external_react_.useState)(null); // INFO FROM SMART Contract

  const {
    0: tokensMinted,
    1: setTokensMinted
  } = (0,external_react_.useState)(0);
  const {
    0: totalSupply,
    1: setTotalSupply
  } = (0,external_react_.useState)(0);
  const {
    0: saleStarted,
    1: setSaleStarted
  } = (0,external_react_.useState)(false);
  const {
    0: nothingForSale,
    1: setNothingForSale
  } = (0,external_react_.useState)(false);
  const {
    0: presale,
    1: setPresale
  } = (0,external_react_.useState)(false);
  const {
    0: bonePrice,
    1: setBonePrice
  } = (0,external_react_.useState)(0);
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  const {
    0: fakePresale,
    1: setFakePresale
  } = (0,external_react_.useState)(true);
  const {
    0: inFakeWhitelist,
    1: setinFakeWhitelist
  } = (0,external_react_.useState)(false);
  const {
    0: mintCount,
    1: setMintCount
  } = (0,external_react_.useState)(0);
  const {
    0: exists,
    1: setExists
  } = (0,external_react_.useState)(false);

  async function signIn() {
    if (typeof window.web3 !== "undefined") {
      window.web3 = new (external_web3_default())(window.ethereum);
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable().then(function (accounts) {
      window.web3.eth.net.getNetworkType() // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
      .then(network => {
        console.log(network);

        if (network !== "main") {
          alert("You are on " + network + " network. Change network to mainnet or you won't be able to do anything here");
        }
      });
      let wallet = accounts[0];
      setWalletAddress(wallet);
      setSignedIn(true);
      callContractData(wallet);
    }).catch(function (error) {
      console.error(error);
    });
  }

  async function signOut() {
    setSignedIn(false);
  }

  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const boneContract = new window.web3.eth.Contract(ABI, ADDRESS);
    setBoneContract(boneContract);
    const salebool = await boneContract.methods.isSaleActive().call();
    setSaleStarted(salebool);
    const presalebool = await boneContract.methods.isPresaleActive().call();
    setPresale(presalebool);
    const whitelistBool = await boneContract.methods.addressInWhitelist(wallet).call();
    setInWhiteList(whitelistBool);
    setNothingForSale(!presalebool && !salebool);
    const totalSupply = await boneContract.methods.MAX_TOKENS().call();
    setTotalSupply(totalSupply);
    const bonePrice = await boneContract.methods.price().call();
    setBonePrice(bonePrice);
    const tokensMinted = await boneContract.methods.totalSupply().call();
    setTokensMinted(tokensMinted);
    fakeWhitelist.forEach(element => {
      if (element.toUpperCase() == wallet.toUpperCase()) {
        setinFakeWhitelist(true);
        initialWallets.forEach(item => {
          if (item.id.toUpperCase() == wallet.toUpperCase()) {
            setMintCount(item.mintcount);
            setExists(true);
            console.log(item.mintcount);
          }
        });
      }
    });
  }

  async function mintBone(how_many_bones) {
    if (boneContract) {
      const price = Number(bonePrice) * how_many_bones;
      console.log({
        from: walletAddress,
        value: price
      });

      if (presale && !fakePresale) {
        const gasAmount = await boneContract.methods.presaleMint(how_many_bones).estimateGas({
          from: walletAddress,
          value: price
        }).catch(function (error) {
          alert(error);
        });
        console.log("estimated gas", gasAmount);
        boneContract.methods.presaleMint(how_many_bones).send({
          from: walletAddress,
          value: price,
          gas: String(gasAmount)
        }).on("transactionHash", function (hash) {
          console.log("transactionHash", hash);
          saveWallet(walletAddress, mintCount + how_many_bones, exists);
        }).catch(function (error) {
          alert(error);
        });
      } else {
        const gasAmount = await boneContract.methods.mintBone(how_many_bones).estimateGas({
          from: walletAddress,
          value: price
        }).catch(function (error) {
          alert(error);
        });
        console.log(mintCount);
        boneContract.methods.mintBone(how_many_bones).send({
          from: walletAddress,
          value: price,
          gas: String(gasAmount)
        }).on("transactionHash", async function (hash) {
          console.log("transactionHash", hash);
          saveWallet(walletAddress, mintCount + how_many_bones, exists);
          console.log(mintCount);
        }).catch(function (error) {
          alert(error);
        });
      }

      setShow(!show);
    } else {
      console.log("Wallet not connected");
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Pocket Bones | Mint"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "Mint A Bone"
      }, "ogtitle"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "Mint your Pocket Bone here"
      }, "ogdesc"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }, "ogtype"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: "https://bones.co/mint-page"
      }, "ogurl"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "https://bones.co/.gif"
      }, "ogimage"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "https://bones.co/mint-page"
      }, "ogsitename"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, "twcard"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:domain",
        content: "bones.co"
      }, "twdomain"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:url",
        content: "https://bones.co/mint-page"
      }, "twurl"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:title",
        content: "Mint A Bone"
      }, "twtitle"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:description",
        content: "Mint your Pocket Bone here"
      }, "twdesc"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: "https://bones.co/Logo.png"
      }, "twimage")]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "page-header section-dark body",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: ""
      }), /*#__PURE__*/jsx_runtime_.jsx(indexnavbar, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.Container, {
        className: "text-center mt-auto mb-auto",
        children: [(!show && !presale || !show && presale && inWhitelist || fakePresale && !show) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Row, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Col, {
              className: "ml-auto mr-auto mt-5 pt-5",
              md: "12",
              children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "header",
                children: "Mint your Pocket Bones"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Row, {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Col, {
              className: "ml-auto mr-auto mb-4",
              md: "12",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text",
                children: "0.07 ETH per Pocket Bones"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.Col, {
              className: "ml-auto mr-auto mb-5",
              md: "5",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "outline mb-3",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  className: "white text bold",
                  children: "Total Minted:"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                  className: "text  mx-0 px-0 my-0 py-0 bold",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: tokensMinted
                  }), " / ", /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: "10,000"
                  })]
                })]
              }), !signedIn ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                onClick: signIn,
                className: "btn metamask-btn",
                children: "Connect Wallet"
              }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                onClick: signOut,
                className: "btn mx-2 metamask-btn",
                children: "Sign out"
              })]
            })
          })]
        }), !presale && !show && !fakePresale && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.Row, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Col, {
              className: "ml-auto ",
              md: "6",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Card, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.CardBody, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                      className: "text white bold",
                      children: "1 PACK"
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "text",
                      children: "0.07 ETH"
                    }), saleStarted ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                      onClick: () => mintBone(1),
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 1 pack"
                    }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    })]
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Col, {
              className: " mr-auto",
              md: "6",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Card, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.CardBody, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                      className: "text white bold",
                      children: "3 PACK"
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "text",
                      children: "0.21 ETH"
                    }), saleStarted ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                      onClick: () => mintBone(3),
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 3 pack"
                    }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    })]
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.Row, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Col, {
              className: "ml-auto ",
              md: "6",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Card, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.CardBody, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                      className: "text white bold",
                      children: "6 PACK"
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "text",
                      children: "0.42 ETH"
                    }), saleStarted ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                      onClick: () => mintBone(6),
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 6 pack"
                    }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    })]
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Col, {
              className: " mr-auto",
              md: "6",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Card, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.CardBody, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                      className: "text white bold",
                      children: "10 PACK"
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "text",
                      children: "0.7 ETH"
                    }), saleStarted ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                      onClick: () => mintBone(10),
                      className: "btn mx-2 mb-1 button",
                      children: "Mint 10 pack"
                    }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The Sale isn't active yet"
                    })]
                  })
                })
              })
            })]
          })]
        }), presale && !show && inWhitelist && !fakePresale &&
        /*#__PURE__*/
        //whitelist presale in whitelist
        jsx_runtime_.jsx(external_reactstrap_namespaceObject.Row, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Col, {
            className: "ml-auto mr-auto",
            md: "6",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Card, {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.CardBody, {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex auth my-8 font-bold  justify-center items-center vw2",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                    className: "text white bold",
                    children: "1 PACK"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "text",
                    children: "0.07 ETH"
                  }), !nothingForSale ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                    onClick: () => mintBone(1),
                    className: "btn mx-2 mb-1 button",
                    children: "Mint 1 pack"
                  }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                    className: "btn button mx-2 mb-1 ",
                    disabled: true,
                    children: "The presale isn't active yet"
                  })]
                })
              })
            })
          })
        }), presale && !show && !inWhitelist && !fakePresale &&
        /*#__PURE__*/
        //whitelist presale not in whitelist
        (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "header",
            children: "You're not in the whitelist"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text",
            children: "Sorry, You cannot mint at this time."
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            activeClass: "active",
            href: "https://www.pocketbones.com/",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
              className: "btn button mx-2 mb-1",
              children: "Back to the home page"
            })
          })]
        }), !show && fakePresale &&
        /*#__PURE__*/
        //fake presale
        jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_namespaceObject.Row, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Col, {
              className: "ml-auto mr-auto",
              md: "6",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Card, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.CardBody, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                      className: "text white bold",
                      children: "1 PACK"
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "text",
                      children: "0.07 ETH"
                    }), saleStarted ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                      children: inFakeWhitelist ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: mintCount < 3 ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                          onClick: () => {
                            mintBone(1);
                          },
                          className: "btn mx-2 mb-1 button",
                          children: "Mint 1 pack"
                        }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                          onClick: () => mintBone(1),
                          className: "btn mx-2 mb-1 button",
                          disabled: true,
                          children: "You've already minted your presale PocketBones"
                        })
                      }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                        onClick: () => mintBone(1),
                        className: "btn mx-2 mb-1 button",
                        disabled: true,
                        children: "You are not in the presale list"
                      })
                    }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The presale isn't active yet"
                    })]
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Col, {
              className: "ml-auto mr-auto",
              md: "6",
              children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Card, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.CardBody, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "flex auth my-8 font-bold  justify-center items-center vw2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                      className: "text white bold",
                      children: "3 PACK"
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: "text",
                      children: "0.21 ETH"
                    }), saleStarted ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                      children: inFakeWhitelist ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: mintCount == 0 ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                          onClick: () => mintBone(3),
                          className: "btn mx-2 mb-1 button",
                          children: "Mint 3 pack"
                        }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                          className: "btn mx-2 mb-1 button",
                          disabled: true,
                          children: "Not enough enough left, mint 1 instead"
                        })
                      }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                        className: "btn mx-2 mb-1 button",
                        disabled: true,
                        children: "You are not in the presale list"
                      })
                    }) : /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
                      className: "btn button mx-2 mb-1 ",
                      disabled: true,
                      children: "The presale isn't active yet"
                    })]
                  })
                })
              })
            })]
          })
        }), show && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "header",
            children: "Thank you for minting!"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text",
            children: "Your Pocket Bone will arrive as soon as the transaction is processed"
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            activeClass: "active",
            href: "https://www.pocketbones.com/",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_namespaceObject.Button, {
              className: "btn button mx-2 mb-1",
              children: "Back to the home page"
            })
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ const pages = (MintPage);

/***/ }),

/***/ 212:
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61], () => (__webpack_exec__(42)));
module.exports = __webpack_exports__;

})();