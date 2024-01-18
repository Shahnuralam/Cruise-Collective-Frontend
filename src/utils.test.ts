import "@testing-library/jest-dom";
import {
  baseUrl,
  shortenDescription,
  mapPermaLink,
  replaceUrlWithLink,
  mapDynamicGallery,
  formatDate,
  showToast,
} from "./utils";
import { toast } from "react-toastify";

// Mock the DOMParser and toast functions

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    // Add other toast types if used in showToast function
  },
}));

describe("Your utility functions", () => {
  describe("baseUrl", () => {
    test("should return the correct base URL", () => {
      expect(baseUrl).toEqual("https://cruise-app-yizsa.ondigitalocean.app");
    });
  });

  describe("shortenDescription", () => {
    test("should return null if running in a non-browser environment", () => {
      // Mocking the "window" object as undefined
      const originalWindow = global.window;
      delete (global as any).window;

      const result = shortenDescription("<span>This is a test.</span>");
      global.window = originalWindow;

      expect(result).toBeNull();
    });

    test("should handle null scriptElement", () => {
      // Mocking the existence of window
      (global as any).window = {};

      // Providing HTML with no <span> element
      const result = shortenDescription("<div>This is a test.</div>");

      expect(result).toEqual("");
    });

    test("should return the first sentence of HTML description", () => {
      // Mock window object
      //   global.window = {};
      const htmlDescription = "<span>This is a test.</span>";
      expect(shortenDescription(htmlDescription)).toEqual("This is a test");
    });
  });

  describe("mapPermaLink", () => {
    test("should return the correct mapping for a given type", () => {
      expect(mapPermaLink("experience")).toEqual({
        path: "/experiences",
        buttonText: "Read more",
        categoryName: "Experience",
      });
    });
  });

  describe("replaceUrlWithLink", () => {
    test("should replace URLs with links", () => {
      const text = "Visit https://example.com";
      expect(replaceUrlWithLink(text)).toEqual(
        'Visit <a href="https://example.com" target="_blank">https://example.com</a>'
      );
    });
  });

  describe("mapDynamicGallery", () => {
    test("should map dynamic gallery data correctly", () => {
      const data = [
        {
          id: 1,
          attributes: {
            url: "image1.jpg",
            name: "Image 1",
            caption: "Caption 1",
          },
        },
        {
          id: 2,
          attributes: {
            url: "image2.jpg",
            name: "Image 2",
            caption: "Caption 2",
          },
        },
      ];
      expect(mapDynamicGallery(data)).toEqual([
        {
          id: 1,
          image: { src: "image1.jpg", alt: "Image 1", caption: "Caption 1" },
        },
        {
          id: 2,
          image: { src: "image2.jpg", alt: "Image 2", caption: "Caption 2" },
        },
      ]);
    });
  });

  describe("formatDate", () => {
    test("should format date in the correct format", () => {
      const dateString = "2024-01-17";
      expect(formatDate(dateString)).toEqual("17.01.2024");
    });
  });

  describe("showToast", () => {
    test("should call the toast function with the correct parameters", () => {
      showToast("Test message", "success");
      expect(toast.success).toHaveBeenCalledWith(
        "Test message",
        expect.any(Object)
      );
    });
  });
});
