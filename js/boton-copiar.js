var botonCopiar = document.querySelector("#btn-copy");

//proceso para copiar texto 
botonCopiar.addEventListener("click", function(event){
    
    var input = document.querySelector("#msg");
    input.focus();
    
    document.execCommand("selectAll");
    document.execCommand("copy");
})