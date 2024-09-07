import { describe, test, expect } from "@jest/globals";
import { bulbasaur, charmander, squirtle } from "../__mocks__/pokemonMocks";

describe("Pokemon Type Tests", () => {
  test("Bulbasaur is Grass type", () => {
    expect(bulbasaur.types[0]).toBe("Grass");
  });

  test("Charmander is Fire type", () => {
    expect(charmander.types[0]).toBe("Fire");
  });

  test("Squirtle is Water type", () => {
    expect(squirtle.types[0]).toBe("Water");
  });
});
