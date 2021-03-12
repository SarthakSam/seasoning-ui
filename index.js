// document.addEventListener('click', (event) => {
//     if(event.target.classList.contains("dropdown__toggle")) {
//         event.target.classList.toggle("active")
//     }
// })

window.onload = () => {
    document.querySelector("#popup__open").onclick = () => {
        document.querySelector("#popup").classList.add("active");
        let closeButtons = document.querySelectorAll("#popup .popup__close");
        for(let button of closeButtons) {
            button.addEventListener('click', closePopup);
        }
    }

    function closePopup() {
        let closeButtons = document.querySelectorAll("#popup .popup__close");
        for(let button of closeButtons)
            button.removeEventListener('click', closePopup);
        document.querySelector("#popup").classList.remove("active");
    }
}



