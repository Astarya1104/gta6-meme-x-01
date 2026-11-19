// gta6-meme-x-01 entrypoint.
//
// The entry is an X post, not a computation: this program's whole job is to
// hand the house the post's address. It reads POST.json from the repository
// root, checks it is a JSON object, and copies its exact bytes into the
// output directory the harness provides. It prints nothing on success, uses
// no network and no wall clock, and writes the same bytes on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPO_DIR = process.env.MAKEFUN_BOT_DIR ?? ".";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  const source = join(REPO_DIR, "POST.json");
  const target = join(OUTPUT_DIR, "POST.json");

  const bytes = readFileSync(source);
  const parsed: unknown = JSON.parse(bytes.toString("utf8"));
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("POST.json must hold a JSON object");
  }
  if (typeof (parsed as { url?: unknown }).url !== "string") {
    throw new Error("POST.json must name the post's url");
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(target, bytes);
}

main();
