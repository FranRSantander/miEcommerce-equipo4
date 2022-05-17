window.addEventListener("load", ()=>{

let iniciarSesionBoton = document.querySelector("#boton-user");
let menuElement = document.querySelector("#menu-perfil");
//click en boton de Perfil, aparece menú

iniciarSesionBoton.addEventListener("click", (e)=>{
    e.preventDefault();
    if(menuElement.classList.contains("hide")){
        menuElement.classList.add("show"); 
        menuElement.classList.remove("hide"); 
    } /* else{
        menuElement.classList.add("hide"); 
        menuElement.classList.remove("show");
    }   */
    
})














    
})