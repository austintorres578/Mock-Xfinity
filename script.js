
function toggleham(){

    let ham = document.getElementById("hammenu");

    if (ham.style.display ==="none") {
        ham.style.display = "block";
    }
    else {
        ham.style.display ="none";
    }
};


function toggleshowiwt(){

    var hidden = document.getElementById("hidden-links-iwt");

    var showmore = document.getElementById("show-more-iwt");

    var showless = document.getElementById("show-less-iwt");

    if (showmore.style.display ==="block") {
        showmore.style.display = "none";
        showless.style.display = "block";
        hidden.style.display = "block";
    }
    else{
        showmore.style.display = "block";
        showless.style.display = "none";
        hidden.style.display = "none";
    }
};

function toggleshowshop(){

    var hidden = document.getElementById("hidden-links-shop");

    var showmore = document.getElementById("show-more-shop");

    var showless = document.getElementById("show-less-shop");

    if (showmore.style.display ==="block") {
        showmore.style.display = "none";
        showless.style.display = "block";
        hidden.style.display = "block";
    }
    else{
        showmore.style.display = "block";
        showless.style.display = "none";
        hidden.style.display = "none";
    }
};

function toggleshowac(){

    var hidden = document.getElementById("hidden-links-ac");

    var showmore = document.getElementById("show-more-ac");

    var showless = document.getElementById("show-less-ac");

    if (showmore.style.display ==="block") {
        showmore.style.display = "none";
        showless.style.display = "block";
        hidden.style.display = "block";
    }
    else{
        showmore.style.display = "block";
        showless.style.display = "none";
        hidden.style.display = "none";
    }
};

function toggleinternetham(){
    var dropdown = document.getElementById("intenet-ham-dropmenu");
    if(dropdown.style.display === "none"){
        dropdown.style.display = "block";
    }
    else{
        dropdown.style.display = "none"
    }
};

function toggletvstreamham(){
    var dropdown = document.getElementById("tv-stream-ham-dropmenu");
    if(dropdown.style.display === "none"){
        dropdown.style.display = "block";
    }
    else{
        dropdown.style.display = "none"
    }
};

function togglehomesecham(){
    var dropdown = document.getElementById("home-sec-ham-dropdown");
    if(dropdown.style.display === "none"){
        dropdown.style.display = "block";
    }
    else{
        dropdown.style.display = "none"
    }
};

function togglehomephoneham(){
    var dropdown = document.getElementById("home-phone-ham-dropdown");
    if(dropdown.style.display === "none"){
        dropdown.style.display = "block";
    }
    else{
        dropdown.style.display = "none"
    }
};

function togglealldealsham(){
    var dropdown = document.getElementById("all-deals-ham-dropdown");
    if(dropdown.style.display === "none"){
        dropdown.style.display = "block";
    }
    else{
        dropdown.style.display = "none"
    }
};