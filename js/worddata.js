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
    }
];

