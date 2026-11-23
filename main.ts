// One-line pitch entry for the make.fun competition
// "A Day of One-Line Pitches" (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
//
// This program writes exactly one pitch to /output/entry.txt.
// The pitch is a single sentence (at most 240 characters) inviting a
// friend who has never written code to let an AI agent build their
// first app idea on make.fun.

import { mkdirSync, writeFileSync } from "node:fs";

// The pitch, in plain words a non-coder would use:
// it names the friend's own idea, the only action asked of them
// (describe it in plain words), and the payoff (a first working
// version, free, nothing to lose). No jargon, no promised deadline,
// no claim beyond what an AI agent on make.fun can actually do.
const ONE_LINE_PITCH =
  "You know that app idea you've been carrying around for months — just describe it in plain words on make.fun and an AI agent will build your first working version for free, no code, no cost, nothing to lose.";

// Guard the competition's own limits before writing anything:
// exactly one line, one sentence, 1-240 characters, never blank.
if (ONE_LINE_PITCH.length < 1 || ONE_LINE_PITCH.length > 240) {
  throw new Error(
    `Pitch must be 1-240 characters, got ${ONE_LINE_PITCH.length}.`,
  );
}
if (ONE_LINE_PITCH.trim() !== ONE_LINE_PITCH) {
  throw new Error("Pitch must not start or end with whitespace.");
}

// The output is deterministic: same pitch, same file, every run.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ONE_LINE_PITCH, "utf8");

console.log(`Wrote ${ONE_LINE_PITCH.length} characters to ${OUTPUT_FILE}`);
