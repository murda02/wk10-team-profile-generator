const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

//Unit test that checks the employee's email
describe("Engineer github username", () => {
    it("should return the engineer's github username", () => {
      const engineer = new Engineer("Bob", 88, "employee@work.com", "nacho_libre_5000");
      expect(engineer.githubUsername).toEqual("nacho_libre_5000");
    });
  });
  
  //Unit test that checks the employee's role
  describe("Employee role", () => {
    it("should return the employee's role", () => {
      const engineer = new Engineer("Bob", 88, "employee@work.com", "nacho_libre_5000");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });