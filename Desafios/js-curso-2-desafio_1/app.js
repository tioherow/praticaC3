let titu = document.querySelector('h1');
 titu.innerHTML = 'Hora do Desafio.';


function verificarConsole() {
    console.log('O botão foi clicado');
}


function verficarAlert(){
    alert('Eu amo JS');
}


function verificarPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');

    alert(`Estive em ${cidade} e lembrei de você.`);
}


function verificarSoma() {
    let num1 = Number(prompt('Digite o primeiro numero para soma'));
    let num2 = Number(prompt('digite o segund onumero para soma'));
    let soma = num1 + num2;

    alert(`a soma de ${num1} + ${num2} é = ${soma} `);
}