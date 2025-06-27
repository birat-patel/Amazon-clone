let left = document.getElementById("left")
let right = document.getElementById("right")
let all_image = document.querySelector(".all_image")
let Aimage = document.getElementsByClassName("Aimage")
let imageNo = 1;

const Nimage = () => {
    if (imageNo < Aimage.length) {
        all_image.style.transform = `translateX(-${imageNo * 1500}px)`;
        imageNo++;
    }
    else {
        all_image.style.transform = 'translateX(-0px)';
        imageNo = 1;
    }
}
const Pimage = () => {
    if (imageNo > 1) {
        all_image.style.transform = `translateX(-${(imageNo - 2) * 1500}px)`;
        imageNo--;
    }
    else {
        all_image.style.transform = `translateX(-${(Aimage.length - 1) * 1500}px)`;
        imageNo = Aimage.length;
    }
}

right.onclick = Nimage;
left.onclick = Pimage;

setInterval(Nimage, 7000);


//    menu icon side container
const side_container = document.getElementsByClassName("side_container")[0]
const nav_sidebar = document.getElementById("nav_sidebar")
const close = document.getElementById("close")

nav_sidebar.onclick = () => {
    side_container.classList.toggle("side_container_show")
}
close.onclick = () => {
    side_container.classList.toggle("side_container_show")
}