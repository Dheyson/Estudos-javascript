// fun sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 4);

imprimirSoma(2); // NaN - Por que (2 + underfined = NaN)
imprimirSoma(2, 10, 4, 3, 8, 6); // this fuck weird, doesn't is it? (Ignora completamente)

function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(3));
console.log(soma());

// Armazenando uma fun em uma variavel

const sum = function (a, b) {
    return a + b;
}

console.log(sum(2, 3));

// Armazenando uma fun arrow em uma variavel

const soma2 = (a, b) => {
    return a + b;
}

console.log(soma2(4, 2));

// retorno implícito 

const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3));

let checkAge = (age > 18) ? true : confirm('Do you have your parents permission to access this page?');

function checkAge(age) {
    return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
}

function checkAgeOr(age) {
    return (age > 18) || confirm('Did you parents allow u?');
}
