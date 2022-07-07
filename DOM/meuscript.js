// https://docente.ifrn.edu.br/albalopes/disciplinas/autoria-web/Aula05DocumentObjectModel.pdf

function recuperarPs(){
    var paragrafos = document.getElementsByTagName("p");
    var i;
    for (i=0; i<paragrafos.length; i++){
        alert(paragrafos[i].innerHTML);
    }
}

function definirCores(){
    var paragrafos = document.getElementsByTagName("p");
    var cores = ["blue", "red", "green", "yellow"];
    var i;
    for (i=0; i<paragrafos.length; i++){
    paragrafos[i].style.backgroundColor = cores[i];
    }
}

function aparecer(){
    var paragrafos = document.getElementsByClassName("oculto");
    var i;
    for (i=0; i<paragrafos.length; i++){
    paragrafos[i].style.display = "block";
    }
}
    
function desaparecer(){
    var paragrafos = document.getElementsByClassName("oculto");
    var i;
    for (i=0; i<paragrafos.length; i++){
    paragrafos[i].style.display = "none";
    }
}

function botao(){
    
    var bt = document.querySelector("[type=button]");

        bt.style.color = "red";
    
   
      
 }
 function novoItem(){
    var campos = document.getElementsByTagName("input");
    var i;
    var novaLinha = document.createElement("tr");
    for (i=0; i<campos.length; i++){
         var novaColuna = document.createElement("td");
         novaColuna.innerHTML = campos[i].value;
         novaLinha.appendChild(novaColuna);
         console.log(novaLinha)
    }
    var tabela = document.getElementById("tabela");
    tabela.appendChild(novaLinha);
 }
