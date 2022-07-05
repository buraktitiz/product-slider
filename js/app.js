var selected = document.querySelector(".category");
var sliderItems = document.querySelector(".cs-hidden");
var ul = document.querySelector(".ul");
var selectedmb = document.querySelector(".category-mob");
var buttonSelected = document.querySelector(".slider");
var alertLoading = document.querySelector(".alertt");
var closeButton = document.querySelector(".close-btn");
var card = document.querySelector(".card");
var checkControl = document.querySelector(".checkIcon");



buttonSelected.addEventListener("click", (e) => {
    var ss = e.target.id;
    ul.classList.add("cs-hidden");
    if (ss === "buy-btn") {
        alertLoading.classList.add("show");
        alertLoading.classList.remove("hide");
        alertLoading.classList.add("showAlert");
        alertLoading.classList.remove("d-none");
        alertLoading.classList.add("d-inline");
        setTimeout(function () {
            alertLoading.classList.remove("show");
            alertLoading.classList.add("hide");
            alertLoading.classList.add("d-none");
        }, 4000);
    }
});