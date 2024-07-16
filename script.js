function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var titulo = window.document.getElementById("titulo")
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas`
    if (horas >= 0 && horas < 12){
        img.src = "manha.png"
        document.body.style.backgroundColor = "#bab188"
        titulo.innerHTML = "Bom dia!"
    } else if (horas >= 12 && horas < 18){
        img.src = "tarde.png"
        document.body.style.backgroundColor = "#e8c13d"
        titulo.innerHTML = "Boa tarde!"
    } else{
        img.src = "noite.png"
        document.body.style.backgroundColor = "#b33f1b"
        titulo.innerHTML = "Boa noite!"
    }
}

