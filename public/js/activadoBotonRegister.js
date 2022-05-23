window.onload = function(){
    //desactivacion del boton y su clase con hover
    let botonLogin = document.querySelector(".boton");
    botonLogin.disabled = true;
    botonLogin.classList.remove("boton")

    let ulErr = document.querySelector(".list-errors");



    //obtengo los datos del input 1 y 2 y 3 para poder validar el boton y activarlo
    document.getElementById("userName").addEventListener("change", function(e) {
        let input1 = e.target.value
        console.log(input1)
        if(ulErr.innerHTML === ""){
        botonLogin.disabled = true;
        botonLogin.classList.add("boton")
        }
        else{
            botonLogin.disabled = true;
            botonLogin.classList.remove("boton")
        }
    })
    document.getElementById("password1").addEventListener("change", function(e) {
        let input2 = e.target.value
        console.log(input2)
        if(ulErr.innerHTML === ""){
            botonLogin.disabled = true;
            botonLogin.classList.add("boton")
            }
            else{
                botonLogin.disabled = true;
                botonLogin.classList.remove("boton")
            }

    })
    document.getElementById("password2").addEventListener("change", function(e) {
        let input3 = e.target.value
        console.log(input3)
        if(ulErr.innerHTML === ""){
            botonLogin.disabled = true;
            botonLogin.classList.add("boton")
            }
            else{
                botonLogin.disabled = true;
                botonLogin.classList.remove("boton")
            }
    })

    /*
    if(input1 !=="" && input2 !=="" && input3 !==""){
        botonLogin.disabled = true;
        botonLogin.classList.add("boton")
    }
    else{
        botonLogin.disabled = true;
        botonLogin.classList.remove("boton")
    }
    */
}


/*
 //obtengo los datos del input 1 y 2 y 3 para poder validar el boton y activarlo
    document.getElementById("userName").addEventListener("change", function(e) {
        let input1 = e.target.value
        console.log(input1)
            document.getElementById("password1").addEventListener("change", function(e) {
            let input2 = e.target.value
                document.getElementById("password2").addEventListener("change", function(e) {
                    let input3 = e.target.value
                    if(input1 !=="" && input2 !=="" && input3 !==""){
                        botonLogin.disabled = true;
                        botonLogin.classList.add("boton")
                    }
                })

    })
    })
 */