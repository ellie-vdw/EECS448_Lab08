let index=1;
showSlides(index);

function moveSlide(n){
    showSlides(index +=n);
}
function showSlides(n){
    let slide = document.getElementsByClassName("slides");
    if(n > slide.length){
        index = 1;
    }
    if (n< 1){
        index = slide.length;
    }
    for (i=0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    slide[index-1].style.display = "block";
}