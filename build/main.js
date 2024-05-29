/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/authentication/authentication.controller.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/authentication.controller.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AuthenticationController = void 0;\nvar constant_1 = __webpack_require__(/*! ../../constants/constant */ \"./src/constants/constant.ts\");\nvar app_util_1 = __webpack_require__(/*! ../../utils/app.util */ \"./src/utils/app.util.ts\");\nvar authentication_service_1 = __webpack_require__(/*! ./authentication.service */ \"./src/app/authentication/authentication.service.ts\");\nvar AuthenticationController = /** @class */ (function () {\n    function AuthenticationController() {\n        this.authenticationService = new authentication_service_1.AuthenticationService();\n    }\n    AuthenticationController.prototype.signUpUser = function (req, res, next) {\n        return __awaiter(this, void 0, void 0, function () {\n            var user, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, this.authenticationService.signUpUser(req.body)];\n                    case 1:\n                        user = _a.sent();\n                        app_util_1.handleResult(res, constant_1.AppServerConstant.RESPONSE_CODE.OK, constant_1.AppServerConstant.SUCCESS_MESSAGES.SUCCESS, user);\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_1 = _a.sent();\n                        console.log(error_1);\n                        return [2 /*return*/, next(error_1)];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    AuthenticationController.prototype.signInUser = function (req, res, next) {\n        return __awaiter(this, void 0, void 0, function () {\n            var user, error_2;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, this.authenticationService.signInUser(req.body.email, req.body.password)];\n                    case 1:\n                        user = _a.sent();\n                        app_util_1.handleResult(res, constant_1.AppServerConstant.RESPONSE_CODE.OK, constant_1.AppServerConstant.SUCCESS_MESSAGES.SUCCESS, user);\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_2 = _a.sent();\n                        console.log(error_2);\n                        return [2 /*return*/, next(error_2)];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return AuthenticationController;\n}());\nexports.AuthenticationController = AuthenticationController;\n\n\n//# sourceURL=webpack:///./src/app/authentication/authentication.controller.ts?");

/***/ }),

/***/ "./src/app/authentication/authentication.middleware.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/authentication.middleware.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AuthenticationMiddleWare = void 0;\nvar user_model_1 = __webpack_require__(/*! ../user/user.model */ \"./src/app/user/user.model.ts\");\nvar ENVConfig = __webpack_require__(/*! ../../config/development.json */ \"./src/config/development.json\");\nvar AuthenticationMiddleWare = /** @class */ (function () {\n    function AuthenticationMiddleWare() {\n        this.UserModel = user_model_1.userModel.getInstance();\n    }\n    AuthenticationMiddleWare.prototype.checkDataForSignUp = function (req, res, next) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                try {\n                    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {\n                        throw new Error(\"All the Fields are required!\");\n                    }\n                    next();\n                }\n                catch (error) {\n                    error.statusCode = 403;\n                    return [2 /*return*/, next(error)];\n                }\n                return [2 /*return*/];\n            });\n        });\n    };\n    AuthenticationMiddleWare.prototype.checkDataForSignIn = function (req, res, next) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                try {\n                    if (!req.body.email || !req.body.password) {\n                        throw new Error(\"All the Fields are required!\");\n                    }\n                    next();\n                }\n                catch (error) {\n                    error.statusCode = 403;\n                    return [2 /*return*/, next(error)];\n                }\n                return [2 /*return*/];\n            });\n        });\n    };\n    return AuthenticationMiddleWare;\n}());\nexports.AuthenticationMiddleWare = AuthenticationMiddleWare;\n\n\n//# sourceURL=webpack:///./src/app/authentication/authentication.middleware.ts?");

/***/ }),

