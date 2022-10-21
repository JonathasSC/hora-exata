function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const atualizando = async() => {  
    while (true) {
        const day = new Date()
        const now = day.getDate()
        const dayweek = day.getDay()
        const month = day.getMonth()
        const year = day.getFullYear()
        const hora_atual = day.getHours()

        const hour = new Date().toLocaleTimeString()
        var titulo = window.document.getElementById('title')
        var hora = window.document.getElementById('hora')
        var data = window.document.getElementById('data')

        hora.innerHTML = hour
        titulo.innerHTML = hour + ' - Hora exata'

        switch (dayweek) {
            case 0 :
                data.innerHTML = `<strong>Domigo, ${now}/${month + 1}/${year}</strong>`
        await sleep(1000)
            break
            case 1 :
                data.innerHTML = `<strong>Segunda-feira, ${now}/${month + 1}/${year}</strong>`
        await sleep(1000)
            break
            case 2 :
                data.innerHTML = `<strong>Terça-feira, ${now}/${month + 1}/${year}</strong>`
        await sleep(1000)
            break
            case 3 :
                data.innerHTML = `<strong>Quarta-feira, ${now}/${month + 1}/${year}</strong>`
        await sleep(1000)
            break
            case 4 :
                data.innerHTML = `<strong>Quinta-feira, ${now}/${month + 1}/${year}</strong>`
        await sleep(1000)
            break
            case 5 :
                data.innerHTML = `<strong>Sexta-feira, ${now}/${month + 1}/${year}</strong>`
        await sleep(1000)
            break
            case 6 :
                data.innerHTML = `<strong>Sabádo, ${now}/${month + 1}/${year}</strong>`
        await sleep(1000)
            break

        }
        

        if (hora_atual > 17 ) {
            var msg = window.document.getElementById('msg')
            msg.innerHTML = '"Tenha uma boa noite!"'
        }
        if (hora_atual < 17 && hora_atual >= 12) {
            var msg = window.document.getElementById('msg')
            msg.innerHTML = '"Tenha uma boa tarde!"'
        }

        if (hora_atual < 12 ) {
            msg.innerHTML = '"Tenha uma bom dia!"'
        }

    }

}
atualizando()