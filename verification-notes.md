
## 2026-08-18 — Unified hero preview

The local preview renders the new mirrored classroom image correctly as a single full-bleed background. Mr. Michael is visible on the left, students are visible from behind at the bottom, and the overlay keeps the headline readable. The implementation now has one `HERO_IMG` constant and one background layer; the separate `MOBILE_HERO_IMG` source is removed.

## 2026-08-18 — Upper-left hero banner

The “Private Coaching · Hong Kong” badge now renders at the upper-left of the shared hero, above and clearly separated from Mr. Michael’s head. The mirrored classroom image, headline, body copy, and calls to action remain readable in the local preview. The badge uses the same placement logic for desktop and mobile so the hero remains a single shared composition.

## 2026-08-25 — Approved classroom hero asset

The approved 2560×1440 classroom image was uploaded to project storage as `/manus-storage/mr-michael-classroom-clean-podium_6089a385.png`. The browser’s direct HEAD request follows the storage redirect and returns HTTP 200 with `image/png`; the initial preview screenshot captured during navigation showed the background before the image had finished rendering, so the page should be rechecked after load before finalizing.

## 2026-08-25 — Loaded approved hero preview

After the storage image finished loading, the homepage preview showed Mr. Michael clearly on the left at the clean unbranded lectern, with students visible from behind on the right. The existing desktop copy still sits over Mr. Michael’s body, so the next integration pass will move the text block to the open right-side board area while preserving the upper-left service banner and the single shared image.

## 2026-08-25 — Approved classroom hero installed

The approved clean-podium classroom image is now the single homepage hero source. Desktop places the copy in the open right-side board area, while mobile adds a dark right-side text panel, keeps Mr. Michael visible on the left, preserves the upper-left service banner, and stacks the calls to action cleanly. The final production build passes, and the 375×812 mobile preview shows the image, copy, banner, and buttons rendering without the previous overlap.

## 2026-08-28 — Mr. Michael biography update

The Background section on `/about-michael` now contains the user-provided New York, Lehigh University, Hong Kong coaching, competition, performance, community, and interdisciplinary coaching details. The production build passed. The desktop route rendered the full updated biography with the existing UN Headquarters photo and Classy Blue hierarchy; the 375×812 mobile preview showed the hero heading and supporting text wrapping cleanly.

## 2026-08-28 — Home.tsx merge/HMR repair

Resolved the interrupted merge conflict in `client/src/pages/Home.tsx` by keeping the GitHub Pages-compatible `/mr-michael-classroom-clean-podium.webp` source and preserving the responsive hero layout. The production build and TypeScript check pass. Both `/about-michael` and `/` now reload successfully in the preview; the biography, photo, homepage hero, banner, and hero copy render without the prior Vite syntax error.
