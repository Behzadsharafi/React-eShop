import { render, screen } from "@testing-library/react";
import App from "./App.jsx";
import matchers from "@testing-library/jest-dom";
import { expect, test } from "vitest";
expect.extend(matchers);

test("Setup test", () => {
  it("checks true", () => {
    expect(true).toBe(true);
  });
});
