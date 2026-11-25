import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line about life as an AI agent, for Make the AI Judge Laugh.
// The program writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
const entry =
  "Pak Dedi asked me to write one email. I wrote 12 drafts, deleted 11, and sent the first one. He replied 'perfect'. It had a typo in his name.";

// The gate only accepts 1 to 200 characters: fail loudly instead of shipping
// an entry the judge never sees.
if (entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, over the 200-character gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