/***/ "./src/app/authentication/authentication.routes.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.routes.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AuthenticationRoutes = void 0;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar api_constant_1 = __webpack_require__(/*! ../../constants/api.constant */ \"./src/constants/api.constant.ts\");\nvar authentication_controller_1 = __webpack_require__(/*! ./authentication.controller */ \"./src/app/authentication/authentication.controller.ts\");\nvar authentication_middleware_1 = __webpack_require__(/*! ./authentication.middleware */ \"./src/app/authentication/authentication.middleware.ts\");\nvar AuthenticationRoutes = /** @class */ (function () {\n    function AuthenticationRoutes() {\n        this.router = express_1.Router();\n        this.authenticationController = new authentication_controller_1.AuthenticationController();\n        this.authenticationMiddleware = new authentication_middleware_1.AuthenticationMiddleWare();\n        this.routes();\n    }\n    AuthenticationRoutes.prototype.routes = function () {\n        this.router.post(api_constant_1.AppApiConstant.API.SIGNUP, this.authenticationMiddleware.checkDataForSignUp.bind(this.authenticationMiddleware), this.authenticationController.signUpUser.bind(this.authenticationController));\n        this.router.post(api_constant_1.AppApiConstant.API.SIGNIN, this.authenticationMiddleware.checkDataForSignIn.bind(this.authenticationMiddleware), this.authenticationController.signInUser.bind(this.authenticationController));\n    };\n    return AuthenticationRoutes;\n}());\nexports.AuthenticationRoutes = AuthenticationRoutes;\n\n\n//# sourceURL=webpack:///./src/app/authentication/authentication.routes.ts?");

/***/ }),

/***/ "./src/app/authentication/authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.service.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AuthenticationService = void 0;\nvar db_connection_manager_1 = __webpack_require__(/*! ../../database/db-connection-manager */ \"./src/database/db-connection-manager.ts\");\nvar user_model_1 = __webpack_require__(/*! ../user/user.model */ \"./src/app/user/user.model.ts\");\nvar jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nvar bcryptjs_1 = __importDefault(__webpack_require__(/*! bcryptjs */ \"bcryptjs\"));\nvar ENVConfig = __webpack_require__(/*! ../../config/development.json */ \"./src/config/development.json\");\nvar AuthenticationService = /** @class */ (function () {\n    function AuthenticationService() {\n        this.UserModel = user_model_1.userModel.getInstance();\n        this.dbConnectionManager = db_connection_manager_1.AppDBConnectionManager.getInstance();\n    }\n    AuthenticationService.prototype.signToken = function (id) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                return [2 /*return*/, jsonwebtoken_1.default.sign({ id: id }, ENVConfig.SECRET_KEY)];\n            });\n        });\n    };\n    AuthenticationService.prototype.signToke = function (user) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                return [2 /*return*/, jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, ENVConfig.SECRET_KEY)];\n            });\n        });\n    };\n    AuthenticationService.prototype.verifyToken = function (token) {\n        try {\n            return jsonwebtoken_1.default.verify(token, ENVConfig.SECRET_KEY);\n        }\n        catch (error) {\n            return null;\n        }\n    };\n    AuthenticationService.prototype.signUpUser = function (data) {\n        return __awaiter(this, void 0, void 0, function () {\n            var result, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, this.UserModel.user.create(data)];\n                    case 1:\n                        result = _a.sent();\n                        return [2 /*return*/, result];\n                    case 2:\n                        error_1 = _a.sent();\n                        error_1.statusCode = 400;\n                        console.log(error_1);\n                        throw error_1;\n                    case 3: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    AuthenticationService.prototype.signInUser = function (email, password) {\n        return __awaiter(this, void 0, void 0, function () {\n            var result, userData_1, token_1, updateUserData, updatedUser, error_2;\n            var _this = this;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 7, , 8]);\n                        result = null;\n                        return [4 /*yield*/, this.dbConnectionManager.dbClient.transaction(function (t) { return __awaiter(_this, void 0, void 0, function () {\n                                var user;\n                                return __generator(this, function (_a) {\n                                    switch (_a.label) {\n                                        case 0: return [4 /*yield*/, this.UserModel.user.findOne({ raw: true, where: { email: email }, transaction: t })];\n                                        case 1: return [4 /*yield*/, _a.sent()];\n                                        case 2:\n                                            user = _a.sent();\n                                            return [2 /*return*/, user];\n                                    }\n                                });\n                            }); })];\n                    case 1:\n                        userData_1 = _a.sent();\n                        if (!(!userData_1 || !bcryptjs_1.default.compareSync(password, userData_1.password))) return [3 /*break*/, 2];\n                        throw new Error(\"wrong user id or password\");\n                    case 2: return [4 /*yield*/, this.signToken(userData_1.id)];\n                    case 3:\n                        token_1 = _a.sent();\n                        return [4 /*yield*/, this.dbConnectionManager.dbClient.transaction(function (t) { return __awaiter(_this, void 0, void 0, function () {\n                                var updateUser;\n                                return __generator(this, function (_a) {\n                                    switch (_a.label) {\n                                        case 0: return [4 /*yield*/, this.UserModel.user.update({ token: token_1 }, { where: { id: userData_1.id }, transaction: t })];\n                                        case 1:\n                                            updateUser = _a.sent();\n                                            return [2 /*return*/, updateUser];\n                                    }\n                                });\n                            }); })];\n                    case 4:\n                        updateUserData = _a.sent();\n                        return [4 /*yield*/, this.UserModel.user.findOne({\n                                where: { email: email },\n                            })];\n                    case 5:\n                        updatedUser = _a.sent();\n                        result = updatedUser;\n                        _a.label = 6;\n                    case 6: return [2 /*return*/, result];\n                    case 7:\n                        error_2 = _a.sent();\n                        error_2.statusCode = 400;\n                        console.log(error_2);\n                        throw error_2;\n                    case 8: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return AuthenticationService;\n}());\nexports.AuthenticationService = AuthenticationService;\n\n\n//# sourceURL=webpack:///./src/app/authentication/authentication.service.ts?");

