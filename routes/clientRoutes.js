import express from 'express'
import {
  getClients,
  getClientById,
  newClient,
  newAddress,
  getAddressByClientId,
  deleteAddress,
  getAddresses
} from '../controllers/clientController.js'

const router = express.Router();

router.route('/address').get(getAddresses);
router.route('/address').post(newAddress);
router.route('/address/:id').get(getAddressByClientId);
router.route('/address/:id').delete(deleteAddress);
router.route('/:id').get(getClientById);
router.route('/').post(newClient);
router.route('/').get(getClients);

export default router
