import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/componentes/AddCategory";

describe("AddCategory", () => {
  it("should change input text value", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByTestId("search-input");

    fireEvent.input(input, { target: { value: "xbox" } });

    expect(input.value).toBe("xbox");
  });

  it("should call onAddCategory when input has value", () => {
    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);
    const input = screen.getByTestId("search-input");
    const form = screen.getByTestId("form");

    fireEvent.change(input, { target: { value: "xbox" } });
    fireEvent.submit(form);

    expect(onAddCategory).toHaveBeenCalledWith("xbox");
  });

  it("should should not call onAddCategory when input is invalid", () => {
    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);
    const form = screen.getByTestId("form");

    fireEvent.submit(form);

    expect(onAddCategory).not.toHaveBeenCalled();
  });
});
