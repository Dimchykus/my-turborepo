import { add } from "./add";
import "@testing-library/jest-dom";

test("Test functions that import server-only", () => {
  expect(add(1, 2)).toBe(3);
});
