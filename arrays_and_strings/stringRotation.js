function areStringsRotated(str1, str2) {
    if (!str1 || !str2) {
        throw Error('Invalid input');
    }
    if (str1.length !== str2.length) return false;
    const doubled = str1 + str1;
    return doubled.includes(str2);
}

console.log(areStringsRotated('waterbottle', 'erbottlewat'));
console.log(areStringsRotated('waterbottle', 'erbotwattle'));

