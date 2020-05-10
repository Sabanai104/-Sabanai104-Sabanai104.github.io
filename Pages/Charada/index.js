function clicar() {
    let resposta = document.querySelector(".resposta");
    let resultado = document.querySelector(".resultado");
     
    

    if(resposta.value.toUpperCase() === "MEMORIA" || resposta.value.toUpperCase() === "MEMÓRIA" ) {
        resultado.innerHTML = "ACERTOU PARABENS! Como prêmio você tem direito a 30 dias de WoW ou algum item de mesmo valor (incluindo RP), me mande foto disso para eu enviar o seu presente!";
        console.log(resposta.value);
    } else if(resposta.value === "") {
        window.alert("OU MANO, TUA RESPOSTA EH O NADA MESMO????");
        console.log("Nada escrito");
    } else {
        window,alert("ADIVINHA????? Tu errou");
        console.log("Resposta Errada!");
    }
}