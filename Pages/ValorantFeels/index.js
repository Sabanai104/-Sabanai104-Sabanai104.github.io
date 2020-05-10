let numero = 0;
function clicar() {
    let resultado = document.querySelector(".resultado");
    let goBack = document.querySelector(".goBack");
    let random;
    if(numero!=100) {
        random = Math.floor(Math.random() * 200 + 1);
        console.log(numero);
        numero = random;
        console.log(numero, random);
        resultado.innerHTML += "AINDA NÃO...";
    } else {
        console.log(numero);
        resultado.innerHTML = "VOCE TÁ DENTRO!";
        resultado.innerHTML += " PARABENS GANHOU UM HAMBURGÃO, tire foto e mande para mim para ganhar o seu presente!"
    }
}
