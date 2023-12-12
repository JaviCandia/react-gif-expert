import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/componentes/GifItem";
import { renderIntoDocument } from "react-dom/test-utils";

describe("GifItem", () => {
  const title = "Jujutsu";
  const url = "https://www.gifs.com/jotaro";

  it("should match Snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  it("should should image with correct url and alt", () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByTestId("gif-image").src).toBe(url);
    const { src, alt } = screen.getByTestId("gif-image");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  it("should show title in the component", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByTestId("title").innerHTML).toBe(title);
  });
});
