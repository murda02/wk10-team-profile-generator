const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

//Unit test that checks the employee's email
describe("Engineer github username", () => {
    it("should return the engineer's github username", () => {
      const engineer = new Engineer("Bob", 88, "employee@work.com", "nacho_libre_5000");
      console.log("engineer.githubUsername: ", engineer.githubUsername)
      console.log("engineer object: ", engineer);
      expect(engineer.githubUsername).toEqual("nacho_libre_5000");
    });
  });
  
  //Unit test that checks the employee's role
  describe("Employee role", () => {
    it("should return the employee's role", () => {
      const engineer = new Engineer("Bob", 88, "employee@work.com", "nacho_libre_5000");
      console.log("engineer object: ", engineer);
      console.log("engineer.getRole(): ", engineer.getRole());
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });