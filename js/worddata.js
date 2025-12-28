// 初一英语语法变形题库（考察时态、复数、比较级等知识点）
const englishSingleChoiceQuestions = [
    // ========== 第三人称单数变形 ==========
    {
        id: 1,
        question: "My sister ________ (go) to school every day.",
        hint: "用go的适当形式填空",
        baseWord: "go",
        correctAnswer: "goes",
        explanation: "第三人称单数（she）后，动词go要加es变成goes",
        category: "第三人称单数"
    },
    {
        id: 2,
        question: "Tom ________ (play) basketball after school.",
        hint: "用play的适当形式填空",
        baseWord: "play",
        correctAnswer: "plays",
        explanation: "第三人称单数（Tom）后，动词play加s变成plays",
        category: "第三人称单数"
    },
    {
        id: 3,
        question: "She ________ (have) a nice schoolbag.",
        hint: "用have的适当形式填空",
        baseWord: "have",
        correctAnswer: "has",
        explanation: "have的第三人称单数是has（不规则变化）",
        category: "第三人称单数"
    },
    {
        id: 4,
        question: "He ________ (do) his homework every evening.",
        hint: "用do的适当形式填空",
        baseWord: "do",
        correctAnswer: "does",
        explanation: "do的第三人称单数是does（不规则变化）",
        category: "第三人称单数"
    },
    {
        id: 5,
        question: "My mother ________ (watch) TV in the evening.",
        hint: "用watch的适当形式填空",
        baseWord: "watch",
        correctAnswer: "watches",
        explanation: "以ch结尾的动词，第三人称单数加es变成watches",
        category: "第三人称单数"
    },
    {
        id: 6,
        question: "The boy ________ (study) English every day.",
        hint: "用study的适当形式填空",
        baseWord: "study",
        correctAnswer: "studies",
        explanation: "以辅音字母+y结尾，变y为i再加es变成studies",
        category: "第三人称单数"
    },
    {
        id: 7,
        question: "Lucy ________ (like) playing tennis.",
        hint: "用like的适当形式填空",
        baseWord: "like",
        correctAnswer: "likes",
        explanation: "第三人称单数，动词like加s变成likes",
        category: "第三人称单数"
    },
    {
        id: 8,
        question: "My brother ________ (fix) his bike on Sunday.",
        hint: "用fix的适当形式填空",
        baseWord: "fix",
        correctAnswer: "fixes",
        explanation: "以x结尾的动词，第三人称单数加es变成fixes",
        category: "第三人称单数"
    },
    
    // ========== 名词复数变形 ==========
    {
        id: 9,
        question: "There are three ________ (box) in the room.",
        hint: "用box的适当形式填空",
        baseWord: "box",
        correctAnswer: "boxes",
        explanation: "box的复数形式是boxes（以x结尾，加es）",
        category: "名词复数"
    },
    {
        id: 10,
        question: "I have many ________ (watch) at home.",
        hint: "用watch的适当形式填空",
        baseWord: "watch",
        correctAnswer: "watches",
        explanation: "watch的复数形式是watches（以ch结尾，加es）",
        category: "名词复数"
    },
    {
        id: 11,
        question: "These are my ________ (tomato).",
        hint: "用tomato的适当形式填空",
        baseWord: "tomato",
        correctAnswer: "tomatoes",
        explanation: "tomato的复数形式是tomatoes（以o结尾，加es）",
        category: "名词复数"
    },
    {
        id: 12,
        question: "There are two ________ (child) in the park.",
        hint: "用child的适当形式填空",
        baseWord: "child",
        correctAnswer: "children",
        explanation: "child的复数形式是children（不规则变化）",
        category: "名词复数"
    },
    {
        id: 13,
        question: "I see three ________ (mouse) in the room.",
        hint: "用mouse的适当形式填空",
        baseWord: "mouse",
        correctAnswer: "mice",
        explanation: "mouse的复数形式是mice（不规则变化）",
        category: "名词复数"
    },
    {
        id: 14,
        question: "My feet hurt because I have two ________ (foot).",
        hint: "用foot的适当形式填空（注意句子中已有feet）",
        baseWord: "foot",
        correctAnswer: "feet",
        explanation: "foot的复数形式是feet（不规则变化）",
        category: "名词复数"
    },
    {
        id: 15,
        question: "There are many ________ (sheep) on the farm.",
        hint: "用sheep的适当形式填空",
        baseWord: "sheep",
        correctAnswer: "sheep",
        explanation: "sheep的单复数同形，复数仍然是sheep",
        category: "名词复数"
    },
    {
        id: 16,
        question: "I need two ________ (dictionary) for class.",
        hint: "用dictionary的适当形式填空",
        baseWord: "dictionary",
        correctAnswer: "dictionaries",
        explanation: "以辅音字母+y结尾，变y为i再加es变成dictionaries",
        category: "名词复数"
    },
    {
        id: 47,
        question: "There are five ________ (family) in the village.",
        hint: "用family的适当形式填空",
        baseWord: "family",
        correctAnswer: "families",
        explanation: "以辅音字母+y结尾，变y为i加es",
        category: "名词复数"
    },
    {
        id: 48,
        question: "Please give me two ________ (knife).",
        hint: "用knife的适当形式填空",
        baseWord: "knife",
        correctAnswer: "knives",
        explanation: "以fe结尾的名词，变fe为v加es",
        category: "名词复数"
    },
    {
        id: 49,
        question: "Look at those ________ (sheep) on the hill.",
        hint: "用sheep的适当形式填空",
        baseWord: "sheep",
        correctAnswer: "sheep",
        explanation: "sheep是单复数同形",
        category: "名词复数"
    },
    
    // ========== 过去式变形 ==========
    {
        id: 17,
        question: "I ________ (go) to the park yesterday.",
        hint: "用go的过去式填空",
        baseWord: "go",
        correctAnswer: "went",
        explanation: "go的过去式是went（不规则变化）",
        category: "过去式"
    },
    {
        id: 18,
        question: "She ________ (eat) an apple for breakfast.",
        hint: "用eat的过去式填空",
        baseWord: "eat",
        correctAnswer: "ate",
        explanation: "eat的过去式是ate（不规则变化）",
        category: "过去式"
    },
    {
        id: 19,
        question: "They ________ (play) basketball last Sunday.",
        hint: "用play的过去式填空",
        baseWord: "play",
        correctAnswer: "played",
        explanation: "play的过去式是played（规则变化，加ed）",
        category: "过去式"
    },
    {
        id: 20,
        question: "Tom ________ (have) a good time at the party.",
        hint: "用have的过去式填空",
        baseWord: "have",
        correctAnswer: "had",
        explanation: "have的过去式是had（不规则变化）",
        category: "过去式"
    },
    {
        id: 21,
        question: "We ________ (study) English last night.",
        hint: "用study的过去式填空",
        baseWord: "study",
        correctAnswer: "studied",
        explanation: "以辅音字母+y结尾，变y为i再加ed变成studied",
        category: "过去式"
    },
    {
        id: 22,
        question: "I ________ (watch) TV yesterday evening.",
        hint: "用watch的过去式填空",
        baseWord: "watch",
        correctAnswer: "watched",
        explanation: "watch的过去式是watched（规则变化，加ed）",
        category: "过去式"
    },
    {
        id: 43,
        question: "I ________ (go) to the park yesterday.",
        hint: "用go的适当形式填空",
        baseWord: "go",
        correctAnswer: "went",
        explanation: "yesterday表示过去时，go的过去式是went",
        category: "一般过去时"
    },
    {
        id: 44,
        question: "We ________ (see) a movie last night.",
        hint: "用see的适当形式填空",
        baseWord: "see",
        correctAnswer: "saw",
        explanation: "last night表示过去时，see的过去式是saw",
        category: "一般过去时"
    },
    {
        id: 45,
        question: "The bus ________ (stop) here ten minutes ago.",
        hint: "用stop的适当形式填空",
        baseWord: "stop",
        correctAnswer: "stopped",
        explanation: "ago表示过去时，stop双写p加ed",
        category: "一般过去时"
    },
    {
        id: 46,
        question: "She ________ (study) for the test last weekend.",
        hint: "用study的适当形式填空",
        baseWord: "study",
        correctAnswer: "studied",
        explanation: "last weekend表示过去时，study变y为i加ed",
        category: "一般过去时"
    },
    
    // ========== 现在分词/动名词 ==========
    {
        id: 23,
        question: "I like ________ (swim) in summer.",
        hint: "用swim的动名词形式填空",
        baseWord: "swim",
        correctAnswer: "swimming",
        explanation: "swim的动名词形式是swimming（双写m加ing）",
        category: "现在分词"
    },
    {
        id: 24,
        question: "She is ________ (run) in the park now.",
        hint: "用run的现在分词填空",
        baseWord: "run",
        correctAnswer: "running",
        explanation: "run的现在分词是running（双写n加ing）",
        category: "现在分词"
    },
    {
        id: 25,
        question: "They are ________ (play) soccer.",
        hint: "用play的现在分词填空",
        baseWord: "play",
        correctAnswer: "playing",
        explanation: "play的现在分词是playing（直接加ing）",
        category: "现在分词"
    },
    {
        id: 26,
        question: "I enjoy ________ (read) books.",
        hint: "用read的动名词形式填空",
        baseWord: "read",
        correctAnswer: "reading",
        explanation: "read的动名词形式是reading（直接加ing）",
        category: "现在分词"
    },
    {
        id: 27,
        question: "She is ________ (sit) on the chair.",
        hint: "用sit的现在分词填空",
        baseWord: "sit",
        correctAnswer: "sitting",
        explanation: "sit的现在分词是sitting（双写t加ing）",
        category: "现在分词"
    },
    {
        id: 39,
        question: "Look! The boys are ________ (run) on the playground.",
        hint: "用run的适当形式填空",
        baseWord: "run",
        correctAnswer: "running",
        explanation: "现在进行时be doing，run是重读闭音节，双写n加ing",
        category: "现在进行时"
    },
    {
        id: 40,
        question: "Listen! She is ________ (sing) in the room.",
        hint: "用sing的适当形式填空",
        baseWord: "sing",
        correctAnswer: "singing",
        explanation: "现在进行时be doing，sing直接加ing",
        category: "现在进行时"
    },
    {
        id: 41,
        question: "They are ________ (swim) in the pool now.",
        hint: "用swim的适当形式填空",
        baseWord: "swim",
        correctAnswer: "swimming",
        explanation: "swim是重读闭音节，双写m加ing",
        category: "现在进行时"
    },
    {
        id: 42,
        question: "He is ________ (write) a letter at the moment.",
        hint: "用write的适当形式填空",
        baseWord: "write",
        correctAnswer: "writing",
        explanation: "以不发音e结尾的动词，去e加ing",
        category: "现在进行时"
    },
    
    // ========== 形容词比较级 ==========
    {
        id: 28,
        question: "This apple is ________ (big) than that one.",
        hint: "用big的比较级填空",
        baseWord: "big",
        correctAnswer: "bigger",
        explanation: "big的比较级是bigger（双写g加er）",
        category: "比较级"
    },
    {
        id: 29,
        question: "Lucy is ________ (tall) than Lily.",
        hint: "用tall的比较级填空",
        baseWord: "tall",
        correctAnswer: "taller",
        explanation: "tall的比较级是taller（直接加er）",
        category: "比较级"
    },
    {
        id: 30,
        question: "English is ________ (good) than math for me.",
        hint: "用good的比较级填空",
        baseWord: "good",
        correctAnswer: "better",
        explanation: "good的比较级是better（不规则变化）",
        category: "比较级"
    },
    {
        id: 31,
        question: "This book is ________ (interesting) than that one.",
        hint: "用interesting的比较级填空",
        baseWord: "interesting",
        correctAnswer: "more interesting",
        explanation: "多音节形容词interesting用more构成比较级",
        category: "比较级"
    },
    {
        id: 32,
        question: "Tom is ________ (bad) at math than his sister.",
        hint: "用bad的比较级填空",
        baseWord: "bad",
        correctAnswer: "worse",
        explanation: "bad的比较级是worse（不规则变化）",
        category: "比较级"
    },
    {
        id: 50,
        question: "This box is ________ (heavy) than that one.",
        hint: "用heavy的适当形式填空",
        baseWord: "heavy",
        correctAnswer: "heavier",
        explanation: "than表示比较级，heavy变y为i加er",
        category: "形容词比较级"
    },
    
    // ========== 形容词最高级 ==========
    {
        id: 51,
        question: "Who is the ________ (good) student in your class?",
        hint: "用good的适当形式填空",
        baseWord: "good",
        correctAnswer: "best",
        explanation: "in your class表示范围，用最高级，good的最高级是best",
        category: "形容词最高级"
    },
    {
        id: 52,
        question: "Summer is the ________ (hot) season of the year.",
        hint: "用hot的适当形式填空",
        baseWord: "hot",
        correctAnswer: "hottest",
        explanation: "of the year表示范围，用最高级，hot双写t加est",
        category: "形容词最高级"
    },
    
    // ========== be动词变形 ==========
    {
        id: 33,
        question: "I ________ a student. You ________ a teacher.",
        hint: "用be动词的适当形式填空（am/is/are）",
        baseWord: "be",
        correctAnswer: "am; are",
        explanation: "I后面用am，You后面用are",
        category: "be动词"
    },
    {
        id: 34,
        question: "She ________ my sister. He ________ my brother.",
        hint: "用be动词的适当形式填空",
        baseWord: "be",
        correctAnswer: "is; is",
        explanation: "She和He都是第三人称单数，用is",
        category: "be动词"
    },
    
    // ========== 物主代词 ==========
    {
        id: 35,
        question: "This is ________ (I) book. That is ________ (you) pen.",
        hint: "用I和you的物主代词填空",
        baseWord: "I; you",
        correctAnswer: "my; your",
        explanation: "I的物主代词是my，you的物主代词是your",
        category: "物主代词"
    },
    {
        id: 36,
        question: "That is ________ (he) schoolbag.",
        hint: "用he的物主代词填空",
        baseWord: "he",
        correctAnswer: "his",
        explanation: "he的物主代词是his",
        category: "物主代词"
    },
    
    // ========== 名词所有格 ==========
    {
        id: 37,
        question: "This is ________ (Tom) bike.",
        hint: "用Tom的所有格填空",
        baseWord: "Tom",
        correctAnswer: "Tom's",
        explanation: "名词所有格在名词后加's，Tom's表示Tom的",
        category: "名词所有格"
    },
    {
        id: 38,
        question: "These are ________ (children) toys.",
        hint: "用children的所有格填空",
        baseWord: "children",
        correctAnswer: "children's",
        explanation: "children的复数所有格是children's",
        category: "名词所有格"
    },

    // ========== 介词填空 ==========
    {
        id: 53,
        question: "We usually go to the park ________ Sunday.",
        hint: "填入适当的介词",
        baseWord: "on",
        correctAnswer: "on",
        explanation: "在具体的某一天（星期几）前用介词on",
        category: "介词"
    },
    {
        id: 54,
        question: "My birthday is ________ May.",
        hint: "填入适当的介词",
        baseWord: "in",
        correctAnswer: "in",
        explanation: "在月份、年份、季节前用介词in",
        category: "介词"
    },
    {
        id: 55,
        question: "I get up ________ 6:30 every morning.",
        hint: "填入适当的介词",
        baseWord: "at",
        correctAnswer: "at",
        explanation: "在具体的时间点前用介词at",
        category: "介词"
    },

    // ========== 代词宾格 ==========
    {
        id: 56,
        question: "Please give ________ (I) a cup of tea.",
        hint: "用I的适当形式填空",
        baseWord: "I",
        correctAnswer: "me",
        explanation: "动词give后接人称代词的宾格形式，I的宾格是me",
        category: "代词宾格"
    },
    {
        id: 57,
        question: "Listen to ________ (he). He is right.",
        hint: "用he的适当形式填空",
        baseWord: "he",
        correctAnswer: "him",
        explanation: "介词to后接人称代词的宾格形式，he的宾格是him",
        category: "代词宾格"
    },
    {
        id: 58,
        question: "I often play with ________ (they) on weekends.",
        hint: "用they的适当形式填空",
        baseWord: "they",
        correctAnswer: "them",
        explanation: "介词with后接人称代词的宾格形式，they的宾格是them",
        category: "代词宾格"
    },

    // ========== 情态动词 ==========
    {
        id: 59,
        question: "He can ________ (swim) very well.",
        hint: "用swim的适当形式填空",
        baseWord: "swim",
        correctAnswer: "swim",
        explanation: "情态动词can后接动词原形",
        category: "情态动词"
    },
    {
        id: 60,
        question: "You must ________ (finish) your homework first.",
        hint: "用finish的适当形式填空",
        baseWord: "finish",
        correctAnswer: "finish",
        explanation: "情态动词must后接动词原形",
        category: "情态动词"
    },

    // ========== 冠词 ==========
    {
        id: 61,
        question: "There is ________ book on the desk.",
        hint: "填入适当的冠词(a/an/the)",
        baseWord: "a",
        correctAnswer: "a",
        explanation: "book以辅音音素开头，且表示泛指，用不定冠词a",
        category: "冠词"
    },
    {
        id: 62,
        question: "She eats ________ apple every day.",
        hint: "填入适当的冠词(a/an/the)",
        baseWord: "an",
        correctAnswer: "an",
        explanation: "apple以元音音素开头，且表示泛指，用不定冠词an",
        category: "冠词"
    },
    {
        id: 63,
        question: "Look at ________ sun in the sky.",
        hint: "填入适当的冠词(a/an/the)",
        baseWord: "the",
        correctAnswer: "the",
        explanation: "世界上独一无二的事物前用定冠词the",
        category: "冠词"
    },

    // ========== There be 句型 ==========
    {
        id: 64,
        question: "There ________ (be) a pen and two books on the desk.",
        hint: "用be动词的适当形式填空",
        baseWord: "be",
        correctAnswer: "is",
        explanation: "There be句型遵循就近原则，a pen是单数，所以用is",
        category: "There be句型"
    },
    {
        id: 65,
        question: "There ________ (be) some flowers in the garden.",
        hint: "用be动词的适当形式填空",
        baseWord: "be",
        correctAnswer: "are",
        explanation: "flowers是复数，所以用are",
        category: "There be句型"
    }
];

