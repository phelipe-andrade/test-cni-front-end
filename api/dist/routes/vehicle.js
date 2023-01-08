"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _VehicleControllerjs = require('../controllers/VehicleController.js'); var _VehicleControllerjs2 = _interopRequireDefault(_VehicleControllerjs);

const router = new (0, _express.Router)();

router.get('/', _VehicleControllerjs2.default.getAllVehicle);
router.get('/:id', _VehicleControllerjs2.default.getVehicle);
router.post('/post', _VehicleControllerjs2.default.insertVehicle);
router.delete('/:id', _VehicleControllerjs2.default.removeVehicle);
router.patch('/:id', _VehicleControllerjs2.default.updateVehicle);

exports. default = router;
