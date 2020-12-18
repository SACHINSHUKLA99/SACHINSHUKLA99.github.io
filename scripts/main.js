

// import {levenshtein} from  "/editdistance.js";

let dict= ["abandon", "ability", "able", "abortion", "about", "above", "abroad", "absence", "absolute", "absolutely", "absorb", "abuse", "academic", "accept", "access", "accident", "accompany", "accomplish", "according", "account", "accurate", "accuse", "achieve", "achievement", "acid", "acknowledge", "acquire", "across", "act", "action", "active", "activist", "activity", "actor", "actress", "actual", "actually", "ad", "adapt", "add", "addition", "additional", "address", "adequate", "adjust", "adjustment", "administration", "administrator", "admire", "admission", "admit", "adolescent", "adopt", "adult", "advance", "advanced", "advantage", "adventure", "advertising", "advice", "advise", "adviser", "advocate", "affair", "affect", "afford", "afraid", "African", "after", "afternoon", "again", "against", "age", "agency", "agenda", "agent", "aggressive", "ago", "agree", "agreement", "agricultural", "ah", "ahead", "aid", "aide", "AIDS", "aim", "air", "aircraft", "airline", "airport", "album", "alcohol", "alive", "all", "alliance", "allow", "ally", "almost", "alone", "along", "already", "also", "alter", "alternative", "although", "always", "AM", "amazing", "American", "among", "amount", "analysis", "analyst", "analyze", "ancient", "and", "anger", "angle", "angry", "animal", "anniversary", "announce", "annual", "another", "answer", "anticipate", "anxiety", "any", "anybody", "anymore", "anyone", "anything", "anyway", "anywhere", "apart", "apartment", "apparent", "apparently", "appeal", "appear", "appearance", "apple", "application", "apply", "appoint", "appointment", "appreciate", "approach", "appropriate", "approval", "approve", "approximately", "Arab", "architect", "area", "argue", "argument", "arise", "arm", "armed", "army", "around", "arrange", "arrangement", "arrest", "arrival", "arrive", "art", "article", "artist", "artistic", "as", "Asian", "aside", "ask", "asleep", "aspect", "assault", "assert", "assess", "assessment", "asset", "assign", "assignment", "assist", "assistance", "assistant", "associate", "association", "assume", "assumption", "assure", "at", "athlete", "athletic", "atmosphere", "attach", "attack", "attempt", "attend", "attention", "attitude", "attorney", "attract", "attractive", "attribute", "audience", "author", "authority", "auto", "available", "average", "avoid", "award", "aware", "awareness", "away", "awful", "baby", "back", "background", "bad", "badly", "bag", "bake", "balance", "ball", "ban", "band", "bank", "bar", "barely", "barrel", "barrier", "base", "baseball", "basic", "basically", "basis", "basket", "basketball", "bathroom", "battery", "battle", "be", "beach", "bean", "bear", "beat", "beautiful", "beauty", "because", "become", "bed", "bedroom", "beer", "before", "begin", "beginning", "behavior", "behind", "being", "belief", "believe", "bell", "belong", "below", "belt", "bench", "bend", "beneath", "benefit", "beside", "besides", "best", "bet", "better", "between", "beyond", "Bible", "big", "bike", "bill", "billion", "bind", "biological", "bird", "birth", "birthday", "bit", "bite", "black", "blade", "blame", "blanket", "blind", "block", "blood", "blow", "blue", "board", "boat", "body", "bomb", "bombing", "bond", "bone", "book", "boom", "boot", "border", "born", "borrow", "boss", "both", "bother", "bottle", "bottom", "boundary", "bowl", "box", "boy", "boyfriend", "brain", "branch", "brand", "bread", "break", "breakfast", "breast", "breath", "breathe", "brick", "bridge", "brief", "briefly", "bright", "brilliant", "bring", "British", "broad", "broken", "brother", "brown", "brush", "buck", "budget", "build", "building", "bullet", "bunch", "burden", "burn", "bury", "bus", "business", "busy", "but", "butter", "button", "buy", "buyer", "by", "cabin", "cabinet", "cable", "cake", "calculate", "call", "camera", "camp", "campaign", "campus", "can", "Canadian", "cancer", "candidate", "cap", "capability", "capable", "capacity", "capital", "captain", "capture", "car", "carbon", "card", "care", "career", "careful", "carefully", "carrier", "carry", "case", "cash", "cast", "cat", "catch", "category", "Catholic", "cause", "ceiling", "celebrate", "celebration", "celebrity", "cell", "center", "central", "century", "CEO", "ceremony", "certain", "certainly", "chain", "chair", "chairman", "challenge", "chamber", "champion", "championship", "chance", "change", "changing", "channel", "chapter", "character", "characteristic", "characterize", "charge", "charity", "chart", "chase", "cheap", "check", "cheek", "cheese", "chef", "chemical", "chest", "chicken", "chief", "child", "childhood", "Chinese", "chip", "chocolate", "choice", "cholesterol", "choose", "Christian", "Christmas", "church", "cigarette", "circle", "circumstance", "cite", "citizen", "city", "civil", "civilian", "claim", "class", "classic", "classroom", "clean", "clear", "clearly", "client", "climate", "climb", "clinic", "clinical", "clock", "close", "closely", "closer", "clothes", "clothing", "cloud", "club", "clue", "cluster", "coach", "coal", "coalition", "coast", "coat", "code", "coffee", "cognitive", "cold", "collapse", "colleague", "collect", "collection", "collective", "college", "colonial", "color", "column", "combination", "combine", "come", "comedy", "comfort", "comfortable", "command", "commander", "comment", "commercial", "commission", "commit", "commitment", "committee", "common", "communicate", "communication", "community", "company", "compare", "comparison", "compete", "competition", "competitive", "competitor", "complain", "complaint", "complete", "completely", "complex", "complicated", "component", "compose", "composition", "comprehensive", "computer", "concentrate", "concentration", "concept", "concern", "concerned", "concert", "conclude", "conclusion", "concrete", "condition", "conduct", "conference", "confidence", "confident", "confirm", "conflict", "confront", "confusion", "Congress", "congressional", "connect", "connection", "consciousness", "consensus", "consequence", "conservative", "consider", "considerable", "consideration", "consist", "consistent", "constant", "constantly", "constitute", "constitutional", "construct", "construction", "consultant", "consume", "consumer", "consumption", "contact", "contain", "container", "contemporary", "content", "contest", "context", "continue", "continued", "contract", "contrast", "contribute", "contribution", "control", "controversial", "controversy", "convention", "conventional", "conversation", "convert", "conviction", "convince", "cook", "cookie", "cooking", "cool", "cooperation", "cop", "cope", "copy", "core", "corn", "corner", "corporate", "corporation", "correct", "correspondent", "cost", "cotton", "couch", "could", "council", "counselor", "count", "counter", "country", "county", "couple", "courage", "course", "court", "cousin", "cover", "coverage", "cow", "crack", "craft", "crash", "crazy", "cream", "create", "creation", "creative", "creature", "credit", "crew", "crime", "criminal", "crisis", "criteria", "critic", "critical", "criticism", "criticize", "crop", "cross", "crowd", "crucial", "cry", "cultural", "culture", "cup", "curious", "current", "currently", "curriculum", "custom", "customer", "cut", "cycle", "dad", "daily", "damage", "dance", "danger", "dangerous", "dare", "dark", "darkness", "data", "date", "daughter", "day", "dead", "deal", "dealer", "dear", "death", "debate", "debt", "decade", "decide", "decision", "deck", "declare", "decline", "decrease", "deep", "deeply", "deer", "defeat", "defend", "defendant", "defense", "defensive", "deficit", "define", "definitely", "definition", "degree", "delay", "deliver", "delivery", "demand", "democracy", "Democrat", "democratic", "demonstrate", "demonstration", "deny", "department", "depend", "dependent", "depending", "depict", "depression", "depth", "deputy", "derive", "describe", "description", "desert", "deserve", "design", "designer", "desire", "desk", "desperate", "despite", "destroy", "destruction", "detail", "detailed", "detect", "determine", "develop", "developing", "development", "device", "devote", "dialogue", "die", "diet", "differ", "difference", "different", "differently", "difficult", "difficulty", "dig", "digital", "dimension", "dining", "dinner", "direct", "direction", "directly", "director", "dirt", "dirty", "disability", "disagree", "disappear", "disaster", "discipline", "discourse", "discover", "discovery", "discrimination", "discuss", "discussion", "disease", "dish", "dismiss", "disorder", "display", "dispute", "distance", "distant", "distinct", "distinction", "distinguish", "distribute", "distribution", "district", "diverse", "diversity", "divide", "division", "divorce", "DNA", "do", "doctor", "document", "dog", "domestic", "dominant", "dominate", "door", "double", "doubt", "down", "downtown", "dozen", "draft", "drag", "drama", "dramatic", "dramatically", "draw", "drawing", "dream", "dress", "drink", "drive", "driver", "drop", "drug", "dry", "due", "during", "dust", "duty", "each", "eager", "ear", "early", "earn", "earnings", "earth", "ease", "easily", "east", "eastern", "easy", "eat", "economic", "economics", "economist", "economy", "edge", "edition", "editor", "educate", "education", "educational", "educator", "effect", "effective", "effectively", "efficiency", "efficient", "effort", "egg", "eight", "either", "elderly", "elect", "election", "electric", "electricity", "electronic", "element", "elementary", "eliminate", "elite", "else", "elsewhere", "e-mail", "embrace", "emerge", "emergency", "emission", "emotion", "emotional", "emphasis", "emphasize", "employ", "employee", "employer", "employment", "empty", "enable", "encounter", "encourage", "end", "enemy", "energy", "enforcement", "engage", "engine", "engineer", "engineering", "English", "enhance", "enjoy", "enormous", "enough", "ensure", "enter", "enterprise", "entertainment", "entire", "entirely", "entrance", "entry", "environment", "environmental", "episode", "equal", "equally", "equipment", "era", "error", "escape", "especially", "essay", "essential", "essentially", "establish", "establishment", "estate", "estimate", "etc", "ethics", "ethnic", "European", "evaluate", "evaluation", "even", "evening", "event", "eventually", "ever", "every", "everybody", "everyday", "everyone", "everything", "everywhere", "evidence", "evolution", "evolve", "exact", "exactly", "examination", "examine", "example", "exceed", "excellent", "except", "exception", "exchange", "exciting", "executive", "exercise", "exhibit", "exhibition", "exist", "existence", "existing", "expand", "expansion", "expect", "expectation", "expense", "expensive", "experience", "experiment", "expert", "explain", "explanation", "explode", "explore", "explosion", "expose", "exposure", "express", "expression", "extend", "extension", "extensive", "extent", "external", "extra", "extraordinary", "extreme", "extremely", "eye", "fabric", "face", "facility", "fact", "factor", "factory", "faculty", "fade", "fail", "failure", "fair", "fairly", "faith", "fall", "false", "familiar", "family", "famous", "fan", "fantasy", "far", "farm", "farmer", "fashion", "fast", "fat", "fate", "father", "fault", "favor", "favorite", "fear", "feature", "federal", "fee", "feed", "feel", "feeling", "fellow", "female", "fence", "few", "fewer", "fiber", "fiction", "field", "fifteen", "fifth", "fifty", "fight", "fighter", "fighting", "figure", "file", "fill", "film", "final", "finally", "finance", "financial", "find", "finding", "fine", "finger", "finish", "fire", "firm", "first", "fish", "fishing", "fit", "fitness", "five", "fix", "flag", "flame", "flat", "flavor", "flee", "flesh", "flight", "float", "floor", "flow", "flower", "fly", "focus", "folk", "follow", "following", "food", "foot", "football", "for", "force", "foreign", "forest", "forever", "forget", "form", "formal", "formation", "former", "formula", "forth", "fortune", "forward", "found", "foundation", "founder", "four", "fourth", "frame", "framework", "free", "freedom", "freeze", "French", "frequency", "frequent", "frequently", "fresh", "friend", "friendly", "friendship", "from", "front", "fruit", "frustration", "fuel", "full", "fully", "fun", "function", "fund", "fundamental", "funding", "funeral", "funny", "furniture", "furthermore", "future", "gain", "galaxy", "gallery", "game", "gang", "gap", "garage", "garden", "garlic", "gas", "gate", "gather", "gay", "gaze", "gear", "gender", "gene", "general", "generally", "generate", "generation", "genetic", "gentleman", "gently", "German", "gesture", "get", "ghost", "giant", "gift", "gifted", "girl", "girlfriend", "give", "given", "glad", "glance", "glass", "global", "glove", "go", "goal", "God", "gold", "golden", "golf", "good", "government", "governor", "grab", "grade", "gradually", "graduate", "grain", "grand", "grandfather", "grandmother", "grant", "grass", "grave", "gray", "great", "greatest", "green", "grocery", "ground", "group", "grow", "growing", "growth", "guarantee", "guard", "guess", "guest", "guide", "guideline", "guilty", "gun", "guy", "habit", "habitat", "hair", "half", "hall", "hand", "handful", "handle", "hang", "happen", "happy", "hard", "hardly", "hat", "hate", "have", "he", "head", "headline", "headquarters", "health", "healthy", "hear", "hearing", "heart", "heat", "heaven", "heavily", "heavy", "heel", "height", "helicopter", "hell", "hello", "help", "helpful", "her", "here", "heritage", "hero", "herself", "hey", "hi", "hide", "high", "highlight", "highly", "highway", "hill", "him", "himself", "hip", "hire", "his", "historian", "historic", "historical", "history", "hit", "hold", "hole", "holiday", "holy", "home", "homeless", "honest", "honey", "honor", "hope", "horizon", "horror", "horse", "hospital", "host", "hot", "hotel", "hour", "house", "household", "housing", "how", "however", "huge", "human", "humor", "hundred", "hungry", "hunter", "hunting", "hurt", "husband", "hypothesis", "I", "ice", "idea", "ideal", "identification", "identify", "identity", "ie", "if", "ignore", "ill", "illegal", "illness", "illustrate", "image", "imagination", "imagine", "immediate", "immediately", "immigrant", "immigration", "impact", "implement", "implication", "imply", "importance", "important", "impose", "impossible", "impress", "impression", "impressive", "improve", "improvement", "in", "incentive", "incident", "include", "including", "income", "incorporate", "increase", "increased", "increasing", "increasingly", "incredible", "indeed", "independence", "independent", "index", "Indian", "indicate", "indication", "individual", "industrial", "industry", "infant", "infection", "inflation", "influence", "inform", "information", "ingredient", "initial", "initially", "initiative", "injury", "inner", "innocent", "inquiry", "inside", "insight", "insist", "inspire", "install", "instance", "instead", "institution", "institutional", "instruction", "instructor", "instrument", "insurance", "intellectual", "intelligence", "intend", "intense", "intensity", "intention", "interaction", "interest", "interested", "interesting", "internal", "international", "Internet", "interpret", "interpretation", "intervention", "interview", "into", "introduce", "introduction", "invasion", "invest", "investigate", "investigation", "investigator", "investment", "investor", "invite", "involve", "involved", "involvement", "Iraqi", "Irish", "iron", "Islamic", "island", "Israeli", "issue", "it", "Italian", "item", "its", "itself", "jacket", "jail", "Japanese", "jet", "Jew", "Jewish", "job", "join", "joint", "joke", "journal", "journalist", "journey", "joy", "judge", "judgment", "juice", "jump", "junior", "jury", "just", "justice", "justify", "keep", "key", "kick", "kid", "kill", "killer", "killing", "kind", "king", "kiss", "kitchen", "knee", "knife", "knock", "know", "knowledge", "lab", "label", "labor", "laboratory", "lack", "lady", "lake", "land", "landscape", "language", "lap", "large", "largely", "last", "late", "later", "Latin", "latter", "laugh", "launch", "law", "lawn", "lawsuit", "lawyer", "lay", "layer", "lead", "leader", "leadership", "leading", "leaf", "league", "lean", "learn", "learning", "least", "leather", "leave", "left", "leg", "legacy", "legal", "legend", "legislation", "legitimate", "lemon", "length", "less", "lesson", "let", "letter", "level", "liberal", "library", "license", "lie", "life", "lifestyle", "lifetime", "lift", "light", "like", "likely", "limit", "limitation", "limited", "line", "link", "lip", "list", "listen", "literally", "literary", "literature", "little", "live", "living", "load", "loan", "local", "locate", "location", "lock", "long", "long-term", "look", "loose", "lose", "loss", "lost", "lot", "lots", "loud", "love", "lovely", "lover", "low", "lower", "luck", "lucky", "lunch", "lung", "machine", "mad", "magazine", "mail", "main", "mainly", "maintain", "maintenance", "major", "majority", "make", "maker", "makeup", "male", "mall", "man", "manage", "management", "manager", "manner", "manufacturer", "manufacturing", "many", "map", "margin", "mark", "market", "marketing", "marriage", "married", "marry", "mask", "mass", "massive", "master", "match", "material", "math", "matter", "may", "maybe", "mayor", "me", "meal", "mean", "meaning", "meanwhile", "measure", "measurement", "meat", "mechanism", "media", "medical", "medication", "medicine", "medium", "meet", "meeting", "member", "membership", "memory", "mental", "mention", "menu", "mere", "merely", "mess", "message", "metal", "meter", "method", "Mexican", "middle", "might", "military", "milk", "million", "mind", "mine", "minister", "minor", "minority", "minute", "miracle", "mirror", "miss", "missile", "mission", "mistake", "mix", "mixture", "mm-hmm", "mode", "model", "moderate", "modern", "modest", "mom", "moment", "money", "monitor", "month", "mood", "moon", "moral", "more", "moreover", "morning", "mortgage", "most", "mostly", "mother", "motion", "motivation", "motor", "mount", "mountain", "mouse", "mouth", "move", "movement", "movie", "Mr", "Mrs", "Ms", "much", "multiple", "murder", "muscle", "museum", "music", "musical", "musician", "Muslim", "must", "mutual", "my", "myself", "mystery", "myth", "naked", "name", "narrative", "narrow", "nation", "national", "native", "natural", "naturally", "nature", "near", "nearby", "nearly", "necessarily", "necessary", "neck", "need", "negative", "negotiate", "negotiation", "neighbor", "neighborhood", "neither", "nerve", "nervous", "net", "network", "never", "nevertheless", "new", "newly", "news", "newspaper", "next", "nice", "night", "nine", "no", "nobody", "nod", "noise", "nomination", "none", "nonetheless", "nor", "normal", "normally", "north", "northern", "nose", "not", "note", "nothing", "notice", "notion", "novel", "now", "nowhere", "n't", "nuclear", "number", "numerous", "nurse", "nut", "object", "objective", "obligation", "observation", "observe", "observer", "obtain", "obvious", "obviously", "occasion", "occasionally", "occupation", "occupy", "occur", "ocean", "odd", "odds", "of", "off", "offense", "offensive", "offer", "office", "officer", "official", "often", "oh", "oil", "ok", "okay", "old", "Olympic", "on", "once", "one", "ongoing", "onion", "online", "only", "onto", "open", "opening", "operate", "operating", "operation", "operator", "opinion", "opponent", "opportunity", "oppose", "opposite", "opposition", "option", "or", "orange", "order", "ordinary", "organic", "organization", "organize", "orientation", "origin", "original", "originally", "other", "others", "otherwise", "ought", "our", "ourselves", "out", "outcome", "outside", "oven", "over", "overall", "overcome", "overlook", "owe", "own", "owner", "pace", "pack", "package", "page", "pain", "painful", "paint", "painter", "painting", "pair", "pale", "Palestinian", "palm", "pan", "panel", "pant", "paper", "parent", "park", "parking", "part", "participant", "participate", "participation", "particular", "particularly", "partly", "partner", "partnership", "party", "pass", "passage", "passenger", "passion", "past", "patch", "path", "patient", "pattern", "pause", "pay", "payment", "PC", "peace", "peak", "peer", "penalty", "people", "pepper", "per", "perceive", "percentage", "perception", "perfect", "perfectly", "perform", "performance", "perhaps", "period", "permanent", "permission", "permit", "person", "personal", "personality", "personally", "personnel", "perspective", "persuade", "pet", "phase", "phenomenon", "philosophy", "phone", "photo", "photograph", "photographer", "phrase", "physical", "physically", "physician", "piano", "pick", "picture", "pie", "piece", "pile", "pilot", "pine", "pink", "pipe", "pitch", "place", "plan", "plane", "planet", "planning", "plant", "plastic", "plate", "platform", "play", "player", "please", "pleasure", "plenty", "plot", "plus", "PM", "pocket", "poem", "poet", "poetry", "point", "pole", "police", "policy", "political", "politically", "politician", "politics", "poll", "pollution", "pool", "poor", "pop", "popular", "population", "porch", "port", "portion", "portrait", "portray", "pose", "position", "positive", "possess", "possibility", "possible", "possibly", "post", "pot", "potato", "potential", "potentially", "pound", "pour", "poverty", "powder", "power", "powerful", "practical", "practice", "pray", "prayer", "precisely", "predict", "prefer", "preference", "pregnancy", "pregnant", "preparation", "prepare", "prescription", "presence", "present", "presentation", "preserve", "president", "presidential", "press", "pressure", "pretend", "pretty", "prevent", "previous", "previously", "price", "pride", "priest", "primarily", "primary", "prime", "principal", "principle", "print", "prior", "priority", "prison", "prisoner", "privacy", "private", "probably", "problem", "procedure", "proceed", "process", "produce", "producer", "product", "production", "profession", "professional", "professor", "profile", "profit", "program", "progress", "project", "prominent", "promise", "promote", "prompt", "proof", "proper", "properly", "property", "proportion", "proposal", "propose", "proposed", "prosecutor", "prospect", "protect", "protection", "protein", "protest", "proud", "prove", "provide", "provider", "province", "provision", "psychological", "psychologist", "psychology", "public", "publication", "publicly", "publish", "publisher", "pull", "punishment", "purchase", "pure", "purpose", "pursue", "push", "put", "qualify", "quality", "quarter", "quarterback", "question", "quick", "quickly", "quiet", "quietly", "quit", "quite", "quote", "race", "racial", "radical", "radio", "rail", "rain", "raise", "range", "rank", "rapid", "rapidly", "rare", "rarely", "rate", "rather", "rating", "ratio", "raw", "reach", "react", "reaction", "read", "reader", "reading", "ready", "real", "reality", "realize", "really", "reason", "reasonable", "recall", "receive", "recent", "recently", "recipe", "recognition", "recognize", "recommend", "recommendation", "record", "recording", "recover", "recovery", "recruit", "red", "reduce", "reduction", "refer", "reference", "reflect", "reflection", "reform", "refugee", "refuse", "regard", "regarding", "regardless", "regime", "region", "regional", "register", "regular", "regularly", "regulate", "regulation", "reinforce", "reject", "relate", "relation", "relationship", "relative", "relatively", "relax", "release", "relevant", "relief", "religion", "religious", "rely", "remain", "remaining", "remarkable", "remember", "remind", "remote", "remove", "repeat", "repeatedly", "replace", "reply", "report", "reporter", "represent", "representation", "representative", "Republican", "reputation", "request", "require", "requirement", "research", "researcher", "resemble", "reservation", "resident", "resist", "resistance", "resolution", "resolve", "resort", "resource", "respect", "respond", "respondent", "response", "responsibility", "responsible", "rest", "restaurant", "restore", "restriction", "result", "retain", "retire", "retirement", "return", "reveal", "revenue", "review", "revolution", "rhythm", "rice", "rich", "rid", "ride", "rifle", "right", "ring", "rise", "risk", "river", "road", "rock", "role", "roll", "romantic", "roof", "room", "root", "rope", "rose", "rough", "roughly", "round", "route", "routine", "row", "rub", "rule", "run", "running", "rural", "rush", "Russian", "sacred", "sad", "safe", "safety", "sake", "salad", "salary", "sale", "sales", "salt", "same", "sample", "sanction", "sand", "satellite", "satisfaction", "satisfy", "sauce", "save", "saving", "say", "scale", "scandal", "scared", "scenario", "scene", "schedule", "scheme", "scholar", "scholarship", "school", "science", "scientific", "scientist", "scope", "score", "scream", "screen", "script", "sea", "search", "season", "seat", "second", "secret", "secretary", "section", "sector", "secure", "security", "see", "seed", "seek", "seem", "segment", "seize", "select", "selection", "self", "sell", "Senate", "senator", "send", "senior", "sense", "sensitive", "sentence", "separate", "sequence", "series", "serious", "seriously", "serve", "service", "session", "set", "setting", "settle", "settlement", "seven", "several", "severe", "sex", "sexual", "shade", "shadow", "shake", "shall", "shape", "share", "sharp", "she", "sheet", "shelf", "shell", "shelter", "shift", "shine", "ship", "shirt", "shit", "shock", "shoe", "shoot", "shooting", "shop", "shopping", "shore", "short", "shortly", "shot", "should", "shoulder", "shout", "show", "shower", "shrug", "shut", "sick", "side", "sigh", "sight", "sign", "signal", "significance", "significant", "significantly", "silence", "silent", "silver", "similar", "similarly", "simple", "simply", "sin", "since", "sing", "singer", "single", "sink", "sir", "sister", "sit", "site", "situation", "six", "size", "ski", "skill", "skin", "sky", "slave", "sleep", "slice", "slide", "slight", "slightly", "slip", "slow", "slowly", "small", "smart", "smell", "smile", "smoke", "smooth", "snap", "snow", "so", "so-called", "soccer", "social", "society", "soft", "software", "soil", "solar", "soldier", "solid", "solution", "solve", "some", "somebody", "somehow", "someone", "something", "sometimes", "somewhat", "somewhere", "son", "song", "soon", "sophisticated", "sorry", "sort", "soul", "sound", "soup", "source", "south", "southern", "Soviet", "space", "Spanish", "speak", "speaker", "special", "specialist", "species", "specific", "specifically", "speech", "speed", "spend", "spending", "spin", "spirit", "spiritual", "split", "spokesman", "sport", "spot", "spread", "spring", "square", "squeeze", "stability", "stable", "staff", "stage", "stair", "stake", "stand", "standard", "standing", "star", "stare", "start", "state", "statement", "station", "statistics", "status", "stay", "steady", "steal", "steel", "step", "stick", "still", "stir", "stock", "stomach", "stone", "stop", "storage", "store", "storm", "story", "straight", "strange", "stranger", "strategic", "strategy", "stream", "street", "strength", "strengthen", "stress", "stretch", "strike", "string", "strip", "stroke", "strong", "strongly", "structure", "struggle", "student", "studio", "study", "stuff", "stupid", "style", "subject", "submit", "subsequent", "substance", "substantial", "succeed", "success", "successful", "successfully", "such", "sudden", "suddenly", "sue", "suffer", "sufficient", "sugar", "suggest", "suggestion", "suicide", "suit", "summer", "summit", "sun", "super", "supply", "support", "supporter", "suppose", "supposed", "Supreme", "sure", "surely", "surface", "surgery", "surprise", "surprised", "surprising", "surprisingly", "surround", "survey", "survival", "survive", "survivor", "suspect", "sustain", "swear", "sweep", "sweet", "swim", "swing", "switch", "symbol", "symptom", "system", "table", "tablespoon", "tactic", "tail", "take", "tale", "talent", "talk", "tall", "tank", "tap", "tape", "target", "task", "taste", "tax", "taxpayer", "tea", "teach", "teacher", "teaching", "team", "tear", "teaspoon", "technical", "technique", "technology", "teen", "teenager", "telephone", "telescope", "television", "tell", "temperature", "temporary", "ten", "tend", "tendency", "tennis", "tension", "tent", "term", "terms", "terrible", "territory", "terror", "terrorism", "terrorist", "test", "testify", "testimony", "testing", "text", "than", "thank", "thanks", "that", "the", "theater", "their", "them", "theme", "themselves", "then", "theory", "therapy", "there", "therefore", "these", "they", "thick", "thin", "thing", "think", "thinking", "third", "thirty", "this", "those", "though", "thought", "thousand", "threat", "threaten", "three", "throat", "through", "throughout", "throw", "thus", "ticket", "tie", "tight", "time", "tiny", "tip", "tire", "tired", "tissue", "title", "to", "tobacco", "today", "toe", "together", "tomato", "tomorrow", "tone", "tongue", "tonight", "too", "tool", "tooth", "top", "topic", "toss", "total", "totally", "touch", "tough", "tour", "tourist", "tournament", "toward", "towards", "tower", "town", "toy", "trace", "track", "trade", "tradition", "traditional", "traffic", "tragedy", "trail", "train", "training", "transfer", "transform", "transformation", "transition", "translate", "transportation", "travel", "treat", "treatment", "treaty", "tree", "tremendous", "trend", "trial", "tribe", "trick", "trip", "troop", "trouble", "truck", "true", "truly", "trust", "truth", "try", "tube", "tunnel", "turn", "TV", "twelve", "twenty", "twice", "twin", "two", "type", "typical", "typically", "ugly", "ultimate", "ultimately", "unable", "uncle", "under", "undergo", "understand", "understanding", "unfortunately", "uniform", "union", "unique", "unit", "United", "universal", "universe", "university", "unknown", "unless", "unlike", "unlikely", "until", "unusual", "up", "upon", "upper", "urban", "urge", "us", "use", "used", "useful", "user", "usual", "usually", "utility", "vacation", "valley", "valuable", "value", "variable", "variation", "variety", "various", "vary", "vast", "vegetable", "vehicle", "venture", "version", "versus", "very", "vessel", "veteran", "via", "victim", "victory", "video", "view", "viewer", "village", "violate", "violation", "violence", "violent", "virtually", "virtue", "virus", "visible", "vision", "visit", "visitor", "visual", "vital", "voice", "volume", "volunteer", "vote", "voter", "vs", "vulnerable", "wage", "wait", "wake", "walk", "wall", "wander", "want", "war", "warm", "warn", "warning", "wash", "waste", "watch", "water", "wave", "way", "we", "weak", "wealth", "wealthy", "weapon", "wear", "weather", "wedding", "week", "weekend", "weekly", "weigh", "weight", "welcome", "welfare", "well", "west", "western", "wet", "what", "whatever", "wheel", "when", "whenever", "where", "whereas", "whether", "which", "while", "whisper", "white", "who", "whole", "whom", "whose", "why", "wide", "widely", "widespread", "wife", "wild", "will", "willing", "win", "wind", "window", "wine", "wing", "winner", "winter", "wipe", "wire", "wisdom", "wise", "wish", "with", "withdraw", "within", "without", "witness", "woman", "wonder", "wonderful", "wood", "wooden", "word", "work", "worker", "working", "works", "workshop", "world", "worried", "worry", "worth", "would", "wound", "wrap", "write", "writer", "writing", "wrong", "yard", "yeah", "year", "yell", "yellow", "yes", "yesterday", "yet", "yield", "you", "young", "your", "yours", "yourself", "youth", "zone"];
//console.log(dict);
let aro=[];

