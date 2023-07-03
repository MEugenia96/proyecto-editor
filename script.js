
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

//Ocultar y mostrar editores

const asideImagen = document.getElementById('aside-imagen')
const asideTexto = document.getElementById('aside-texto')
const botonImg = document.getElementById('boton-img')
const botonText = document.getElementById('boton-text')

const edicionTexto = (e) =>{
    asideImagen.classList.add('hidden')
    asideTexto.classList.remove('hidden')
}

botonText.addEventListener('click', (evento) => edicionTexto(evento))

const edicionImagen = (e) =>{
    asideTexto.classList.add('hidden')
    asideImagen.classList.remove('hidden')
}

botonImg.addEventListener('click', (evento) => edicionImagen(evento))

//Quitar texto superior

const textoSuperior = document.getElementById('top-text')
const inputSinTextoSup = document.getElementById('check-superior')
const imagenMeme = document.getElementById('imagen-meme') 
const contenedorImg = document.getElementsByClassName('contenedor-img')
console.log(contenedorImg)

const eliminarTextSup = (e) =>{
    textoSuperior.classList.add('hidden')
    imagenMeme.classList.add('sin-texto-sup2')
    imagenMeme.classList.remove('imagen-edit')
    contenedorImg[0].classList.remove('contenedor-img')
}

inputSinTextoSup.addEventListener('click', (evento) => eliminarTextSup(evento))

//Quitar texto inferior

const textoInferior = document.getElementById('bottom-text')
const inputSinTextoInf = document.getElementById('check-inferior')

const eliminarTextInf = (e) =>{
    textoInferior.classList.add('hidden')
    imagenMeme.classList.add('sin-texto-sup2')
    imagenMeme.classList.remove('imagen-edit')
    contenedorImg[0].classList.remove('contenedor-img')
}

inputSinTextoInf.addEventListener('click', (evento) => eliminarTextInf(evento))