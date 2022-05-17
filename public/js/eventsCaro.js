window.addEventListener("load", function(){

    const registerForm = document.querySelector(".login");
    const inputEmail = document.querySelector(".entradita");
    const inputPassword = document.querySelector("#password1");
    const inputPassword2 = document.querySelector("#password2");
    let listUl = document.querySelector(".list-errors");
    
    const errorEmpty = "Debe ingresar un dato";
    const errorLength = "Debe tener por lo menos 8 caracteres";
    const errorIsEmail = "Debe ser un email";

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
    function checkFieldsComplete(){
        if ((inputEmail.value && inputPassword.value && inputPassword2.value)){
            return true;
        }
    }
    inputPassword2.addEventListener("blur", ()=>{
        if(listUl.innerHTML === "" && checkFieldsComplete()){
            let buttonCrearCuenta = document.querySelector(".boton");
            buttonCrearCuenta.style.color = "red";
        }
    }) 
    //deshabilitar botón si hay error o si hay algun campo vacio
    registerForm.addEventListener("submit", (e)=>{
        if(listUl.innerHTML.length > 0 || !checkFieldsComplete()){
            e.preventDefault();
        }
      })


 //////////////////////////////





})








       