// let metaphone =require('metaphone');

//console.log(metaphone('apple'));
 



////


// Match vowels (including `Y`).
var vowels = /[AEIOUY]/

// Match few Slavo-Germanic values.
var slavoGermanic = /W|K|CZ|WITZ/

// Match few Germanic values.
var germanic = /^(VAN |VON |SCH)/

// Match initial values of which the first character should be skipped.
var initialExceptions = /^(GN|KN|PN|WR|PS)/

// Match initial Greek-like values of which the `CH` sounds like `K`.
var initialGreekCh = /^CH(IA|EM|OR([^E])|YM|ARAC|ARIS)/

// Match Greek-like values of which the `CH` sounds like `K`.
var greekCh = /ORCHES|ARCHIT|ORCHID/

// Match values which when following `CH`, transform `CH` to sound like `K`.
var chForKh = /[ BFHLMNRVW]/

// Match values which when preceding a vowel and `UGH`, sound like `F`.
var gForF = /[CGLRT]/

// Match initial values which sound like either `K` or `J`.
var initialGForKj = /Y[\s\S]|E[BILPRSY]|I[BELN]/

// Match initial values which sound like either `K` or `J`.
var initialAngerException = /^[DMR]ANGER/

// Match values which when following `GY`, do not sound like `K` or `J`.
var gForKj = /[EGIR]/

