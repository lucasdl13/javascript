console.log('Usando while para fazer repetições!')
var c = 1
while (c <= 6){
    console.log(`Dia ${c}`)
    c++
}
c = 1
console.log('Usando do e while juntos!')
do {
    console.log(`Dia ${c}`)
    c++
} while (c <= 6)
console.log('Na parte do, ela faz primeiro o que é desejado, e depois com o while, verifica se a declaração é verdadeira para continuar fazendo')
console.log('Parecido com o while, o do apenas faz a verificação da declaração do loop primeiro.')
c = 1
console.log('Repetições com For!')
for (var c=1; c<= 6; c++){
    console.log(`Dia ${c}`)
}
console.log('De forma mais compacta, na estrutura for colocamos primeiro a variável, depois a verificação que retorna True ou False e depois o incremento da varíavel a cada repetição')