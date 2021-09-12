const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

//Unit test that checks the employee's email
describe("Manger's office number", () => {
    it("should return the manager's office number", () => {
      const manager = new Manager("Bob", 88, "employee@work.com", 217);
      expect(manager.getOfficeNum()).toEqual(217);
    });
  });
  
  //Unit test that checks the employee's role
  describe("Employee role", () => {
    it("should return the employee's role", () => {
      const manager = new Manager("Bob", 88, "employee@work.com", 217);
      expect(manager.getRole()).toEqual("Manager");
    });
  });