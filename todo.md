# Homepage Hero Image Update

- [ ] Inspect the current homepage hero asset and layout usage.
- [ ] Generate a replacement image showing a student from behind addressing Hong Kong students.
- [ ] Review the generated image for privacy-conscious framing and website suitability.
- [ ] Replace the homepage hero asset and verify the homepage layout.
- [ ] Deliver the preview and summarize the update.

## Style reminder

The visual should reinforce the MM Global English Classy Blue identity: professional, international, academic, warm, and privacy-conscious. Avoid overtly visible student faces and avoid generic stock-photo styling.

## User-provided constraints

- Replace the homepage image of a student speaking to a class.
- Prefer a behind-the-student view toward a group of Hong Kong students.
- Show the user what can be done before or alongside implementation.
- Preserve the current website's professional presentation.

## Status

Phase 1: Inspecting the current homepage hero asset and layout usage — complete.
Phase 2: Generate a replacement image — complete.
Phase 3: Replace the asset and verify the homepage — complete.
Phase 4: Deliver the preview and update summary — in progress.

## Style decisions

- Use a landscape, text-safe composition suitable for a full-bleed homepage hero.
- Frame the speaker from behind or in a three-quarter rear view.
- Keep students' faces turned away, obscured, or softly out of focus.
- Use a credible Hong Kong international-school classroom atmosphere without readable school branding or fabricated text.
- Retain enough darker negative space for the existing hero copy and Classy Blue overlay.

## Style reference

- Design direction: Classy Blue / warm academic coaching brand.
- Primary brand color: #0F5A8F.
- Existing hero copy overlays the left/center area, so the image must remain text-safe there.
- Use an editorial, documentary-style educational photograph rather than a glossy advertisement.

## Completion criteria

- A replacement image is generated and available as an attachment/preview.
- The homepage uses the replacement image if the user approves or if implementation is clearly requested.
- No overt student faces are shown.
- The homepage remains readable and responsive.
- Changes are saved to the project checkpoint; GitHub sync is not assumed unless explicitly requested.

## Open question

- User asked to "show me what you can do"; generate the visual first, then confirm whether they want it installed immediately if approval is ambiguous.

## Unchecked checklist

- [x] Candidate image generated.
- [x] Candidate image visually reviewed.
- [x] Reference-based classroom candidate generated and verified.
- [x] Final response sent with candidate image preview.


# Reference-Based Mr. Michael Classroom Image

- [ ] Prepare a visual brief using the uploaded reference photos.
- [ ] Generate Mr. Michael standing at the front of a class.
- [ ] Review identity consistency, student privacy, and classroom composition.
- [ ] Deliver the generated image for user review before any website replacement.

## Reference-image constraints

Use the uploaded photos to guide Mr. Michael's facial features, bald head, facial hair, build, and professional presence. Prefer a polished but natural classroom or public-speaking workshop. Keep students' faces turned away, out of focus, or otherwise non-identifiable. Exclude visible City University branding, slide text, watermarks, and unrelated institutional logos. Do not change the website until the user approves the generated candidate.

## Composition preference

Create a landscape, website-friendly scene with Mr. Michael clearly visible at the front of a classroom, speaking or gesturing naturally. Preserve enough clean space for possible website text overlay if the image later becomes a hero asset. Use a warm, credible Hong Kong or international-school environment consistent with the MM Global English Classy Blue brand.

## Status

Phase 1: Prepare the uploaded reference images and visual brief — in progress.
Phase 2: Generate the classroom scene using the reference photos.
Phase 3: Review the generated image for identity, privacy, and website suitability.
Phase 4: Deliver the generated image for user review.


# Side/Rear-View Mr. Michael Homepage Hero

- [ ] Generate a wide classroom hero image showing Mr. Michael from a side or rear three-quarter view.
- [ ] Preserve the uploaded reference likeness, professional presence, and student privacy.
- [ ] Replace the current homepage main hero image.
- [ ] Verify the crop, text contrast, and responsive presentation.
- [ ] Save the update and deliver it to the user.

## Composition requirements

Mr. Michael should be clearly recognizable from a side or rear three-quarter angle while standing at the front of a modern Hong Kong or international-school classroom. Students should be seen from behind, in soft focus, or otherwise non-identifiable. The image should be wide landscape, with darker uncluttered space on the left for the existing homepage headline and CTA buttons. Avoid institutional logos, readable screen text, watermarks, and unrelated branding.

## Status

Phase 1: Define composition and update task record — in progress.
Phase 2: Generate the side/rear classroom hero image.
Phase 3: Install and verify the homepage hero.
Phase 4: Save and deliver the homepage update.


# UN General Assembly Photo Expression Edit

- [ ] Create a warmer, happier expression while preserving the original photograph.
- [ ] Preserve Mr. Michael's identity, venue, clothing, camera angle, lighting, and background.
- [ ] Review the edited candidate before updating AboutMichael.tsx.
- [ ] Deliver the candidate for user approval.

## Edit constraints

Change only Mr. Michael's facial expression: a natural, warmer smile and more welcoming eyes. Do not alter the UN General Assembly setting, seating, architecture, camera perspective, clothing, body position, or image realism. Avoid an exaggerated grin, facial distortion, identity drift, or fabricated background details. Do not replace the website photo until the user approves the candidate.


## Photo update status

The approved happier UN General Assembly image is now referenced by AboutMichael.tsx at `/manus-storage/mr-michael-un-happier-expression_aa15ae11.png`. The refreshed Mr. Michael page displays the image in the profile section with the existing layout intact.


# GitHub and Custom-Domain Synchronization

## Completed result

