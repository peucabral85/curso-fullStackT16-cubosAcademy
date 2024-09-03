const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];
const novoArray = [];

for (let i = 0; i < original.length; i++) {
    if ((original[i] >= 10 && original[i] <= 20) || original[i] > 100) {
        novoArray.push(original[i]);
    }
}
console.log(novoArray);

