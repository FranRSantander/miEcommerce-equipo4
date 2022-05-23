window.addEventListener("load", function(){
    const registerForm = document.querySelector(".login");
    const inputEmail = document.querySelector(".entradita");//" "
    const inputPassword = document.querySelector("#password1");//" "
    const inputPassword2 = document.querySelector("#password2");
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
})
