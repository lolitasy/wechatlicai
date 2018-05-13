function match(string, pattern) {
    var asterisk = -1, prevS = 0, currS = 0, currP = 0;
    while (currS < string.length) {
        if (currP < pattern.length) {
            var c = pattern.charAt(currP);
            if (c === '*') {
                asterisk = currP++;
                prevS = currS;
                continue;
            }
            if (c === '?' || c === string.charAt(currS)) {
                currP++;
                currS++;
                continue;
            }
        }
        if (asterisk !== -1) {
            currP = asterisk++;
            currS = prevS + 1;
            continue;
        }
        return false;
    }
    while(currP < pattern.length && pattern.charAt(currP) == '*') {
        currP++;
    }

    return currP == pattern.length;
};

module.exports = match;
