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
      closing: "The beginning of a story that still has so much left to tell.",
    },

    // Gallery 1 · Exhibit II
    little: {
      title: "The Little Things",
      subtitle: "Ordinary magic",
      story: "I think the quietest moments are some of the loveliest. A familiar conversation, something that made us laugh, or simply having you there. They may seem ordinary from the outside, but they’ve never felt ordinary to me.",
      closing: "A collection of things that never needed to be grand.",
    },

    // Gallery 1 · Exhibit III
    onlyus: {
      title: "Only We Understand",
      subtitle: "A world of our own",
      story: "We’ve made our own little world of expressions, stories, and things that probably wouldn’t make sense to anyone else. That’s part of what makes them special. Some memories really do belong to just two people.",
      closing: "For the moments that make sense only to us.",
    },

    // Gallery 2 · Exhibit IV
    places: {
      title: "Places We Carry",
      subtitle: "Everywhere became somewhere",
      story: "Certain places become more than points on a map. A street, a café, or a quiet corner can remind us of time we spent together. I like knowing how places can hold a story.",
      closing: "Somewhere becomes special because of who was there.",
    },

    // Gallery 2 · Exhibit V
    laughter: {
      title: "The Laughs We Kept",
      subtitle: "Silly moments worth keeping",
      story: "Some of the silliest moments are the ones that stay with us. I hope that years from now, we will still remember a joke and start laughing for no apparent reason.",
      closing: "For the moments that still make us smile.",
    },

    // Gallery 2 · Exhibit VI
    kindness: {
      title: "Unnoticed Kindness",
      subtitle: "Little gestures of care",
      story: "Love sometimes lives in gestures so small they almost go unnoticed. Looking back, I want to remember the ways we have made each other feel cared for.",
      closing: "For every quiet act of care.",
    },

    // Gallery 3 · Exhibit VII
    growth: {
      title: "How We Have Grown",
      subtitle: "The chapters that shape us",
      story: "We have both changed since the beginning. Every experience teaches us something new, including how to better understand each other. There is still so much for us to learn.",
      closing: "Not every important chapter is easy, but each one is part of our story.",
    },

    // Gallery 3 · Exhibit VIII
    together: {
      title: "The Days We Made",
      subtitle: "The beauty of the everyday",
      story: "I sometimes wonder which ordinary day would surprise us most if we could revisit it. Perhaps we would notice little details we never realized were special.",
      closing: "All the days that quietly became memories.",
    },

    // Gallery 3 · Exhibit IX
    tomorrow: {
      title: "The Chapters Ahead",
      subtitle: "Still waiting to be written",
      story: "There are still stories we have not told and places we have not gone. I hope we keep discovering moments we will remember with tenderness one day.",
      closing: "A gentle space for the future we have yet to see.",
    },
  },

  // 4. GALLERY FOOTER AND GOMA ATTENDANT
  galleryExtras: {
    quote: "“Not everything worth keeping comes with a photograph.”",
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
