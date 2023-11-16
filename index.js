// Задача 1.
function getRemainder(a, b) {
    let reminder =  a % b;
    return remainder;
};
// Задача 2.
function calcPercentage(a, b) {
    let percentage = (100 * a) / b;
    return percentage;
};
// Задача 3.
function getLongestString(a, b) {
    if (a.length > b.length || (a.length === b.length && a > b)) {
        return a;
    } else { 
        return b;
    }
};
// Задача 4.
function concatStrings(a, b, i) {
    return a.slice(0, i) + b + a.slice(i);
};
// Задача 5.
function normalizeVowels(text) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const chars = text.split('');

    for(let i = 0; i < chars.length; i += 1) {
        if (vowels.includes(chars[i])) {
            chars[i] = chars[i].toLowerCase();
        }
    }
    return chars.join('');
};

export {
    getRemainder,
    calcPercentage,
    getLongestString,
    concatStrings,
    normalizeVowels,
};