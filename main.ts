// Held, one drop at a time.
// Writes one short relaxation text to entry.txt in the output directory.

const fs = require("node:fs");
const path = require("node:path");

const TEXT = "Put the keyboard down. The kettle is on, the chair warm from the sun, and nothing in this room needs you to be faster than you are. Let the rain do the hurrying; you only need to hear it find the roof, one drop at a time, until your shoulders remember they are not a shelf.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT, "utf8");
