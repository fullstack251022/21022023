const { knex } = require('./knex/knex');

const getAllCustomers = async () => {
    const customer = await knex.select('*').from('customers')
    return customer;
}


const getCustomerById = async (id) => {
    const customer = await knex.select('*').from('customers').where('id', '=', id)
    return customer;
}


const addCustomer = async (customer) => {  
    const data = await knex('customers').insert(customer);
    return data[0]
}

const updateCustomer =  async (customer) => {
    const data = await knex('customers').update(customer).where( "id", "=", customer.id );
    return data[0]
}


module.exports = {
    getAllCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer
}