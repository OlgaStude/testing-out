let header = document.querySelector("header");
let menu = document.querySelector('menu');
let rbutton =document.querySelector('.rightArr');
    

document.body.onscroll = function(){
    if(document.documentElement.scrollTop > header.clientHeight){
        menu.style.position = "fixed";
        menu.style.margin = 0+'px';
        menu.classList = "animation";
        menu.style.boxShadow = "0 2px 10px #ccc";
    } else{
        menu.style.position = "relative";
        menu.style.margin = 1+'vw';
        menu.classList = "";
        menu.style.boxShadow = "";
    }
}




