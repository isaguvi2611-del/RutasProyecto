function validarDatos(datos){
    for(let dato of datos){
        if(dato.value.trim() === ""){
            alert("No se han llenado todos los datos...");
            return false;
        }
    }
    return true;
}

const modal = document.getElementById("modal");
const contenido = document.getElementById("contenido");

function abrirModal(id){
    const plantilla = document.getElementById(id);
    contenido.innerHTML = plantilla.innerHTML;
    modal.style.display = "flex";
}

function cerrarModal(){
    modal.style.display = "none";
}

function guardarConductor(){
    const nombre = document.getElementById("nombreConductor");
    const telefono = document.getElementById("telefonoConductor");
    if(!validarDatos([nombre, telefono])){
        return;
    }
    let conductores = JSON.parse(localStorage.getItem("conductores")) || [];
    const nuevoConductor = {
        nombre: nombre.value,
        telefono: telefono.value
    };
    conductores.push(nuevoConductor);
    localStorage.setItem(
        "conductores",
        JSON.stringify(conductores)
    );
    alert("se han guardado los datos!");
    mostrarConductores();
}

function mostrarConductores(){
    const lista = document.getElementById("listaConductores");
    let conductores = JSON.parse(localStorage.getItem("conductores")) || [];
    lista.innerHTML = "";
    conductores.forEach((conductor, index) => {
        lista.innerHTML += `
        <div class="tarjeta">
        <div><h3 id="nam" >${conductor.nombre} <br> ${conductor.telefono} </h3></div>
            <div id= bttn>
            <button id="bttn" onclick="eliminarConductor(${index})">
                Eliminar
            </button></div>
        </div>
        <style>

        .tarjeta{
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: #cfe9bf;
        border-radius: 40px;
        }

        #bttn{
        background-color:
        width: 100%
        min-width: 50px;
        max-width: 200px;
        }

        h2{
        color: #660b2e;
        font-family:"Gasoek One"
        font-size: clamp(6px, 20vw, 55px);
        }
        `;
    });
}

function eliminarConductor(index){
    let conductores =
        JSON.parse(localStorage.getItem("conductores")) || [];
    conductores.splice(index, 1);
    localStorage.setItem(
        "conductores",
        JSON.stringify(conductores)
    );
    mostrarConductores();
}

function guardarEstudiante(){
    const nombre = document.getElementById("nombreEstudiante");
    const telefono = document.getElementById("telefonoEstudiante");
    const curso = document.getElementById("cursoEstudiante");
    if(!validarDatos([nombre, telefono, curso])){
        return;
    }
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    const nuevoEstudiante = {
        nombre: nombre.value,
        telefono: telefono.value,
        curso: curso.value
    };
    estudiantes.push(nuevoEstudiante);
    localStorage.setItem(
        "estudiantes",
        JSON.stringify(estudiantes)
    );
    alert("Se han guardado los datos!");
    const eventoEstudiante = new CustomEvent("estudianteCreado", {
    detail: {
        mensaje: "Estudiante creado correctamente"
    }
});
document.addEventListener("estudianteCreado", (e) => {
    console.log(e.detail.mensaje);
});
document.dispatchEvent(eventoEstudiante);
    mostrarEstudiantes();
}

function mostrarEstudiantes(){
    const lista = document.getElementById("listaEstudiantes");
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    lista.innerHTML = "";
    estudiantes.forEach((estudiante, index) => {
        lista.innerHTML += `
        
        <div class="tarjeta">
            <div id="nam" ><h3 >${estudiante.nombre} <br> ${estudiante.telefono} <br> ${estudiante.curso}</h3></div>
            <div><button id="bttn" onclick="eliminarEstudiante(${index})">Eliminar</button></div>
        </div>

    <style>
        .tarjeta{
        width: 100%;
        justify-content: center;
        display: flex;
        background-color: #e3f9fc;
        border-radius: 40px;
        align-items: center;
        text-align: center;
        }

        #bttn{
        background-color: #a2d9db;
        color: #25979b;
        border: none;
        min-width: 50px;
        max-width: 200px;
        }
        #nam{
        width 100px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }

        </style>
        `;
    });
}

function eliminarEstudiante(index){
    let estudiantes =
        JSON.parse(localStorage.getItem("estudiantes")) || [];
    estudiantes.splice(index, 1);
    localStorage.setItem(
        "estudiantes",
        JSON.stringify(estudiantes)
    );
    mostrarEstudiantes();
}

