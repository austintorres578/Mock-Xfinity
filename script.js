var btn = document.getElementById("hambutton");

btn.addEventListener("click",toggleham);

function toggleham(){

    let ham = document.getElementById("hammenu");

    if (ham.style.display ==="none") {
        ham.style.display = "block";
    }
    else {
        ham.style.display ="none";
    }
}