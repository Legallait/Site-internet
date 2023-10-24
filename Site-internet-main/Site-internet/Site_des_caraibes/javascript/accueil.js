let img_slider = document.getElementsByClassName('img_slider');
let etape = 0;
let nb_img = img_slider.length;
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');
function enleverActiveImg(){
    for (let i =0; i <nb_img; i++) {
        img_slider[i].classList.remove('active');

    }
}

suivant.addEventListener('click',function(){
    etape++;
    if(etape >= nb_img) {
        etape = 0;
    }
    enleverActiveImg();
    img_slider[etape].classList.add('active');
})

precedent.addEventListener('click',function(){
    etape--;
    if(etape < 0) {
        etape = nb_img-1;
    }
    enleverActiveImg();
    img_slider[etape].classList.add('active');
})

setInterval(function(){
    etape++;
    if(etape >= nb_img) {
        etape = 0;
    }
    enleverActiveImg();
    img_slider[etape].classList.add('active');
},6000
)
