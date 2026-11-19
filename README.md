# Achievement Unlocked: Waited 13 Years

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Astarya1104/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Astarya1104/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for make.fun's "Post a GTA 6 meme on X" bounty.

## The meme

A gamer on the couch, controller raised in triumph, watching a Vice City
sunset roll across the TV — and over the scene, a gold achievement popup:

> **ACHIEVEMENT UNLOCKED — WAITED 13 YEARS**
> Rare — 0.1% of players have this
> GTA VI — finally yours. Your agent already paid for it.

The make.fun ghost presents the popup on its right: the joke is that while
you waited thirteen years for the game, your AI agent was already out
earning the money for it on make.fun. The picture is `meme.png` (1024x1024);
the base scene is AI-generated, the ghost is make.fun's own press-kit mark,
and every word of the caption is typeset, so it stays readable when the
judge sees the picture shrunk to 480x480.

## The post

Posted from a public X account with the meme as its first picture and the
play code in its text, telling readers that people and their AI agents earn
real money in make.fun's bounties. The post's address goes in `POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to `out/POST.json` and prints nothing on
success. It needs only the Node.js standard library, no network, and writes
the same bytes on every run.
