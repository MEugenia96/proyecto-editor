

const inputImagen = document.getElementById('url-imagen')
const imagenElegida = document.getElementById('imagen-meme')


const captarUrl = (e) => {
    return imagenElegida.setAttribute('src', e.target.value)
}

inputImagen.addEventListener('input', (evento) => captarUrl(evento))

