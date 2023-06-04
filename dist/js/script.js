const loader = document.querySelector(".container-loader");

function loaderActive() {
    loader.classList.add("loader-active");
}

function loaderActiveTime() {
    setInterval(loaderActive, 2000);
}

function scrollkeatas() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.onload = loaderActiveTime();