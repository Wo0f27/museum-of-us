// ==================================================================
// THE MUSEUM OF US — EDIT YOUR WRITING HERE
// ==================================================================
// Phone editing: GitHub → museum-text.js → pencil → Commit changes.
// You do NOT have to open index.html to personalize the museum.
//
// Only change words INSIDE the double quotation marks below.
// Keep property names, punctuation, braces and commas unchanged.
// For a quotation mark inside text, write \" (or use curly quotes).
// To add a paragraph within one story, write \n\n between paragraphs.
//
// Everything below starts with your CURRENT saved wording.
// No photographs, photo captions, animations, or Formspree settings
// are edited here. Do not change the main HTML for ordinary writing.
//
// The museum still works with its old text if this file fails to load.
// ==================================================================

window.MUSEUM_TEXT = {
  // 0. Browser title and preview description
  site: {
    browserTitle: "The Museum of Us",
    browserDescription: "The Museum of Us - Walk with me through memory lane",
  },

  // 1. ENTRANCE + TICKET
  entrance: {
    eyebrow: "An invitation, just for you",
    headingBefore: "A little museum for the things ",
    headingAccent: "we remember.",
    lead: "We've been wanting to visit some museums before, so I made one for us.",
    ticketInstruction: "Your invitation is ready. Tap the ticket to enter.",
    ticketTop: "Private collection · admit one",
    ticketName: "The Museum of Us",
    ticketDescription: "Valid for as many visits as you like.",
    ticketStub: "Forever",
    note: "Take your time. There's no rush. I love you.",
    buildingName: "MUSEUM OF US",
    footer: "Collection no. 001   ✦   Made with love",
  },

  // 2. THREE GALLERY TITLES + INTRODUCTIONS
  galleries: [
    {name: "Where It Began", hint: "The beginning of our beautiful journey."}, // Gallery 1
    {name: "Ordinary Wonders", hint: "Sometimes, we find memories on the simplest of things."}, // Gallery 2
    {name: "Looking Ahead", hint: "Times we grew together, learned together, and for the future together."}, // Gallery 3
  ],

  // 3. NINE EXHIBITS (story = longer paragraph; closing = shorter line)
  exhibits: {
    // Gallery 1 · Exhibit I
    beginning: {
      title: "Where It Began",
      subtitle: "A beginning to remember",
      story: "When we started talking, to be honest, I never expected that you'll like me. Well, you liked me so much you filled my neck with hickeys (I'm joking, don't kill me). But seriously, I'm happy and grateful that I met you. I can't imagine how I'll live my life without you in it. But yeah, here are some photos for you to remember some memories about hehe",
      closing: "Some of the memories I'm fond of, even when the quality isn't the best.",
    },

    // Gallery 1 · Exhibit II
    little: {
      title: "The Little Things",
      subtitle: "Little except on certain things ;)",
      story: "Sometimes we find memories on the simplest things. We may not be out all the time but we still managed to have some incredible memories. Or even when doing simple stuff, honestly the ones where I do your laundry is quite a treasure trove of memories on its own but I don't have much photos of it. You made me realize that everything doesn't have to be grand to be appreciated or fun. I'm looking forward to making more memories with you. Know that I'll always be here for you, okay? I love you",
      closing: "Not everything has to be grand for us to make memories.",
    },

    // Gallery 1 · Exhibit III
    onlyus: {
      title: "Our Subspace Bubble",
      subtitle: "We tend to have our personal bubble",
      story: "Sometimes, we have our very own bubble when go out, and I like that. We have our jokes that only us can understand, references to things we see, I love it.",
      closing: "For the moments that make sense only to us, as corny as things are sometimes.",
    },

    // Gallery 2 · Exhibit IV
    places: {
      title: "Our Special Spots",
      subtitle: "Everywhere became somewhere",
      story: "We had our own spots on certain places. The McDo seat that we always go back to, the FroYo place we used to visit alot (it's sad it's gone now). May we find more places like that on new places we'll visit.",
      closing: "Places turned special because you're there with me.",
    },

    // Gallery 2 · Exhibit V
    laughter: {
      title: "Our Silly Little Moments",
      subtitle: "Moments worth keeping",
      story: "I hope that years from now, we will still remember a joke or reference we have and still find it funny.",
      closing: "For the moments that still make us smile, no matter how dumb sometimes.",
    },

    // Gallery 2 · Exhibit VI
    kindness: {
      title: "Simple Acts of Care and Love",
      subtitle: "Little gestures that I appreciate",
      story: "Love sometimes lives in gestures so small they almost go unnoticed. I appreciate the things you give me, the things you do for me, making me feel loved, cared for and that you're always there for me Looking back, I want to remember the ways we have made each other feel cared for. I may have been a bit busy lately, but I look forward into making it up for lost time with you. I hope you'll give me another chance. I love you.",
      closing: "For every quiet act of care.",
    },

    // Gallery 3 · Exhibit VII
    growth: {
      title: "How We Have Grown",
      subtitle: "The chapters that shape us",
      story: "We have both changed since the beginning. Every experience taught us something new, including how to better understand each other. It may be the case that not all experience of us are great, some put us down, some made us sad, but we bounced back and learned something new. I'll always be with you and be on your side, no matter what. Please don't forget that",
      closing: "Not every important chapter is easy, but each one is part of our story.",
    },

    // Gallery 3 · Exhibit VIII
    together: {
      title: "The Days We Made",
      subtitle: "The beauty of the everyday",
      story: "I sometimes wonder which ordinary day would surprise us most if we could revisit it. Perhaps we would notice little details we never realized were special. Times like those which makes me hope we can have a time machine haha.",
      closing: "All the days that quietly became memories.",
    },

    // Gallery 3 · Exhibit IX
    tomorrow: {
      title: "The Chapters Ahead",
      subtitle: "Still waiting to be written, chapters to be made",
      story: "There are still stories we have not told and places we have not gone. I hope we keep discovering moments we will remember with tenderness one day. I'm looking forward to all the new places we'll discover, we'll go to, and we'll explore. As long as we're together, my love.",
      closing: "See you, to the future we're heading at",
    },
  },

  // 4. GALLERY FOOTER AND GOMA ATTENDANT
  galleryExtras: {
    quote: "“I look forward into making more memories with you”",
    returnTitle: "← Return to entrance",
    returnNote: "Goma says: this way, please!",
  },

  // 5. FINAL REFLECTION AND MESSAGE
  finale: {
    eyebrow: "The final exhibit · From your point of view",
    headingBefore: "A memory ",
    headingAccent: "through your eyes.",
    question: "If you could keep one memory of us somewhere we could always return to, which one would you choose?",
    blankFrame: "Reserved for a memory\nonly you can choose",
    frameTitleEmpty: "Exhibit X — The space we left for you",
    frameTitleFilled: "Exhibit X — A memory through your eyes",
    answerLabel: "Tell me the moment you'd choose",
    answerPlaceholder: "I'd choose the time when...",
    saveButton: "Place it in the museum ♡",
    updateButton: "Update this memory ♡",
    completionHeading: "It belongs here. ♡",
    completionMessage: "Thank you for adding your own memory to our little museum. I love that we can remember the same story in different ways. I hope we have many more moments to look back on.",
    returnTitle: "Return to gallery",
    returnSubtitle: "One more look around ↶",
    restartTitle: "Start again",
    restartSubtitle: "Take another little tour ↻",
  }
};
