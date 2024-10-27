import { describe, it, expect } from "vitest";
import { formatDateToYYYYMMDD, parseDate } from "$lib/utils";

describe("parseDate", () => {
  it("parses yyyy-mm-dd string into Date", () => {
    expect(parseDate("2023-01-01").getTime()).toBe(
      new Date(2023, 0, 1).getTime(),
    );
  });

  it("throws for invalid date format", () => {
    expect(() => parseDate("invalid")).toThrow("Invalid date format");
  });
});

describe("formatDateToYYYYMMDD", () => {
  it("formats Date to yyyy-mm-dd string", () => {
    const date = new Date(2023, 0, 1);
    expect(formatDateToYYYYMMDD(date)).toBe("2023-01-01");
  });
});
