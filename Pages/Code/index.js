function clicar() {
    let resposta = document.querySelector(".resposta");
    let resultado = document.querySelector(".resultado");

    if(resposta.value === "42") {
        resultado.innerHTML = "ACERTOU PARABENS! Como prêmio você tem direito ao jogo Risk of Rain 2 ou algum item de mesmo valor, me mande foto disso para eu enviar o seu presente!";
        console.log(resposta.value);
    } else if(resposta.value === "") {
        window.alert("TA TROLANDO MANO, TU TEM QUE ESCREVER ALGUMA COISA");
        console.log("Nada escrito");
    } else {
        window,alert("ERROUUUUUUUUUUU!");
        console.log("Resposta Errada!");
    }
}