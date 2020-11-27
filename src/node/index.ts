import { JSDOM } from "jsdom";
import { Options } from "roughjs/bin/core";

import roughUp from "../shared";

export default (input: string, options: Options = {}): string => {
  const { window } = new JSDOM();

  window.document.body.innerHTML = input;
  const svg = window.document.querySelector("svg") as SVGSVGElement;

  roughUp(svg, options);

  return svg.outerHTML;
};
