
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
modal.onclick = function () {
    modal.style.display = "none";
}
ar.forEach(item=>{
    item.onclick = function () {
        modal.style.display = "flex";
        img = Array.from(item.getElementsByTagName('img'));
        return contentModal.src = img[0].currentSrc;
}})
