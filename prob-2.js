function filterActiveUsers(users) {
    //input must be an array
    if (!Array.isArray(users)) {
        return "Invalid";
    }
    //empty array check
    if (users.length === 0) {
        return "Invalid";
    }
    //hasOwnProperty check for isActive
    for (const user of users) {
        if (typeof user !== 'object' || !user.hasOwnProperty('isActive')) {
            return "Invalid";
        }
    }
// return only active users
  return users.filter(user => user.isActive);
}

const data1 = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true }
];

const data2 = [
  { name: "David", isActive: false },
  { name: "Eve", isActive1: false }
];

const data3 = {name: "Frank", isActive: true};
const data4 = "student";

console.log(`test1: ${JSON.stringify(filterActiveUsers(data1))}`);
console.log(`test2: ${JSON.stringify(filterActiveUsers(data2))}`);
console.log(`test3: ${JSON.stringify(filterActiveUsers(data3))}`);
console.log(`test4: ${JSON.stringify(filterActiveUsers(data4))}`);