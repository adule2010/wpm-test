export type Language = "en" | "cs" | string;

interface LanguageConfig {
  name: string;
  words: string[];
}

export type LanguagesType = typeof languages;

const defaultLanguages: Record<string, LanguageConfig> = {
  en: {
    name: "english",
    words: [
      "the", "be", "to", "of", "and", "a", "in", "that", "have", "i",
      "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
      "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
      "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
      "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
      "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourselves",
      "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its",
      "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who",
      "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were",
      "be", "been", "being", "have", "has", "had", "having", "do", "does", "did",
      "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as",
      "until", "while", "of", "at", "by", "for", "with", "about", "against", "between",
      "into", "through", "during", "before", "after", "above", "below", "to", "from",
      "up", "down", "in", "out", "on", "off", "over", "under", "again", "further",
      "then", "once", "here", "there", "when", "where", "why", "how", "all", "any",
      "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor",
      "not", "only", "own", "same", "so", "than", "too", "very", "s", "t",
      "can", "will", "just", "don't", "should", "now", "d", "ll", "m", "re",
      "ve", "y", "ain't", "aren't", "couldn't", "didn't", "doesn't", "hadn't",
      "hasn't", "haven't", "isn't", "mightn't", "mustn't", "needn't", "shan't",
      "shouldn't", "wasn't", "weren't", "won't", "wouldn't", "i", "me", "mine",
      "we", "us", "ours", "you", "he", "she", "it", "they", "them", "its",
      "his", "hers", "theirs", "its", "him", "her", "them", "myself", "yourself",
      "himself", "herself", "itself", "ourselves", "yourselves", "themselves",
      "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
      "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth",
      "ninth", "tenth", "year", "years", "day", "days", "week", "weeks", "month",
      "months", "time", "times", "hour", "hours", "minute", "minutes", "second",
      "seconds", "morning", "afternoon", "evening", "night", "today", "tomorrow",
      "yesterday", "home", "house", "room", "family", "friend", "friends", "work",
      "job", "school", "class", "teacher", "student", "book", "books", "car", "cars",
      "city", "cities", "country", "countries", "world", "people", "person", "man",
      "woman", "child", "children", "animal", "animals", "dog", "dogs", "cat", "cats",
      "bird", "birds", "fish", "fishes", "tree", "trees", "flower", "flowers", "sun",
      "moon", "star", "stars", "water", "air", "earth", "fire", "life", "death",
      "love", "hate", "joy", "sadness", "anger", "fear", "hope", "faith", "truth",
      "lie", "good", "bad", "better", "worse", "best", "worst", "big", "small",
      "large", "little", "tall", "short", "long", "wide", "narrow", "high", "low",
      "deep", "shallow", "fast", "slow", "quick", "slow", "easy", "difficult",
      "hard", "soft", "strong", "weak", "heavy", "light", "old", "new", "young",
      "old", "right", "wrong", "true", "false", "open", "closed", "hot", "cold",
      "warm", "cool", "wet", "dry", "clean", "dirty", "full", "empty", "happy",
      "sad", "angry", "afraid", "surprised", "excited", "calm", "nervous", "tired",
      "hungry", "thirsty", "sick", "healthy", "rich", "poor", "beautiful", "ugly",
      "pretty", "handsome", "smart", "stupid", "clever", "foolish", "kind", "cruel",
      "gentle", "rough", "polite", "rude", "quiet", "noisy", "busy", "free", "busy",
      "alone", "together", "near", "far", "here", "there", "everywhere", "nowhere",
      "always", "never", "often", "sometimes", "usually", "soon", "later", "early",
      "late", "quickly", "slowly", "carefully", "carefully", "easily", "difficultly",
      "hardly", "softly", "strongly", "weakly", "heavily", "lightly", "well", "badly",
      "better", "worse", "best", "worst", "more", "less", "most", "least", "much",
      "many", "few", "little", "enough", "too", "very", "quite", "rather", "almost",
      "nearly", "completely", "entirely", "totally", "partly", "slightly", "somewhat",
      "greatly", "highly", "extremely", "incredibly", "amazingly", "terribly",
      "awfully", "horribly", "wonderfully", "marvelously", "beautifully", "perfectly",
      "absolutely", "positively", "definitely", "certainly", "probably", "possibly",
      "perhaps", "maybe", "might", "could", "should", "would", "must", "can", "may",
      "shall", "let", "make", "go", "come", "see", "hear", "say", "tell", "ask",
      "answer", "think", "know", "believe", "understand", "remember", "forget",
      "learn", "teach", "study", "read", "write", "speak", "listen", "look", "watch",
      "play", "work", "live", "die", "sleep", "eat", "drink", "walk", "run", "jump",
      "stand", "sit", "fall", "rise", "climb", "fly", "swim", "drive", "ride", "travel",
      "meet", "leave", "arrive", "depart", "stay", "return", "send", "receive", "give",
      "take", "buy", "sell", "pay", "borrow", "lend", "find", "lose", "keep", "put",
      "place", "take", "bring", "carry", "move", "pull", "push", "turn", "open", "close",
      "break", "fix", "build", "create", "make", "do", "help", "need", "want", "wish",
      "hope", "expect", "promise", "agree", "disagree", "decide", "choose", "plan",
      "prepare", "start", "finish", "continue", "stop", "begin", "end", "try", "attempt",
      "succeed", "fail", "win", "lose", "fight", "argue", "discuss", "explain", "describe",
      "show", "tell", "ask", "answer", "invite", "accept", "refuse", "thank", "apologize",
      "forgive", "forget", "remember", "believe", "doubt", "trust", "suspect", "fear",
      "worry", "hope", "wish", "dream", "imagine", "think", "consider", "decide", "choose",
      "plan", "prepare", "arrange", "organize", "collect", "gather", "search", "find",
      "look", "see", "watch", "observe", "listen", "hear", "smell", "taste", "touch",
      "feel", "experience", "enjoy", "suffer", "endure", "tolerate", "accept", "reject",
      "approve", "disapprove", "support", "oppose", "agree", "disagree", "like", "dislike",
      "love", "hate", "admire", "respect", "esteem", "appreciate", "value", "care",
      "concern", "worry", "fear", "hope", "wish", "desire", "need", "want", "demand",
      "require", "request", "ask", "beg", "plead", "pray", "offer", "suggest", "propose",
      "recommend", "advise", "warn", "threaten", "promise", "guarantee", "assure", "inform",
      "notify", "announce", "explain", "describe", "illustrate", "demonstrate", "show",
      "prove", "confirm", "deny", "refute", "contradict", "argue", "debate", "discuss",
      "negotiate", "compromise", "agree", "disagree", "resolve", "settle", "conclude",
      "summarize", "condense", "abbreviate", "expand", "elaborate", "amplify", "clarify",
      "define", "explain", "interpret", "translate", "convert", "transform", "modify",
      "alter", "change", "improve", "repair", "fix", "correct", "adjust", "amend",
      "revise", "edit", "rewrite", "compose", "create", "design", "invent", "discover",
      "explore", "investigate", "research", "analyze", "evaluate", "assess", "judge",
      "criticize", "comment", "remark", "observe", "watch", "listen", "hear", "see",
      "look", "read", "write", "speak", "talk", "communicate", "interact", "relate",
      "connect", "associate", "link", "combine", "merge", "integrate", "separate",
      "divide", "split", "distribute", "allocate", "assign", "delegate", "transfer",
      "transport", "transmit", "receive", "accept", "reject", "return", "send", "give",
      "take", "borrow", "lend", "buy", "sell", "pay", "owe", "earn", "save", "spend",
      "invest", "waste", "consume", "destroy", "damage", "repair", "fix", "improve",
      "enhance", "develop", "create", "build", "construct", "manufacture", "produce",
      "generate", "transform", "convert", "modify", "alter", "change", "adjust", "amend",
      "revise", "edit", "rewrite", "compose", "zone", "zoom"
    ]
  },
  cs: {
    name: "czech",
    words: [
      "a", "aby", "ale", "ani", "ano", "až", "bez", "bude", "budu", "byl",
      "byla", "byli", "bylo", "být", "co", "čas", "další", "dělá", "den", "dnes",
      "do", "dobře", "dva", "ho", "jak", "jako", "je", "jeho", "její", "jejich",
      "jen", "ještě", "jí", "jiné", "již", "jsem", "jsi", "jsme", "jsou", "k",
      "kam", "kde", "kdo", "kdy", "když", "ke", "která", "které", "který", "ku",
      "když", "li", "m", "mají", "mám", "mas", "mezi", "mi", "mně", "mu",
      "na", "nad", "náš", "naše", "naši", "ne", "nebo", "ned", "nej", "něco",
      "někdo", "někdy", "některá", "některé", "některý", "nic", "nikdo", "nikdy",
      "ním", "niž", "o", "od", "ode", "pak", "pod", "podle", "pokud", "poprvé",
      "pro", "proto", "protože", "před", "přesto", "s", "se", "si", "své", "svůj",
      "svými", "tak", "tam", "ten", "tento", "těch", "to", "tohoto", "tom", "tomto",
      "tu", "tuto", "ty", "tvé", "tvůj", "tvými", "u", "v", "vám", "váš",
      "vaše", "vaši", "více", "však", "vždy", "vy", "z", "za", "jaký", "jehož",
      "jejichž", "již", "kterého", "kterých", "kterýž", "můj", "našeho", "našich",
      "náš", "nášich", "nějaký", "několik", "některého", "některých", "několik",
      "některý", "svůj", "svých", "tvé", "tvých", "tvůj", "tvých", "váš", "vašich",
      "váš", "vašich", "že", "abych", "abys", "abychom", "abyste", "aby", "ačkoliv",
      "ale", "ani", "až", "bez", "by", "bych", "bys", "bychom", "byste", "byli",
      "bylo", "být", "co", "čím", "čemu", "což", "čímž", "čím", "jak", "jaký",
      "jaké", "jaká", "jakých", "jakého", "k", "kam", "kde", "kdo", "kdy", "když",
      "ke", "která", "které", "který", "ku", "na", "nad", "náš", "naše", "naši",
      "ne", "nebo", "než", "nic", "nikdo", "nikdy", "o", "od", "ode", "pak",
      "pod", "podle", "pokud", "poprvé", "pro", "proto", "protože", "před", "přesto",
      "s", "se", "si", "své", "svůj", "svými", "tak", "tam", "ten", "tento",
      "těch", "to", "tohoto", "tom", "tomto", "tu", "tuto", "ty", "tvé", "tvůj",
      "tvými", "u", "v", "vám", "váš", "vaše", "vaši", "více", "však", "vždy",
      "vy", "z", "za", "že", "a", "aby", "ale", "ani", "ano", "až", "bez",
      "bude", "budu", "byl", "byla", "byli", "bylo", "být", "co", "čas", "další",
      "dělá", "den", "dnes", "do", "dobře", "dva", "ho", "jak", "jako", "je",
      "jeho", "její", "jejich", "jen", "ještě", "jí", "jiné", "již", "jsem", "jsi",
      "jsme", "jsou", "k", "kam", "kde", "kdo", "kdy", "když", "ke", "která",
      "které", "který", "ku", "když", "li", "m", "mají", "mám", "mas", "mezi",
      "mi", "mně", "mu", "na", "nad", "náš", "naše", "naši", "ne", "nebo",
      "ned", "nej", "něco", "někdo", "někdy", "některá", "některé", "některý",
      "nic", "nikdo", "nikdy", "ním", "niž", "o", "od", "ode", "pak", "pod",
      "podle", "pokud", "poprvé", "pro", "proto", "protože", "před", "přesto",
      "s", "se", "si", "své", "svůj", "svými", "tak", "tam", "ten", "tento",
      "těch", "to", "tohoto", "tom", "tomto", "tu", "tuto", "ty", "tvé", "tvůj",
      "tvými", "u", "v", "vám", "váš", "vaše", "vaši", "více", "však", "vždy",
      "vy", "z", "za", "že", "abych", "abys", "abychom", "abyste", "ačkoliv",
      "ale", "ani", "až", "bez", "by", "bych", "bys", "bychom", "byste", "byli",
      "bylo", "být", "co", "čím", "čemu", "což", "čímž", "jak", "jaký", "jaké",
      "jaká", "jakých", "jakého", "k", "kam", "kde", "kdo", "kdy", "když", "ke",
      "která", "které", "který", "ku", "na", "nad", "náš", "naše", "naši", "ne",
      "nebo", "než", "nic", "nikdo", "nikdy", "o", "od", "ode", "pak", "pod",
      "podle", "pokud", "poprvé", "pro", "proto", "protože", "před", "přesto",
      "s", "se", "si", "své", "svůj", "svými", "tak", "tam", "ten", "tento",
      "těch", "to", "tohoto", "tom", "tomto", "tu", "tuto", "ty", "tvé", "tvůj",
      "tvými", "u", "v", "vám", "váš", "vaše", "vaši", "více", "však", "vždy",
      "vy", "z", "za", "že", "jsem", "jsi", "je", "jsme", "jste", "jsou",
      "byl", "byla", "bylo", "byli", "byly", "budu", "budeš", "bude", "budeme",
      "budete", "budou", "jsem", "jsi", "je", "jsme", "jste", "jsou", "mám",
      "máš", "má", "máme", "máte", "mají", "můžeme", "můžete", "mohou", "musíme",
      "musíte", "musí", "chci", "chceš", "chce", "chceme", "chcete", "chtějí",
      "měl", "měla", "měli", "měly", "mohl", "mohla", "mohly", "mohli", "musel",
      "musela", "museli", "musely", "mám", "máš", "má", "máme", "máte", "mají",
      "mohu", "můžeš", "může", "můžeme", "můžete", "mohou", "musím", "musíš",
      "musí", "musíme", "musíte", "musí", "chci", "chceš", "chce", "chceme",
      "chcete", "chtějí", "jdu", "jdeš", "jde", "jdeme", "jdete", "jdou", "šel",
      "šla", "šlo", "šli", "šly", "šel", "šla", "šlo", "šli", "šly", "jsem",
      "jsi", "je", "jsme", "jste", "jsou", "jdu", "jdeš", "jde", "jdeme", "jdete",
      "jdou", "jsem šel", "jsi šel", "je šel", "jsme šli", "jste šli", "jsou šli",
      "jsem šla", "jsi šla", "je šla", "jsme šly", "jste šly", "jsou šly", "život", "žít"
    ]
  }
};

