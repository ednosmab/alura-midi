function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')


let count = 0

while (count < listaDeTeclas.length) {
    listaDeTeclas[count].onclick = tocaSomPom
    count++
    console.log(count)
}