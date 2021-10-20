"use strict";
(() => {
var exports = {};
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_)
});

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(25);
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(409);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
;// CONCATENATED MODULE: ./database/TraitsFinal.json
;// CONCATENATED MODULE: ./pages/api/[id].js

 // import the json containing all metadata. not recommended, try to fetch the database from a middleware if possible, I use MONGODB for example


const infuraAddress = config/* INFURA_ADDRESS */.WO;

const BoneApi = async (req, res) => {
  // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  const provider = new (external_web3_default()).providers.HttpProvider(infuraAddress);
  const web3infura = new (external_web3_default())(provider);
  const boneContract = new web3infura.eth.Contract(config/* ABI */.dL, config/* ADDRESS */.o4); // IF YOU ARE USING INSTA REVEAL MODEL, USE THIS TO GET HOW MANY NFTS ARE MINTED

  const totalSupply = boneContract.methods.totalSupply().call();
  console.log(totalSupply); // THE ID YOU ASKED IN THE URL

  const query = req.query.id; // IF YOU ARE USING INSTA REVEAL MODEL, UNCOMMENT THIS AND COMMENT THE TWO LINES BELOW

  if (parseInt(query) < 10000) {
    let tokenName = `#${query}`;
    const signatures = [137, 883, 1327, 1781, 2528, 2763, 3833, 5568, 5858, 6585, 6812, 7154, 8412];
    const trait = TraitsFinal_namespaceObject[parseInt(query)]; // const trait = traits[ Math.floor(Math.random() * 8888) ] // for testing on rinkeby 
    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards

    let metadata = {}; // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA

    if (signatures.includes(parseInt(query))) {
      metadata = {
        "name": tokenName,
        "description": "10,000 resurrected skeletons residing on the Ethereum blockchain",
        "tokenId": parseInt(id),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url": "https://www.pocket-bones.co",
        "attributes": [{
          "trait_type": "Signature Series",
          "value": trait["Signature Series"]
        }]
      }; // console.log(metadata)
    } else {
      // GENERAL SUCCULENT METADATA
      metadata = {
        "name": tokenName,
        "description": "10,000 resurrected skeletons residing on the Ethereum blockchain",
        "tokenId": parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url": "https://www.pocket-bones.co",
        "attributes": [{
          "trait_type": "Background",
          "value": trait["Background"]
        }, {
          "trait_type": "Plant",
          "value": trait["Plant"]
        }, {
          "trait_type": "Pot",
          "value": trait["Pot"]
        }, {
          "trait_type": "Face",
          "value": trait["Face"]
        }, {
          "trait_type": "Pet",
          "value": trait["Pet"]
        }, {
          "trait_type": "Statue",
          "value": trait["Statue"]
        }, {
          "trait_type": "Buddy",
          "value": trait["Buddy"]
        }]
      };
    }

    res.statusCode = 200;
    res.json(metadata);
  } else {
    res.statuscode = 404;
    res.json({
      error: "The Pocket Bone you requested is out of range"
    });
  }
};

/* harmony default export */ const _id_ = (BoneApi);

/***/ }),

/***/ 409:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [25], () => (__webpack_exec__(645)));
module.exports = __webpack_exports__;

})();