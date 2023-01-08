import { Router } from 'express';

import photoController from '../controllers/PhotoController.js';


const router = new Router();

router.get('/:img', photoController.getImg);
router.post('/', photoController.postImg);
router.delete('/:img', photoController.deleteImg);
router.put('/:img', photoController.editImg);

export default router;
