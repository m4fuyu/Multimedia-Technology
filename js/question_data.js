// 初一英语语法变形题库（考察时态、复数、比较级等知识点）
const englishSingleChoiceQuestions = [
    // ========== 第三人称单数变形 ==========
    {
        id: 1,
        question: "My sister ________ (go) to school every day.",
        hint: "用go的适当形式填空",
        baseWord: "go",
        correctAnswer: "goes"
    },
    {
        id: 2,
        question: "Tom ________ (play) basketball after school.",
        hint: "用play的适当形式填空",
        baseWord: "play",
        correctAnswer: "plays"
    },
    {
        id: 3,
        question: "She ________ (have) a nice schoolbag.",
        hint: "用have的适当形式填空",
        baseWord: "have",
        correctAnswer: "has"
    },
    {
        id: 4,
        question: "He ________ (do) his homework every evening.",
        hint: "用do的适当形式填空",
        baseWord: "do",
        correctAnswer: "does"
    },
    {
        id: 5,
        question: "My mother ________ (watch) TV in the evening.",
        hint: "用watch的适当形式填空",
        baseWord: "watch",
        correctAnswer: "watches"
    },
    {
        id: 6,
        question: "The boy ________ (study) English every day.",
        hint: "用study的适当形式填空",
        baseWord: "study",
        correctAnswer: "studies"
    },
    {
        id: 7,
        question: "Lucy ________ (like) playing tennis.",
        hint: "用like的适当形式填空",
        baseWord: "like",
        correctAnswer: "likes"
    },
    {
        id: 8,
        question: "My brother ________ (fix) his bike on Sunday.",
        hint: "用fix的适当形式填空",
        baseWord: "fix",
        correctAnswer: "fixes"
    },
    
    // ========== 名词复数变形 ==========
    {
        id: 9,
        question: "There are three ________ (box) in the room.",
        hint: "用box的适当形式填空",
        baseWord: "box",
        correctAnswer: "boxes"
    },
    {
        id: 10,
        question: "I have many ________ (watch) at home.",
        hint: "用watch的适当形式填空",
        baseWord: "watch",
        correctAnswer: "watches"
    },
    {
        id: 11,
        question: "These are my ________ (tomato).",
        hint: "用tomato的适当形式填空",
        baseWord: "tomato",
        correctAnswer: "tomatoes"
    },
    {
        id: 12,
        question: "There are two ________ (child) in the park.",
        hint: "用child的适当形式填空",
        baseWord: "child",
        correctAnswer: "children"
    },
    {
        id: 13,
        question: "I see three ________ (mouse) in the room.",
        hint: "用mouse的适当形式填空",
        baseWord: "mouse",
        correctAnswer: "mice"
    },
    {
        id: 14,
        question: "My feet hurt because I have two ________ (foot).",
        hint: "用foot的适当形式填空（注意句子中已有feet）",
        baseWord: "foot",
        correctAnswer: "feet"
    },
    {
        id: 15,
        question: "There are many ________ (sheep) on the farm.",
        hint: "用sheep的适当形式填空",
        baseWord: "sheep",
        correctAnswer: "sheep"
    },
    {
        id: 16,
        question: "I need two ________ (dictionary) for class.",
        hint: "用dictionary的适当形式填空",
        baseWord: "dictionary",
        correctAnswer: "dictionaries"
    },
    {
        id: 47,
        question: "There are five ________ (family) in the village.",
        hint: "用family的适当形式填空",
        baseWord: "family",
        correctAnswer: "families"
    },
    {
        id: 48,
        question: "Please give me two ________ (knife).",
        hint: "用knife的适当形式填空",
        baseWord: "knife",
        correctAnswer: "knives"
    },
    {
        id: 49,
        question: "Look at those ________ (sheep) on the hill.",
        hint: "用sheep的适当形式填空",
        baseWord: "sheep",
        correctAnswer: "sheep"
    },
    
    // ========== 过去式变形 ==========
    {
        id: 17,
        question: "I ________ (go) to the park yesterday.",
        hint: "用go的过去式填空",
        baseWord: "go",
        correctAnswer: "went"
    },
    {
        id: 18,
        question: "She ________ (eat) an apple for breakfast.",
        hint: "用eat的过去式填空",
        baseWord: "eat",
        correctAnswer: "ate"
    },
    {
        id: 19,
        question: "They ________ (play) basketball last Sunday.",
        hint: "用play的过去式填空",
        baseWord: "play",
        correctAnswer: "played"
    },
    {
        id: 20,
        question: "Tom ________ (have) a good time at the party.",
        hint: "用have的过去式填空",
        baseWord: "have",
        correctAnswer: "had"
    },
    {
        id: 21,
        question: "We ________ (study) English last night.",
        hint: "用study的过去式填空",
        baseWord: "study",
        correctAnswer: "studied"
    },
    {
        id: 22,
        question: "I ________ (watch) TV yesterday evening.",
        hint: "用watch的过去式填空",
        baseWord: "watch",
        correctAnswer: "watched"
    },
    {
        id: 43,
        question: "I ________ (go) to the park yesterday.",
        hint: "用go的适当形式填空",
        baseWord: "go",
        correctAnswer: "went"
    },
    {
        id: 44,
        question: "We ________ (see) a movie last night.",
        hint: "用see的适当形式填空",
        baseWord: "see",
        correctAnswer: "saw"
    },
    {
        id: 45,
        question: "The bus ________ (stop) here ten minutes ago.",
        hint: "用stop的适当形式填空",
        baseWord: "stop",
        correctAnswer: "stopped"
    },
    {
        id: 46,
        question: "She ________ (study) for the test last weekend.",
        hint: "用study的适当形式填空",
        baseWord: "study",
        correctAnswer: "studied"
    },
    
    // ========== 现在分词/动名词 ==========
    {
        id: 23,
        question: "I like ________ (swim) in summer.",
        hint: "用swim的动名词形式填空",
        baseWord: "swim",
        correctAnswer: "swimming"
    },
    {
        id: 24,
        question: "She is ________ (run) in the park now.",
        hint: "用run的现在分词填空",
        baseWord: "run",
        correctAnswer: "running"
    },
    {
        id: 25,
        question: "They are ________ (play) soccer.",
        hint: "用play的现在分词填空",
        baseWord: "play",
        correctAnswer: "playing"
    },
    {
        id: 26,
        question: "I enjoy ________ (read) books.",
        hint: "用read的动名词形式填空",
        baseWord: "read",
        correctAnswer: "reading"
    },
    {
        id: 27,
        question: "She is ________ (sit) on the chair.",
        hint: "用sit的现在分词填空",
        baseWord: "sit",
        correctAnswer: "sitting"
    },
    {
        id: 39,
        question: "Look! The boys are ________ (run) on the playground.",
        hint: "用run的适当形式填空",
        baseWord: "run",
        correctAnswer: "running"
    },
    {
        id: 40,
        question: "Listen! She is ________ (sing) in the room.",
        hint: "用sing的适当形式填空",
        baseWord: "sing",
        correctAnswer: "singing"
    },
    {
        id: 41,
        question: "They are ________ (swim) in the pool now.",
        hint: "用swim的适当形式填空",
        baseWord: "swim",
        correctAnswer: "swimming"
    },
    {
        id: 42,
        question: "He is ________ (write) a letter at the moment.",
        hint: "用write的适当形式填空",
        baseWord: "write",
        correctAnswer: "writing"
    },
    
    // ========== 形容词比较级 ==========
    {
        id: 28,
        question: "This apple is ________ (big) than that one.",
        hint: "用big的比较级填空",
        baseWord: "big",
        correctAnswer: "bigger"
    },
    {
        id: 29,
        question: "Lucy is ________ (tall) than Lily.",
        hint: "用tall的比较级填空",
        baseWord: "tall",
        correctAnswer: "taller"
    },
    {
        id: 30,
        question: "English is ________ (good) than math for me.",
        hint: "用good的比较级填空",
        baseWord: "good",
        correctAnswer: "better"
    },
    {
        id: 31,
        question: "This book is ________ (interesting) than that one.",
        hint: "用interesting的比较级填空",
        baseWord: "interesting",
        correctAnswer: "more interesting"
    },
    {
        id: 32,
        question: "Tom is ________ (bad) at math than his sister.",
        hint: "用bad的比较级填空",
        baseWord: "bad",
        correctAnswer: "worse"
    },
    {
        id: 50,
        question: "This box is ________ (heavy) than that one.",
        hint: "用heavy的适当形式填空",
        baseWord: "heavy",
        correctAnswer: "heavier"
    },
    
    // ========== 形容词最高级 ==========
    {
        id: 51,
        question: "Who is the ________ (good) student in your class?",
        hint: "用good的适当形式填空",
        baseWord: "good",
        correctAnswer: "best"
    },
    {
        id: 52,
        question: "Summer is the ________ (hot) season of the year.",
        hint: "用hot的适当形式填空",
        baseWord: "hot",
        correctAnswer: "hottest"
    },
    
    // ========== be动词变形 ==========
    {
        id: 33,
        question: "I ________ a student. You ________ a teacher.",
        hint: "用be动词的适当形式填空",
        baseWord: "be",
        correctAnswer: "am; are"
    },
    {
        id: 34,
        question: "She ________ my sister. He ________ my brother.",
        hint: "用be动词的适当形式填空",
        baseWord: "be",
        correctAnswer: "is; is"
    },
    
    // ========== 物主代词 ==========
    {
        id: 35,
        question: "This is ________ (I) book. That is ________ (you) pen.",
        hint: "用I和you的物主代词填空",
        baseWord: "I; you",
        correctAnswer: "my; your"
    },
    {
        id: 36,
        question: "That is ________ (he) schoolbag.",
        hint: "用he的物主代词填空",
        baseWord: "he",
        correctAnswer: "his"
    },
    
    // ========== 名词所有格 ==========
    {
        id: 37,
        question: "This is ________ (Tom) bike.",
        hint: "用Tom的所有格填空",
        baseWord: "Tom",
        correctAnswer: "Tom's"
    },
    {
        id: 38,
        question: "These are ________ (children) toys.",
        hint: "用children的所有格填空",
        baseWord: "children",
        correctAnswer: "children's"
    },

    // ========== 介词填空 ==========
    {
        id: 53,
        question: "We usually go to the park ________ Sunday.",
        hint: "填入适当的介词",
        baseWord: "on",
        correctAnswer: "on"
    },
    {
        id: 54,
        question: "My birthday is ________ May.",
        hint: "填入适当的介词",
        baseWord: "in",
        correctAnswer: "in"
    },
    {
        id: 55,
        question: "I get up ________ 6:30 every morning.",
        hint: "填入适当的介词",
        baseWord: "at",
        correctAnswer: "at"
    },

    // ========== 代词宾格 ==========
    {
        id: 56,
        question: "Please give ________ (I) a cup of tea.",
        hint: "用I的适当形式填空",
        baseWord: "I",
        correctAnswer: "me"
    },
    {
        id: 57,
        question: "Listen to ________ (he). He is right.",
        hint: "用he的适当形式填空",
        baseWord: "he",
        correctAnswer: "him"
    },
    {
        id: 58,
        question: "I often play with ________ (they) on weekends.",
        hint: "用they的适当形式填空",
        baseWord: "they",
        correctAnswer: "them"
    },

    // ========== 情态动词 ==========
    {
        id: 59,
        question: "He can ________ (swim) very well.",
        hint: "用swim的适当形式填空",
        baseWord: "swim",
        correctAnswer: "swim"
    },
    {
        id: 60,
        question: "You must ________ (finish) your homework first.",
        hint: "用finish的适当形式填空",
        baseWord: "finish",
        correctAnswer: "finish"
    },

    // ========== 冠词 ==========
    {
        id: 61,
        question: "There is ________ book on the desk.",
        hint: "填入适当的冠词(a/an/the)",
        baseWord: "a",
        correctAnswer: "a"
    },
    {
        id: 62,
        question: "She eats ________ apple every day.",
        hint: "填入适当的冠词(a/an/the)",
        baseWord: "an",
        correctAnswer: "an"
    },
    {
        id: 63,
        question: "Look at ________ sun in the sky.",
        hint: "填入适当的冠词(a/an/the)",
        baseWord: "the",
        correctAnswer: "the"
    },

    // ========== There be 句型 ==========
    {
        id: 64,
        question: "There ________ (be) a pen and two books on the desk.",
        hint: "用be动词的适当形式填空",
        baseWord: "be",
        correctAnswer: "is"
    },
    {
        id: 65,
        question: "There ________ (be) some flowers in the garden.",
        hint: "用be动词的适当形式填空",
        baseWord: "be",
        correctAnswer: "are"
    }
];


