"use strict";
exports.id = 25;
exports.ids = [25];
exports.modules = {

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WO": () => (/* binding */ INFURA_ADDRESS),
/* harmony export */   "o4": () => (/* binding */ ADDRESS),
/* harmony export */   "dL": () => (/* binding */ ABI)
/* harmony export */ });
// GET YOUR INFURA API ENDPOINT FROM https://infura.io/
// https://mainnet.infura.io/v3/53316bd8102e4482849ca5f4b2be716c
const INFURA_ADDRESS = "https://rinkeby.infura.io/v3/53316bd8102e4482849ca5f4b2be716c"; // address contract belongs to

const ADDRESS = "0xEf7791F6e10f26Cd733E5de2f138f6828b35f05A";
const ABI = //abi from etherscan
[{
  "inputs": [],
  "stateMutability": "payable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "approved",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "ApprovalForAll",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "inputs": [],
  "name": "MAX_BY_MINT_WHITELIST",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "MAX_TOKENS",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "MAX_TOKENS_PER_PURCHASE",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "PRESALE_TOKENS",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address[]",
    "name": "addresses",
    "type": "address[]"
  }],
  "name": "addToWhiteList",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "addr",
    "type": "address"
  }],
  "name": "addressInWhitelist",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "baseURI",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "flipPresaleStatus",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "flipSaleStatus",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "getApproved",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }],
  "name": "isApprovedForAll",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "isPresaleActive",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "isSaleActive",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_count",
    "type": "uint256"
  }],
  "name": "mintBone",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [],
  "name": "name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "ownerOf",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_count",
    "type": "uint256"
  }],
  "name": "presaleMint",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [],
  "name": "price",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address[]",
    "name": "addresses",
    "type": "address[]"
  }],
  "name": "removeFromWhiteList",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "reserve",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "_reserveAmount",
    "type": "uint256"
  }],
  "name": "reserveTokens",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }, {
    "internalType": "bytes",
    "name": "_data",
    "type": "bytes"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "operator",
    "type": "address"
  }, {
    "internalType": "bool",
    "name": "approved",
    "type": "bool"
  }],
  "name": "setApprovalForAll",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "string",
    "name": "_baseURI",
    "type": "string"
  }],
  "name": "setBaseURI",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "bytes4",
    "name": "interfaceId",
    "type": "bytes4"
  }],
  "name": "supportsInterface",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
  }],
  "name": "tokenByIndex",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
  }],
  "name": "tokenOfOwnerByIndex",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "tokenURI",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_owner",
    "type": "address"
  }],
  "name": "tokensByOwner",
  "outputs": [{
    "internalType": "uint256[]",
    "name": "",
    "type": "uint256[]"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "w1",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "w2",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "withdrawAll",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}];

/***/ })

};
;