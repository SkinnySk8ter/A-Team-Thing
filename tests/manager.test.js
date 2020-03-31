const manager = require("../assets/classes/managerclass");

test("can get the manager object", () => {
    const iManager = new manager();
    expect(typeof(iManager)).toBe("object");
});