window.addEventListener("load", ()=>{

let iniciarSesionBoton = document.querySelector("#boton-user");
if(iniciarSesionBoton !== null){
    console.log(iniciarSesionBoton)
    let menuElement = document.querySelector("#menu-perfil");
    //click en boton de Perfil, aparece menú

    iniciarSesionBoton.addEventListener("click", (e)=>{
    e.preventDefault();
        menuElement.classList.toggle("hide");
    })
}

})