export let languages: Record<string, LanguageConfig> = { ...defaultLanguages };

export function addLanguage(code: string, name: string, words: string[]) {
  languages[code] = { name, words: words.map(w => w.toLowerCase()) };
}

export function addWordsToLanguage(code: string, newWords: string[]) {
  if (languages[code]) {
    languages[code].words = [...new Set([...languages[code].words, ...newWords.map(w => w.toLowerCase())])];
  }
}

function generateSentence(wordList: string[], minWords: number = 5, maxWords: number = 15, singleSentence: boolean = false): string {
  const length = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
  const sentence = Array.from({ length }, () => 
    wordList[Math.floor(Math.random() * wordList.length)]
  );
  return singleSentence ? sentence.join(" ").toLowerCase() : sentence.join(" ").toLowerCase() + ".";
}

export function generateText(language: Language, sentenceCount: number = 5, singleSentence: boolean = false): string {
  const wordList = languages[language]?.words || [];
  
  if (singleSentence) {
    return generateSentence(wordList, 20, 30, true);
  }

  return Array.from({ length: sentenceCount }, () => generateSentence(wordList))
    .join(" ");
}

export function calculateWPM(
  correctChars: number,
  totalTime: number // in seconds
): number {
  const averageWordLength = 5;
  const minutes = totalTime / 60;
  return Math.round((correctChars / averageWordLength) / minutes);
}

export function calculateAccuracy(
  correctChars: number,
  totalChars: number
): number {
  if (totalChars === 0) return 0;
  return Math.round((correctChars / totalChars) * 100);
}

export function getAvailableLanguages(): [string, string][] {
  return Object.entries(languages).map(([code, config]) => [code, config.name]);
}

