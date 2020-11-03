import ship from "./ship";

test("ship .coords method returns an array with coordinates", () => {
  let p1Ship1 = ship(["3B", "3C", "3D", "3E"]);

  expect(p1Ship1.coords).toStrictEqual(["3B", "3C", "3D", "3E"]);
});
