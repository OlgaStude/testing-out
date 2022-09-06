let rArr = document.querySelector('.rightArr');
let lArr = document.querySelector('.leftArr');

let index = 1;
show();

rArr.onclick = function(){
    index++;
    show();

}
lArr.onclick = function(){
    index--;
    show();
    
}
// setInterval(function(){
//     index++;
//     show();
// },7000)


function show(){
    let elems = document.querySelectorAll(".animated");
    let slides = document.querySelectorAll(".slide");
    if (index > slides.length){
        index = 1;
    }
    if (index < 1){
        index = slides.length;
    }
     for (let per of slides){
        per.style.visibility = "hidden";
        per.style.opacity = 0;
     }
     slides[index-1].style.visibility = 'visible';
     slides[index-1].style.opacity = 1;
     if(slides[index-1].id == 'animated'){
        let i = 1;
        for(let per of elems){
            
            per.classList.add("a"+ i);
            i++
        }
     } else {
        for(let per of elems){
            per.className = "animated";
        }
     }

}