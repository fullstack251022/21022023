const express = require('express')
const router = express.Router()
const { getAllCustomersController, getCustomerByIdController, addCustomerController, addOrUpdateCustomerController, patchUserController } = require('../controllers/customersController');


router.route('/:id')
    .get(async (req, res) => getCustomerByIdController(req, res))
    .patch(async (req, res) => addOrUpdateCustomerController(req, res))
    .put(async (req, res) => addOrUpdateCustomerController(req, res))

router.route('/')
    .get(async (req, res) => getAllCustomersController(req, res))
    .post(async (req, res) => addCustomerController(req, res))

// router.get('/', async (req, res) => getAllCustomersController(req, res))
// router.post('/', async (req, res) => addCustomerController(req, res))
// router.get('/:id', async (req, res) => getCustomerByIdController(req, res))
// router.put('/:id', async (req, res) => addOrUpdateCustomerController(req, res))
// router.patch('/:id', async (req, res) => patchUserController(req, res))

module.exports = router;