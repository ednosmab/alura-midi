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

    tecla.onkeydown = (event) => {
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa')
    }
}
