// worddata.js

// 简单的单词库，为了防止冲突，尽量避免使用 up, down, left, right 开头的词（除非你做了前缀处理逻辑，这里为了简单起见先避开）
const wordList = [
    "canvas", "script", "function", "variable", "array", "object", 
    "browser", "window", "document", "style", "html", "css", 
    "image", "event", "loop", "switch", "case", "return", 
    "width", "height", "context", "push", "pop", "shift",
    "game", "level", "player", "box", "wall", "floor"
];

// 每一关特定的词库（可选，如果没有配置则使用默认 wordList）
const wordLevels = [
    // 第1关专用词
    ["hello", "code", "run", "test", "web"],
    // 第2关
    ["data", "type", "node", "java", "json"],
    // ...
    ["image", "event", "loop", "switch", "case", "return"]
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