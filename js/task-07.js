


const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fn1);
text.style.fontSize = `${input.value}px`
function fn1(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}
