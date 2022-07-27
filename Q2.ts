let input: number;
input = 21 //informe aqui o número desejado

function isInFibonacci(number: number): boolean {
    let previous: number = 0, 
        next: number = 1,
        aux: number = 0;

    while(number > next) {
        aux = next;
        next += previous;
        previous = aux;
    }

    return next === number;
}

console.log(`O número ${input} ${isInFibonacci(input) ? 'Pertence' : 'Não Pertence'} a seqûencia Fibonacci.`);

