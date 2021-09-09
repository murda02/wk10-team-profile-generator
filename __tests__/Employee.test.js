const Employee = require('../lib/Employee')

// Unit test that checks if 'Employee Type' is an object
describe("Employee Type", () => {
    it("should return an object", () => {
      const employee = new Employee();
      console.log(typeof(employee))
      expect(typeof(employee)).toEqual("object");
    });
  });

//Unit test that verifies the emplyee's name
describe("Employee Name", () => {
  it("should return the employee's name", () => {
    const employee = new Employee("Bob", 88, "employee@work.com");
    console.log("employee.name: ", employee.name)
    console.log("employee object: ", employee);
    expect(employee.name).toEqual("Bob");
  });
});

//Unit test that checks the employee's ID
describe("Employee ID", () => {
  it("should return the employee's ID", () => {
    const employee = new Employee("Bob", 88, "employee@work.com");
    console.log("employee.id: ", employee.id)
    console.log("employee object: ", employee);
    expect(employee.id).toEqual(88);
  });
});

//Unit test that checks the employee's email
describe("Employee email", () => {
  it("should return the employee's email", () => {
    const employee = new Employee("Bob", 88, "employee@work.com");
    console.log("employee.email: ", employee.email)
    console.log("employee object: ", employee);
    expect(employee.email).toEqual("employee@work.com");
  });
});

//Unit test that checks the employee's role
describe("Employee role", () => {
  it("should return the employee's role", () => {
    const employee = new Employee("Bob", 88, "employee@work.com");
    console.log("employee.getRole(): ", employee.getRole());
    expect(employee.getRole()).toEqual("Employee");
  });
});