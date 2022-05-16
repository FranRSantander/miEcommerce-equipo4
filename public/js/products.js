//Funcion que permite cambiar las imagenes de la vista producto

function cambiarImgProducto(selectImg){
    let bigImg = document.getElementById("mainImg");
    bigImg.src = selectImg.src;
}