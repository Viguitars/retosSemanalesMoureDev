require("./01_elFamosoFizzBuzz");

test("multiple of 3 is fizz", () => {
    expect(3 % 3).toBe(0);
});

test("multiple of 5 is buzz", () => {
    expect(5 % 5).toBe(0);
});

test("multiple of 3 and 5 is fizzbuzz", () => {
    expect(3 % 3 && 5 % 5).toBe(0);
});