const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById ("mascota-jugador")
const spanMascotaEnemigo = document.getElementById ("mascota-enemigo")


const spanVidasJugador = document.getElementById("vida-jugador")
const spanVidasEnemigo = document.getElementById("vida-enemigo")

const sectionMensajes = document.getElementById ("resultado")
const ataquesDelJugador = document.getElementById ("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById ("ataques-del-enemigo")
const contenedorTarjetas =document.getElementById ('contenedorTarjetas')
const contenedorAtaques = document.getElementById ("contenedorAtaques")

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa =document.getElementById('mapa')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let inputLangostelvis
let inputPydos
let inputTucapalma 
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo 
let botonFuego
let botonAgua
let botonTierra 
let indexAtaqueJugador
let indexAtaqueEnemigo 
let botones = []
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext ('2d') /*permite usar el lienso para dibujar dentro de canvas*/
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'

class Mokepon {
    constructor(nombre, foto, vida,fotoMapa, x = 10, y=10 ) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.tipo
        this.x = x
        this.y = y
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon ('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5,'./assets/hipodoge.png')

let capipepo = new Mokepon ('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5,'./assets/capipepo.png')

let ratigueya = new Mokepon ('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png',5,'./assets/ratigueya.png')

let langostelvis = new Mokepon ('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/mokepons_mokepon_langostelvis_attack.png')

let pydos = new Mokepon ('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5,'./assets/mokepons_mokepon_pydos_attack.png')

let tucapalma = new Mokepon ('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5,'./assets/mokepons_mokepon_tucapalma_attack.png')

let hipodogeEnemigo = new Mokepon ('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5,'./assets/hipodoge.png', 180, 20)

let capipepoEnemigo = new Mokepon ('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5,'./assets/capipepo.png',250,95)

let ratigueyaEnemigo = new Mokepon ('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png',5,'./assets/ratigueya.png', 600, 490)

let langostelvisEnemigo = new Mokepon ('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/mokepons_mokepon_langostelvis_attack.png',400 , 340)

let pydosEnemigo = new Mokepon ('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5,'./assets/mokepons_mokepon_pydos_attack.png', 710,320 )

let tucapalmaEnemigo = new Mokepon ('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5,'./assets/mokepons_mokepon_tucapalma_attack.png', 188,200)

hipodoge.ataques.push(
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🌱',id: 'boton-tierra'},
)
hipodogeEnemigo.ataques.push(
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🌱',id: 'boton-tierra'},
)


capipepo.ataques.push(
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '🔥',id: 'boton-fuego'},
)
capipepoEnemigo.ataques.push(
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '🔥',id: 'boton-fuego'},
)
ratigueya.ataques.push(
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '💧',id: 'boton-agua'},
)
ratigueyaEnemigo.ataques.push(
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '💧',id: 'boton-agua'},
)
langostelvis.ataques.push(
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
)
langostelvisEnemigo.ataques.push(
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
)
pydos.ataques.push(
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
)
pydosEnemigo.ataques.push(
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '💧',id: 'boton-agua'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
)
tucapalma.ataques.push(
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
)
tucapalmaEnemigo.ataques.push(
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🔥',id: 'boton-fuego'},
    {nombre: '🌱',id: 'boton-tierra'},
    {nombre: '🌱',id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, pydos, tucapalma)


function iniciarJuego () {

    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById("Hipodoge")
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya")
    inputLangostelvis = document.getElementById("Langostelvis")
    inputPydos = document.getElementById('Pydos')
    inputTucapalma = document.getElementById('Tucapalma')
    })
    
    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    botonReiniciar.addEventListener("click",reiniciarJuego)
}

function seleccionarMascotaJugador(){

    // style.display = "block" prende lo que ocultamos con "none"
    sectionSeleccionarMascota.style.display = "none"
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id;
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else {alert("Selecciona una Mascota")
    location.reload()}
    

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex' 
    iniciarMapa ()
    
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre ) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques) 
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque)=> {
        ataquesMokepon =` 
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button> 
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra  = document.getElementById("boton-tierra")
    botones = document.querySelectorAll('.BAtaque')

    
}

function secuenciaAtaque () {
    botones.forEach((boton) =>{
        boton.addEventListener('click', (e) =>{
            if (e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
                boton.disabled = true
                /*boton.disabled = true desabilita el boton*/
            } else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })

}

function seleccionarMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    /*let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)
    ataqueEnemigo.push(ataquesMokeponEnemigo[ataqueAleatorio].nombre)
    ataquesMokeponEnemigo.splice(ataqueAleatorio,1)
//la funcion splice, va quitando de determinado n objetos de determinado array
    console.log(ataqueEnemigo)
    console.log(ataquesMokeponEnemigo)
    iniciarPelea()*/
    console.log('Ataques enemigo', ataquesMokeponEnemigo);
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if(ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
      if(ataqueJugador[index] === ataqueEnemigo[index]){
        indexAmbosOponentes(index, index)
        crearMensaje("EMPATE")

      } else if (ataqueJugador[index]==='🔥' && ataqueEnemigo[index] === '🌱'){
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE ')
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
      } else if (ataqueJugador[index]==='💧' && ataqueEnemigo[index] === '🔥'){
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
      } else if (ataqueJugador[index]==='🌱' && ataqueEnemigo[index] === '💧'){
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE')
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
      } else{ indexAmbosOponentes(index,index)
             crearMensaje("PERDISTE")
             victoriasEnemigo++
             spanVidasEnemigo.innerHTML = victoriasEnemigo
    }
}
    revisarVidas()
}

function revisarVidas(){
    if (victoriasJugador == victoriasEnemigo) {
       crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES, GANASTE!!✨✨")
    } else {
        crearMensajeFinal("Lo siento, perdiste")
    }
}

function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max)
    {return Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas(){
    /*console.log(mascotaJugadorObjeto)*/
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()

    if(mascotaJugadorObjeto.velocidadX !==0 || mascotaJugadorObjeto.velocidadY !==0) {
        revisarColision (hipodogeEnemigo)
        revisarColision (capipepoEnemigo)
        revisarColision (ratigueyaEnemigo)
        revisarColision (pydosEnemigo)
        revisarColision (langostelvisEnemigo)
        revisarColision (tucapalmaEnemigo)
    }


}

function moverDerecha () {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba () {
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo () {
    mascotaJugadorObjeto.velocidadY = 5
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown' :
            moverAbajo()
            break
        case 'ArrowLeft' :
            moverIzquierda()
            break
        case 'ArrowRight' :
            moverDerecha()
            break
        default:
            break;
    }
}
function iniciarMapa() {
    mapa.width = 800
    mapa.height = 600
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    console.log (mascotaJugadorObjeto, mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown',sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre ) {
            return mokepones[i]
        }
}
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        mascotaJugadorObjeto.y
    const abajoMascota = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = 
        mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('se detecto una colision')
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo (enemigo)

}


window.addEventListener("load",iniciarJuego)

