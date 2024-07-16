let minhaLista = [0,2,4,3,4,5,3]
minhaLista.push(1)
minhaLista.sort()
minhaLista.pop()
console.log(`O primeiro item da lista ${minhaLista} é ${minhaLista[0]}, ela tem ${minhaLista.length} números`)
console.log(`O valor está no posição ${minhaLista.indexOf(4)}`)
for(let pos=0; pos<minhaLista.length; pos++){
    console.log(`A posição ${pos} da minha lista tem o valor ${minhaLista[pos]}`)
}
console.log('Agora com o for in:')
for(let pos in minhaLista){
    console.log(`A posição ${pos} da minha lista tem o valor ${minhaLista[pos]}`)
}
console.log(9 in minhaLista)
let a = 'oi'
