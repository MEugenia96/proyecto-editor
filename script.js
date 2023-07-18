
// Ingreso de la imagen
const inputImagen = document.getElementById('url-imagen')
const imagenElegida = document.getElementById('imagen-meme')

const captarUrl = (e) =>{
    imagenElegida.style.backgroundImage = `url(${e.target.value})`
    imagenElegida.style.backgroundSize = 'cover'
    imagenElegida.style.backgroundRepeat = 'no-repeat'
    imagenElegida.style.backgroundPosition = 'center'
}
inputImagen.addEventListener('input', (evento) => captarUrl(evento))

// Input color fondo imagen 
const inputColorImagen = document.getElementById('color-fondo')
const valorColor = document.getElementById('valor-color')
const insertarValorColor = () =>{
    valorColor.innerHTML = `${inputColorImagen.value}`
}

inputColorImagen.addEventListener('input', () => insertarValorColor())
inputColorImagen.addEventListener('input', () => colorFondoImagen())
const colorFondoImagen = () =>{
    imagenElegida.style.backgroundColor = `${inputColorImagen.value}`
}

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
        // imagenMeme.classList.remove('contenedor-img')
        // imagenMeme.classList.add('sin-texto')
    }
}

// Cambiar color de texto (topTextMeme-bottomTextMeme)
const inputColorTexto = document.getElementById('color-texto')

inputColorTexto.addEventListener('input', (evento) => captarColorTexto (evento))
const captarColorTexto = (e) =>{
    topTextMeme.style.color = (e.target.value)
    bottomTextMeme.style.color = (e.target.value)
}

const valorColor1 = document.getElementById('valor-color1')

inputColorTexto.addEventListener('input', () => valorColorTexto())
const valorColorTexto = () =>{
    valorColor1.innerHTML = `${inputColorTexto.value}`
}

// Cambiar estilo de fuente 
const selectorFuente = document.getElementById('tipo-fuente')

selectorFuente.addEventListener('change', () => cambioFuente())
const cambioFuente = () =>{
    textoSuperior.style.fontFamily = `${selectorFuente.value}`
    textoInferior.style.fontFamily = `${selectorFuente.value}`
}

// Aplicar contorno al texto
const btnContornoClaro = document.getElementById('contorno2')
const btnContornoOscuro = document.getElementById('contorno3')

btnContornoOscuro.addEventListener('click', () => contornoOscuro())
btnContornoClaro.addEventListener('click', () => contornoClaro())
const contornoOscuro = () =>{
    contenedorMeme.classList.toggle('contorno-oscuro')
    btnContornoOscuro.classList.toggle('active')
}
const contornoClaro = () =>{
    contenedorMeme.classList.toggle('contorno-claro')
    btnContornoClaro.classList.toggle('active')
}

// Color campo texto
const inputColorCampo = document.getElementById('color-campo-texto')
const valorColor3 = document.getElementById('valor-color2')

inputColorCampo.addEventListener('input', () => valorColorCampo())
const valorColorCampo = () =>{
    valorColor3.innerHTML = `${inputColorCampo.value}`
}

inputColorCampo.addEventListener('input', () => captarColorCampo())
const captarColorCampo = () =>{
    topTextMeme.style.backgroundColor = `${inputColorCampo.value}`
    bottomTextMeme.style.backgroundColor = `${inputColorCampo.value}`
}

// Checked transparente 
const checkTransparente = document.getElementById('check-transparente')

checkTransparente.addEventListener('change', () => campoTransparente())
const campoTransparente = () =>{
    if(checkTransparente.checked == true){
        topTextMeme.classList.remove('campo-texto')
        topTextMeme.classList.add('transparente-top')
        bottomTextMeme.classList.remove('campo-texto')
        bottomTextMeme.classList.add('transparente-bottom')
    }
    else if(checkTransparente.checked == false){
        topTextMeme.classList.remove('transparente-top')
        topTextMeme.classList.add('campo-texto')
        bottomTextMeme.classList.remove('transparente-bottom')
        bottomTextMeme.classList.add('campo-texto')
    }
}

// Cambio de modo
const cambioHeader = document.getElementById('contenedor-header')
const inputModo = document.getElementById('modo')
const cambioMain = document.getElementById('contenedor-main')
const formImagen = document.getElementById('editor-imagen')
const selectFondo = document.getElementById('select-fondo')
const etiquetasColor = document.getElementById('etiquetas-color')
const etiquetasColor1 = document.getElementById('etiquetas-color1')
const etiquetasColor2 = document.getElementById('etiquetas-color2')
const tamanioFuente = document.getElementById('tamaño-fuente')
const botonLeft = document.getElementById('boton-left')
const botonCenter = document.getElementById('boton-center')
const botonRight = document.getElementById('boton-right')
const botonContorno1 = document.getElementById('contorno1')
const botonContorno2 = document.getElementById('contorno2')
const botonContorno3 = document.getElementById('contorno3')
const inputEspaciado = document.getElementById('input-espaciado')
const selectInterlineado = document.getElementById('select-interlineado')
const botonReset = document.getElementById('boton-reset')


