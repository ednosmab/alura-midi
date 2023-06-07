function tocaSom(idAudioElement){
    document.querySelector(idAudioElement).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')


for (let count = 0; count < listaDeTeclas.length; count++) {
    const tecla = listaDeTeclas[count]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = () => {
        tocaSom(idAudio)
    }
    
}
