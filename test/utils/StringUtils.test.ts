import { describe, expect, test } from "vitest";
import { generateRandomString } from "~/utils/StringUtils";

describe("StringUtils", async () => {
  test("should return string with default length", async () => {
    expect(generateRandomString()).length(56);
  });

  test("should return string with custom length", async () => {
    const expectedLength = 10;
    expect(generateRandomString(expectedLength)).length(expectedLength);
  });
});
