function bonusScore(scores) {
    // array check
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    } else {
        for (let scr of scores) {
            if (typeof scr !== "number") {
                return "Invalid";
            }
        }
    }
    // add 10 to each score and return the sum of all scores using map and reduce chaining
    const result = scores.map(item => item + 10).reduce((accu, crruentValue) => { return accu + crruentValue }, 0);
    return result;
}

const data1 = [10, 20, 30];
const data2 = [5, 15, 25, 35];
const data3 = [];
const data4 = "not an array";
const data5 = [10, "20", 30];

console.log(`test1: ${bonusScore(data1)}`); // Output: 90
console.log(`test2: ${bonusScore(data2)}`); // Output: 120
console.log(`test3: ${bonusScore(data3)}`);         // Output: "Invalid"
console.log(`test4: ${bonusScore(data4)}`); // Output: "Invalid"
console.log(`test5: ${bonusScore(data5)}`); // Output: "Invalid"    