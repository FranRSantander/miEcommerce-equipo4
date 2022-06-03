//funciones que manejan la lista ul de errores 
function createLi(errorMsg){
    let newLi = document.createElement("li");
    let ul = document.querySelector(".list-errors");
    newLi.textContent = errorMsg;
    ul.appendChild(newLi);
}
function checkErrorExists(errorString){
    let ul = document.querySelector(".list-errors");
    let liNodeList = ul.querySelectorAll("li");
    let arrayErrors = Array.from(liNodeList);
    for (let i = 0; i < arrayErrors.length ; i++) {
        if(errorString === arrayErrors[i].textContent){
            return true;
        }
    }
    return false; 
}
function removeError(errorString){
    let ul = document.querySelector(".list-errors");
    let liNodeList = ul.querySelectorAll("li");
    for (let i = 0; i < liNodeList.length ; i++) {
        if(errorString === liNodeList[i].textContent){
            liNodeList[i].remove();
        }
    }
}
function clearErrorList(){
    document.querySelector(".list-errors").innerHTML = "";
}
function addError(error){
    if (!checkErrorExists(error)) {
        createLi(error);
    }
}

