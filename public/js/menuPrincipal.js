window.onload = function(){
    menu.style.left = "5000%"
    let menu = document.querySelector('.menuUsuario');
    let boton = document.querySelector(".botonUsuario")

    logo.addEventListener("click", function(){
        boton.classList.toggle(".menuUsuario");
    })

}