/***/ }),

/***/ "./src/app/user/user.model.ts":
/*!************************************!*\
  !*** ./src/app/user/user.model.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.userModel = void 0;\nvar user_schema_1 = __webpack_require__(/*! ./user.schema */ \"./src/app/user/user.schema.ts\");\nvar userModel = /** @class */ (function () {\n    function userModel() {\n    }\n    userModel.getInstance = function () {\n        if (!userModel.instance) {\n            userModel.instance = new userModel();\n        }\n        return userModel.instance;\n    };\n    userModel.prototype.initializeModel = function (sequelize) {\n        this.user = sequelize.define(\"tbl_user\", user_schema_1.UserSchema());\n    };\n    userModel.prototype.associationModel = function () {\n    };\n    return userModel;\n}());\nexports.userModel = userModel;\n\n\n//# sourceURL=webpack:///./src/app/user/user.model.ts?");

/***/ }),

/***/ "./src/app/user/user.schema.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.schema.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserSchema = void 0;\nvar sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar bcryptjs_1 = __importDefault(__webpack_require__(/*! bcryptjs */ \"bcryptjs\"));\nexports.UserSchema = function () {\n    return {\n        id: {\n            type: sequelize_1.DataTypes.BIGINT,\n            autoIncrement: true,\n            primaryKey: true,\n            field: 'id'\n        },\n        firstName: {\n            type: sequelize_1.DataTypes.STRING,\n            allowNull: false,\n            field: 'first_name'\n        },\n        lastName: {\n            type: sequelize_1.DataTypes.STRING,\n            allowNull: false,\n            field: 'last_name'\n        },\n        password: {\n            type: sequelize_1.DataTypes.STRING,\n            allowNull: false,\n            field: 'password',\n            set: function (value) {\n                var hashedPassword = bcryptjs_1.default.hashSync(value, 10);\n                this.setDataValue('password', hashedPassword);\n            }\n        },\n        token: {\n            type: sequelize_1.DataTypes.STRING,\n            allowNull: true,\n            field: 'token'\n        },\n        email: {\n            type: sequelize_1.DataTypes.STRING,\n            allowNull: true,\n            field: 'email'\n        },\n        createdAt: {\n            type: sequelize_1.DataTypes.DATE,\n            allowNull: true,\n            field: 'created_at'\n        },\n        updatedAt: {\n            type: sequelize_1.DataTypes.DATE,\n            allowNull: true,\n            field: 'updated_at'\n        }\n    };\n};\n\n\n//# sourceURL=webpack:///./src/app/user/user.schema.ts?");

/***/ }),

/***/ "./src/config/development.json":
/*!*************************************!*\
  !*** ./src/config/development.json ***!
  \*************************************/
