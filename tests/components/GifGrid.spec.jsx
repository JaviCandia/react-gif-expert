import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/componentes/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Using mocks
jest.mock("../../src/hooks/useFetchGifs");

describe("Gifgrid", () => {
  it("should show initial loading", () => {
    // Mock function
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });
    render(<GifGrid category="xbox" />);

    expect(screen.getByTestId("loader")).toBeTruthy();
  });

  it("should show items when images are loaded", () => {
    const gifs = [
      { id: "ABC1", title: "Ippo", url: "https://www.gifs.com/Ippo" },
      { id: "ABC2", title: "Umezawa", url: "https://www.gifs.com/umezawa" },
    ];
    useFetchGifs.mockReturnValue({
      gifs: gifs,
      isLoading: false,
    });


    render(<GifGrid category="xbox" />);

    expect(screen.getAllByRole('img').length).toBe(gifs.length)

  });
});
