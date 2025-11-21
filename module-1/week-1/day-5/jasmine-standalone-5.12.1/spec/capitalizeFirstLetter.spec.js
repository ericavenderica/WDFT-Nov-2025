describe("function capitalizeFirstLetter", () => {
  //one test to check if the function exists
  it("should exists as a function", () => {
    expect(typeof capitalizeFirstLetter).toBe("function");
  });
  //test to check if the function returns a string with a capital first letter
  it("should return a string with a capital letter", () => {
    expect(capitalizeFirstLetter("ragnar")).toBe("Ragnar");
    expect(capitalizeFirstLetter("winnie")).toBe("Winnie");
    expect(capitalizeFirstLetter("tucson")).toBe("Tucson");
    expect(capitalizeFirstLetter("guga")).toBe("Guga");
  });
  //should return null if a number is given
  it("should return null if a number is given", () => {
    expect(capitalizeFirstLetter(7)).toBeNull();
    expect(capitalizeFirstLetter(-55)).toBeNull();
    expect(capitalizeFirstLetter(6)).toBeNull();
  });
  //should return null if nothing is given
  it("should return null if there are zero arguments", () => {
    expect(capitalizeFirstLetter(null)).toBeNull();
  });
});
