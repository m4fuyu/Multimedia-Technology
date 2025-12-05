// worddata.js

// 简单的单词库，为了防止冲突，尽量避免使用 up, down, left, right 开头的词（除非你做了前缀处理逻辑，这里为了简单起见先避开）
const wordList = [
"good", "morning", "hi", "hello", "afternoon", "evening", "how", "are", "you", "i",
"am", "fine", "thanks", "ok", "what", "is", "this", "in", "english", "map",
"cup", "ruler", "pen", "orange", "jacket", "key", "quilt", "it", "a", "that",
"spell", "please", "color", "red", "yellow", "green", "blue", "black", "white", "purple",
"brown", "the", "now", "see", "can", "say", "my", "name", "nice", "to",
"meet", "too", "your", "his", "and", "her", "yes", "she", "he",
"no", "not", "zero", "one", "two", "three", "four", "five", "six", "seven",
"eight", "nine", "telephone", "number", "phone", "first", "last", "friend", "china", "middle",
"school", "sister", "mother", "father", "parent", "brother", "grandmother", "grandfather", "grandparent", "family",
"those", "who", "oh", "these", "they", "well", "have", "day", "son", "cousin",
"grandpa", "mom", "aunt", "grandma", "dad", "uncle", "daughter", "here", "photo", "of",
"next", "picture", "girl", "dog", "pencil", "book", "eraser", "box", "schoolbag", "dictionary",
"mine", "hers", "excuse", "me", "thank", "teacher", "about", "yours", "for",
"help", "welcome", "baseball", "watch", "computer", "game", "card", "notebook", "ring", "bag",
"in", "library", "ask", "find", "some", "classroom", "at", "call",
"lost", "must", "set", "where", "table", "bed", "bookcase", "sofa", "chair",
"on", "under", "come", "desk", "think", "room", "their", "hat", "head", "yeah",
"know", "radio", "clock", "tape", "player", "tidy", "but", "our", "everywhere", "always",
"do", "tennis", "ball", "bat", "soccer", "volleyball", "basketball", "hey",
"let", "us", "go", "we", "late", "has", "get", "great", "play", "sound",
"interesting", "difficult", "relaxing", "watch", "tv", "same", "love", "with", "sport", "them",
"only", "like", "easy", "after", "class", "classmate", "banana", "hamburger", "tomato",
"salad", "strawberry", "pear", "milk", "bread", "birthday", "dinner", "week", "food", "sure",
"burger", "vegetable", "fruit", "right", "apple", "then", "egg", "carrot", "rice", "chicken",
"so", "breakfast", "lunch", "star", "eat", "well", "habit", "healthy", "really", "question",
"want", "be", "fat", "much", "how", "much", "sock", "shorts", "sweater",
"trousers", "shoe", "skirt", "dollar", "big", "small", "long", "woman", "need", "look",
"pair", "take", "here", "ten", "eleven", "twelve", "thirteen", "fifteen", "eighteen", "twenty",
"thirty", "clothes", "store", "buy", "sell", "all", "very", "price", "boy",
"when", "month", "january", "february", "march", "april", "may", "june", "july", "august",
"september", "october", "november", "december", "happy", "old", "party", "first", "second", "third",
"fifth", "eighth", "ninth", "twelfth", "twentieth", "test", "trip", "art", "festival", "dear",
"student", "thing", "term", "busy", "time", "there", "favorite", "subject", "science", "music",
"math", "chinese", "geography", "history", "why", "because", "monday", "friday", "saturday", "free",
"cool", "tuesday", "wednesday", "thursday", "sunday", "useful", "from", "finish", "lesson", "hour"
];

// 每一关特定的词库（可选，如果没有配置则使用默认 wordList）
const wordLevels = [
    // 第1关专用词
    ["good", "morning", "hi", "hello", "afternoon", "evening", "how", "are", "you", "i",
"am", "fine", "thanks", "ok","what", "is", "this", "in", "english", "map", "cup", "ruler", "pen", "orange",
"jacket", "key", "quilt", "it", "a", "that", "spell", "please","color", "red", "yellow", "green", "blue", "black", "white", "purple", "brown", "the",
"now", "see", "can", "say", "my","name", "nice", "to", "meet", "too", "your", "his", "and", "her",
"yes", "she", "he", "no", "not", "zero", "one", "two", "three", "four",
"five", "six", "seven", "eight", "nine", "telephone", "number", "phone", "first", "last",
"friend", "china", "middle", "school"],
    // 第2关
    ["sister", "mother", "father", "parent", "brother", "grandmother", "grandfather", "grandparent", "family", "those",
"who", "oh", "these", "they", "well", "have", "day", "son", "cousin", "grandpa",
"mom", "aunt", "grandma", "dad", "uncle", "daughter", "here", "photo", "of", "next",
"picture", "girl", "dog","pencil", "book", "eraser", "box", "schoolbag", "dictionary", "his", "mine", "hers", "excuse",
"me", "thank", "teacher", "about", "yours", "for", "help", "welcome", "baseball", "watch",
"computer", "game", "card", "notebook", "ring", "bag", "in", "library", "ask", "for",
"find", "some", "classroom", "at", "call", "lost", "must", "set","where", "table", "bed", "bookcase", "sofa", "chair", "on", "under", "come", "desk",
"think", "room", "their", "hat", "head", "yeah", "know", "radio", "clock", "tape",
"player", "tidy", "but", "our", "everywhere", "always","do", "have", "tennis", "ball", "bat", "soccer", "volleyball", "basketball", "hey",
"let", "us", "go", "we", "late", "has", "get", "great", "play", "sound",
"interesting", "difficult", "relaxing", "watch", "tv", "same", "love", "with", "sport", "them",
"only", "like", "easy", "after", "class", "classmate"],
    // ...
    ["banana", "hamburger", "tomato", "salad", "strawberry", "pear", "milk", "bread", "birthday",
"dinner", "week", "food", "sure", "burger", "vegetable", "fruit", "right", "apple", "then",
"egg", "carrot", "rice", "chicken", "so", "breakfast", "lunch", "star", "eat", "well",
"habit", "healthy", "really", "question", "want", "be", "fat","much", "how", "much", "sock", "shorts", "sweater", "trousers", "shoe", "skirt",
"dollar", "big", "small", "long", "woman", "need", "look", "pair", "take", "here",
"ten", "eleven", "twelve", "thirteen", "fifteen", "eighteen", "twenty", "thirty", "clothes",
"store", "buy", "sell", "all", "very", "price", "boy","when", "month", "january", "february", "march", "april", "may", "june", "july", "august",
"september", "october", "november", "december", "happy", "old", "party", "first", "second", "third",
"fifth", "eighth", "ninth", "twelfth", "twentieth", "test", "trip", "art", "festival", "dear",
"student", "thing", "term", "busy", "time", "there","favorite", "subject", "science", "music", "math", "chinese", "geography", "history", "why", "because",
"monday", "friday", "saturday", "for", "sure", "free", "cool", "tuesday", "wednesday", "thursday",
"sunday", "useful", "from", "finish", "lesson", "hour"]
];

// 获取随机单词
function getRandomWord(levelIndex) {
    let list = wordList;
    // 如果该关卡有配置特定单词，则使用特定单词
    if(wordLevels[levelIndex]) {
        list = wordLevels[levelIndex];
    }
    let randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}