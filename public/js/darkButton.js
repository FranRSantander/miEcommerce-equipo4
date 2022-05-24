
let themeButton = document.querySelector("#themeButton");
if(themeButton !== null){
    themeButton.addEventListener('click', ()=>{
        document.body.classList.toggle("dark");

        //Guardando en localstorage
        if(document.body.classList.contains('dark')){
            localStorage.setItem('darkMode', 'true');
        }
        else {
            localStorage.setItem('darkMode', 'false');
        }

    });

    if(localStorage.getItem('darkMode') === 'true'){
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove("dark");
    }
}