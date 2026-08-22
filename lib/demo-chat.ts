export type DemoLang = "en" | "es" | "fr";

export const LANGUAGES: { code: DemoLang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
];

// Small canned phrase bank so the landing page can demonstrate live
// "translation" without calling out to a real translation service.
const PHRASE_BANK: Record<string, Record<DemoLang, string>> = {
  default: {
    en: "I've been feeling really overwhelmed lately and didn't know who to talk to.",
    es: "Últimamente me he sentido muy abrumado/a y no sabía con quién hablar.",
    fr: "Je me suis senti(e) vraiment débordé(e) ces derniers temps et je ne savais pas à qui parler.",
  },
  reply: {
    en: "Thank you for sharing that with me. You're not alone here — take your time.",
    es: "Gracias por compartir eso conmigo. No estás solo/a aquí — tómate tu tiempo.",
    fr: "Merci de me confier cela. Vous n'êtes pas seul(e) ici — prenez votre temps.",
  },
};

export function translateDemoPhrase(key: keyof typeof PHRASE_BANK, lang: DemoLang) {
  return PHRASE_BANK[key][lang];
}

export type DemoMessage = {
  id: number;
  from: "you" | "partner";
  text: string;
};

// Scripted conversation used to animate the hero/product mockups.
export const MOCKUP_CONVERSATION: DemoMessage[] = [
  { id: 1, from: "you", text: "Hey, is anyone around? I just need to talk." },
  { id: 2, from: "partner", text: "I'm here. Take your time, I'm listening." },
  { id: 3, from: "you", text: "It's been a hard week and I feel stuck." },
  { id: 4, from: "partner", text: "That sounds heavy to carry alone. What's weighing on you most?" },
];

// Lightweight keyword-based responder for the interactive /chat demo.
// This is intentionally simple — it simulates a supportive listener for
// demonstration purposes and never claims to be a licensed professional.
const SAFETY_KEYWORDS = ["suicide", "kill myself", "self-harm", "end my life", "hurt myself"];

export function containsSafetyKeyword(text: string) {
  const lower = text.toLowerCase();
  return SAFETY_KEYWORDS.some((word) => lower.includes(word));
}

const RESPONSES: { match: RegExp; replies: string[] }[] = [
  {
    match: /(lonely|alone|no one|nobody)/i,
    replies: [
      "I hear you — feeling alone is heavy. I'm glad you reached out instead of sitting with it by yourself.",
      "You're not as alone as it feels right now. I'm here, and I'm listening.",
    ],
  },
  {
    match: /(anxious|anxiety|worried|panic)/i,
    replies: [
      "Anxiety can make everything feel louder than it is. Want to tell me what's been triggering it?",
      "That sounds exhausting to carry. Let's slow down — what's on your mind right now?",
    ],
  },
  {
    match: /(sad|depress|down|empty)/i,
    replies: [
      "Thank you for trusting me with that. How long have you been feeling this way?",
      "That sounds really hard. You don't have to explain it perfectly — just tell me what today felt like.",
    ],
  },
  {
    match: /(thank|thanks)/i,
    replies: [
      "Anytime. This space is yours for as long as you need it.",
      "Of course — I'm glad this helped, even a little.",
    ],
  },
];

const FALLBACK_REPLIES = [
  "I'm listening — go on, whenever you're ready.",
  "That makes sense. How are you feeling about it right now?",
  "Thanks for putting that into words. What would help most right now?",
];

let fallbackIndex = 0;

export function getDemoReply(userText: string): string {
  for (const entry of RESPONSES) {
    if (entry.match.test(userText)) {
      return entry.replies[Math.floor(userText.length) % entry.replies.length];
    }
  }
  const reply = FALLBACK_REPLIES[fallbackIndex % FALLBACK_REPLIES.length];
  fallbackIndex += 1;
  return reply;
}

const ALIAS_ADJECTIVES = ["Quiet", "Gentle", "Calm", "Steady", "Kind", "Bright"];
const ALIAS_NOUNS = ["River", "Harbor", "Willow", "Ember", "Meadow", "Comet"];

export function generateAlias(seed: number) {
  const adjective = ALIAS_ADJECTIVES[seed % ALIAS_ADJECTIVES.length];
  const noun = ALIAS_NOUNS[Math.floor(seed / ALIAS_ADJECTIVES.length) % ALIAS_NOUNS.length];
  return `${adjective}${noun}`;
}
