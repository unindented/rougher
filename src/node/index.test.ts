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

  describe.each`
    case                  | fixture
    ${"has no namespace"} | ${readFixture("no-namespace.svg")}
    ${"not SVG"}          | ${readFixture("not-svg.xml")}
    ${"not XML"}          | ${readFixture("not-xml.txt")}
  `("when $case", ({ fixture }: { fixture: string }) => {
    it("throws an error", () => {
      expect(() => roughUp(fixture)).toThrow();
    });
  });
});
