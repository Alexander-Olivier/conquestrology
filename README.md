# Conquestrology

Astrology, with receipts. A personality quiz that parodies zodiac signs: answer 26 questions and find out which of 24 historical empires you are, at a specific moment in its history.

Twelve houses (four temperaments by three modes), each with one card at its height and one under strain. Every card has a zodiac-style reading of who you are in any year, and a narrative of the year you happen to be in.

## Run it

It is a static site with no build step. Serve the folder with any static server:

```bash
python3 -m http.server 8791
```

Then open http://localhost:8791/index.html. To preview a specific homepage headline, add `?hero=0` through `?hero=10`.

## Files

| Path | What it holds |
|---|---|
| `index.html` | The app: markup, styles and logic |
| `data.js` | Brand copy, homepage headlines, the 20 personality questions, the first 12 empires |
| `moments.js` | The 6 situation questions and the other 12 cards |
| `readings.js` | The long readings: the sign and the year narrative for each card |
| `bedroom.js` | The 18+ "In bed" chapter for each card, closed until the reader opens it |
| `roasts.js` | The one-liner aimed at the reader on each card, used as the result page headline and in the share text |
| `situations.js` | The real powers around each card, for the situation maps |
| `hist.js`, `world.js` | Border and land data |
| `maps/` | Pre-drawn portolan charts, one script per card (`m-` prefix for phones) |
| `maps-src/gen.js` | The generator for those charts |
| `art/`, `flags/` | Card art, section illustrations, question art and flags |

## Redrawing the maps

```bash
node maps-src/gen.js german both portolan /tmp/out
```

Add `MAP_W=420 MAP_H=400 MAP_LABEL=1.12 MAP_FURN=.72` in front for the phone version. The scripts in `maps/` wrap those SVGs.

## Quiz rule worth knowing

The quiz picks a card by temperament, mode and state. Every house must hold exactly one `high` and one `strain` card, or a card becomes unreachable. Check this whenever a card is added or moved.

## Credits

- Historical borders: [historical-basemaps](https://github.com/aourednik/historical-basemaps), GPL v3
- Coastlines: Natural Earth, through [world-atlas](https://github.com/topojson/world-atlas)
- Flags: Wikimedia Commons, with per-flag credits in `data.js`
- Illustrations: generated with ChatGPT
- Libraries: [d3](https://d3js.org) and [topojson-client](https://github.com/topojson/topojson-client), [polygon-clipping](https://github.com/mfogel/polygon-clipping) in the map generator
