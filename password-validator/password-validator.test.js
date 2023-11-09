describe("Password Validator", function () {
  it("should test password ...", function () {
    const result = validatePassword("!a1b2c3c4#");
    chai.expect(result.valid).to.equal(true);
    chai.expect(result.reasons.length).to.equal(0);
  });

  it("should test password ...", function () {
    const result = validatePassword("!!a1b2c3c4");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
    chai
      .expect(result.reasons.includes("duplicate special character"))
      .to.equal(true);
  });

  // TODO: add your own tests here for all possible error messages (not combinations)

  // it("should test password ...", function () {
  // ...
  // });
});
