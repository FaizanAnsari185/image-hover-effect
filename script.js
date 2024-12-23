let list = document.querySelector(".list");
let cursor = document.querySelector(".cursor");
list.addEventListener("mousemove", function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px"
})