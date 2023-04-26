const button = document.querySelector(`button[data-action="increment"]`)
const buttonDecrement = document.querySelector(`button[data-action="decrement"]`)
const container = document.querySelector(`#value`)

let value = 0 

button.addEventListener("click", () => {
    (container.textContent = value += 1)
})
buttonDecrement.addEventListener("click", () => {
    (container.textContent = value -= 1)
})