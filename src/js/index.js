// const images = document.querySelectorAll(".image")
// const buttons = document.querySelectorAll(".button")

// buttons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//         const selectedButton = document.querySelector(".selected")
//         selectedButton.classList.remove("selected")
//         button.classList.add("selected")

//         const activeImage = document.querySelector(".active")
//         activeImage.classList.remove("active")
//         images[index].classList.add("active")
//     })
// })

const images = document.querySelectorAll(".image")
const buttons = document.querySelectorAll(".button")

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {

        updateButtonSelected(button)

        updateActiveImage(index)
    })
})

function updateActiveImage(index) {
    const activeImage = document.querySelector(".active")
    activeImage.classList.remove("active")
    images[index].classList.add("active")
}

function updateButtonSelected(button) {
    const selectedButton = document.querySelector(".selected")
    selectedButton.classList.remove("selected")
    button.classList.add("selected")
}
