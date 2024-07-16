let lista = []
let num = document.getElementById('num')
let tab = document.getElementById('tab')
let res = document.getElementById('resul')
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, lista)){
        lista.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor adicionado foi ${Number(num.value)}`
        tab.append(item)
        res.innerHTML = ''
    } else{
        alert('Tente novamente')
    }
    num.value = ''
    num.focus()
}
function analisar(){
    if (lista.length == 0){
        alert("Não há nada para verificar")
    } else{
        let tot = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let media = 0
        let soma = 0
        for(let pos in lista){
            soma += lista[pos]
            if (lista[pos]> maior){
                maior = lista[pos]              
        } if (lista[pos] < menor) {
            menor = lista[pos]
        } 
    } media = soma / tot
    // Limpar o conteúdo existente antes de adicionar novos resultados
    res.innerHTML = ''

    // Adicionar os novos resultados ao innerHTML
    res.innerHTML += `<p>Ao todo, temos ${tot} valores</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>`
}
}
