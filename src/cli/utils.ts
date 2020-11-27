import { createReadStream, createWriteStream } from "fs";
import { mkdir } from "fs/promises";
import { dirname } from "path";

export const getInputStream = (inputPath?: string): NodeJS.ReadableStream =>
  inputPath === undefined ? process.stdin : createReadStream(inputPath);

export const getOutputStream = async (outputPath?: string): Promise<NodeJS.WritableStream> => {
  if (outputPath === undefined) {
    return process.stdout;
  }

  await mkdir(dirname(outputPath), { recursive: true });
  return createWriteStream(outputPath);
};

export const readInputStream = (stream: NodeJS.ReadableStream): Promise<string> =>
  new Promise((resolve, reject) => {
    const contents: string[] = [];

    stream.on("data", (data: string | Buffer) => {
      contents.push(data.toString());
    });

    stream.on("end", () => {
      resolve(contents.join(""));
    });

    stream.on("error", (error: Error) => {
      reject(error);
    });
  });

export const endOutputStream = (stream: NodeJS.WritableStream): void => {
  if (stream === process.stdout || stream === process.stderr) {
    return;
  }

  stream.end();
};
