class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
    }

    get_name() {
        return this.name;
    };

    get_email() {
        return this.email;
    };

    get_id() {
        return this.id
    };

    get_role() {
        return "Employee";
    };

}

module.exports = Employee;