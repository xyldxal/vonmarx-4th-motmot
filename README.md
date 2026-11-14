# 🌼 Forget-Me-Not — A Monthsary Surprise 💙💛

A personalized, interactive monthsary website — built with pure HTML, CSS & JavaScript. Gated by a secret question, multi-page, and themed around forget-me-not flowers (blue petals, golden centers).

---

## ✨ Features

- 🔐 **Secret question lock** — entry gated by "Who's your boyfriend?" (answer: `marx`, changeable in `assets/scripts/app.js`)
- 💌 **Letter page** — a real letter with photos woven between the paragraphs, each with a smooth scroll parallax effect
- 🖼️ **Photo collage** — memories displayed as a taped-up scrapbook board with a lightbox
- 🎵 **Song page** — Spotify embeds of your songs
- ❌ **Wrong answer page** — playful response to an incorrect answer
- ✅ **Yes page** — celebratory response on correct answer
- 🎨 Forget-me-not blue & yellow theme with animations and sound effects

---

## 🗂️ Project Structure

```
ValentinesDayCuteWebsite/
├── index.html       # Lock / question entry screen
├── menu.html        # Main navigation hub
├── letter.html      # Letter page (with parallax photos)
├── collage.html     # Photo collage page
├── song.html        # Song page
├── yes.html         # Correct-answer response
├── wrong.html       # Wrong-answer response
└── assets/
    ├── styles/      # CSS stylesheets
    ├── scripts/     # JavaScript (answer logic, sound effects)
    ├── audio/       # Sound effects
    └── gifs&pics/   # Images, GIFs, and the forget-me-not SVG
```

---

## ✏️ Customizing It (make it yours)

1. **The secret answer** — open `assets/scripts/app.js` and change `CORRECT_ANSWER` from `"marx"` to whatever you like.
2. **The letter** — open `letter.html` and rewrite the paragraphs. Swap each `<img src="...">` inside a `.parallax-frame` with your own photo, and change the signature.
3. **The collage** — in `collage.html`, replace the images and captions with your own memories.
4. **The songs** — in `song.html`, replace each Spotify track ID in the `src="https://open.spotify.com/embed/track/..."` with your own.
5. **The GIFs** — swap `yes.gif` and `sad.gif` (and the flower on the lock screen) for your own.

---

## 🛠️ Tech Stack

- **HTML5** — structure
- **CSS3** — styling, animations, parallax
- **Vanilla JavaScript** — answer logic, interactivity, sound

---

Made with 💙 by Marx
