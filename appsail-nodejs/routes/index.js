import { Router } from 'express';
import { addItem, deleteItem, getAllItems, jeometry, updateItem } from '../controllers/index.js'
const router = Router();

router.route('/').get(jeometry);

router.route('/item/:item_name').post(addItem);

router.route('/item/:item_name').put(updateItem);

router.route('/item/:item_name').delete(deleteItem);

router.route('/items').get(getAllItems);

export default router;