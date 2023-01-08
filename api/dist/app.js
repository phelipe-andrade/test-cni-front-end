"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

require('./db/DB.js');
var _vehiclejs = require('./routes/vehicle.js'); var _vehiclejs2 = _interopRequireDefault(_vehiclejs);
var _photojs = require('./routes/photo.js'); var _photojs2 = _interopRequireDefault(_photojs);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_helmet2.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static('upload'));
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
      );

      if (req.method === 'OPTIONS') {
        res.header(
          'Access-Control-Allow-Methods',
          'PUT, POST, PATCH, DELETE, GET',
        );
        return res.status(200).end();
      } else {
        next();
      }
    });
  }

  routes() {
    this.app.use('/api/vehicle', _vehiclejs2.default);
    this.app.use('/api/vehicle/photo', _photojs2.default);
    this.app.use((req, res, next) => {
      res.status(404).send({ message: 'Rota inválida' });
      next();
    });
  }
}

exports. default = new App().app;