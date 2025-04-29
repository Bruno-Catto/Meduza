let numero = parseInt(prompt("Digite um número para ver a tabuada:"));
let i = 1;

if (isNaN(numero)) {
  console.log("Número inválido. Por favor, recarregue e digite um número.");
} else {
  while (i <= 10) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    i++;
  }
}
