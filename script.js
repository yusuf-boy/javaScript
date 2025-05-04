// let numbers = [5, 5, 2, 6, 1, 7, 8, 9, 10];
//
// let counts = {};
//
// numbers.forEach(num => {
//     counts[num] = (counts[num] || 0) + 1;
// });
//
// let uniqueNumbers = [...new Set(numbers)].slice(0, 4); // [5, 2, 6, 1]
//
// let totalCount = uniqueNumbers.reduce((sum, num) => {
//     return sum + (counts[num] || 0);
// }, 0);
//
// console.log(`: ${totalCount}`);



let numbers = [5, 5, 2, 6, 1, 7, 8, 9, 10, 11, 12, 13, 14];

let counts = {};

// Har bir son necha marta qatnashganini hisoblaymiz
numbers.forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
});

// Qatnashgan sonlar necha marta qatnashgan — qiymatlar massivini olamiz
let countValues = Object.values(counts); // [2, 1, 1, 1, 1, 1, 1, 1, 1]

let groupSize = 4;

// 4 ta 4 ta qilib countlarni qo‘shamiz
for (let i = 0; i < countValues.length; i += groupSize) {
    let group = countValues.slice(i, i + groupSize);
    let sum = group.reduce((a, b) => a + b, 0);
    console.log(`Guruh ${i / groupSize + 1}: [${group.join(', ')}] ->: ${sum}`);
}


