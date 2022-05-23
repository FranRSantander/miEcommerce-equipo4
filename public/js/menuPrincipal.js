window.addEventListener("load", ()=>{

let iniciarSesionBoton = document.querySelector("#boton-user");
let menuElement = document.querySelector("#menu-perfil");
//click en boton de Perfil, aparece menú

iniciarSesionBoton.addEventListener("click", (e)=>{
   e.preventDefault();
    menuElement.classList.toggle("hide");
})
})