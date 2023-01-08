import { Router } from 'express';
import vehicleController from '../controllers/VehicleController.js';

const router = new Router();

router.get('/', vehicleController.getAllVehicle);
router.get('/:id', vehicleController.getVehicle);
router.post('/post', vehicleController.insertVehicle);
router.delete('/:id', vehicleController.removeVehicle);
router.patch('/:id', vehicleController.updateVehicle);

export default router;
