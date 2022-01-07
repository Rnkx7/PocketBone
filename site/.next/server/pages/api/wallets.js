"use strict";
(() => {
var exports = {};
exports.id = 895;
exports.ids = [895];
exports.modules = {

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();

const BoneApi = async (req, res) => {
  console.log("printing");
  console.log(req.body);

  if (req.method != "POST") {
    return res.status(405).json({
      message: "method not allowed"
    });
  }

  const walletData = JSON.parse(req === null || req === void 0 ? void 0 : req.body);
  const upsertUser = await prisma.wallets.upsert({
    where: {
      id: walletData.id
    },
    update: {
      id: walletData.id,
      mintcount: walletData.quantity
    },
    create: {
      id: walletData.id,
      mintcount: walletData.quantity
    }
  });
  res.json(upsertUser); // if (!walletData.exists) {
  //   const savedWallet = await prisma.wallets.create({
  //     data: {
  //       address: walletData.wallet,
  //       mintcount: walletData.quantity,
  //     },
  //   });
  //   res.json(savedWallet);
  // } else {
  //   const idString = walletData.id.toString()
  //   const updatedWallet = await prisma.wallets.update({
  //     where: { id: walletData.id, },
  //     data: {
  //       address: walletData.wallet,
  //       mintcount: walletData.quantity,
  //     },
  //   });
  //   res.json(updatedWallet);
  // }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoneApi);

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(27));
module.exports = __webpack_exports__;

})();