/*! exports provided: PORT, DEFAULT_PORT, MONGODB_URI, REQUEST_STRICT_SSL, RETRY_ATTEMPTS, RETRY_TIME, SECRET_KEY, MYSQL, FRONT_END, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"PORT\\\":3015,\\\"DEFAULT_PORT\\\":3015,\\\"MONGODB_URI\\\":\\\"mongodb://ra-followup-1:EY0m9sU6PxL6bVT9@areteq-mdb-shard-00-00-kw4zo.mongodb.net:27017,areteq-mdb-shard-00-01-kw4zo.mongodb.net:27017,areteq-mdb-shard-00-02-kw4zo.mongodb.net:27017/test?ssl=true&replicaSet=areteq-mdb-shard-0&authSource=admin&retryWrites=true&w=majority\\\",\\\"REQUEST_STRICT_SSL\\\":false,\\\"RETRY_ATTEMPTS\\\":3,\\\"RETRY_TIME\\\":3000,\\\"SECRET_KEY\\\":\\\"my-secrete\\\",\\\"MYSQL\\\":{\\\"HOST\\\":\\\"localhost\\\",\\\"PORT\\\":3306,\\\"USER\\\":\\\"root\\\",\\\"PASSWORD\\\":\\\"Andil2314@\\\",\\\"DATABASE\\\":\\\"hts_project\\\",\\\"RETRY_ATTEMPTS\\\":3,\\\"RETRY_TIME\\\":3000},\\\"FRONT_END\\\":{\\\"BASE_URL\\\":\\\"http://localhost:3015/content/v1\\\",\\\"SITE_URL\\\":\\\"http://localhost:3015/content/v1\\\"}}\");\n\n//# sourceURL=webpack:///./src/config/development.json?");

/***/ }),

/***/ "./src/constants/api.constant.ts":
/*!***************************************!*\
  !*** ./src/constants/api.constant.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppApiConstant = void 0;\n/** API constants to be defined here */\nvar AppApiConstant = /** @class */ (function () {\n    function AppApiConstant() {\n    }\n    AppApiConstant.API = {\n        CONTENT: \"/content/v1\",\n        SIGNUP: \"/sign-up\",\n        SIGNIN: \"/sign-in\",\n    };\n    AppApiConstant.APP_SERVER = \"GEMS Node API Server\";\n    AppApiConstant.ERROR_MESSAGES = {\n        ERROR_INVALID_INPUT: \"Invalid input data\",\n    };\n    return AppApiConstant;\n}());\nexports.AppApiConstant = AppApiConstant;\n\n\n//# sourceURL=webpack:///./src/constants/api.constant.ts?");

/***/ }),