Commit `1cdaf30` was pushed to `HKMrM/MMGlobalEnglish`. GitHub Actions run `31773032484` completed successfully. The custom domain returned HTTP 200 and its current JavaScript bundle contains the stable CDN references for both the homepage classroom hero and the happier UN General Assembly profile image. Both CDN assets returned HTTP 200.


- [x] Inspect local repository status, remotes, CNAME, and deployment workflow.
- [x] Commit any latest website and photo changes that were not already committed.
- [x] Push the current build to the connected GitHub repository.
- [x] Verify the GitHub Actions workflow and GitHub Pages deployment.
- [x] Confirm mmglobalenglish.com serves the current photo assets through stable CDN URLs.
- [x] Report the exact result and next action to the user.


# Pricing FAQ and GitHub Pages Route Fix

- [ ] Confirm the second Pricing FAQ no longer mentions travel expenses.
- [ ] Add a GitHub Pages SPA fallback so direct routes such as /pricing do not return 404.
- [ ] Push the workflow and copy changes to GitHub.
- [ ] Verify the Pricing page and updated FAQ on mmglobalenglish.com.


# Mobile Homepage Hero Optimization

- [x] Inspect the current homepage hero image source, text overlay, and mobile breakpoints.
- [x] Generate a mirrored mobile hero composition with Mr. Michael on the left looking right.
- [x] Add responsive art direction so desktop and mobile can use the appropriate composition.
- [x] Improve mobile hero height, background positioning, overlay contrast, and text spacing.
- [x] Verify the homepage build and confirm the mobile asset serves correctly; desktop preview remains intact.
- [x] Save the verified website update and report the result.


# Live Mobile Hero Deployment Fix

- [x] Inspect the mobile hero source in the current build and confirm the mirrored asset is the intended candidate.
- [x] Upload the mirrored mobile hero to a stable public CDN URL for GitHub Pages.
- [x] Replace the Manus-only mobile path with the public URL.
- [x] Push the responsive mobile hero fix to GitHub.
- [x] Verify the GitHub Actions run and the current mobile asset reference in mmglobalenglish.com.
- [x] Report the live result and any cache-refresh instruction.


# Unified Mirrored Homepage Hero

- [ ] Inspect and reconcile the interrupted GitHub synchronization state.
- [ ] Use the single mirrored classroom hero image on desktop and mobile.
- [ ] Remove the separate mobile hero source and responsive image split.
- [ ] Push the unified hero change to GitHub.
- [ ] Verify the live custom domain and save the result.


# Hero Label Composition Correction

- [x] Move the “Private Coaching · Hong Kong” label away from Mr. Michael’s head.
- [x] Preserve one shared mirrored hero image for desktop and mobile.
- [x] Verify the revised crop, text placement, contrast, and responsive appearance.
- [x] Save the corrected website revision.


# Upper-Left Hero Banner Placement

- [x] Move the “Private Coaching · Hong Kong” banner to the upper-left above Mr. Michael’s head.
- [x] Keep clear spacing between the banner and Mr. Michael across desktop and mobile.
- [x] Verify the shared hero image, headline readability, and responsive crop.
- [ ] Save the revised website checkpoint.


# Supplied Photo Classroom Hero Revision

- [ ] Use MCF_CityUMUN.png as the identity and pose reference.
- [ ] Remove the City University logo and all podium wording/graphics.
- [ ] Generate a wide homepage-ready image of Mr. Michael facing a classroom.
- [ ] Keep students non-identifiable and preserve text-safe space for the hero copy.
- [x] Review the generated image before replacing the current homepage hero.


# Approved Classroom Hero Installation

- [x] Prepare the approved classroom image as the homepage hero asset.
- [x] Replace the current shared desktop/mobile hero source.
- [x] Preserve the upper-left “Private Coaching · Hong Kong” banner and readable text overlay.
- [x] Verify the homepage hero and save the revision.


# GitHub Publication Handoff

- [ ] Confirm the approved homepage hero revision is present locally.
- [ ] Save and synchronize the revision with the connected GitHub repository.
- [ ] Confirm the GitHub Pages publication handoff for mmglobalenglish.com.
- [ ] Provide the user with the exact next publication action if GitHub requires it.


# Mr. Michael Biography Update

- [x] Replace the existing biography with the user-provided background and experience.
- [x] Preserve the professional Classy Blue layout and page hierarchy.
- [x] Verify the updated biography on desktop and mobile.
- [ ] Save the revised page checkpoint.


# Home.tsx Merge and HMR Repair

- [x] Inspect and resolve the interrupted merge conflict in Home.tsx.
- [x] Preserve the approved homepage hero implementation and biography update.
- [x] Rebuild the project and verify `/about-michael` and `/`.
- [x] Save a clean recovery checkpoint if the project state is valid.


# GitHub Pages Biography Publication

- [x] Confirm the clean recovery revision and GitHub main state.
- [x] Push the repaired homepage and updated Mr. Michael biography to GitHub main.
- [x] Confirm the GitHub Pages workflow succeeds.
- [ ] Verify mmglobalenglish.com serves the published biography update.


# GitHub Pages Direct-Route Fallback

- [ ] Add a workflow-safe SPA fallback for direct React routes without modifying the protected workflow file.
- [ ] Push the fallback and confirm the GitHub Pages workflow succeeds.
- [ ] Verify the homepage and `/about-michael` on mmglobalenglish.com.


# Supplied MM Global English Logo Update

- [x] Remove the checkerboard background and prepare a transparent or clean white version.
- [x] Prepare the supplied logo asset for the web header and favicon use.
- [x] Replace the current top-left logo with the full mark including “Global English.”
- [x] Tune responsive sizing so the full logo remains legible on desktop and mobile.
- [ ] Verify the header and save the revision.
