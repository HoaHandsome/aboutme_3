
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filter-div");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("btn-container");
var btns = document.getElementsByClassName("btn-list");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


var pictures = Array.from(document.querySelectorAll('.filter-div img'));    
var ar = Array.from(document.querySelectorAll('.filter-div'));    
var modal = document.getElementById('wrap-modal');
var contentModal = document.getElementById('modal-content');
var body = Array.from(document.getElementsByTagName('body'));
var title = document.getElementById('picture-title');
var content = document.getElementById('picture-description');


modal.onclick = function () {
    modal.style.display = "none";
    body[0].classList.remove('over');
    title.removeChild(title.firstChild);
    content.removeChild(content.firstChild);
}
ar.forEach(item=>{
    item.onclick = function () {
        
        body[0].classList.add('over');
        modal.style.display = "flex";
        img = Array.from(item.getElementsByTagName('img')); 
        console.log(img[0]);
        return contentModal.src = img[0].currentSrc;
    }})
    /* responsive menu */
    
    var mask =document.getElementById("mask");
    var menu =document.getElementById('menu');
    var maskMenu =document.getElementById('mask-menu');
    var navBar = document.getElementById('nav-bar');
    function openMenu() {
        mask.style.display ="block";
        navBar.style.display ="block";
        maskMenu.style.display ="block";
        menu.style.display = "block";
        body[0].classList.add('over');
        setTimeout(() => {
            menu.style.right ="0px";
            
        }, 50);
    }
    function closeMenu() {
        body[0].classList.remove('over');
        mask.style.display = "none";
        navBar.style.display = "none";
        maskMenu.style.display ="none";
        menu.style.right ="-150%";
        setTimeout(() => {
            menu.style.display = "none";
            
        }, 500);
    
}
/* scroll */
window.addEventListener('scroll', function scroll() {
    const scrolled = window.scrollY;


    if (scrolled < 50) {
        document.getElementById('scroll-to-top').style.bottom = " -100px";
    }
    else {
        /*         menu.style.background = "white"; */
        document.getElementById('scroll-to-top').style.bottom = "0px"
    }
});


/* handle search */
function handle() {
    e.preventDefault(); }
    