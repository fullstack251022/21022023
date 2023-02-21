const { Customer } = require('../model/Customer');
const { getAllCustomers, getCustomerById, addCustomer, updateCustomer } = require('../database/usersDb');

const getAllCustomersController = async (req, res) => {
    try {
        const customers = await getAllCustomers();
        return res.json(customers)
        
    } catch (error) {
        res.status(500);
        return res.json({ error: true, message: 'Something went wrong' })
    }
}

const getCustomerByIdController = async (req, res) => {
    const id = req.params?.id;
    if (id) {
        try {
            const customers = await getCustomerById(id);
            return res.json(customers)
        } catch (error) {
            res.status(500);
            return res.json({ error: true, message: 'Something went wrong' })
        }
    } else {
        res.status(400);
        return res.json('Bad request')
    }
}

const addCustomerController = async (req, res) => {
    try {
        const body = req.body;
        const customer = new Customer(null, body.first_name, body.last_name, body.address, body.phone_no, body.credit_card_no, body.user_name, body.password);
        const id = await addCustomer(customer);
        return res.json({ msg: 'ok', id }) //

    } catch (error) {
        res.status(500);
        return res.json({ error })
    }
}

const addOrUpdateCustomerController = async (req, res) => {
    const id = req.params?.id;
    const body = req.body;
    try {
        const customerObject = new Customer(id, body.first_name, body.last_name, body.address, body.phone_no, body.credit_card_no, body.user_name, body.password);
        const customerData = await getCustomerById(id);
        if (customerData.length > 0) { //user exist 
            await updateCustomer(customerObject)
            return res.json({ msg: 'ok', id }) // 
        } else {
            // const newId = await addCustomer(customerObject);
            // return res.json({ msg: 'ok', newId }) //
            res.status(404).json({ error: "not found" })
        }
    } catch (error) {
        res.status(500);
        return res.json(error)
    }
}

const patchUserController = async (req, res) => {
    const id = req.params?.id;
    const body = req.body;
    const customerObject = new Customer(null, body.first_name, body.last_name, body.address, body.phone_no, body.credit_card_no, body.user_name, body.password);
    try {
        const data = await getCustomerById(id);
        if (data.length > 0) {
            const customer = data[0];

            for (const key in customerObject) {
                const value = customerObject[key];
                if (value) {
                    customer[key] = value
                }
            }
            updateCustomer(customer)
            // console.log('customer: ', customer)
            res.json({customer})
        } else {
            res.json({ message: "There is no user in db with provided id" })
        }
    } catch (error) {

    }
}


module.exports = {
    getAllCustomersController,
    getCustomerByIdController,
    addCustomerController,
    addOrUpdateCustomerController,
    patchUserController
}