let input: string = 'subi no ônibus'; //Informe aqui a string desejada

function reversetString(input: string): string {
    let reverseString: string = '';

    for(let i = 0; i < input.length; i++) {
        reverseString += input[input.length - (i + 1)];
    }

    return reverseString;
}

console.log(reversetString(input));