import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const esPlugins = [
  typescript(),
  nodeResolve({ preferBuiltins: true, mainFields: ["module", "main"] }),
  json(),
];
const cjsPlugins = [
  typescript(),
  nodeResolve({ preferBuiltins: true, mainFields: ["main"] }),
  json(),
  commonjs(),
];

export default [
  {
    input: "src/browser/index.ts",
    output: {
      file: "dist/browser/rougher.mjs",
      format: "es",
      sourcemap: true,
    },
    plugins: [...esPlugins, terser({ output: { comments: false } })],
  },
  {
    input: "src/browser/index.ts",
    output: {
      file: "dist/browser/rougher.js",
      format: "iife",
      name: "rougher",
      sourcemap: true,
    },
    plugins: [...cjsPlugins, terser({ output: { comments: false } })],
  },
  {
    input: "src/cli/index.ts",
    output: {
      file: "dist/cli/rougher.js",
      format: "cjs",
      banner: "#!/usr/bin/env node\n",
    },
    external: ["fs", "fs/promises", "path", "arg", "jsdom", "roughjs"],
    plugins: cjsPlugins,
  },
  {
    input: "src/node/index.ts",
    output: {
      file: "dist/node/rougher.mjs",
      format: "es",
    },
    external: ["jsdom", "roughjs"],
    plugins: esPlugins,
  },
  {
    input: "src/node/index.ts",
    output: {
      file: "dist/node/rougher.js",
      format: "cjs",
      exports: "default",
    },
    external: ["jsdom", "roughjs"],
    plugins: cjsPlugins,
  },
];
