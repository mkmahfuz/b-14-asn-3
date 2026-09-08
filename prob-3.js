function countHashTags(str) {
    if (typeof str !== 'string') {
        return "Invalid";
    }

    // split to array and filter for hashtags
    const strArray = str.split(' ');
    const hashtagCount = strArray.filter(word => word.startsWith('#')).length;

    // find the longest hashtag
    const longestHashtag = strArray.reduce((longest, word) => {
        if (word.startsWith('#') && word.length > longest.length) {
            return word;
        }
        return longest;
    }, '');
    
 // retrun the final object
    return { hashtagCount, longestHashtag };    
}

const data1 = "I love #coding and #JavaScript!";
const data2 = "No hashtags here.";
const data3 = "#hashtag1 #hashtag2 #hashtag3";
const data4 = "Mixed #hashtags and text #example."; 
const data5 = 123;
const data6 = ['#fun'];
const data7 = { text: "#object" };
const data8 = null;

console.log(`test1: ${JSON.stringify(countHashTags(data1))}`); // Output: 2
console.log(`test2: ${JSON.stringify(countHashTags(data2))}`); // Output: 0
console.log(`test3: ${JSON.stringify(countHashTags(data3))}`); // Output: 3
console.log(`test4: ${JSON.stringify(countHashTags(data4))}`); // Output: 2 
console.log(`test5: ${JSON.stringify(countHashTags(data5))}`); // Output: "Invalid string input"
console.log(`test6: ${JSON.stringify(countHashTags(data6))}`); // Output: "Invalid string input"
console.log(`test7: ${JSON.stringify(countHashTags(data7))}`); // Output: "Invalid string input"
console.log(`test8: ${JSON.stringify(countHashTags(data8))}`); // Output: "Invalid string input" 