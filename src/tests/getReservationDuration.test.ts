import { describe, it, expect } from "vitest";
import { getReservationDuration } from "$lib/utils";

describe("getReservationDuration", () => {
  it("calculates duration as positive for end date after start date", () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2023, 0, 2);
    expect(getReservationDuration(start, end)).toBe(1);
  });

  it("returns 0 if dates are same", () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2023, 0, 1);
    expect(getReservationDuration(start, end)).toBe(0);
  });
});
