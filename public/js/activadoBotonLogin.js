window.onload = function(){
    //desactivacion del boton y su clase con hover
    let botonLogin = document.querySelector(".boton");
    botonLogin.disabled = true;
    botonLogin.classList.remove("boton")

    //obtengo los datos del input 1 y 2 para poder validar el boton y activarlo
    document.getElementById("entradita1").addEventListener("change", function(e) {
        let input1 = e.target.value
            document.getElementById("entradita2").addEventListener("change", function(e) {
            let input2 = e.target.value
            if(input1 !=="" && input2 !==""){
                botonLogin.disabled = true;
                botonLogin.classList.add("boton")
            }

    })
    })}
