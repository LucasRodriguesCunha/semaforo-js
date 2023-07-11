const img = document.querySelector("img");
const botoes = document.getElementById("botoes");
let indexCor = 0;
let intervalo_ID = null;

const semaforo = (cor) => {
    paradaAutomatica();
    ativado[cor]();
}

const proximoIndex = () => {

    // Ternário:
    // indexCor = indexCor < 2 ? ++indexCor : 0;

    if (indexCor < 2) {
        indexCor++;
    } else {
        indexCor = 0;
    }
}

const trocarCor = () => {
    const cores = ["vermelho", "amarelo", "verde"];
    const cor = cores[indexCor];
    ativado[cor]();
    proximoIndex();
}

const ativado = {
    "vermelho":   () => img.src = "imagens/vermelho.png",
    "amarelo":    () => img.src = "imagens/amarelo.png",
    "verde":      () => img.src = "imagens/verde.png",
    "automatico": () => intervalo_ID = setInterval(trocarCor, 1000)
}

const paradaAutomatica = () => {
    clearInterval(intervalo_ID);
}

document.getElementById("vermelho").addEventListener("click", () => semaforo("vermelho"));
document.getElementById("amarelo").addEventListener("click", () => semaforo("amarelo"));
document.getElementById("verde").addEventListener("click", () => semaforo("verde"));
document.getElementById("automatico").addEventListener("click", () => semaforo("automatico"));


