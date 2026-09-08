function countHashtags(caption) {
    if (typeof caption !== 'string') {
        return "Invalid";
    }

    // split to array and filter for hashtags
    const strArray = caption.split(' ');
    const hashtagCount = strArray.filter(word => word.startsWith('#')).length;

    // find the longest hashtag
    let longest = '';
    for (const word of strArray) {
        if (word.startsWith('#') && word.length > longest.length) {
            longest = word;
        }
    }

    // remove the '#' from the longest tag
    const longestTag = longest.slice(1);
    // retrun the final object
    return { hashtagCount, longestTag };
}

const data1 = "I love #coding and #JavaScript!";
const data2 = "No hashtags here.";
const data3 = "#hashtag1 #hashtag2 #hashtag3";
const data4 = "Mixed #hashtags and text #example.";
const data5 = 123;
const data6 = ['#fun'];
const data7 = { text: "#object" };
const data8 = null;

console.log(`test1: ${JSON.stringify(countHashtags(data1))}`); // Output: 2
console.log(`test2: ${JSON.stringify(countHashtags(data2))}`); // Output: 0
console.log(`test3: ${JSON.stringify(countHashtags(data3))}`); // Output: 3
console.log(`test4: ${JSON.stringify(countHashtags(data4))}`); // Output: 2 
console.log(`test5: ${JSON.stringify(countHashtags(data5))}`); // Output: "Invalid string input"
console.log(`test6: ${JSON.stringify(countHashtags(data6))}`); // Output: "Invalid string input"
console.log(`test7: ${JSON.stringify(countHashtags(data7))}`); // Output: "Invalid string input"
console.log(`test8: ${JSON.stringify(countHashtags(data8))}`); // Output: "Invalid string input" 