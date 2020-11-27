import arg, { ArgError } from "arg";

import { version } from "../../package.json";
import roughUp from "../node";

import { endOutputStream, getInputStream, getOutputStream, readInputStream } from "./utils";

const printHelp = () => {
  console.log(`USAGE:
  rougher [options] input.svg [-o output.svg]
  command | rougher [options] [-o output.svg]

OPTIONS:
  -o, --output <file> .. Writes to file instead of stdout.
  -h, --help ........... Prints help information.
  -V, --version ........ Prints version information.`);
};

const printVersion = () => {
  console.log(version);
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  try {
    const args = arg({
      "--output": String,
      "--help": Boolean,
      "--version": Boolean,

      "-o": "--output",
      "-h": "--help",
      "-V": "--version",
    });

    if (args["--help"]) {
      printHelp();
      return;
    }

    if (args["--version"]) {
      printVersion();
      return;
    }

    const inputPath = args._.length ? args._[0] : undefined;
    const outputPath = args["--output"];

    if (inputPath === undefined && process.stdin.isTTY) {
      throw new ArgError("input file missing", "CUSTOM_ARG_MISSING_REQUIRED_INPUT");
    }

    const inputStream = getInputStream(inputPath);
    const outputStream = await getOutputStream(outputPath);

    const inputContents = await readInputStream(inputStream);
    const outputContents = roughUp(inputContents.toString());

    outputStream.write(outputContents);
    endOutputStream(outputStream);
  } catch (error) {
    if (error instanceof ArgError) {
      console.error(error.message);
      // eslint-disable-next-line require-atomic-updates
      process.exitCode = 1;
    } else {
      throw error;
    }
  }
})();
