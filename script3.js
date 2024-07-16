function clicar(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var contagem = document.getElementById("contagem")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('ERRO! Algo deu errado')
    } else {
        contagem.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p == 0){
            alert('Passo invalido!')
            p = 1
        }
        if (i < f){
        for(var c = i; c <= f; c += p){
            contagem.innerHTML += `${c} > `
        }}
        else {
            for(var c = i; c >= f; c -= p){
                contagem.innerHTML += `${c} > `
            } 
        } 
        contagem.innerHTML += 'Cabou!'
    }
}