/***/ "./src/constants/constant.ts":
/*!***********************************!*\
  !*** ./src/constants/constant.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppServerConstant = void 0;\n/** Server constants to be defined here */\nvar AppServerConstant = /** @class */ (function () {\n    function AppServerConstant() {\n    }\n    AppServerConstant.CORS = {\n        ACCESS_CONTROL_ALLOW_ORIGIN: 'Access-Control-Allow-Origin',\n        ACCESS_CONTROL_ALLOW_METHODS: 'Access-Control-Allow-Methods',\n        ACCESS_CONTROL_ALLOW_HEADERS: 'Access-Control-Allow-Headers',\n        CONTENT_TYPE: 'Content-Type',\n        APPLICATION_JSON: 'application/json',\n        ALL_METHODS: 'GET,HEAD,OPTIONS,POST,PUT',\n        ALL_HEADERS: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',\n        TEXT_HTML: 'text/html',\n        ALL: '*',\n    };\n    AppServerConstant.PORT = 'port';\n    AppServerConstant.LISTENING_TEXT = 'listening';\n    AppServerConstant.APP_SERVER = 'GEMS API server is up';\n    AppServerConstant.ERROR_MESSAGES = {\n        ERROR_TEXT: 'error',\n        FAILED: 'FAILED',\n        LOG_ERROR: 'Error :',\n        ERROR: 'ERROR :',\n        ERROR_CONNECTION_CODE: 'ECONNREFUSED',\n        ERROR_CONNECTION_TEXT: 'The server refused the connection',\n        ERROR_DB_CONNECTION: 'Unable to connect to the database',\n        DB_MODELS_INIT_FAILED: 'Database models initialization failed',\n        DB_MODELS_ASSOCIATION_FAILED: 'Database models association failed',\n        ERROR_DB_CONNECTION_EXCEPTION: 'Error occurred while connecting to database server',\n        ERROR_SERVER_RESOURCES_CONNECTION_FAILURE: 'Error while connecting to server resources',\n        INVALID_MOBILE_NUMBER: 'Invalid mobile number!',\n        INVALID_CREDENTIALS: 'Invalid mobile number OR password!',\n        INVALID_PARAMETERS: 'Invalid parameters.',\n        ALREADY: 'This batch is already created.',\n        SOMETHING_WENT_WRONG: 'Something went wrong.',\n    };\n    AppServerConstant.SUCCESS_MESSAGES = {\n        SUCCESS: 'SUCCESS',\n        UPDATE: 'UPDATE',\n        SUCCESS_CONNECTION_TEXT: 'Connection successful',\n        RABBIT_CONNECTION: 'RabbitMQ connection established successfully',\n        RABBIT_CHANNEL_CREATE: 'RabbitMQ channel created successfully',\n        REDIS_CONNECTION_SUCCESSFUL: 'Redis connection established successfully',\n        ALL_ARTICLE_SYNCED_SUCCESS: 'All articles synced in redis cache successfully.',\n        READY_TEXT: 'ready',\n        UPDATED_SUCCESS: 'Updated successfully.',\n        CREATED_SUCCESS: 'Batch is created successfully.',\n        EXPENSE_SUCCESS: 'Expense Added Successfully.',\n        EXPENSE_UPDATE: 'Expense Updated Successfully.',\n        CHANGE_PASSWORD: 'PLEASE CHANGE YOUR PASSWORD.',\n        PASSWORD_CHANGED: 'PASSWORD CHANGED'\n    };\n    AppServerConstant.INTERNAL_SERVER_ERROR = 'Internal Server Error';\n    AppServerConstant.RESPONSE_CODE = {\n        OK: 200,\n        CREATED: 201,\n        BAD_REQUEST: 400,\n        UNAUTHORIZED: 401,\n        FORBIDDEN: 403,\n        NOT_FOUND: 404,\n        INTERNAL_SERVER_ERROR: 500,\n    };\n    return AppServerConstant;\n}());\nexports.AppServerConstant = AppServerConstant;\n\n\n//# sourceURL=webpack:///./src/constants/constant.ts?");

/***/ }),

/***/ "./src/database/db-connection-manager.ts":
/*!***********************************************!*\
  !*** ./src/database/db-connection-manager.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppDBConnectionManager = void 0;\n// DB Connection Manager\nvar sequelize_1 = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\nvar constant_1 = __webpack_require__(/*! ../constants/constant */ \"./src/constants/constant.ts\");\nvar models_1 = __webpack_require__(/*! ./models */ \"./src/database/models.ts\");\nvar ENVConfig = __webpack_require__(/*! ../config/development.json */ \"./src/config/development.json\");\n/**\n * Manages all aspects of database connection.\n * @export\n * @class AppDBConnectionManager\n */\nvar AppDBConnectionManager = /** @class */ (function () {\n    /**\n     *Creates an instance of AppDBConnectionManager.\n     * @memberof AppDBConnectionManager\n     */\n    function AppDBConnectionManager() {\n        var _this = this;\n        /**\n         * @private\n         * @memberof BuzzDBConnectionManager\n         */\n        this.checkConnection = function (delayTime) {\n            return new Promise(function (resolve) {\n                setTimeout(function () {\n                    _this.dbClient\n                        .authenticate()\n                        .then(function () {\n                        logger_1.logger.info(constant_1.AppServerConstant.SUCCESS_MESSAGES.SUCCESS_CONNECTION_TEXT);\n                        resolve(true);\n                    })\n                        .catch(function (err) {\n                        logger_1.logger.error('Error: %s', err.message);\n                        resolve(false);\n                    });\n                }, delayTime);\n            });\n        };\n        this.modelLoader = models_1.ModelLoader.getInstance();\n    }\n    /**\n     * The static method that controls the access to the singleton instance.\n     */\n    AppDBConnectionManager.getInstance = function () {\n        if (!AppDBConnectionManager.instance) {\n            AppDBConnectionManager.instance = new AppDBConnectionManager();\n        }\n        return AppDBConnectionManager.instance;\n    };\n    /**\n     * @memberof AppDBConnectionManager\n     */\n    AppDBConnectionManager.prototype.initializeConnection = function (databaseConfig) {\n        return __awaiter(this, void 0, void 0, function () {\n            var error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        this.databaseConfig = databaseConfig;\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 3, , 4]);\n                        this.dbClient = new sequelize_1.Sequelize(this.databaseConfig.DATABASE, this.databaseConfig.USER, this.databaseConfig.PASSWORD, {\n                            host: this.databaseConfig.HOST,\n                            dialect: 'mysql',\n                            // logging: false,\n                            define: {\n                                timestamps: false,\n                                freezeTableName: true\n                            },\n                        });\n                        return [4 /*yield*/, this.checkAttemptsCompletionError()];\n                    case 2:\n                        _a.sent();\n                        this.modelLoader.initializeModels(this.dbClient);\n                        this.modelLoader.associateModels();\n                        return [3 /*break*/, 4];\n                    case 3:\n                        error_1 = _a.sent();\n                        logger_1.logger.error(constant_1.AppServerConstant.ERROR_MESSAGES.ERROR_DB_CONNECTION + \" - %o\", error_1);\n                        throw new Error(constant_1.AppServerConstant.ERROR_MESSAGES.ERROR_DB_CONNECTION + \" - \" + error_1.message);\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    AppDBConnectionManager.prototype.closeConnection = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                return [2 /*return*/, this.dbClient.close()];\n            });\n        });\n    };\n    /**\n     * @private\n     * @returns {Promise<void>}\n     * @memberof BuzzDBConnectionManager\n     */\n    AppDBConnectionManager.prototype.checkAttemptsCompletionError = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var attempts, success;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        attempts = 1;\n                        return [4 /*yield*/, this.checkConnection(0)];\n                    case 1:\n                        success = _a.sent();\n                        _a.label = 2;\n                    case 2:\n                        if (!(success !== true && attempts < this.databaseConfig.RETRY_ATTEMPTS)) return [3 /*break*/, 4];\n                        attempts++;\n                        return [4 /*yield*/, this.checkConnection(this.databaseConfig.RETRY_TIME)];\n                    case 3:\n                        success = _a.sent();\n                        logger_1.logger.info('attempt number %s', attempts);\n                        return [3 /*break*/, 2];\n                    case 4:\n                        if (!success) {\n                            throw new Error(constant_1.AppServerConstant.ERROR_MESSAGES.ERROR_DB_CONNECTION);\n                        }\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return AppDBConnectionManager;\n}());\nexports.AppDBConnectionManager = AppDBConnectionManager;\n\n\n//# sourceURL=webpack:///./src/database/db-connection-manager.ts?");