// Match values which when following `J`, do not sound `J`.
var jForJException = /[LTKSNMBZ]/

// Match values which might sound like `L`.
var alle = /AS|OS/

// Match Germanic values preceding `SH` which sound like `S`.
var hForS = /EIM|OEK|OLM|OLZ/

// Match Dutch values following `SCH` which sound like either `X` and `SK`,
// or `SK`.
var dutchSch = /E[DMNR]|UY|OO/

// Get the phonetics according to the Double Metaphone algorithm from a value.
// eslint-disable-next-line complexity
function doubleMetaphone(value) {
  var primary = ''
  var secondary = ''
  var index = 0
  var length = value.length
  var last = length - 1
  var isSlavoGermanic
  var isGermanic
  var subvalue
  var next
  var prev
  var nextnext
  var characters

  value = String(value).toUpperCase() + '     '
  isSlavoGermanic = slavoGermanic.test(value)
  isGermanic = germanic.test(value)
  characters = value.split('')

  // Skip this at beginning of word.
  if (initialExceptions.test(value)) {
    index++
  }

  // Initial X is pronounced Z, which maps to S. Such as `Xavier`.
  if (characters[0] === 'X') {
    primary += 'S'
    secondary += 'S'
    index++
  }

  while (index < length) {
    prev = characters[index - 1]
    next = characters[index + 1]
    nextnext = characters[index + 2]

    switch (characters[index]) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'Y':
      case 'À':
      case 'Ê':
      case 'É':
        if (index === 0) {
          // All initial vowels now map to `A`.
          primary += 'A'
          secondary += 'A'
        }

        index++

        break
      case 'B':
        primary += 'P'
        secondary += 'P'

        if (next === 'B') {
          index++
        }

        index++

        break
      case 'Ç':
        primary += 'S'
        secondary += 'S'
        index++

        break
      case 'C':
        // Various Germanic:
        if (
          prev === 'A' &&
          next === 'H' &&
          nextnext !== 'I' &&
          !vowels.test(characters[index - 2]) &&
          (nextnext !== 'E' ||
            (subvalue =
              value.slice(index - 2, index + 4) &&
              (subvalue === 'BACHER' || subvalue === 'MACHER')))
        ) {
          primary += 'K'
          secondary += 'K'
          index += 2

          break
        }

        // Special case for `Caesar`.
        if (index === 0 && value.slice(index + 1, index + 6) === 'AESAR') {
          primary += 'S'
          secondary += 'S'
          index += 2

          break
        }

        // Italian `Chianti`.
        if (value.slice(index + 1, index + 4) === 'HIA') {
          primary += 'K'
          secondary += 'K'
          index += 2

          break
        }

        if (next === 'H') {
          // Find `Michael`.
          if (index > 0 && nextnext === 'A' && characters[index + 3] === 'E') {
            primary += 'K'
            secondary += 'X'
            index += 2

            break
          }

          // Greek roots such as `chemistry`, `chorus`.
          if (index === 0 && initialGreekCh.test(value)) {
            primary += 'K'
            secondary += 'K'
            index += 2

            break
          }

          // Germanic, Greek, or otherwise `CH` for `KH` sound.
          if (
            isGermanic ||
            // Such as 'architect' but not 'arch', orchestra', 'orchid'.
            greekCh.test(value.slice(index - 2, index + 4)) ||
            nextnext === 'T' ||
            nextnext === 'S' ||
            ((index === 0 ||
              prev === 'A' ||
              prev === 'E' ||
              prev === 'O' ||
              prev === 'U') &&
              // Such as `wachtler`, `weschsler`, but not `tichner`.
              chForKh.test(nextnext))
          ) {
            primary += 'K'
            secondary += 'K'
          } else if (index === 0) {
            primary += 'X'
            secondary += 'X'
            // Such as 'McHugh'.
          } else if (value.slice(0, 2) === 'MC') {
            // Bug? Why matching absolute? what about McHiccup?
            primary += 'K'
            secondary += 'K'
          } else {
            primary += 'X'
            secondary += 'K'
          }

          index += 2

          break
        }

        // Such as `Czerny`.
        if (next === 'Z' && value.slice(index - 2, index) !== 'WI') {
          primary += 'S'
          secondary += 'X'
          index += 2

          break
        }

        // Such as `Focaccia`.
        if (value.slice(index + 1, index + 4) === 'CIA') {
          primary += 'X'
          secondary += 'X'
          index += 3

          break
        }

        // Double `C`, but not `McClellan`.
        if (next === 'C' && !(index === 1 && characters[0] === 'M')) {
          // Such as `Bellocchio`, but not `Bacchus`.
          if (
            (nextnext === 'I' || nextnext === 'E' || nextnext === 'H') &&
            value.slice(index + 2, index + 4) !== 'HU'
          ) {
            subvalue = value.slice(index - 1, index + 4)

            // Such as `Accident`, `Accede`, `Succeed`.
            if (
              (index === 1 && prev === 'A') ||
              subvalue === 'UCCEE' ||
              subvalue === 'UCCES'
            ) {
              primary += 'KS'
              secondary += 'KS'
              // Such as `Bacci`, `Bertucci`, other Italian.
            } else {
              primary += 'X'
              secondary += 'X'
            }

            index += 3

            break
          } else {
            // Pierce's rule.
            primary += 'K'
            secondary += 'K'
            index += 2

            break
          }
        }

        if (next === 'G' || next === 'K' || next === 'Q') {
          primary += 'K'
          secondary += 'K'
          index += 2

          break
        }

        // Italian.
        if (
          next === 'I' &&
          // Bug: The original algorithm also calls for A (as in CIA), which is
          // already taken care of above.
          (nextnext === 'E' || nextnext === 'O')
        ) {
          primary += 'S'
          secondary += 'X'
          index += 2

          break
        }

        if (next === 'I' || next === 'E' || next === 'Y') {
          primary += 'S'
          secondary += 'S'
          index += 2

          break
        }

        primary += 'K'
        secondary += 'K'

        // Skip two extra characters ahead in `Mac Caffrey`, `Mac Gregor`.
        if (
          next === ' ' &&
          (nextnext === 'C' || nextnext === 'G' || nextnext === 'Q')
        ) {
          index += 3
          break
        }

        // Bug: Already covered above.
        // if (
        //   next === 'K' ||
        //   next === 'Q' ||
        //   (next === 'C' && nextnext !== 'E' && nextnext !== 'I')
        // ) {
        //   index++;
        // }

        index++

        break
      case 'D':
        if (next === 'G') {
          // Such as `edge`.
          if (nextnext === 'E' || nextnext === 'I' || nextnext === 'Y') {
            primary += 'J'
            secondary += 'J'
            index += 3
            // Such as `Edgar`.
          } else {
            primary += 'TK'
            secondary += 'TK'
            index += 2
          }

          break
        }

        if (next === 'T' || next === 'D') {
          primary += 'T'
          secondary += 'T'
          index += 2

          break
        }

        primary += 'T'
        secondary += 'T'
        index++

        break
      case 'F':
        if (next === 'F') {
          index++
        }

        index++
        primary += 'F'
        secondary += 'F'

        break
      case 'G':
        if (next === 'H') {
          if (index > 0 && !vowels.test(prev)) {
            primary += 'K'
            secondary += 'K'
            index += 2

            break
          }

          // Such as `Ghislane`, `Ghiradelli`.
          if (index === 0) {
            if (nextnext === 'I') {
              primary += 'J'
              secondary += 'J'
            } else {
              primary += 'K'
              secondary += 'K'
            }

            index += 2

            break
          }

          // Parker's rule (with some further refinements).
          if (
            // Such as `Hugh`.  The comma is not a bug.
            ((subvalue = characters[index - 2]),
            subvalue === 'B' || subvalue === 'H' || subvalue === 'D') ||
            // Such as `bough`.  The comma is not a bug.
            ((subvalue = characters[index - 3]),
            subvalue === 'B' || subvalue === 'H' || subvalue === 'D') ||
            // Such as `Broughton`.  The comma is not a bug.
            ((subvalue = characters[index - 4]),
            subvalue === 'B' || subvalue === 'H')
          ) {
            index += 2

            break
          }

          // Such as `laugh`, `McLaughlin`, `cough`, `gough`, `rough`, `tough`.
          if (index > 2 && prev === 'U' && gForF.test(characters[index - 3])) {
            primary += 'F'
            secondary += 'F'
          } else if (index > 0 && prev !== 'I') {
            primary += 'K'
            secondary += 'K'
          }

          index += 2

          break
        }

        if (next === 'N') {
          if (index === 1 && vowels.test(characters[0]) && !isSlavoGermanic) {
            primary += 'KN'
            secondary += 'N'
            // Not like `Cagney`.
          } else if (
            value.slice(index + 2, index + 4) !== 'EY' &&
            value.slice(index + 1) !== 'Y' &&
            !isSlavoGermanic
          ) {
            primary += 'N'
            secondary += 'KN'
          } else {
            primary += 'KN'
            secondary += 'KN'
          }

          index += 2

          break
        }

        // Such as `Tagliaro`.
        if (value.slice(index + 1, index + 3) === 'LI' && !isSlavoGermanic) {
          primary += 'KL'
          secondary += 'L'
          index += 2

          break
        }

        // -ges-, -gep-, -gel- at beginning.
        if (index === 0 && initialGForKj.test(value.slice(1, 3))) {
          primary += 'K'
          secondary += 'J'
          index += 2

          break
        }

        // -ger-, -gy-.
        if (
          (value.slice(index + 1, index + 3) === 'ER' &&
            prev !== 'I' &&
            prev !== 'E' &&
            !initialAngerException.test(value.slice(0, 6))) ||
          (next === 'Y' && !gForKj.test(prev))
        ) {
          primary += 'K'
          secondary += 'J'
          index += 2

          break
        }

        // Italian such as `biaggi`.
        if (
          next === 'E' ||
          next === 'I' ||
          next === 'Y' ||
          ((prev === 'A' || prev === 'O') && next === 'G' && nextnext === 'I')
        ) {
          // Obvious Germanic.
          if (value.slice(index + 1, index + 3) === 'ET' || isGermanic) {
            primary += 'K'
            secondary += 'K'
          } else {
            primary += 'J'

            // Always soft if French ending.
            if (value.slice(index + 1, index + 5) === 'IER ') {
              secondary += 'J'
            } else {
              secondary += 'K'
            }
          }

          index += 2

          break
        }

        if (next === 'G') {
          index++
        }

        index++

        primary += 'K'
        secondary += 'K'

        break
      case 'H':
        // Only keep if first & before vowel or btw. 2 vowels.
        if (vowels.test(next) && (index === 0 || vowels.test(prev))) {
          primary += 'H'
          secondary += 'H'

          index++
        }

        index++

        break
      case 'J':
        // Obvious Spanish, `jose`, `San Jacinto`.
        if (
          value.slice(index, index + 4) === 'JOSE' ||
          value.slice(0, 4) === 'SAN '
        ) {
          if (
            value.slice(0, 4) === 'SAN ' ||
            (index === 0 && characters[index + 4] === ' ')
          ) {
            primary += 'H'
            secondary += 'H'
          } else {
            primary += 'J'
            secondary += 'H'
          }

          index++

          break
        }

        if (
          index === 0
          // Bug: unreachable (see previous statement).
          // && value.slice(index, index + 4) !== 'JOSE'.
        ) {
          primary += 'J'

          // Such as `Yankelovich` or `Jankelowicz`.
          secondary += 'A'
          // Spanish pron. of such as `bajador`.
        } else if (
          !isSlavoGermanic &&
          (next === 'A' || next === 'O') &&
          vowels.test(prev)
        ) {
          primary += 'J'
          secondary += 'H'
        } else if (index === last) {
          primary += 'J'
        } else if (
          prev !== 'S' &&
          prev !== 'K' &&
          prev !== 'L' &&
          !jForJException.test(next)
        ) {
          primary += 'J'
          secondary += 'J'
          // It could happen.
        } else if (next === 'J') {
          index++
        }

        index++

        break
      case 'K':
        if (next === 'K') {
          index++
        }

        primary += 'K'
        secondary += 'K'
        index++

        break
      case 'L':
        if (next === 'L') {
          // Spanish such as `cabrillo`, `gallegos`.
          if (
            (index === length - 3 &&
              ((prev === 'A' && nextnext === 'E') ||
                (prev === 'I' && (nextnext === 'O' || nextnext === 'A')))) ||
            (prev === 'A' &&
              nextnext === 'E' &&
              (characters[last] === 'A' ||
                characters[last] === 'O' ||
                alle.test(value.slice(last - 1, length))))
          ) {
            primary += 'L'
            index += 2

            break
          }

          index++
        }

        primary += 'L'
        secondary += 'L'
        index++

        break
      case 'M':
        if (
          next === 'M' ||
          // Such as `dumb`, `thumb`.
          (prev === 'U' &&
            next === 'B' &&
            (index + 1 === last || value.slice(index + 2, index + 4) === 'ER'))
        ) {
          index++
        }

        index++
        primary += 'M'
        secondary += 'M'

        break
      case 'N':
        if (next === 'N') {
          index++
        }

        index++
        primary += 'N'
        secondary += 'N'

        break
      case 'Ñ':
        index++
        primary += 'N'
        secondary += 'N'

        break
      case 'P':
        if (next === 'H') {
          primary += 'F'
          secondary += 'F'
          index += 2

          break
        }

        // Also account for `campbell` and `raspberry`.
        subvalue = next

        if (subvalue === 'P' || subvalue === 'B') {
          index++
        }

        index++

        primary += 'P'
        secondary += 'P'

        break
      case 'Q':
        if (next === 'Q') {
          index++
        }

        index++
        primary += 'K'
        secondary += 'K'

        break
      case 'R':
        // French such as `Rogier`, but exclude `Hochmeier`.
        if (
          index === last &&
          !isSlavoGermanic &&
          prev === 'E' &&
          characters[index - 2] === 'I' &&
          characters[index - 4] !== 'M' &&
          characters[index - 3] !== 'E' &&
          characters[index - 3] !== 'A'
        ) {
          secondary += 'R'
        } else {
          primary += 'R'
          secondary += 'R'
        }

        if (next === 'R') {
          index++
        }

        index++

        break
      case 'S':
        // Special cases `island`, `isle`, `carlisle`, `carlysle`.
        if (next === 'L' && (prev === 'I' || prev === 'Y')) {
          index++

          break
        }

        // Special case `sugar-`.
        if (index === 0 && value.slice(1, 5) === 'UGAR') {
          primary += 'X'
          secondary += 'S'
          index++

          break
        }

        if (next === 'H') {
          // Germanic.
          if (hForS.test(value.slice(index + 1, index + 5))) {
            primary += 'S'
            secondary += 'S'
          } else {
            primary += 'X'
            secondary += 'X'
          }

          index += 2
          break
        }

        if (
          next === 'I' &&
          (nextnext === 'O' || nextnext === 'A')
          // Bug: Already covered by previous branch
          // || value.slice(index, index + 4) === 'SIAN'
        ) {
          if (isSlavoGermanic) {
            primary += 'S'
            secondary += 'S'
          } else {
            primary += 'S'
            secondary += 'X'
          }

          index += 3

          break
        }

        // German & Anglicization's, such as `Smith` match `Schmidt`, `snider`
        // match `Schneider`. Also, -sz- in slavic language although in
        // hungarian it is pronounced `s`.
        if (
          next === 'Z' ||
          (index === 0 &&
            (next === 'L' || next === 'M' || next === 'N' || next === 'W'))
        ) {
          primary += 'S'
          secondary += 'X'

          if (next === 'Z') {
            index++
          }

          index++

          break
        }

        if (next === 'C') {
          // Schlesinger's rule.
          if (nextnext === 'H') {
            subvalue = value.slice(index + 3, index + 5)

            // Dutch origin, such as `school`, `schooner`.
            if (dutchSch.test(subvalue)) {
              // Such as `schermerhorn`, `schenker`.
              if (subvalue === 'ER' || subvalue === 'EN') {
                primary += 'X'
                secondary += 'SK'
              } else {
                primary += 'SK'
                secondary += 'SK'
              }

              index += 3

              break
            }

            if (
              index === 0 &&
              !vowels.test(characters[3]) &&
              characters[3] !== 'W'
            ) {
              primary += 'X'
              secondary += 'S'
            } else {
              primary += 'X'
              secondary += 'X'
            }

            index += 3

            break
          }

          if (nextnext === 'I' || nextnext === 'E' || nextnext === 'Y') {
            primary += 'S'
            secondary += 'S'
            index += 3
            break
          }

          primary += 'SK'
          secondary += 'SK'
          index += 3

          break
        }

        subvalue = value.slice(index - 2, index)

        // French such as `resnais`, `artois`.
        if (index === last && (subvalue === 'AI' || subvalue === 'OI')) {
          secondary += 'S'
        } else {
          primary += 'S'
          secondary += 'S'
        }

        if (
          next === 'S'
          // Bug: already taken care of by `German & Anglicization's` above:
          // || next === 'Z'
        ) {
          index++
        }

        index++

        break
      case 'T':
        if (next === 'I' && nextnext === 'O' && characters[index + 3] === 'N') {
          primary += 'X'
          secondary += 'X'
          index += 3

          break
        }

        subvalue = value.slice(index + 1, index + 3)

        if (
          (next === 'I' && nextnext === 'A') ||
          (next === 'C' && nextnext === 'H')
        ) {
          primary += 'X'
          secondary += 'X'
          index += 3

          break
        }

        if (next === 'H' || (next === 'T' && nextnext === 'H')) {
          // Special case `Thomas`, `Thames` or Germanic.
          if (
            isGermanic ||
            ((nextnext === 'O' || nextnext === 'A') &&
              characters[index + 3] === 'M')
          ) {
            primary += 'T'
            secondary += 'T'
          } else {
            primary += '0'
            secondary += 'T'
          }

          index += 2

          break
        }

        if (next === 'T' || next === 'D') {
          index++
        }

        index++
        primary += 'T'
        secondary += 'T'

        break
      case 'V':
        if (next === 'V') {
          index++
        }

        primary += 'F'
        secondary += 'F'
        index++

        break
      case 'W':
        // Can also be in middle of word (as already taken care of for initial).
        if (next === 'R') {
          primary += 'R'
          secondary += 'R'
          index += 2

          break
        }

        if (index === 0) {
          // `Wasserman` should match `Vasserman`.
          if (vowels.test(next)) {
            primary += 'A'
            secondary += 'F'
          } else if (next === 'H') {
            // Need `Uomo` to match `Womo`.
            primary += 'A'
            secondary += 'A'
          }
        }

        // `Arnow` should match `Arnoff`.
        if (
          ((prev === 'E' || prev === 'O') &&
            next === 'S' &&
            nextnext === 'K' &&
            (characters[index + 3] === 'I' || characters[index + 3] === 'Y')) ||
          // Maybe a bug? Shouldn't this be general Germanic?
          value.slice(0, 3) === 'SCH' ||
          (index === last && vowels.test(prev))
        ) {
          secondary += 'F'
          index++

          break
        }

        // Polish such as `Filipowicz`.
        if (
          next === 'I' &&
          (nextnext === 'C' || nextnext === 'T') &&
          characters[index + 3] === 'Z'
        ) {
          primary += 'TS'
          secondary += 'FX'
          index += 4

          break
        }

        index++

        break
      case 'X':
        // French such as `breaux`.
        if (
          !(
            index === last &&
            // Bug: IAU and EAU also match by AU
            // (/IAU|EAU/.test(value.slice(index - 3, index))) ||
            prev === 'U' &&
            (characters[index - 2] === 'A' || characters[index - 2] === 'O')
          )
        ) {
          primary += 'KS'
          secondary += 'KS'
        }

        if (next === 'C' || next === 'X') {
          index++
        }

        index++

        break
      case 'Z':
        // Chinese pinyin such as `Zhao`.
        if (next === 'H') {
          primary += 'J'
          secondary += 'J'
          index += 2

          break
        } else if (
          (next === 'Z' &&
            (nextnext === 'A' || nextnext === 'I' || nextnext === 'O')) ||
          (isSlavoGermanic && index > 0 && prev !== 'T')
        ) {
          primary += 'S'
          secondary += 'TS'
        } else {
          primary += 'S'
          secondary += 'S'
        }

        if (next === 'Z') {
          index++
        }

        index++

        break
      default:
        index++
    }
  }

  return [primary, secondary]
}





