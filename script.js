
// Ingreso de la imagen

const inputImagen = document.getElementById('url-imagen')
const imagenElegida = document.getElementById('imagen-meme')


const captarUrl = (e) => {
    return imagenElegida.setAttribute('src', e.target.value)
}

inputImagen.addEventListener('input', (evento) => captarUrl(evento))


// Ingreso del texto superior

const textAreaSuperior = document.getElementById('texto-superior')
const topTextMeme = document.getElementById('top-text')

const editarTexto = (e) =>{
    return topTextMeme.textContent = e.target.value;
}
textAreaSuperior.addEventListener('input', (evento) => editarTexto(evento))


// Ingreso texto inferior

const textAreaInferior = document.getElementById('texto-inferior')
const bottomTextMeme = document.getElementById('bottom-text')

const editarTexto2 = (e) =>{
    return bottomTextMeme.textContent = e.target.value;
}
textAreaInferior.addEventListener('input', (evento) => editarTexto2(evento))