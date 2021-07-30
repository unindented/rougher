import { readFileSync } from "fs";
import { resolve } from "path";

import roughUp from ".";

const readFixture = (fixture: string) =>
  readFileSync(resolve(__dirname, "__fixtures__", fixture)).toString();

describe("node roughUp", () => {
  describe.each`
    name                          | fixture
    ${"a processing instruction"} | ${readFixture("processing-instruction.svg")}
  `("with $name", ({ fixture }: { fixture: string }) => {
    it("returns a roughed up version", () => {
      expect(roughUp(fixture)).toMatchSnapshot();
    });
  });
});
