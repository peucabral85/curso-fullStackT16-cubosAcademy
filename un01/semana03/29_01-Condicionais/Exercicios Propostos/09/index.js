const nota = 8.5;

if (nota < 4) {
    console.log("O estudante obteve conceito E");
} else if (nota >= 4 && nota < 6) {
    console.log("O estudante obteve conceito D");
} else if (nota >= 6 && nota < 8) {
    console.log("O estudante obteve conceito C");
} else if (nota >= 8 && nota < 9) {
    console.log("O estudante obteve conceito B");
} else {
    console.log("O estudante obteve conceito A");
}