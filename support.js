//variables que contienen los inputs
var nombre = document.getElementById("inputNombre");
var  email = document.getElementById("inputEmail");
var numTelefono = document.getElementById("inputNumero");
var mensaje = document.getElementById("inputMensaje");
var form = document.getElementById("formulario")
//variable de error
error.style.color = "red";
//metodo para validacion
form.addEventListener("submit", function(evt){
    evt.preventDefault();
      
        console.log("enviando formulario");
      var mensajeError = [];
    
    if(nombre.value === null || nombre.value === ""){
      mensajeError.push("Escribe tu nombre");
    }else{
      document.getElementById("inputNombre").value = "";
    }
    
    if(email.value === null || email.value === ""){
          mensajeError.push("Escribe tu email");
    }else{
      document.getElementById("inputEmail").value = "";
    }
    
    if(numTelefono.value === null || numTelefono.value === ""){
        mensajeError.push("Escribe tu numero");
    }else{
      document.getElementById("inputNumero").value = "";
    }
      
    
    if(mensaje.value === null || mensaje.value === ""){
        mensajeError.push("Escribe tu problema");
    }else{
     document.getElementById("inputMensaje").value = "";
    }
    
       error. innerHTML = mensajeError.join(" , ");
    
      return false;
    
        
    })