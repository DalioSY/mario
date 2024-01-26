const form = document.querySelector('.formulario')
const mascara = document.querySelector('.mascara-formulario')

function cliqueiNoBotao() {
    form.style.left = "50%"
    mascara.style.visibility = "visible"
}

function cliqueMascara() {
    form.style.left = "-260px"
    mascara.style.visibility = "hidden"
}