window.onload = function(){

    let botonLogin = document.querySelector(".boton");
    botonLogin.disabled = true;
    botonLogin.classList.remove("boton")
    let inputUsuario = document.querySelector("#entradita");
    let inputPass = document.querySelector("#entradita1");
    if(inputPass === false || inputUsuario === false){
        botonLogin.disabled = false;
    }

    console.log(inputUsuario)


}
