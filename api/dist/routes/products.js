"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProductsControllersjs = require('../controllers/ProductsControllers.js'); var _ProductsControllersjs2 = _interopRequireDefault(_ProductsControllersjs);

const router = new (0, _express.Router)();

router.get('/', _ProductsControllersjs2.default.getProductsBySearch);
router.get('/:category', _ProductsControllersjs2.default.searchByCategory);

exports. default = router;
