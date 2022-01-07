"use strict";
(() => {
var exports = {};
exports.id = "pages/api/wallets";
exports.ids = ["pages/api/wallets"];
exports.modules = {

/***/ "./pages/api/wallets.js":
/*!******************************!*\
  !*** ./pages/api/wallets.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
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

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/wallets.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3dhbGxldHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7O0FBRUEsTUFBTUUsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDSSxJQUFoQjs7QUFDQSxNQUFJSixHQUFHLENBQUNLLE1BQUosSUFBYyxNQUFsQixFQUEwQjtBQUN4QixXQUFPSixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsUUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1gsR0FBWCxhQUFXQSxHQUFYLHVCQUFXQSxHQUFHLENBQUVJLElBQWhCLENBQW5CO0FBQ0EsUUFBTVEsVUFBVSxHQUFHLE1BQU1kLE1BQU0sQ0FBQ2UsT0FBUCxDQUFlQyxNQUFmLENBQXNCO0FBQzdDQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsRUFBRSxFQUFFUCxVQUFVLENBQUNPO0FBRFYsS0FEc0M7QUFJN0NDLElBQUFBLE1BQU0sRUFBRTtBQUNORCxNQUFBQSxFQUFFLEVBQUVQLFVBQVUsQ0FBQ08sRUFEVDtBQUVORSxNQUFBQSxTQUFTLEVBQUVULFVBQVUsQ0FBQ1U7QUFGaEIsS0FKcUM7QUFRN0NDLElBQUFBLE1BQU0sRUFBRTtBQUNOSixNQUFBQSxFQUFFLEVBQUVQLFVBQVUsQ0FBQ08sRUFEVDtBQUVORSxNQUFBQSxTQUFTLEVBQUVULFVBQVUsQ0FBQ1U7QUFGaEI7QUFScUMsR0FBdEIsQ0FBekI7QUFhQWxCLEVBQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTSyxVQUFULEVBcEJrQyxDQXNCbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQXpDRDs7QUEyQ0EsaUVBQWViLE9BQWY7Ozs7Ozs7Ozs7QUMvQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzaXRlLy4vcGFnZXMvYXBpL3dhbGxldHMuanMiLCJ3ZWJwYWNrOi8vbmV3c2l0ZS9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5jb25zdCBCb25lQXBpID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJwcmludGluZ1wiKTtcclxuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT0gXCJQT1NUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwibWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHdhbGxldERhdGEgPSBKU09OLnBhcnNlKHJlcT8uYm9keSk7XHJcbiAgY29uc3QgdXBzZXJ0VXNlciA9IGF3YWl0IHByaXNtYS53YWxsZXRzLnVwc2VydCh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBpZDogd2FsbGV0RGF0YS5pZCxcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IHtcclxuICAgICAgaWQ6IHdhbGxldERhdGEuaWQsXHJcbiAgICAgIG1pbnRjb3VudDogd2FsbGV0RGF0YS5xdWFudGl0eSxcclxuICAgIH0sXHJcbiAgICBjcmVhdGU6IHtcclxuICAgICAgaWQ6IHdhbGxldERhdGEuaWQsXHJcbiAgICAgIG1pbnRjb3VudDogd2FsbGV0RGF0YS5xdWFudGl0eSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmVzLmpzb24odXBzZXJ0VXNlcik7XHJcblxyXG4gIC8vIGlmICghd2FsbGV0RGF0YS5leGlzdHMpIHtcclxuICAvLyAgIGNvbnN0IHNhdmVkV2FsbGV0ID0gYXdhaXQgcHJpc21hLndhbGxldHMuY3JlYXRlKHtcclxuICAvLyAgICAgZGF0YToge1xyXG4gIC8vICAgICAgIGFkZHJlc3M6IHdhbGxldERhdGEud2FsbGV0LFxyXG4gIC8vICAgICAgIG1pbnRjb3VudDogd2FsbGV0RGF0YS5xdWFudGl0eSxcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgcmVzLmpzb24oc2F2ZWRXYWxsZXQpO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICBjb25zdCBpZFN0cmluZyA9IHdhbGxldERhdGEuaWQudG9TdHJpbmcoKVxyXG4gIC8vICAgY29uc3QgdXBkYXRlZFdhbGxldCA9IGF3YWl0IHByaXNtYS53YWxsZXRzLnVwZGF0ZSh7XHJcbiAgLy8gICAgIHdoZXJlOiB7IGlkOiB3YWxsZXREYXRhLmlkLCB9LFxyXG4gIC8vICAgICBkYXRhOiB7XHJcbiAgLy8gICAgICAgYWRkcmVzczogd2FsbGV0RGF0YS53YWxsZXQsXHJcbiAgLy8gICAgICAgbWludGNvdW50OiB3YWxsZXREYXRhLnF1YW50aXR5LFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gICByZXMuanNvbih1cGRhdGVkV2FsbGV0KTtcclxuICAvLyB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb25lQXBpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiQm9uZUFwaSIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ3YWxsZXREYXRhIiwiSlNPTiIsInBhcnNlIiwidXBzZXJ0VXNlciIsIndhbGxldHMiLCJ1cHNlcnQiLCJ3aGVyZSIsImlkIiwidXBkYXRlIiwibWludGNvdW50IiwicXVhbnRpdHkiLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9