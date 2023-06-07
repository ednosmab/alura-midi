function tocaSom(idAudioElement){
    document.querySelector(idAudioElement).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')


let count = 0

while (count < listaDeTeclas.length) {
    const tecla = listaDeTeclas[count]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    tecla.onclick = () => {
        tocaSom(idAudio)
    }
    count++
}