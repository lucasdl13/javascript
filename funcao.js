function parimp(n) {
    if (n % 2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}
var num = parimp(3)
var num2 = parimp(4)
console.log(`3 é ${num}, 4 é ${num2}`)

function soma(n1=0, n2=0){
    return n1 + n2
}
var soma = soma(1,5)
console.log(`A soma de 1 e 5 é ${soma}`)

let v = function(num){
    return num*2
}
console.log(v(7))

function fatorial(fato){
    let con = 1
    for(let c = fato; c>1; c--){
        con *=c
    } return con
} console.log(fatorial(5))

function fatorial2(n){
    let fat = 1
    if (n == 1){
        return 1
    } else {
        return n * fatorial2(n-1)
    }
} let a = fatorial2(5)
console.log(a)