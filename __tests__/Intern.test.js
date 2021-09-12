const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

//Unit test that checks the employee's email
describe("Intern school", () => {
    it("should return the intern's school", () => {
      const intern = new Intern("Bob", 88, "employee@work.com", "RIT");
      expect(intern.school).toEqual("RIT");
    });
  });
  
  //Unit test that checks the employee's role
  describe("Employee role", () => {
    it("should return the employee's role", () => {
      const intern = new Intern("Bob", 88, "employee@work.com", "RIT");
      expect(intern.getRole()).toEqual("Intern");
    });
  });