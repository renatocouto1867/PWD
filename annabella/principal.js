onload = function () {
    this.document.getElementById("sectionBiografia").style.display = 'none';
    this.document.getElementById("sectionCampanhas").style.display = 'none';
    this.document.getElementById("sectionContatos").style.display = 'none';
}

function home() {
    this.document.getElementById("sectionHome").style.display = 'block';
    this.document.getElementById("sectionBiografia").style.display = 'none';
    this.document.getElementById("sectionCampanhas").style.display = 'none';
    this.document.getElementById("sectionContatos").style.display = 'none';
}

function contato() {
    this.document.getElementById("sectionBiografia").style.display = 'none';
    this.document.getElementById("sectionCampanhas").style.display = 'none';
    this.document.getElementById("sectionContatos").style.display = 'block';
    this.document.getElementById("sectionHome").style.display = 'none';
}

function biografia() {
    console.log("teste");
    this.document.getElementById("sectionBiografia").style.display = 'block';
    this.document.getElementById("sectionCampanhas").style.display = 'none';
    this.document.getElementById("sectionContatos").style.display = 'none';
    this.document.getElementById("sectionHome").style.display = 'none';
}

function campanhas() {
    this.document.getElementById("sectionBiografia").style.display = 'none';
    this.document.getElementById("sectionCampanhas").style.display = 'block';
    this.document.getElementById("sectionContatos").style.display = 'none';
    this.document.getElementById("sectionHome").style.display = 'none';


    let temDivButton= document.getElementById("divButton");

    if(temDivButton==undefined){

    let carrossel = document.getElementById("divFotos");
    let imagens = carrossel.getElementsByTagName("img");
    let indice = 0;

    let divButton = document.createElement("div");
        divButton.setAttribute("id","divButton");

    let botaoAnterior = document.createElement("button");
    botaoAnterior.innerHTML = "Anterior";
    botaoAnterior.onclick = function () {
        indice--;
        if (indice < 0) {
            indice = imagens.length - 1;
        }
        exibirImagemAtual();
    };

    let botaoProximo = document.createElement("button");
    botaoProximo.innerHTML = "Próximo";
    botaoProximo.onclick = function () {
        indice++;
        if (indice >= imagens.length) {
            indice = 0;
        }
        exibirImagemAtual();
    };

    divButton.appendChild(botaoAnterior);
    divButton.appendChild(botaoProximo);

    carrossel.appendChild(divButton);

    

    function exibirImagemAtual() {
        for (let i = 0; i < imagens.length; i++) {
            imagens[i].style.display = "none";
        }
        imagens[indice].style.display = "block";
    }

    exibirImagemAtual();
}

}