inputModo.addEventListener('click', (evento) => cambioModo (evento))
inputModo.addEventListener('click', (evento) => textModo (evento))
const cambioModo = (e) =>{
    cambioHeader.classList.toggle('disenio-header');
    cambioHeader.classList.toggle('header-claro');
    cambioMain.classList.toggle('disenio-main');
    cambioMain.classList.toggle('main-claro');
    asideImagen.classList.toggle('disenio-aside');
    asideImagen.classList.toggle('aside-claro');
    asideTexto.classList.toggle('disenio-aside');
    asideTexto.classList.toggle('aside-claro');
    inputImagen.classList.toggle('diseño-form');
    inputImagen.classList.toggle('input-claro');
    textAreaInferior.classList.toggle('diseño-form');
    textAreaInferior.classList.toggle('input-claro');
    textAreaSuperior.classList.toggle('diseño-form');
    textAreaSuperior.classList.toggle('input-claro');
    selectFondo.classList.toggle('diseño-form');
    selectFondo.classList.toggle('input-claro');
    selectorFuente.classList.toggle('diseño-form');
    selectorFuente.classList.toggle('input-claro');
    etiquetasColor.classList.toggle('cuadro-color');
    etiquetasColor.classList.toggle('input-claro');
    etiquetasColor1.classList.toggle('cuadro-color');
    etiquetasColor1.classList.toggle('input-claro');
    etiquetasColor2.classList.toggle('cuadro-color');
    etiquetasColor2.classList.toggle('input-claro');
    tamanioFuente.classList.toggle('input-fuente');
    tamanioFuente.classList.toggle('input-claro');
    botonLeft.classList.toggle('color-alineado');
    botonLeft.classList.toggle('input-claro');
    botonCenter.classList.toggle('color-alineado');
    botonCenter.classList.toggle('input-claro');
    botonRight.classList.toggle('color-alineado');
    botonRight.classList.toggle('input-claro');
    botonContorno2.classList.toggle('color-alineado');
    botonContorno3.classList.toggle('color-alineado');
    botonContorno2.classList.toggle('input-claro');
    botonContorno3.classList.toggle('input-claro');
    inputEspaciado.classList.toggle('diseño-form');
    inputEspaciado.classList.toggle('input-claro');
    selectInterlineado.classList.toggle('diseño-form');
    selectInterlineado.classList.toggle('input-claro');
    botonReset.classList.toggle('diseño-form');
    botonReset.classList.toggle('boton-claro');
}

const textoModo = document.getElementById('texto-modo')
const textModo = () =>{
    if (cambioHeader.classList.contains('disenio-header')){
        textoModo.innerText = "Modo claro"
        }else if (cambioHeader.classList.contains('header-claro')){
        textoModo.innerText = "Modo oscuro"
        }
    }

// Background Blend Mode 
selectFondo.addEventListener('change', () => mezclaColor())
const mezclaColor = () =>{
    imagenElegida.style.backgroundBlendMode = `${selectFondo.value}`
}

// Descargar meme
const contenedorMeme = document.getElementById('contenedor-memes')
const botonDescarga = document.getElementById('descarga')

botonDescarga.addEventListener('click', () => descargarMeme())
const descargarMeme = () =>{
    domtoimage.toBlob(contenedorMeme).then(function (blob) {
        window.saveAs(blob, "meme.png");
    })
};

// Filtros imagen
const brillo = document.getElementById('img-brillo')
const opacidad = document.getElementById('img-opacidad')
const contraste = document.getElementById('img-contraste')
const desenfoque = document.getElementById('img-desenfoque')
const grises = document.getElementById('img-grises')
const sepia = document.getElementById('img-sepia')
const hue = document.getElementById('img-hue')
const saturado = document.getElementById('img-saturado')
const negativo = document.getElementById('img-negativo')


const filtros = () =>{
    imagenElegida.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${grises.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
}
brillo.addEventListener('input', () => filtros())
opacidad.addEventListener('input', () => filtros())
contraste.addEventListener('input', () => filtros())
desenfoque.addEventListener('input', () => filtros())
grises.addEventListener('input', () => filtros())
sepia.addEventListener('input', () => filtros())
hue.addEventListener('input', () => filtros())
saturado.addEventListener('input', () => filtros())
negativo.addEventListener('input', () => filtros())

// Reestablecer filtros
botonReset.addEventListener('click', () => resetFiltros())
const resetFiltros = () =>{
    imagenElegida.style.filter = `none`;
    imagenElegida.style.backgroundBlendMode = `normal`;
}

// Alineado del texto
botonLeft.addEventListener('click', () => alineacionIzq())
botonCenter.addEventListener('click', () => alineacionCenter())
botonRight.addEventListener('click', () => alineacionDer())

const alineacionIzq = () =>{
    topTextMeme.style.textAlign = 'start'
    bottomTextMeme.style.textAlign = 'start'
}

const alineacionCenter = () =>{
    topTextMeme.style.textAlign = 'center'
    bottomTextMeme.style.textAlign = 'center'
}

const alineacionDer = () =>{
    topTextMeme.style.textAlign = 'end'
    bottomTextMeme.style.textAlign = 'end'
}


// Tamaño fuente
tamanioFuente.addEventListener('input', () => cambioTamanio())

const cambioTamanio = () =>{
    const tamanio = tamanioFuente.value;
    topTextMeme.style.fontSize = tamanio + `px`;
    bottomTextMeme.style.fontSize = tamanio + `px`;
}

// Espaciado e interlineado const inputEspaciado = document.getElementById('input-espaciado')
inputEspaciado.addEventListener('input', () => espaciadoTexto())
const espaciadoTexto = () =>{
    const espacio = inputEspaciado.value;
    topTextMeme.style.paddingBottom = espacio + `%`;
    topTextMeme.style.paddingTop = espacio + `%`;
    bottomTextMeme.style.paddingBottom = espacio + `%`;
    bottomTextMeme.style.paddingTop = espacio + `%`;
}

selectInterlineado.addEventListener('change', () => interlineadoTexto())
const interlineadoTexto = () =>{
    contenedorMeme.style.lineHeight = `${selectInterlineado.value}`
}




