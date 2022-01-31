var botonEncriptar = document.querySelector("#btn-encriptar");
var ingresoMensajeForm = document.querySelector("#form-encriptar");

//proceso de encriptacion
botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    /* Reglas de encriptación: 
    "e" es convertido para "enter" 
    "i" es convertido para "imes"
    "a" es convertido para "ai"
    "o" es convertido para "ober"
    "u" es convertido para "ufat"
    Solo letras minusculas
    No se permite acentuación de palabras 
    */

    var encriptar = capturarMensaje();
    var validacionMensaje = validarAcento(encriptar);

    if(validacionMensaje == true){
        exhibirMensajeError();
        return;
    }
    
    //encriptando
    var letrasBuscar = /[aeiou]/g;
    var codificacion = {"a" : "ai", "e" : "enter", "i" : "imes", "o" : "ober", "u" : "ufat"};     
    var encriptado = encriptar.replace(letrasBuscar, m => codificacion[m]);
    mostrarMensaje(encriptado);
});

//funcion para capturar el mensaje a encriptar o desencriptar
function capturarMensaje(){
    var mensaje = ingresoMensajeForm.inputtexto.value.toLowerCase();
    return mensaje;
}

//verificar si tiene acento
function validarAcento(texto){
    var acento = texto.search(/[á-ú]/);
    if(acento >=0) {
        return true;
    }else {
        return false;
    }
}

//mostrando mensaje de error
function exhibirMensajeError(){
    var mensajeError = document.querySelector("#mensaje-error");
    mensajeError.textContent = "Ingrese palabras sin acento";
}

//funcion para mostrar los mensajes encriptados o desencriptados
function mostrarMensaje(mensajeFinal){
    var outMensaje = document.querySelector("#msg");
    outMensaje.value = mensajeFinal;
    ingresoMensajeForm.reset();
    
    var mensajeError = document.querySelector("#mensaje-error");
    mensajeError.innerHTML = "";
}