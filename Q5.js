var input = 'subi no ônibus';
function reversetString(input) {
    var reverseString = '';
    for (var i = 0; i < input.length; i++) {
        reverseString += input[input.length - (i + 1)];
    }
    return reverseString;
}
console.log(reversetString(input));
