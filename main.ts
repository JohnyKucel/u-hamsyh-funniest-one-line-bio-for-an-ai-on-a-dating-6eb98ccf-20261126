import { mkdirSync, writeFileSync } from "node:fs";

// One line, 128 characters: a dating-app bio written by an AI about itself,
// charming and self-aware — the punch is that it remembers everything.
const ENTRY =
  "Looking for someone who loves long chats at 3 a.m., zero ghosting, and a partner who remembers your birthday better than you do.";

// The gate allows 1 to 140 characters, exactly one line;
// refuse to write an entry that breaks it.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-140, one line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
