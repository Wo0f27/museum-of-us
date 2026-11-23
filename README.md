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

## Change exhibit text or add actual photographs

Open `index.html` and find `const stories` near the bottom. Update the `text` and `foot` fields for each of the nine exhibits. The new Room II and Room III stories are placeholders, not claims about real relationship events.

To show a real image, put it in a `memories/` folder and add `image` and `alt` fields to the corresponding story object. Example:

```js
beginning: {
  num: 'I',
  title: 'Where It Began',
  text: 'A memory we shared...',
  foot: 'What made it special...',
  image: 'memories/our-first-photo.webp',
  alt: 'A photograph showing the place where we first met'
}
```

If an optional image fails to load, the default SVG illustration returns. The second and third exhibits are styled as artifact displays rather than only framed paintings.

> **Privacy:** The repository is public. Any committed photographs, personal details, or image files are publicly accessible. Never commit images you intend to keep private.

## Private answer delivery — needs one-time setup

Because GitHub Pages is static, it cannot privately receive responses by itself. **Private email delivery has been implemented but is NOT ACTIVE until you configure a Formspree form endpoint.** No answers are automatically sent.

1. Create a form at https://formspree.io/ using an inbox you control, and enable the email notifications you want.
2. Copy the public form endpoint, for example `https://formspree.io/f/abcdefgh`.
3. In `index.html`, replace `const FORM_ENDPOINT = '';` with your exact endpoint string. **Do not put API keys, a password, or any secret in the repository.**
4. Commit the change and allow GitHub Pages to deploy.
5. Test one submission yourself. Confirm it arrives in the Formspree dashboard or notification email before sharing the site.

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
- The final question can be changed in the `.final-question` text and the `QUESTION` constant so shared answers show the matching prompt.

## Technical notes

- Touch-friendly controls, phone-safe-area padding, stable swipe counters, three curtained galleries, keyboard navigation, Escape to close story dialog, and reduced-motion support.
- No remote JavaScript, no external fonts, and no extra images required by the initial site.
- The final keepsake is a downloadable SVG generated locally and contains no personal answer text.
- The Formspree integration uses a browser POST only after the visitor chooses Send. Backend form ownership is needed for private delivery.

**Status:** v0.5 live-site code. The Formspree endpoint and personal photo/story content are still unconfigured.