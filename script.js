let left = document.getElementById("left")
let right = document.getElementById("right")
let all_image = document.querySelector(".all_image")
let Aimage = document.getElementsByClassName("Aimage")
let imageNo = 1;

const Nimage = () => {
    if (imageNo < Aimage.length) {
        all_image.style.transform = `translateX(-${imageNo * 100}%)`;
        imageNo++;
    }
    else {
        all_image.style.transform = 'translateX(-0px)';
        imageNo = 1;
    }
}
const Pimage = () => {
    if (imageNo > 1) {
        all_image.style.transform = `translateX(-${(imageNo - 2) * 100}%)`;
        imageNo--;
    }
    else {
        all_image.style.transform = `translateX(-${(Aimage.length - 1) * 100}%)`;
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



// M_container2 image scroll width arrow button
let cards = document.querySelector(".All_item")
let leftButton = document.getElementById("left-butt")
let rightButton = document.getElementById("right-butt")

function updateButton() {
    let birat = 4;  //  sometime margin error
    //  agar scroll start me ho to left button hide   
    if (cards.scrollLeft <= 1) {
        leftButton.style.opacity = "0.5"
    } else {
        leftButton.style.opacity = "1"
    }
    //  agar scroll end tak pahuch jaye to right button hide
    if (cards.scrollLeft + cards.clientWidth >= cards.scrollWidth - birat) {
        rightButton.style.opacity = "0.5"
    } else {
        rightButton.style.opacity = "1"
    }
}

rightButton.onclick = () => {
    cards.scrollBy({ left: cards.clientWidth })
}

leftButton.onclick = () => {
    cards.scrollBy({ left: -cards.clientWidth })
}
cards.addEventListener("scroll", updateButton);    //  scroll hone par arrows update
updateButton();

