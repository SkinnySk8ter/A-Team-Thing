const Employee = require("./employee")

class manager extends Employee {
    constructor(name,id, email) {
        super(name, id, email)
        this.office_number = office_number;
    }

    get_role() {
        return "Manager"
    }

    get_office_number() {
        return this.office_number
    }

}

module.exports = manager;
    