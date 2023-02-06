import Button from "./Button";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

describe("Button.jsx", () => {
  it("renders the children correctly", () => {
    render(<Button>Click Me</Button>);
    const buttonText = screen.getByText("Click Me");
    expect(buttonText).toBeInTheDocument();
  });
});
