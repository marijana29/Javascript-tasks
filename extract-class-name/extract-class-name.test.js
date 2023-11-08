describe("Extract Class Name", function () {
  it("should extract correct class name", function () {
    chai.expect(extractClassName("Live-Session Class 2022 September")).to.equal("2022-09");
  });

  it("should extract correct class name", function () {
    chai.expect(extractClassName("Live-Session Class 2023 Januar")).to.equal("2023-01");
  });

  it("should extract correct class name", function () {
    chai.expect(extractClassName("Live-Session Class 2022 März")).to.equal("2022-03");
  });

  it("should extract correct class name", function () {
    chai.expect(extractClassName("Live-Session Class 2022 Maerz")).to.equal("2022-03");
  });

  it("should return null if format does not match", function () {
    chai.expect(extractClassName("Live-Session Class 1 X")).to.equal(null);
  });

  it("should return null if format does not match", function () {
    chai.expect(extractClassName("Live-Session Class 2222222 Juli")).to.equal(null);
  });

  it("should return null if format does not match", function () {
    chai.expect(extractClassName("Live-Session Class 2022")).to.equal(null);
  });
});
