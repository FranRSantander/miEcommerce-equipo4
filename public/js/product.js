let mainImg = document.querySelector(".bigImg");

let images = document.querySelectorAll(".galleryImg");

for (let i = 0; i < images.length; i++) {
    const img = images[i];
    img.addEventListener('click', ()=>{
        mainImg.src = img.src
    })
}