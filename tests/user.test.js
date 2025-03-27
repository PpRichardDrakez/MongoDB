const User = require("../models/User");

describe("User Model Test", () => {
  it("Debe crear un usuario correctamente", async () => {
    const user = await User.create({ name: "Juan", email: "juan@test.com", age: 25 });

    expect(user).toHaveProperty("_id");
    expect(user.name).toBe("Juan");
    expect(user.email).toBe("juan@test.com");
    expect(user.age).toBe(25);
  });

  it("Debe lanzar un error si falta un campo requerido", async () => {
    let error;
    try {
      await User.create({ name: "Juan", email: "juan@test.com" });
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });
  it("Debe coincidir con la estructura del esquema", async () => {
      const user = await User.create({ name: "Ana", email: "ana@test.com", age: 30 });
    
      expect(user.toObject()).toMatchObject({
        name: "Ana",
        email: "ana@test.com",
        age: 30,
      });
    });
    
});
