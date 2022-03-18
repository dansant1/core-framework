"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUUIDToTraceability = void 0;
function generateRandomLetter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 2; i++) {
        result = result + (characters.charAt(Math.floor(Math.random() * characters.length)));
    }
    return result;
}
function generateUUIDToTraceability() {
    const num = Math.floor((Math.random() * 1000000) + 1);
    const lettersA = generateRandomLetter();
    const lettersB = generateRandomLetter();
    return `${lettersA}${num}${lettersB}`;
}
exports.generateUUIDToTraceability = generateUUIDToTraceability;
//# sourceMappingURL=generateUUID.js.map