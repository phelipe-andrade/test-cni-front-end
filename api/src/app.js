import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import helmet from 'helmet';

import './db/DB.js';
import vehicleRoute from './routes/vehicle.js';
import photoRoute from './routes/photo.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static('upload'));
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
    this.app.use('/api/vehicle', vehicleRoute);
    this.app.use('/api/vehicle/photo', photoRoute);
    this.app.use((req, res, next) => {
      res.status(404).send({ message: 'Rota inválida' });
      next();
    });
  }
}

export default new App().app;