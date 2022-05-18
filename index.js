//Entradas:1
//let valor1 = 5
//let valor2 = 10
let numbers = [];
//Captura os argumentos passados na linha de comando a partir da posição (2) do array.
const myArgs = process.argv.slice(2, 5);
for (let index = 0; index < myArgs.length; index++) {
    const number = myArgs[index];
    numbers.push(number);

}

//Função de  soma da calculadora.
function soma(valor1, valor2) {
    return parseFloat(valor1) + parseFloat(valor2);

}
//Função de subtração da calculadora.
function subtrair(valor1, valor2) {
    //if (valor1 > valor2) {
    //return valor1 - valor2
    // }
    return parseFloat(valor1) - parseFloat(valor2);
}
//Função da multiplicação da calculadora.
function multiplicacao(valor1, valor2) {
    return parseFloat(valor1) * parseFloat(valor2);
}
//Função da divisão da calculadora.
function divisao(valor1, valor2) {
    return parseFloat(valor1) / parseFloat(valor2);


}
//Saidas: 4.
(function () {

    if (numbers[2] === "+") {
        let resultadoSoma = soma(numbers[0], numbers[1]);
        console.log("O resultado da soma é: " + resultadoSoma);
    }
    else if (numbers[2] === "-") {
        let resultadoSubtracao = subtrair(numbers[1], numbers[0]);
        console.log("O resultado da subtração é: " + resultadoSubtracao);
    }
    else if (numbers[2] === "*") {
        let resultadomultiplicar = multiplicacao(numbers[0], numbers[1]);
        console.log("O resultado da multiplicação é: " + resultadomultiplicar);

    }
    else if (numbers[2] === "/") {
        let resultadodivisao = divisao(numbers[0], numbers[1]);
        console.log("O resultado da divisão é : " + resultadodivisao);

    }



})();




