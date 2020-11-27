import { Options } from "roughjs/bin/core";
import { Point } from "roughjs/bin/geometry";

export const getAttributes = (element: Element): Attr[] =>
  Array.prototype.slice.call<NamedNodeMap, [], Attr[]>(element.attributes);

export const getAttribute = (element: Element, attribute: string): string =>
  element.getAttribute(attribute) as string;

export const getNumber = (element: Element, attribute: string): number =>
  parseFloat(getAttribute(element, attribute));

export const getDiameter = (element: Element, attribute: string): number =>
  getNumber(element, attribute) * 2;

export const getCoordinates = (element: Element, attribute: string): Point[] => {
  const value = getAttribute(element, attribute);
  return value
    .trim()
    .split(/\s+/u)
    .map((item) => {
      const coordinates = item.trim().split(",") as [string, string];
      return coordinates.map((num) => parseFloat(num)) as [number, number];
    });
};

export const getOptions = (element: Element): Options => {
  const options: Options = {};

  const fill = element.getAttribute("fill");
  const stroke = element.getAttribute("stroke");
  const strokeWidth = element.getAttribute("stroke-width");

  if (fill) {
    options.fill = fill;
  }

  if (stroke) {
    options.stroke = stroke;
  }

  if (strokeWidth && !strokeWidth.includes("%")) {
    options.strokeWidth = parseFloat(strokeWidth);
  }

  return options;
};
