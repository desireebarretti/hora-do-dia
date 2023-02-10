let msg = document.getElementById('msg')
let data = new Date()
let meuHorario = data.getHours()
let img = document.getElementById('img')

function horaDoDia() {
    if (meuHorario <= 12 && meuHorario > 5){
        document.body.style.background = '#83BD75'
        img.src = './img/manha.jpg'
        msg.innerHTML = `Agora são ${meuHorario} horas. Bom dia!!!`
    } else if (meuHorario > 12 && meuHorario <= 18) {
        document.body.style.background = '#FFD495'
        img.src = './img/tarde.jpg'
        msg.innerHTML = `Agora são ${meuHorario} horas. Boa tarde!!!`
    } else {
        document.body.style.background = '#243763'
        img.src = './img/noite.jpg'
        msg.innerHTML = `Agora são ${meuHorario} horas. Boa noite!!!`
    }
}

horaDoDia()