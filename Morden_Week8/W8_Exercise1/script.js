const para = document.getElementById("paragraph");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    para.textContent = "You clicked the button!";
})