function guardarRuta(){
    const nombre = document.getElementById("nombreRutas");
    const telefono = document.getElementById("telefonoRutas");
    const kilometros = document.getElementById("kilometrosRutas");
    if(!validarDatos([nombre, telefono, kilometros])){
        return;
    }
    let rutas = JSON.parse(localStorage.getItem("rutas")) || [];
    const nuevoRuta = {
        nombre: nombre.value,
        telefono: telefono.value,
        kilometros: kilometros.value
    };
    rutas.push(nuevoRuta);
    localStorage.setItem(
        "rutas",
        JSON.stringify(rutas)
    );
    alert("Se han guardado los datos!");
    const eventoRuta = new CustomEvent("rutaCreada", {
    detail: {
        mensaje: "Ruta creada correctamente"
    }
});
document.addEventListener("rutaCreada", (e) => {
    console.log(e.detail.mensaje);
});
document.dispatchEvent(eventoRuta);
    mostrarRutas();
}

function mostrarRutas(){
    const lista = document.getElementById("listaRutas");
    let rutas = JSON.parse(localStorage.getItem("rutas")) || [];
    lista.innerHTML = "";
    rutas.forEach((ruta, index) => {
        lista.innerHTML += `
        <div class="tarjeta">
            <div id="nam" ><h3 >${ruta.nombre} <br> ${ruta.telefono} <br> ${ruta.kilometros}</h3></div>
            <div><button id="bttn" onclick="eliminarRuta(${index})">Eliminar</button></div>
        </div>

    <style>
        .tarjeta{
        width: 100%;
        justify-content: center;
        display: flex;
        background: #dee7ff;
        border-radius: 40px;
        align-items: center;
        text-align: center;
        }
        
        #bttn{
        background-color: #b9c7ee;
        color: #6488e8;
        border: none;
        min-width: 50px;
        max-width: 200px;
        }
        #nam{
        width 100px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }
        </style>
        `;
    });
}

function eliminarRuta(index){
    let rutas =
        JSON.parse(localStorage.getItem("rutas")) || [];
    rutas.splice(index, 1);
    localStorage.setItem(
        "rutas",
        JSON.stringify(rutas)
    );
    mostrarRutas();
}

async function guardarFicha() {
    if(
        rutaSelect.value === "" ||
        conductorSelect.value === "" ||
        estudianteSelect.value === ""
    ){
        alert("No se han llenado todos los datos...");
        return;
    }
    let fichas = JSON.parse(localStorage.getItem("fichas")) || [];
    let nuevaFicha = {
        ruta: rutaSelect.value,
        conductor: conductorSelect.value,
        estudiante: estudianteSelect.value,
        hora: "6:00"
    };
    await new Promise(resolve => setTimeout(resolve, 500));
    fichas.push(nuevaFicha);
    localStorage.setItem(
        "fichas",
        JSON.stringify(fichas)
    );
    alert("Se han guardado los datos!");
    mostrarFichas();
}


const rutaSelect = document.getElementById("rutaSelect");
let rutas = JSON.parse(localStorage.getItem("rutas")) || [];
rutas.forEach(ruta => {
    let option = document.createElement("option");
    option.value = ruta.nombre;
    option.textContent = ruta.nombre;
    rutaSelect.appendChild(option);
});

const conductorSelect = document.getElementById("conductorSelect");
let conductores = JSON.parse(localStorage.getItem("conductores")) || [];
conductores.forEach(conductor => {
    let option = document.createElement("option");
    option.value = conductor.nombre;
    option.textContent = conductor.nombre;
    conductorSelect.appendChild(option);
});

const estudianteSelect = document.getElementById("estudianteSelect");
let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
estudiantes.forEach(estudiante => {
    let option = document.createElement("option");
    option.value = estudiante.nombre;
    option.textContent = estudiante.nombre;
    estudianteSelect.appendChild(option);
});



function mostrarFichas() {
    const contenedor = document.getElementById("contenedorFichas");
    contenedor.innerHTML = "";
    let fichas = JSON.parse(localStorage.getItem("fichas")) || [];
            fichas.forEach((ficha, index) => {
                contenedor.innerHTML += `
            <article id="cardd">
            <img id="iii" src="rs.png" alt="ruta">
                <div class="content">
                    <h5>${ficha.ruta}</h5>
                    <h5>CONDUCTOR: ${ficha.conductor}<br>HORA: ${ficha.hora || "6:00"}<br>${ficha.estudiante}</h5>
                    <button onclick="abrirEditar(${index})">EDITAR</button>
                </div>
                </article>
                <div class="editar" id="editar${index}">
                    <div id="contenidoEditar">
                        <h2>EDITAR FICHA</h2>
                        <select id="ruta${index}"></select>
                        <select id="conductor${index}"></select>
                        <select id="estudiante${index}"></select>
                        <input type="time" id="hora${index}" value="${ficha.hora}">
                        <button onclick="guardarEdicion(${index})">GUARDAR</button>
                        <button onclick="cerrarEditar(${index})">CERRAR</button>
                    </div>
                </div>

            <style>
            .editar{
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.5);
                display: none;
                justify-content: center;
                align-items: center;
            }
            #contenidoEditar{
                background: white;
                padding: 30px;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            </style>
        `;
    });
}
mostrarFichas();
function eliminarUnaFicha(){
    let fichas = JSON.parse(localStorage.getItem("fichas")) || [];
    fichas.pop();
    localStorage.setItem("fichas", JSON.stringify(fichas));
    mostrarFichas();
}

