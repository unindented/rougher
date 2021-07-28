import { JSDOM } from "jsdom";
import { Options } from "roughjs/bin/core";
import serializer from "w3c-xmlserializer";

import roughUp from "../shared";

export default (input: string, options: Options = {}): string => {
  const { window } = new JSDOM(input, { contentType: "image/svg+xml" });

  const svg = window.document.querySelector("svg") as SVGSVGElement;

  roughUp(svg, options);

  return serializer(window.document);
};
