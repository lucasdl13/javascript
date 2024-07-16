function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("ano")
    var resultado = window.document.getElementById("resul")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("Verifque os dados e tente novamente")
    }
    else {
        var idade = Number(ano) - Number(fano.value)
        var fsex = document.getElementsByName("sexo")
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var clas = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute("src", "crianca-m.png")
            }else if (idade < 21){
                img.setAttribute("src", "imagens/jovem-m.png")
            }else if (idade < 50){
                img.setAttribute("src", "imagens/adulto-m.png")
            }else {
                img.setAttribute("src", "imagens/idoso-m.png")
            }
        }else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute("src", "imagens/crianca-f.png")
            }else if (idade < 21){
                img.setAttribute("src", "imagens/jovem-f.png")
            }else if (idade < 50){
                img.setAttribute("src", "imagens/adulto-f.png")
            }else {
                img.setAttribute("src", "imagens/idoso-f.png")
            }
        }    
        }resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
