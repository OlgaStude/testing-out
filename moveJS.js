let arrow = document.querySelectorAll('.forPics_DS span');

for (let per of arrow){
    per.onclick = gallScrol;
}

function gallScrol(){
    if(this.classList.contains('right_DS')){
        let gallery = this.nextElementSibling.firstElementChild;
        gallery.style.transform += "translate(-25%,0)";
    } else {
        let gallery = this.nextElementSibling.nextElementSibling.firstElementChild;
        gallery.style.transform += "translate(25%,0)";
    }
}