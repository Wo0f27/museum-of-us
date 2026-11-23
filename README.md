# The Museum of Us — Anniversary Countdown, Day 01

**Mobile-first interactive museum · v0.4**

GitHub Pages site built with HTML, CSS, inline SVG, and vanilla JavaScript. No framework, package install, backend, or paid hosting is required for the visual experience. Goma's sticker is loaded from an external image host, with an inline fallback.

## Visitor experience

1. At the museum entrance, **tap the admission ticket itself**. It tears into two pieces and transitions into the gallery. The ticket also works with a keyboard. Reduced-motion settings skip the animation.
2. Swipe the exhibits on a phone (or use previous/next controls). Desktop retains a wider gallery.
3. Open the three exhibits and collect their memories.
4. The last display illuminates when all three are discovered.
5. Enter a memory for the final exhibit. The text is framed in a handwritten style and stored locally on the visitor's device.
6. Collect the stamped Day 01 ticket as an SVG download, and optionally share the answer or explicitly send it using private delivery once configured.

One character cameo is intentionally included: **Goma (the gray cat) waving beside Return to entrance**. The page uses a verified existing Goma sticker hosted on Tenor, with a simplified gray-cat SVG fallback if the image is unavailable. Peach does not appear anywhere else. The animated sticker requires network access to Tenor.

## Change exhibit text or add actual photographs

Open `index.html` and find `const stories` near the bottom. Change the `text` and `foot` values for each exhibit. The included text is intentionally general until real memories are provided.

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

Only answers and delivery status are stored in `localStorage`. Exhibit visit progress starts fresh at 0/3 on every page load and when returning to the museum entrance. Clearing browser data removes that local state. Nothing is sent to GitHub. The owner can only receive answers sent explicitly through the configured service, or ones manually shared.

## Host on GitHub Pages

Repository: https://github.com/Wo0f27/museum-of-us

Live address: https://wo0f27.github.io/museum-of-us/

The `.github/workflows/pages.yml` GitHub Actions workflow publishes updates to `main`. If necessary, open Repository Settings → Pages → Build and deployment → Source: GitHub Actions.

## Future personalization

- Replace generic exhibit copy with exact memories and personal objects.
- If desired, add your own exhibit images (with the privacy warning above in mind).
- Keep Goma limited to the entrance-return attendant, unless you explicitly choose otherwise later.
- The final question can be changed in the `.final-question` text and the `QUESTION` constant so shared answers show the matching prompt.

## Technical notes

- Touch-friendly controls, phone-safe-area padding, swiping, keyboard navigation, Escape to close story dialog, and reduced-motion support.
- No remote JavaScript, no external fonts, and no extra images required by the initial site.
- The final keepsake is a downloadable SVG generated locally and contains no personal answer text.
- The Formspree integration uses a browser POST only after the visitor chooses Send. Backend form ownership is needed for private delivery.

**Status:** v0.4 live-site code. The Formspree endpoint and personal photo/story content are still unconfigured.