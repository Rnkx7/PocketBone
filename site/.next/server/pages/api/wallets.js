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

  if (!walletData.exists) {
    const createwallet = await prisma.wallets.create({
      data: {
        mintcount: walletData.quantity,
        address: walletData.address
      }
    });
    res.json(createwallet);
  } else {
    const updateUser = await prisma.wallets.update({
      where: {
        id: walletData.id
      },
      data: {
        mintcount: walletData.quantity,
        address: walletData.address
      }
    });
    res.json(updateUser);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3dhbGxldHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7O0FBRUEsTUFBTUUsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDSSxJQUFoQjs7QUFDQSxNQUFJSixHQUFHLENBQUNLLE1BQUosSUFBYyxNQUFsQixFQUEwQjtBQUN4QixXQUFPSixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsUUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1gsR0FBWCxhQUFXQSxHQUFYLHVCQUFXQSxHQUFHLENBQUVJLElBQWhCLENBQW5COztBQUNBLE1BQUksQ0FBQ0ssVUFBVSxDQUFDRyxNQUFoQixFQUF3QjtBQUN0QixVQUFNQyxZQUFZLEdBQUcsTUFBTWYsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlQyxNQUFmLENBQXNCO0FBQy9DQyxNQUFBQSxJQUFJLEVBQUU7QUFDSkMsUUFBQUEsU0FBUyxFQUFFUixVQUFVLENBQUNTLFFBRGxCO0FBRUpDLFFBQUFBLE9BQU8sRUFBRVYsVUFBVSxDQUFDVTtBQUZoQjtBQUR5QyxLQUF0QixDQUEzQjtBQU1BbEIsSUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVNNLFlBQVQ7QUFDRCxHQVJELE1BUU87QUFDTCxVQUFNTyxVQUFVLEdBQUcsTUFBTXRCLE1BQU0sQ0FBQ2dCLE9BQVAsQ0FBZU8sTUFBZixDQUFzQjtBQUM3Q0MsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLEVBQUUsRUFBRWQsVUFBVSxDQUFDYztBQURWLE9BRHNDO0FBSTdDUCxNQUFBQSxJQUFJLEVBQUU7QUFDSkMsUUFBQUEsU0FBUyxFQUFFUixVQUFVLENBQUNTLFFBRGxCO0FBRUpDLFFBQUFBLE9BQU8sRUFBRVYsVUFBVSxDQUFDVTtBQUZoQjtBQUp1QyxLQUF0QixDQUF6QjtBQVNBbEIsSUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVNhLFVBQVQ7QUFDRDtBQUNGLENBM0JEOztBQTZCQSxpRUFBZXJCLE9BQWY7Ozs7Ozs7Ozs7QUNqQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzaXRlLy4vcGFnZXMvYXBpL3dhbGxldHMuanMiLCJ3ZWJwYWNrOi8vbmV3c2l0ZS9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5jb25zdCBCb25lQXBpID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJwcmludGluZ1wiKTtcclxuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT0gXCJQT1NUXCIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwibWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IHdhbGxldERhdGEgPSBKU09OLnBhcnNlKHJlcT8uYm9keSk7XHJcbiAgaWYgKCF3YWxsZXREYXRhLmV4aXN0cykge1xyXG4gICAgY29uc3QgY3JlYXRld2FsbGV0ID0gYXdhaXQgcHJpc21hLndhbGxldHMuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG1pbnRjb3VudDogd2FsbGV0RGF0YS5xdWFudGl0eSxcclxuICAgICAgICBhZGRyZXNzOiB3YWxsZXREYXRhLmFkZHJlc3MsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmVzLmpzb24oY3JlYXRld2FsbGV0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdXBkYXRlVXNlciA9IGF3YWl0IHByaXNtYS53YWxsZXRzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IHdhbGxldERhdGEuaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBtaW50Y291bnQ6IHdhbGxldERhdGEucXVhbnRpdHksXHJcbiAgICAgICAgYWRkcmVzczogd2FsbGV0RGF0YS5hZGRyZXNzLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJlcy5qc29uKHVwZGF0ZVVzZXIpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvbmVBcGk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJCb25lQXBpIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIndhbGxldERhdGEiLCJKU09OIiwicGFyc2UiLCJleGlzdHMiLCJjcmVhdGV3YWxsZXQiLCJ3YWxsZXRzIiwiY3JlYXRlIiwiZGF0YSIsIm1pbnRjb3VudCIsInF1YW50aXR5IiwiYWRkcmVzcyIsInVwZGF0ZVVzZXIiLCJ1cGRhdGUiLCJ3aGVyZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==