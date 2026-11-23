# The Museum of Us

**Day 01 — Anniversary Countdown**

A self-contained, illustrated, mobile-friendly museum experience. Visitors enter with a ticket, explore three exhibits, unlock a fourth, and choose a relationship memory to place in the final frame.

## Run locally

Open `index.html` in a modern browser. No package installation, build process, external library, server, or API key is required.

## Personalize before sharing

- Open `index.html` and find the `const stories` JavaScript object near the end. Replace `text` and `foot` for `beginning`, `little`, and `onlyus` with your own real memories.
- The current story copy intentionally avoids inventing personal events.
- Edit the final question in `.final-question` and its matching copy in the share handler if you want a different question.
- Edit CSS colors in the `:root` rule to change the palette.
- The illustrated frames are original inline SVGs; there are no third-party images or fonts.

## Visitor flow

1. Enter the museum from the ticket screen.
2. Open the three exhibits in any order and select **Keep this moment**.
3. The final display unlocks at 3/3 discoveries.
4. Submit a favorite memory to see it exhibited in the final frame.
5. Optionally select **Share my answer** to open the device share sheet or copy the answer to send in a message.

## Privacy

Submitted memories and exhibit progress are stored in this browser's `localStorage` only. The site does not send answers to a server or GitHub. Visitors must share responses explicitly. The answer will not follow them to another browser or device, and clearing browser data may erase it.

**Important:** Anything committed to this public repository, including any photos added later, can be viewed publicly.

## Publish

A GitHub Actions Pages workflow lives at `.github/workflows/pages.yml`. It deploys the static files from `main` and attempts first-time Pages enablement. If the action cannot initialize Pages automatically, go to **Repository Settings → Pages → Build and deployment → Source: GitHub Actions** and re-run the workflow.

Expected URL once Pages deploys: https://wo0f27.github.io/museum-of-us/

## Prototype status

Functional Day 1 draft. Edit the prose and provide real memory details before treating this as a final gift.