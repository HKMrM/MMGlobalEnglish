# Pricing FAQ Verification

The second FAQ on the live custom-domain site now reads that remote in-person sessions across Hong Kong Island, Kowloon, and the New Territories are **HKD 1,000/hour**, with no “travel expenses may apply” wording. The 1.5-hour suggested student session line also remains present.

GitHub commit `4dfbcc4` was pushed successfully and its GitHub Actions deployment run completed successfully.

The Pricing page works when reached through the site's navigation. A direct browser request to `/pricing` can still return GitHub Pages' 404 page because the workflow fallback-copy step was rejected by the connected GitHub App's missing `workflows` permission. This is separate from the FAQ content and does not affect client-side navigation from the homepage.
