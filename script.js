
// Ingreso de la imagen

const inputImagen = document.getElementById('url-imagen')
const imagenElegida = document.getElementById('imagen-meme')

const captarUrl = (e) =>{
    imagenElegida.style.backgroundImage = `url(${e.target.value})`
    imagenElegida.style.backgroundSize = 'cover'
    imagenElegida.style.backgroundRepeat = 'no-repeat'
    imagenElegida.style.backgroundPosition = 'center'
    // imagenElegida.style.backgroundPositionY ='50%'
}
// const captarUrl = (e) => {
//     return imagenElegida.setAttribute('src', e.target.value)
// }

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


const eliminarTextSup = (e) =>{
    if(inputSinTextoSup.checked == true){
        textoSuperior.classList.add('hidden')
        // imagenMeme.classList.add('sin-texto')
    }else if(inputSinTextoSup.checked == false){
        textoSuperior.classList.remove('hidden')
        // imagenMeme.classList.remove('sin-texto')
    }
}

inputSinTextoSup.addEventListener('change', (evento) => eliminarTextSup(evento))

//Quitar texto inferior

const textoInferior = document.getElementById('bottom-text')
const inputSinTextoInf = document.getElementById('check-inferior')


const eliminarTextInf = (e) =>{
    if(inputSinTextoInf.checked == true){
        textoInferior.classList.add('hidden')
    }else if(inputSinTextoInf.checked == false){
        textoInferior.classList.remove('hidden')
    }
}

inputSinTextoInf.addEventListener('change', (evento) => eliminarTextInf(evento))

// Eliminar ambos textos

inputSinTextoSup.addEventListener('change', (evento) => eliminarAmbosTextos(evento))
inputSinTextoInf.addEventListener('change', (evento) => eliminarAmbosTextos(evento))

const eliminarAmbosTextos = (e) =>{
    if(inputSinTextoSup.checked == true && inputSinTextoInf.checked == true){
        textoSuperior.classList.add('hidden')
        textoInferior.classList.add('hidden')
        imagenMeme.classList.remove('contenedor-img')
        imagenMeme.classList.add('sin-texto')
    }
}

// Cambiar color de texto (topTextMeme-bottomTextMeme)

const inputColorTexto = document.getElementById('color-texto')

inputColorTexto.addEventListener('input', (evento) => captarColorTexto (evento))

const captarColorTexto = (e) =>{
    topTextMeme.style.color = (e.target.value)
    bottomTextMeme.style.color = (e.target.value)
}

// Cambiar estilo de fuente 


const selectorFuente = document.getElementById('tipo-fuente')

selectorFuente.addEventListener('change', () => cambioFuente())

const cambioFuente = () =>{
    textoSuperior.style.fontFamily = `${selectorFuente.value}`
    textoInferior.style.fontFamily = `${selectorFuente.value}`
}

// Cambio de modo

const cambioHeader = document.getElementById('contenedor-header')
const inputModo = document.getElementById('modo')
const cambioMain = document.getElementById('contenedor-main')
// const asideImagen = document.getElementById('aside-imagen')
// const asideTexto = document.getElementById('aside-texto')
const formImagen = document.getElementById('editor-imagen')
console.log(formImagen)

inputModo.addEventListener('click', (evento) => cambioModo (evento))

const cambioModo = (e) =>{
    cambioHeader.classList.toggle('disenio-header')
    cambioHeader.classList.toggle('header-claro')
    cambioMain.classList.toggle('disenio-main')
    cambioMain.classList.toggle('main-claro')
    asideImagen.classList.toggle('disenio-aside')
    asideImagen.classList.toggle('aside-claro')
    asideTexto.classList.toggle('disenio-aside')
    asideTexto.classList.toggle('aside-claro')
}