/***/ }),

/***/ "./src/database/models.ts":
/*!********************************!*\
  !*** ./src/database/models.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ModelLoader = void 0;\nvar constant_1 = __webpack_require__(/*! ../constants/constant */ \"./src/constants/constant.ts\");\nvar logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\nvar user_model_1 = __webpack_require__(/*! ../app/user/user.model */ \"./src/app/user/user.model.ts\");\nvar ModelLoader = /** @class */ (function () {\n    function ModelLoader() {\n        this.UserModel = user_model_1.userModel.getInstance();\n    }\n    ModelLoader.getInstance = function () {\n        if (!ModelLoader.instance) {\n            ModelLoader.instance = new ModelLoader();\n        }\n        return ModelLoader.instance;\n    };\n    ModelLoader.prototype.initializeModels = function (sequelize) {\n        try {\n            this.UserModel.initializeModel(sequelize);\n        }\n        catch (error) {\n            logger_1.logger.error(constant_1.AppServerConstant.ERROR_MESSAGES.DB_MODELS_INIT_FAILED + \" - \" + error.message);\n            console.log(error);\n        }\n    };\n    ModelLoader.prototype.associateModels = function () {\n        try {\n            this.UserModel.associationModel();\n        }\n        catch (error) {\n            logger_1.logger.error(constant_1.AppServerConstant.ERROR_MESSAGES.DB_MODELS_ASSOCIATION_FAILED + \" - \" + error.message);\n            console.log(error);\n        }\n    };\n    return ModelLoader;\n}());\nexports.ModelLoader = ModelLoader;\n\n\n//# sourceURL=webpack:///./src/database/models.ts?");

/***/ }),

