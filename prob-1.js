function studentIntroduction(student) {
    if (typeof student !== 'object') {
        return "Invalid";
    }
    if (!student.name || typeof student.name !== 'string') {
        return "Invalid";
    }
    if (!student.age || typeof student.age !== 'number' || student.age <= 0) {
        return "Invalid";
    }
    if (!student.course || typeof student.course !== 'string') {
        return "Invalid";
    }
  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}



// Test cases
const data = {
  name: "John",
  age: 20,
  course: "JavaScript"
};

const data1 = {
  name: "kk",
  age: 22,
  language: "Python",
  lkk: "Java"
};

const data2 = ['name', 'age', 'language'];

console.log(studentIntroduction(data));
console.log(studentIntroduction(data1));
console.log(studentIntroduction(data2));
console.log(studentIntroduction({"name":"Rafi","age":18,"course":"JavaScript"}));
