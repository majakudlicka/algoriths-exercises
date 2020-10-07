function compressString(str) {
    let compressed = '';
    // Alternative using array & array.join
    // const stringArr = [];
    let currentChar = str[0];
    let currentCharCount = 1;
    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === str[i]) {
            currentCharCount++;
        } else {
            compressed = compressed + currentChar +currentCharCount;
            // stringArr.push(currentChar);
            // stringArr.push(currentCharCount);
            currentChar = str[i];
            currentCharCount = 1;
        }
    }
    // const compressed = stringArr.join('');
    return compressed.length <= str.length ? compressed : str;
}

// Performance of array.join vs string concatination varies between browser implementations and
// javascript engines. For practical reasons and without knowing size of strings upfront  we can say that they are the same

console.log(compressString('aaabbcccdaa'));
console.log(compressString('abcdefgh'));
