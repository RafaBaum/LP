function leiaMais(){
    var maisTexto = document.getElementById("mais");
    var botao = document.getElementById("botao");
    var pontos = document.getElementById("pontos");


    if(maisTexto.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        botao.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        botao.innerHTML="Leia menos";
    };
    console.log(funcina)
}
