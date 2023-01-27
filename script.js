

function carregar() {
    var msg = document.getElementById('msg')  //ID da DIV msg do html
    var img = document.getElementById('imagem')  //ID da DIV img do html
    var data = new Date()  //pega o dia para poder escolher mais elementos
    var hora = data.getHours()  //pega a hora atual 
    //hora=19-teste
    msg.innerHTML = `Agora são ${hora} horas.` //mostra as horas na tela

    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'manha.png'    // cor de fundo #fdae72
        document.body.style.background = '#fdae72'  //entra a cor de fundo
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde      
        img.src = 'tarde.png'    //cor de fundo #c1703b
        document.body.style.background = '#592a1e'  //entra a cor de fundo
    } else {
        //Boa Noite
        img.src = 'noite.png'  // cor de fundo #3a4552
        document.body.style.background = '#3a4552' // entra a cor de fundo
    }



}    
