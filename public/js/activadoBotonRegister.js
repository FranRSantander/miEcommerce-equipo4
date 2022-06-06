window.onload = function(){
    //-VALIDACIONES DEL FRONT- y habilitacion / deshabilitacion del boton dependiendo de ellas
    //captura elementos de la pantalla
    let ulErr = document.querySelector(".list-errors");
    const inputEmail = document.getElementById("userName");
    const inputPassword = document.getElementById("password1");
    const inputPassword2 = document.getElementById("password2");
    const botonLogin = document.querySelector(".boton");
    const mensajeError = document.querySelector(".error-msg")
    //mensajes de error:
    const errorEmpty = "Debe ingresar un dato";
    const errorLength1 = "La contraseña debe tener por lo menos 8 caracteres";
    const errorLength2 = "La confirmación debe tener por lo menos 8 caracteres";
    const errorIsEmail = "Debe ser un email"
     //desactivacion del boton por defecto y su clase con hover
    botonLogin.disabled = true;
    botonLogin.classList.remove("boton");
    //Funciones de validación. Dependiendo del caso, modifica el ul de errores
    function validaVacio(input){
        if(input.value === ""){
            addError(errorEmpty);           
        }else{
            if(checkErrorExists(errorEmpty)){
                removeError(errorEmpty);
            }
        }
    }
    function validaEmail(input){
        if(input.validity.typeMismatch){
            addError(errorIsEmail);
        }else{
            if(checkErrorExists(errorIsEmail)){
                removeError(errorIsEmail);
            }
        }
    }
    function validaLength1(input){
        if(input.value.length < 8){
            addError(errorLength1);
        }else{
            if(checkErrorExists(errorLength1)){
                removeError(errorLength1);
            }
        } 
    }
    function validaLength2(input){
        if(input.value.length < 8){
            addError(errorLength2);
        }else{
            if(checkErrorExists(errorLength2)){
                removeError(errorLength2);
            }
        } 
    }
    //Eventos input para que valide cuando cambia un dato en tiempo real
    inputEmail.addEventListener("input", ()=>{
        sacarErrorEmailExiste();
        validaVacio(inputEmail);
        validaEmail(inputEmail);
        validarYHabilitarBoton();
    })
    inputPassword.addEventListener("input", ()=>{
        sacarErrorEmailExiste()
        validaVacio(inputPassword);
        validaLength1(inputPassword);
        validarYHabilitarBoton();
    })
    inputPassword2.addEventListener("input", ()=>{
        sacarErrorEmailExiste()
        validaVacio(inputPassword2);
        validaLength2(inputPassword2);
        validarYHabilitarBoton();
    
    }) 
    //Funciones para habilitar y deshabilitar el botón según las validaciones
    function deshabilitarBoton(){
        botonLogin.disabled = true;
        botonLogin.classList.remove("boton");
    }
    function habilitarBoton(){
        botonLogin.disabled = false;
        botonLogin.classList.add("boton");
    }
    function hayInputVacio(){      
        if(inputEmail.value === "" || inputPassword.value === "" || inputPassword2.value === ""){
            return true;
        }else{
            return false;
        }
    }
    function noHayError(){      
       if (ulErr.innerHTML.trim() == ""){
           return true;
       }
    }
    function validarYHabilitarBoton(){
        if(noHayError() && !hayInputVacio()){
            habilitarBoton();
        }
        else{
            deshabilitarBoton();
        }
    }
    function sacarErrorEmailExiste(){
        if(mensajeError !== null){
            mensajeError.innerHTML = "";
        }
    }
}