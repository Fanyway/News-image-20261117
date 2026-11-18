# Sum up 17 November's world news in one image

A newspaper front page summing up the world's news of Tuesday, 17 November 2026 — U.S. strikes on Iran, the Trump–Xi–Putin summit, the Kerch Bridge hit, the Gaza aid call, the U.S. losing measles elimination status, and the NVIDIA spy scandal — drawn as one 1024×1024 image.

[![make.fun](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Fanyway/News-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Fanyway/News-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the `entry.png` shipped beside it to the output directory as `entry.png`, byte for byte, and verifies the copy.
