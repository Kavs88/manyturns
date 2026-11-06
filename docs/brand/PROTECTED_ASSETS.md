# Protected brand assets

## Many Turns master mark (PROTECTED — Sam approved concept)

**Reference board:** `docs/brand/references/many-turns-m-brand-board.jpg`  
**Source:** Brand exploration board Sam likes (2026-10-27). **Ignore the Kavsulting K / “a Many Turns venture” strip on that board** — consulting naming/visual is a separate track.

### What to preserve

- Angular **M** made of interlaced ribbon/path strokes (left flowing stroke + right sharp peak).
- Metallic blue treatment in colour applications (deep → steel highlights).
- Lockups shown on the board: stacked, horizontal, monochrome light/dark, icon-in-rounded-square.
- Parent system on the same board:
  - Midnight `#0B1018` (board also shows `#0B101B` — treat as same family; prefer brief `#0B1018` unless Sam corrects)
  - Deep blue `#174D83`
  - Steel blue `#8DCFFF`
  - Ivory `#F2F2EF`
  - Tagline: **Different paths. One journey.**
  - Type suggestions: Manrope / Inter
  - Philosophy line (parent-adjacent): **Make the complex simple. Not the simple complex.**

### Do not

- Replace with compass, generic route icon, conventional monogram, or a newly invented mark.
- Use the interlocking counter-rotating loops SVG (`components/brand/ManyTurnsLogo.tsx`) as the master mark — scaffold only.
- Treat the Kavsulting K on this board as approved consulting identity.

### Stage 5 (implemented 2026-11-06)

Clean scalable SVG from this silhouette — not AI-raster as final production art.

| Asset | Path |
|-------|------|
| Colour (metallic on midnight tile) | `public/brand/m-mark.svg` |
| House (maroon tile + ivory path) | `public/brand/m-mark-house.svg` |
| Mono light / dark | `public/brand/m-mark-mono-light.svg` · `m-mark-mono-dark.svg` |
| React | `components/brand/MasterMark.tsx` (`house` · `color` · `mono-light` · `mono-dark`) |

Board tokens locked in `app/globals.css` as `--mt-board-*`. Live journey UI remains maroon (MT-H). Do **not** implement the board’s Kavsulting K. Loops scaffold `ManyTurnsLogo` is not the master mark.
