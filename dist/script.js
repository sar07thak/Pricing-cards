let container = document.querySelectorAll(".containers");
let purchasae_btn = document.querySelectorAll(".btn_purchase");
let modal = document.querySelector(".modal");
let close_modal = document.querySelector(".close-modal");
let overlay = document.querySelector(".overlay");


for( let i=0 ; i<purchasae_btn.length ; i++){
    purchasae_btn[i].addEventListener("click",() => {
        overlay.classList.remove("hidden");
        modal.classList.remove("hidden");
        // container[i].style.backGroundColor = "#5b21b6";
    })
}

close_modal.addEventListener("click" , () => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
})

overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
})


