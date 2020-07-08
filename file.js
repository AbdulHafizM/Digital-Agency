//scroll animation
let anchorSel = 'a[href^="#"]';

let anchorList = document.querySelectorAll(anchorSel);

anchorList.forEach(link => {
    link.onclick = function(e){
        e.preventDefault();

        let anchorDestination = document.querySelector(this.hash);
        anchorDestination.scrollIntoView(
            {
                behaviour : 'smooth'
            })
            let nav2 = document.querySelector('.nav-menu');
            nav2.style.display = "none";
    }
});

//nav-menu
//menu_btn
window.onload = function(){
let barsBtn = document.querySelector('.bars');
barsBtn.addEventListener('click',colorChange);
barsBtn.addEventListener('click', toggleFunc)
function colorChange(){
    barsBtn.style.background = "purple";
}
function toggleFunc(){
    let nav = document.querySelector('.nav-menu');
    if(nav.style.display == "none"){
        nav.style.display = "block";
    }else{
        nav.style.display = "none";
        barsBtn.style.background = "";
    }
}
}