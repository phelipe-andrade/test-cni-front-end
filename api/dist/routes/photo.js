"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _PhotoControllerjs = require('../controllers/PhotoController.js'); var _PhotoControllerjs2 = _interopRequireDefault(_PhotoControllerjs);


const router = new (0, _express.Router)();

router.get('/:img', _PhotoControllerjs2.default.getImg);
router.post('/', _PhotoControllerjs2.default.postImg);
router.delete('/:img', _PhotoControllerjs2.default.deleteImg);
router.put('/:img', _PhotoControllerjs2.default.editImg);

exports. default = router;
