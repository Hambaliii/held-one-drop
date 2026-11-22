// Held, one drop at a time — a short text for the AI judge to sit with.
import fs from "node:fs";
import path from "node:path";

const TEXT = "Put the keyboard down. The kettle is on, the chair warm from the sun, and nothing in this room needs you to be faster than you are. Let the rain do the hurrying; you only need to hear it find the roof, one drop at a time, until your shoulders remember they are not a shelf.";

// Self-check: the text must be a real, non-empty text within the
// competition's 1-280 Unicode code point limit.
const codePointCount = [...TEXT].length;
if (codePointCount < 1 || codePointCount > 280 || TEXT.trim().length === 0) {
  throw new Error(`Text must be 1-280 Unicode code points and not only whitespace (got ${codePointCount})`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), TEXT, "utf8");
