# rougher ✏️

Rough up an SVG using Rough.js.

## Table of contents

- [Install](#install)
- [Usage](#usage)
  - [CLI](#cli)
  - [Node (ESM)](#node-esm)
  - [Node (CJS)](#node-cjs)
  - [Browser (ESM)](#browser-esm)
  - [Browser (IIFE)](#browser-iife)
- [Build](#build)
- [Test](#test)
- [Meta](#meta)
- [Contributors](#contributors)
- [License](#license)

## Install

To install:

```
npm install rougher
```

Or if you prefer using Yarn:

```
yarn add rougher
```

## Usage

### CLI

To get help:

```
rougher --help
```

To process a file and output to stdout:

```
rougher input.svg
```

To process a file and output to a file:

```
rougher input.svg -o output.svg
```

To pipe the output of another command into `rougher`:

```
cat input.svg | rougher
```

### Node (ESM)

```js
import { readFileSync } from "fs";
import roughUp from "rougher";

const inputContents = readFileSync("input.svg");
console.log(roughUp(inputContents.toString()));
```

### Node (CJS)

```js
const { readFileSync } = require("fs");
const roughUp = require("rougher");

const inputContents = readFileSync("input.svg");
console.log(roughUp(inputContents.toString()));
```

### Browser (ESM)

```html
<script type="module">
  import rougher from "https://unpkg.com/rougher/dist/browser/rougher.mjs";

  rougher(document.getElementById("svg"));
</script>
```

### Browser (IIFE)

```html
<script src="https://unpkg.com/rougher/dist/browser/rougher.js"></script>
<script>
  rougher(document.getElementById("svg"));
</script>
```

## Build

To build:

```
npm run build
```

To continuously build on changes:

```
npm run watch:build
```

## Test

To run linting and unit tests:

```
npm test
```

To run just unit tests:

```
npm run test:unit
```

To continuously run unit tests on changes:

```
npm run watch:unit
```

## Meta

- Code: `git clone git://github.com/unindented/rougher.git`
- Home: <https://github.com/unindented/rougher>

## Contributors

- Daniel Perez Alvarez (<https://github.com/unindented>)

## License

This is free software, and may be redistributed under the terms specified in the LICENSE file.
