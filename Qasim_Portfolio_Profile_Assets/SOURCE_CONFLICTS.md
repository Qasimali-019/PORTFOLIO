# Source Conflicts / Manual Review

1. POS-FAHAD vs. dollarquetta.online
- CV lists "dollarquetta.online" as a second live POS/inventory client project (2025–Present, PostgreSQL stack).
- GitHub has a private repo named "POS-FAHAD" (cash-only POS, refund/exchange module, PostgreSQL stack) that closely matches this description but was never confirmed to be the same project.
Action: Do not merge these into one entry until confirmed. Keep as separate line items until Qasim confirms whether POS-FAHAD is dollarquetta.online's actual repo name, an earlier/different client project, or unrelated.

2. Private repository links
- GitHub contains public, private, and duplicate/earlier-version repositories (e.g. `sirat` vs `siratulmustaqeem`, `eventcraft` vs `eventbookings`).
- Private repos identified: `POS-FAHAD`, `super-china-pos`, `siratulmustaqeem`.
Action: Only public repositories should get public-facing GitHub links. Private projects should be listed as "Private" with no clickable repo link, since a private repo URL 404s for visitors and reveals nothing useful anyway.

3. Project depth
- Several public repos (Attendify-AI, OmniDispatch, MacroMasterAI-App, Shopping Management System, Ticket Management System) were sourced only from GitHub's repo-list description text, not full README contents, screenshots, or live demos.
Action: Do not fabricate architecture, metrics, or feature details beyond what the repo description states. Pull full READMEs before publishing detailed claims about these.

4. Certifications and achievements
- No verified certifications or hackathon/competition achievements exist for Qasim at this time.
Action: Leave both sections empty (or hidden in the UI) rather than filling them with placeholder or borrowed content. Revisit only when Qasim provides real credentials.

5. Headline / framing consistency
- Earlier drafts of this portfolio (inherited from a forked template) described Qasim as an "AI/ML Student | Creative Designer." Neither is supported by his CV.
Action: All public-facing copy should consistently use the CV-backed framing: Full-Stack Developer | QA & Software Testing Intern. Do a final repo-wide check before deploy to confirm no leftover "AI/ML" or "Creative Designer" framing remains in copy, metadata, or SEO keywords.