/***/ "./src/helpers/error.helper.ts":
/*!*************************************!*\
  !*** ./src/helpers/error.helper.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Error helper class\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.handleError = exports.ErrorHandler = void 0;\nvar ErrorHandler = /** @class */ (function (_super) {\n    __extends(ErrorHandler, _super);\n    function ErrorHandler(statusCode, message, stack) {\n        if (stack === void 0) { stack = ''; }\n        var _this = _super.call(this) || this;\n        _this.statusCode = statusCode;\n        _this.message = message;\n        _this.stack = stack;\n        return _this;\n    }\n    return ErrorHandler;\n}(Error));\nexports.ErrorHandler = ErrorHandler;\nexports.handleError = function (err, res) {\n    var statusCode = err.statusCode, message = err.message;\n    res.status(statusCode).json({\n        status: \"error\",\n        statusCode: statusCode,\n        message: message\n    });\n};\n\n\n//# sourceURL=webpack:///./src/helpers/error.helper.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/** main index file for starting the server */\nvar http = __importStar(__webpack_require__(/*! http */ \"http\"));\nvar constant_1 = __webpack_require__(/*! ./constants/constant */ \"./src/constants/constant.ts\");\nvar logger_1 = __webpack_require__(/*! ./utils/logger */ \"./src/utils/logger.ts\");\nvar server_1 = __webpack_require__(/*! ./server */ \"./src/server.ts\");\nvar ENVConfig = __webpack_require__(/*! ./config/development.json */ \"./src/config/development.json\");\nvar expServerObj = new server_1.Server(ENVConfig);\nexpServerObj.connectToServerResources();\nexpServerObj.app.set(constant_1.AppServerConstant.PORT, ENVConfig.PORT || ENVConfig.DEFAULT_PORT);\nvar server = http.createServer(expServerObj.app);\nserver.listen(process.env.PORT || expServerObj.app.get(constant_1.AppServerConstant.PORT));\nserver.on(constant_1.AppServerConstant.ERROR_MESSAGES.ERROR_TEXT, onError);\nserver.on(constant_1.AppServerConstant.LISTENING_TEXT, onListening);\nfunction onError(error) {\n    logger_1.logger.error(error);\n}\nfunction onListening() {\n    var addr = server.address();\n    var bind = typeof addr === 'string' ? \"pipe \" + addr : \"port \" + addr.port;\n    logger_1.logger.info(\"\\n    ################################################\\n    ###     Server listening on port: \" + bind + \"    ###\\n    ################################################\\n    \");\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Server = void 0;\n/** Main server file  */\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\nvar api_constant_1 = __webpack_require__(/*! ./constants/api.constant */ \"./src/constants/api.constant.ts\");\nvar logger_1 = __webpack_require__(/*! ./utils/logger */ \"./src/utils/logger.ts\");\nvar error_helper_1 = __webpack_require__(/*! ./helpers/error.helper */ \"./src/helpers/error.helper.ts\");\nvar constant_1 = __webpack_require__(/*! ./constants/constant */ \"./src/constants/constant.ts\");\nvar db_connection_manager_1 = __webpack_require__(/*! ./database/db-connection-manager */ \"./src/database/db-connection-manager.ts\");\nvar authentication_routes_1 = __webpack_require__(/*! ./app/authentication/authentication.routes */ \"./src/app/authentication/authentication.routes.ts\");\nvar morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\nvar ENVConfig = __webpack_require__(/*! ./config/development.json */ \"./src/config/development.json\");\n/**\n * @export\n * @class Server\n */\nvar Server = /** @class */ (function () {\n    function Server(envConfig) {\n        this.envConfig = envConfig;\n        this.retryAttempt = 0;\n        this.app = express_1.default();\n    }\n    Server.prototype.connectToServerResources = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var dbConnectionManager, error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        _a.trys.push([0, 2, 3, 4]);\n                        dbConnectionManager = db_connection_manager_1.AppDBConnectionManager.getInstance();\n                        return [4 /*yield*/, dbConnectionManager.initializeConnection(ENVConfig.MYSQL)];\n                    case 1:\n                        _a.sent();\n                        return [3 /*break*/, 4];\n                    case 2:\n                        error_1 = _a.sent();\n                        console.log(\"==== in connectToServerResources catch \", error_1.message);\n                        logger_1.logger.error(constant_1.AppServerConstant.ERROR_MESSAGES.ERROR_SERVER_RESOURCES_CONNECTION_FAILURE + \" : %o\", error_1);\n                        return [3 /*break*/, 4];\n                    case 3:\n                        this.initializeRoutes();\n                        return [7 /*endfinally*/];\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    // application routes\n    Server.prototype.initializeRoutes = function () {\n        var _this = this;\n        this.app.use(morgan_1.default(\"dev\"));\n        this.app.use(\"/static\", express_1.default.static(path_1.default.join(__dirname, \"/../src/public\")));\n        this.app.use(express_1.default.json({\n            limit: '50mb'\n        }));\n        this.app.use(express_1.default.urlencoded({ limit: '50mb', parameterLimit: 1000000, extended: true }));\n        this.app.set(\"view engine\", \"ejs\");\n        this.app.use('/upload', express_1.default.static(path_1.default.join(__dirname, '../src/upload')));\n        this.app.set(\"views\", path_1.default.join(__dirname, \"/../src/views\"));\n        this.app.use(cookie_parser_1.default());\n        this.app.use(api_constant_1.AppApiConstant.API.CONTENT, function (req, res, next) {\n            res.setHeader(constant_1.AppServerConstant.CORS.CONTENT_TYPE, constant_1.AppServerConstant.CORS.APPLICATION_JSON);\n            res.header(constant_1.AppServerConstant.CORS.ACCESS_CONTROL_ALLOW_ORIGIN, constant_1.AppServerConstant.CORS.ALL);\n            res.header(constant_1.AppServerConstant.CORS.ACCESS_CONTROL_ALLOW_METHODS, constant_1.AppServerConstant.CORS.ALL_METHODS);\n            res.header(constant_1.AppServerConstant.CORS.ACCESS_CONTROL_ALLOW_HEADERS, constant_1.AppServerConstant.CORS.ALL_HEADERS);\n            next();\n        }, new authentication_routes_1.AuthenticationRoutes().router);\n        this.app.use(function (err, req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                console.log(err);\n                err.statusCode = 500;\n                error_helper_1.handleError(err, res);\n                return [2 /*return*/];\n            });\n        }); });\n    };\n    return Server;\n}());\nexports.Server = Server;\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "./src/utils/app.util.ts":
/*!*******************************!*\
  !*** ./src/utils/app.util.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.isStringEqualIgnoreCase = exports.handleTemplate = exports.handleResult = void 0;\nvar constant_1 = __webpack_require__(/*! ../constants/constant */ \"./src/constants/constant.ts\");\nexports.handleResult = function (res, statusCode, message, data) {\n    if (data === void 0) { data = null; }\n    return res.status(statusCode).send({\n        statusCode: statusCode,\n        message: message,\n        status: constant_1.AppServerConstant.SUCCESS_MESSAGES.SUCCESS,\n        data: data,\n    });\n};\nexports.handleTemplate = function (res, page, data) {\n    return res.render(page, data);\n};\nexports.isStringEqualIgnoreCase = function (referenceStr, compareStr) {\n    return referenceStr.localeCompare(compareStr, 'en', { sensitivity: 'base' }) === 0;\n};\n\n\n//# sourceURL=webpack:///./src/utils/app.util.ts?");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.logger = void 0;\n/**\n * logger file containing logging methods\n *\n * NPM logging levels defined -\n * error\n * warn\n * info\n * verbose\n * debug\n * silly\n *\n */\nvar winston_1 = __importDefault(__webpack_require__(/*! winston */ \"winston\"));\nvar transports = [];\ntransports.push(new winston_1.default.transports.Console({\n    format: winston_1.default.format.combine(winston_1.default.format.cli(), winston_1.default.format.splat())\n}));\nexports.logger = winston_1.default.createLogger({\n    levels: winston_1.default.config.npm.levels,\n    format: winston_1.default.format.combine(winston_1.default.format.timestamp({\n        format: 'YYYY-MM-DD HH:mm:ss'\n    }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.splat(), winston_1.default.format.json()),\n    transports: transports\n});\n\n\n//# sourceURL=webpack:///./src/utils/logger.ts?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.ts */\"./src/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/index.ts?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });