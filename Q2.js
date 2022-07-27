var input;
input = 21; //informe aqui o número desejado
function isInFibonacci(number) {
    var previous = 0, next = 1, aux = 0;
    while (number > next) {
        aux = next;
        next += previous;
        previous = aux;
    }
    return next === number;
}
console.log("O n\u00FAmero ".concat(input, " ").concat(isInFibonacci(input) ? 'Pertence' : 'Não Pertence', " a seq\u00FBencia Fibonacci."));
