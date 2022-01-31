var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    /* Reglas de desencriptación: 
    "enter" es convertido para "e" 
    "imes" es convertido para "i"
    "ai" es convertido para "a"
    "ober" es convertido para "o"
    "ufat" es convertido para "u"
    Solo letras minusculas
    No se permite acentuación de palabras   
    */

    var desencriptar = capturarMensaje();    
    var validacionMensaje = validarAcento(desencriptar);

    if(validacionMensaje == true){
        exhibirMensajeError();
        return;
    }

    //desencriptando
    var palabraBuscar = /ai|enter|imes|ober|ufat/g;
    var decodificacion = {"ai" : "a", "enter" : "e", "imes" : "i", "ober" : "o", "ufat" : "u"};
    var desencriptado = desencriptar.replace(palabraBuscar, m => decodificacion[m]);
    mostrarMensaje(desencriptado);
});