//console.log(doubleMetaphone("admire"));




 dict.forEach((item)=>{
     aro.push({name: item, code :  doubleMetaphone(item)[1]});
 })

//console.log(aro);




 dict.forEach((word)=>{
  
  var p=document.getElementById('para');
   var dateSpan = document.createElement('span')
p.appendChild(dateSpan);
 dateSpan.id="span";
dateSpan.textContent = word + ' ';

   })

  let text = document.getElementById("box")
 

 function removeAllChildNodes(p) {
    while (p.firstChild) {
        p.removeChild(p.firstChild);
    }
}


function toggle(val){
 
   var p=document.getElementById('para');
   
    if(val=="")
   {  removeAllChildNodes(p);
          dict.forEach((word)=>{
  
  var p=document.getElementById('para');
   var dateSpan = document.createElement('span')
p.appendChild(dateSpan);
 dateSpan.id="span";
dateSpan.textContent = word + ' ';

   })
   }
   else
   {
    removeAllChildNodes(p);

// dict.forEach((word)=>{
//    if(doubleMetaphone(word)[1]===doubleMetaphone(text.value)[1])
//    {
//    var p=document.getElementById('para');
//    var dateSpan = document.createElement('span')
//  p.appendChild(dateSpan);
//  dateSpan.id="span";
//   dateSpan.textContent = word + ' ';

//    } })


let result = dict.filter((word)=>{
      return doubleMetaphone(word)[1]===doubleMetaphone(text.value)[1];
      
})


let finalWords=[];
 result.forEach((word)=>{
       
     finalWords.push({dist : levenshtein(word,text.value), word: word});
})
 finalWords.sort(function(a, b){return (+a.dist) - (+b.dist)});
console.log(finalWords);
 finalWords.forEach((word)=>{

 	var p=document.getElementById('para');
   var dateSpan = document.createElement('span')
 p.appendChild(dateSpan);
 dateSpan.id="span";
  dateSpan.textContent = word.word + ' ';

 })



}

//console.log(doubleMetaphone(text.value));

}





console.log(levenshtein('gat', 'bat'));