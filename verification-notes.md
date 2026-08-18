
## 2026-08-18 — Unified hero preview

The local preview renders the new mirrored classroom image correctly as a single full-bleed background. Mr. Michael is visible on the left, students are visible from behind at the bottom, and the overlay keeps the headline readable. The implementation now has one `HERO_IMG` constant and one background layer; the separate `MOBILE_HERO_IMG` source is removed.

## 2026-08-18 — Upper-left hero banner

The “Private Coaching · Hong Kong” badge now renders at the upper-left of the shared hero, above and clearly separated from Mr. Michael’s head. The mirrored classroom image, headline, body copy, and calls to action remain readable in the local preview. The badge uses the same placement logic for desktop and mobile so the hero remains a single shared composition.
