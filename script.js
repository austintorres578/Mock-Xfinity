
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