/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }
    //hasOwnProperty check for name, score , score must be a number and name must be a string, other validation check
    for (const student of students) {
        if (typeof student !== 'object' || !student.hasOwnProperty('name') || !student.hasOwnProperty('score') || student.score < 0 || typeof student.name !== 'string' || typeof student.score !== 'number') {
            return "Invalid";
        }
    }
    // 70 or more
    const qualified = students.filter(student => {
        return student.score >= 70;
    });
    // uppercase
    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });
    // fix the 3 elements bug
    return names.slice(0, 3);
}
const data1 = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 90 },
    { name: "Charlie", score: 75 },
    { name: "David", score: 60 }
];

const data2 = [
    { name: "Eve", score: 65 },
    { name: "Frank", score: 55 }
];
const data3 = "not an array";

console.log(`test1: ${JSON.stringify(generateLeaderboard(data1))}`);
console.log(`test2: ${JSON.stringify(generateLeaderboard(data2))}`);
console.log(`test3: ${JSON.stringify(generateLeaderboard([{ "name": "Rafi", "score": 90 }, { "name": "Sadia", "score": 65 }, { "name": "Karim", "score": 85 }, { "name": "Nafis", "score": 75 }]))}`);    