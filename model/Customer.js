class Customer {
    constructor(id, first_name, last_name, address, phone_no, credit_card_no, user_name, password) {
        this.id = id ?? null
        this.first_name = first_name ?? null
        this.last_name = last_name ?? null
        this.address = address ?? null
        this.phone_no = phone_no ?? null
        this.credit_card_no = credit_card_no ?? null
        this.user_name = user_name ?? null
        this.password = password ?? null
    }
}

module.exports = {
    Customer
}