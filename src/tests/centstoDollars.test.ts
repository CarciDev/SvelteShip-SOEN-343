import { describe, it, expect } from "vitest";
import { centsToDollars } from "$lib/utils";

describe("centsToDollars", () => {
  it("converts 100 cents to 1 dollar", () => {
    expect(centsToDollars(100)).toBe("$1.00");
  });

  it("converts 0 cents to 0 dollars", () => {
    expect(centsToDollars(0)).toBe("$0.00");
  });

  it("handles negative values", () => {
    expect(centsToDollars(-100)).toBe("-$1.00");
  });

  it("rounds to two decimal places", () => {
    expect(centsToDollars(999)).toBe("$9.99");
  });
});
