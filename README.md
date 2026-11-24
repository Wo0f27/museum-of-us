# The Museum of Us — Anniversary Countdown, Day 01

**Mobile-first interactive museum · v0.5**

GitHub Pages site built with HTML, CSS, inline SVG, and vanilla JavaScript. No framework, package install, backend, or paid hosting is required for the visual experience. Goma's sticker is loaded from an external image host, with an inline fallback.

## Visitor experience

1. At the museum entrance, **tap the admission ticket itself**. It tears into two pieces and transitions into the gallery. The ticket also works with a keyboard. Reduced-motion settings skip the animation.
2. Choose among three galleries: Where It Began, Ordinary Wonders, and Still Becoming. Each gallery starts behind a red velvet curtain; tap to pull it aside.
3. Swipe through the exhibits on a phone (or use previous/next controls), and tap a frame to read it. Each gallery has its own stable exhibit counter.
4. Collect all nine memories across the galleries. The tenth and final frame illuminates when all nine are discovered.
5. Enter a memory for the final exhibit. The text is framed in a handwritten style and stored locally on the visitor's device.
6. Collect the stamped Day 01 ticket as an SVG download, and optionally share the answer or explicitly send it using private delivery once configured.

Goma (the gray cat) remains the museum attendant on **Return to entrance**, with a gray-cat SVG fallback if its hosted image fails. The two illustrated buttons at the end use **Peach and Goma stickers** already present in the owner's earlier `please-forgive-me-my-love` repository. The gallery and ticket entrance have no extra character decorations. These character images load over the network.

## Personalize all text from your phone

**Edit only [museum-text.js](museum-text.js)** for normal changes to the museum's wording. The ticket, photo albums, gallery navigation, CSS, and Formspree system remain in `index.html`.

1. Open [the phone-friendly text editor](https://github.com/Wo0f27/museum-of-us/edit/main/museum-text.js) while signed in to GitHub.
2. Choose **Edit** (pencil), change words **inside the double quotation marks**, and keep the `{ }`, commas, and field names intact.
3. Scroll down, select **Commit changes**, and commit to `main`.
4. Confirm the [Pages deployment](https://github.com/Wo0f27/museum-of-us/actions) succeeds, then open the [museum](https://wo0f27.github.io/museum-of-us/) in a new/private tab to bypass stale browser cache. GitHub Pages and mobile browsers can cache recently changed files.

The file has five clearly marked sections:

- **Entrance + ticket** — your invitation, museum introduction, ticket wording, and the personal note.
- **Three galleries** — room titles and introductory descriptions.
- **Nine exhibits** — each `title`, `subtitle`, `story` (the long passage), and `closing` (the short text below it). Your photos remain untouched.
- **Gallery footer** — the museum's closing quote and Goma's attendant wording.
- **Final reflection** — the question, input prompt, and message she sees after contributing a memory.

**Change the final question only in `museum-text.js`.** The visible question and Formspree metadata automatically use the same value.

If a quotation mark is needed inside a sentence, write `\\"` or use curly quotation marks. To add paragraph breaks in an exhibit story, insert `\\n\\n` within the quoted string. Never change the `photoAlbums` code to rewrite exhibits.

**Safe fallback:** `index.html` still contains the original text so a missing `museum-text.js` will not erase the content. But while `museum-text.js` loads normally, its text takes priority over duplicate fallback wording in the HTML.

**Privacy:** This is a public repository; any committed stories or photographs are publicly accessible.


## Private answer delivery — endpoint connected, live receipt not yet tested

GitHub Pages is static, so the visitor's answer is delivered through Formspree **only when they explicitly tap Send my memory** after saving it to the exhibit.

**Configured form endpoint:** `https://formspree.io/f/mzerkrjb` (public form endpoint, not a secret API key).

1. In Formspree, make sure your account's form is active and email notifications are addressed to your verified inbox.
2. Open the live museum in a private/incognito browser. Complete the nine exhibits, choose a memory, and select **Place it in the museum**.
3. Choose **Send my memory** and confirm the interface shows **Memory delivered**.
4. Verify the answer appears in your Formspree submission dashboard and notification email.

Never put your Formspree account password, API key, or other private secret in this public repository.

Once connected, saving a memory reveals an optional **Send my memory** button. It clearly tells the visitor that pressing Send delivers the answer to the maker of the site. A successful HTTP response marks it delivered; a failed request shows a retry message and preserves the local response. An unchanged answer cannot be resent from that browser without editing it.

Without a configured endpoint, the site retains the **Share my answer** button, which uses the phone's native share sheet or clipboard. Local memory saving, ticket download, and all exhibits still work.

Only answers and delivery status are stored in `localStorage`. Exhibit progress starts fresh at 0/9 on each page load and when returning to the museum entrance; curtain states also reset. Clearing browser data removes that local state. Nothing is sent to GitHub. The owner can only receive answers sent explicitly through the configured service, or ones manually shared.

## Host on GitHub Pages

Repository: https://github.com/Wo0f27/museum-of-us

Live address: https://wo0f27.github.io/museum-of-us/

GitHub's built-in **pages build and deployment** workflow publishes changes from `main` (the repository is already configured for branch-based publishing). The custom `.github/workflows/pages.yml` is manual-only to avoid duplicate deployments. If necessary, check **Repository Settings → Pages** to confirm the publishing source is `main`.

## Future personalization

- Replace generic exhibit copy with exact memories and personal objects.
- If desired, add your own exhibit images (with the privacy warning above in mind).
- Keep Goma on the Return to entrance attendant button, and the final Peach/Goma stickers on the two ending navigation buttons, unless you explicitly choose otherwise.
- Edit the final question once in `museum-text.js`; the visible prompt and shared/submitted metadata stay synchronized.

## Technical notes

- Touch-friendly controls, phone-safe-area padding, stable swipe counters, three curtained galleries, keyboard navigation, Escape to close story dialog, and reduced-motion support.
- No remote JavaScript, no external fonts, and no extra images required by the initial site.
- The final keepsake is a downloadable SVG generated locally and contains no personal answer text.
- The Formspree integration uses a browser POST only after the visitor chooses Send. Backend form ownership is needed for private delivery.

**Status:** All 45 optimized photographs are live across nine exhibits. The Formspree endpoint has passed an owner-confirmed test. Personalized wording is centralized in `museum-text.js`.