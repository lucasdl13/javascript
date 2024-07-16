function gerarTabuada() {
    var numero = document.getElementById("num")
    var tabuada = document.getElementById("seltab")
    if (numero.value.length == 0){
        alert('Por favor, digite algum número')
    } else {
        var n = Number(numero.value)
        var c = 1
        tabuada.innerHTML = ''
        for(n; c <= 10; c++){
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n * c}`
            tabuada.append(item)
        }
    }
}