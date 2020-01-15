const Employee = require("./employee")

class intern extends Employee {
    constructor(name,id, email) {
        super(name, id, email)
        this.school = school;
    }

    get_role() {
        return "Intern"
    }

    get_school() {
        return this.school
    }

}

module.exports = intern;