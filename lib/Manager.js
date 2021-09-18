class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {};
    //overridden to return 'Manager'
}