var desktop = document.getElementById("desktop");
var mobile = document.getElementById("mobile");

mobile.addEventListener("click", function() {
    if(desktop.style.display == "none") {
        desktop.style.display = "block";
    } else {
        desktop.style.display = "none";
    }
});