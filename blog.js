const body = document.querySelector("body");
const toggleButton = document.getElementById("toggleButton");
const mode = document.querySelector(".mode");

toggleButton.addEventListener("click", function(){
    if(body.classList.contains("dark")) {
        body.classList.remove("dark");
        mode.innerHTML = "🌞";
    } else {
        body.classList.add("dark");
        mode.innerHTML = "☾"
    }
})