import { getGifs } from "../../src/helpers/getGifs";

describe("getGifs", () => {
  it("should return array of gifs", async () => {
    const gifs = await getGifs("jujutsu");

    expect(gifs).toBeInstanceOf(Array);
    expect(gifs.length).toBeGreaterThan(0);
  });
});
