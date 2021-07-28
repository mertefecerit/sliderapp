const slides = [
    {
        name : "Slide 1",
        image : "img/slide1.jpg",
        link : "link-1"
    },
    {
        name : "Slide 2",
        image : "img/slide2.jpg",
        link : "link-2"
    },
    {
        name : "Slide 3",
        image : "img/slide3.jpg",
        link : "link-3"
    }
]

let index = 0;
const slideCount = slides.length ;

let settings = {
    duration : '2000',
    random : false
}
let interval;

const slideLeftButton = document.getElementById("slideLeft");
const slideRightButton = document.getElementById("slideRight");
const autoSlideCheck = document.getElementById("autoSlide");


function init(settings){
    let prev;
    interval = setInterval(function (){
        if(settings.random){
            do{
                index = Math.floor(Math.random() * slideCount);
            }while (index === prev)
            prev = index;
        }else{
            if(index < slideCount - 1){
                index++;
            }else{
                index = 0;
            }
        }
        changeSlide(index);
    },settings.duration);
}


autoSlideCheck.addEventListener("change",function (){
    switch (this.checked){
        case true:
            init(settings);
            break;
        case false:
            clearInterval(interval);
            break;
    }
})


function changeSlide(index){
    const slideImage = document.getElementById("slideImage");
    const slideName = document.getElementById("slideName");
    const slideLink = document.getElementById("slideLink");
    slideImage.setAttribute('src',slides[index].image);
    slideName.textContent = slides[index].name;
    slideLink.setAttribute('href',slides[index].link)
}

document.addEventListener("DOMContentLoaded",function (){
    changeSlide(index);
});

slideLeftButton.addEventListener("click",function (){
    clearInterval(interval);
    autoSlideCheck.checked = false;
    if(index > 0){
        index--;
        changeSlide(index);
    }else{
        index = slideCount - 1;
        changeSlide(index);
    }
});

slideRightButton.addEventListener("click",function (){
    clearInterval(interval);
    autoSlideCheck.checked = false;
    if(index < slideCount - 1){
        index++;
        changeSlide(index);
    }else{
        index = 0;
        changeSlide(index);
    }
});
