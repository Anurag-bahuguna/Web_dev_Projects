const imgs = document.querySelectorAll('.header-slider ul img'); //it will select all the images in the ul 
const prev_btn = document.querySelector('.contol_prev');    //selecting the control button
const next_btn = document.querySelector('.contol_next');
let n = 0; // poi of first image

function changeSlide(){
    for(let i =0; i<imgs.length; i++){
        imgs[i].style.display = 'none';     //selecting and hiding all the images
    }
    imgs[n].style.display = 'block';    //displaying the first image
}
changeSlide();

prev_btn.addEventListener('click',(e)=>{    //click is event name and e is event 
    if(n>0){
        n--;
    }else{
        n=imgs.length - 1;
    }
    changeSlide();
})
next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length - 1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
})

