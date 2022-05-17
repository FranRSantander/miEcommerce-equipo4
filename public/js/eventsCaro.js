
window.addEventListener("load", function(){

    const registerForm = document.querySelector(".login");
    const inputEmail = document.querySelector(".entradita");//" "
    const inputPassword = document.querySelector("#password1");//" "
    const inputPassword2 = document.querySelector("#password2");
    const errorEmpty = "Debe ingresar un dato";
    const errorLength = "Debe tener por lo menos 8 caracteres";
    const errorIsEmail = "Debe ser un email";


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
    })



    
    inputEmail.addEventListener("input", ()=>{
      let inputValue = inputEmail.value;
    
       if(inputValue === ""){
            clearErrorList();
            validate(errorEmpty);
       }else{
            clearErrorList();
            if(inputEmail.validity.typeMismatch){
                validate(errorIsEmail);
            }else{
                clearErrorList();
            }}
    })

    inputEmail.addEventListener("blur", function(){
        document.querySelector(".list-errors").innerHTML = "";
    })

    inputPassword.addEventListener("input", ()=>{
        let inputValue = inputPassword.value;

        if(inputValue === ""){
            clearErrorList();
            validate(errorEmpty);
       }else{
            clearErrorList();
            if(inputValue.length < 8){
                validate(errorLength);
            }else{
                clearErrorList();
            }}
    })
    inputPassword2.addEventListener("input", ()=>{
        let inputValue = inputPassword2.value;

        if(inputValue === ""){
            clearErrorList();
            validate(errorEmpty);
       }else{
            clearErrorList();
            if(inputValue.length < 8){
                validate(errorLength);
            }else{
                clearErrorList();
            }}
    })
})
