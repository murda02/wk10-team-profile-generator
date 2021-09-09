const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNUmber) {

        super(name, id, email)

        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNUmber;
    }

    getOfficeNum() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    } 
}

module.exports = Manager
