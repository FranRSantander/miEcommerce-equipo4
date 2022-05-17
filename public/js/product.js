let mainImg = document.querySelector(".bigImg");

let images = document.querySelectorAll(".galleryImg");

images.forEach(img =>{
    img.addEventListener('click', ()=>{
        mainImg.src = images.src
    })
})