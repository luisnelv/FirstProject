console.log('Aplicacion calculadora');

function percent(){
const forma = document.getElementById('forma');
let operandoA = forma ['operatorA'];
let operandoB = forma ['operatorB'];
let result = parseInt(operandoA.value) * parseInt(operandoB.value) / 100;
document.getElementById('result').innerHTML = `Result: ${result}`; 


}