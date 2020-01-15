const Employee = require("./employee")

class engineer extends Employee {
    constructor(name,id, email) {
        super(name, id, email)
        this.github = github;
    }

    get_role() {
        return "engineer"
    }

    get_github() {
        return this.github
    }

}

module.exports = engineer;