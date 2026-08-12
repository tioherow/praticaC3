let listaNumerosSorteados = [];
let numeroLimite = 50;

 let numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1;

function exibirTextoNaTela(tag,texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
   
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1' , 'Jogo do Número secreto');
    exibirTextoNaTela('p'  , `Escolha um número entre 1 e ${numeroLimite}`);

}
    exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabens voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('h1','Acertou');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
       if(chute > numeroSecreto ){
        exibirTextoNaTela('h1','Menor');
        exibirTextoNaTela('p', `O número secreto é menor que ${chute} `);
       } else {
         exibirTextoNaTela('h1', 'Maior');
         exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);
       }
       tentativas++;
       limparCampo();
     }
    
}

function gerarNumeroAleatorio(){
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElemetosNaLista = listaNumerosSorteados.length;
   if (quantidadeDeElemetosNaLista == numeroLimite){
    listaNumerosSorteados = [];
   }
   if (listaNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''; 

}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo(); 
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}





/*
function calculoIMC(altura,peso){
         let calculo = peso / (altura * altura);
        return calculo;
}

console.log(calculoIMC(1.70,70));


function fatorial1(n){
    if ( n === 0 || n === 1 ){
        return 1;
    } 
    return n * fatorial1(n - 1);
}

console.log(fatorial1(5))


function converterEmDollar(dollar){
    return dollar * 4.80;

}

console.log(converterEmDollar(5));


function calcularSala(largura, altura) {
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);

    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}


calcularSala(5, 3);



function calcularSalaCircular(raio) {
    const pi = 3.14;

    let area = pi * (raio * raio);
    let perimetro = 2 * pi * raio;

    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}


calcularSalaCircular(3);






function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Exemplo
tabuada(5);
*/