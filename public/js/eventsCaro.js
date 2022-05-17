
window.addEventListener("load", function(){

    const registerForm = document.querySelector(".login");
    const inputEmail = document.querySelector(".entradita");//" "
    const inputPassword = document.querySelector("#password1");//" "
    const inputPassword2 = document.querySelector("#password2");
    const errorEmpty = "Debe ingresar un dato";
    const errorLength = "Debe tener por lo menos 8 caracteres";
    const errorIsEmail = "Debe ser un email";

    let botonLogin = document.querySelector(".boton");
    botonLogin.disabled = true;
    botonLogin.classList.remove("boton")
    
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
    /*
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
    */
    inputPassword2.addEventListener("input", ()=>{
        function checkFieldsComplete(){
            if((inputEmail.value && inputPassword.value && inputPassword2.value)){
                return true;
            }
        } 
        let listUl =this.document.querySelector(".list-errors")
        if(listUl.innerHTML === "" && checkFieldsComplete()){
            let buttonCrearCuenta = this.document.querySelector(".boton");
            buttonCrearCuenta.getElementsByClassName.color="red"
        }
    }
    )
})





/*        registerForm.addEventListener("submit", (e)=>{
          if(!inputEmail.validity.valid){
            showError();
            e.preventDefault();*!/
    }
)*/





/*

let showMenu = (e)=>{
    e.preventDefault();
    let menuElement = document.querySelector("#menu-prueba");
    menuElement.classList.remove("hide-menu");
}

//1. que se abra el menú al hacer click en el Perfil:
let iniciarSesionBoton = document.querySelector("#boton-user");
iniciarSesionBoton.addEventListener("click", showMenu);

//2. que cuando haga click afera, se vaya:
window.addEventListener("click", ()=>{
    let overlayDiv = querySelector(".overlay");*/
