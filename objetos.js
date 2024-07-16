let amigo = {nome:'josé', 
    idade:12,
    envelheceu(p=0){
        console.log('Envelheceu')
        this.idade += p
    }}
amigo.envelheceu(2)
console.log(`José que tinha 12 anos envelheceu e agora tem ${amigo.idade}`)