function guardarEdicion(index){
    let fichas = JSON.parse(localStorage.getItem("fichas")) || [];
    let ruta = document.getElementById(`ruta${index}`).value;
    let conductor = document.getElementById(`conductor${index}`).value;
    let estudiante = document.getElementById(`estudiante${index}`).value;
    let hora = document.getElementById(`hora${index}`).value;
    fichas[index] = {
        ruta,
        conductor,
        estudiante,
        hora
    };
    localStorage.setItem("fichas", JSON.stringify(fichas));
    alert("SE GUARDO TODO");
    document.getElementById(`editar${index}`).style.display = "none";
    mostrarFichas();
}

function abrirEditar(index){
    document.getElementById(`editar${index}`).style.display = "flex";
    let fichas = JSON.parse(localStorage.getItem("fichas")) || [];
    let ficha = fichas[index];
    let rutas = JSON.parse(localStorage.getItem("rutas")) || [];
    let conductores = JSON.parse(localStorage.getItem("conductores")) || [];
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    let ruta = document.getElementById(`ruta${index}`);
    let conductor = document.getElementById(`conductor${index}`);
    let estudiante = document.getElementById(`estudiante${index}`);
    
    ruta.innerHTML = "";
    conductor.innerHTML = "";
    estudiante.innerHTML = "";
    rutas.forEach(r => {
        ruta.innerHTML += `<option value="${r.nombre}" ${r.nombre == ficha.ruta ? "selected" : ""}>${r.nombre}</option>`;
    });
    conductores.forEach(c => {
        conductor.innerHTML += `
        <option value="${c.nombre}" ${c.nombre == ficha.conductor ? "selected" : ""}>${c.nombre}</option>`;
    });
    estudiantes.forEach(e => {
        estudiante.innerHTML += `
        <option value="${e.nombre}" ${e.nombre == ficha.estudiante ? "selected" : ""}>${e.nombre}</option>`;
    });
}

async function buscarClima(){
    let ciudad = document.getElementById("ciudad").value;
    if(ciudad.trim() == ""){
        alert("No se han llenado todos los campos!");
        return;
    }
    let apiKey = "04b9b0f2d0665bbecc8f03fa6f1ca4ca";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;
    try{
        let respuesta = await fetch(url);
        let datos = await respuesta.json();
        if(datos.cod == "404"){
            alert("No se encontro ciudad!");
            return;
        }
        let icono = datos.weather[0].icon;
document.getElementById("resultadoClima").innerHTML = `
        
<div class="tarjetaClima">
    <h3>${datos.name}</h3>
    <img 
    src="https://openweathermap.org/img/wn/${icono}@2x.png"
    alt="clima">
    <h1>${datos.main.temp}°C <br>${datos.weather[0].description}<br> HUMEDAD: ${datos.main.humidity}%</h1>
</div>
`;
    }catch(error){
        console.log(error);
        alert("ERROR");
    }
}

class RouteCard extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        const template = document.getElementById("templateRuta");
        shadow.appendChild(template.content.cloneNode(true));
        shadow.querySelector(".ruta").textContent = this.getAttribute("ruta");
        shadow.querySelector(".conductor").textContent = this.getAttribute("conductor");
        shadow.querySelector(".estudiante").textContent = this.getAttribute("estudiante");
    }
}
customElements.define("route-card", RouteCard);

function guardarAsistencia() {
    const checkboxes = document.querySelectorAll('#estudiantes input[type="checkbox"]');
    let presentes = [];
    let ausentes = [];
    checkboxes.forEach(cb => {
        if (cb.checked) {
            presentes.push(cb.value);
        } else {
            ausentes.push(cb.value);
        }
    });
    let resumenHTML = "<h2> Resumen de Asistencia</h2>";
    resumenHTML += "<p id='presente'>Presentes:</p>";
    presentes.forEach(p => resumenHTML += `<li>${p}</li>`);

    resumenHTML += " <p id='ausente'>Ausentes: </p> ";
    ausentes.forEach(a => resumenHTML += `<li>${a}</li>`);

    resumenHTML += "";
    const resumenDiv = document.getElementById("resumen");
    resumenDiv.innerHTML = resumenHTML;
    resumenDiv.style.display = "block";
}
