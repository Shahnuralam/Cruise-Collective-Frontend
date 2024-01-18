import { render } from "@testing-library/react";
import { FullScreenImageSlider, ImageSlider } from "./utils";
import React from "react";

describe("FullScreenImageSlider", () => {
  test("renders without throwing an error", () => {
    // Render the component
    const { container } = render(<FullScreenImageSlider />);

    // Assert that the component renders without errors
    expect(container).toBeDefined();
  });

  test("ImageSlider", () => {
    // Render the component
    const { container } = render(<ImageSlider />);

    // Assert that the component renders without errors
    expect(container).toBeDefined();
  });
});
