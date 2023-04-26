const categoriesEl = document.querySelector(`#categories`)
console.log(`Number of categories`, categoriesEl.children.length)

const itemEl = document.querySelectorAll(`.item`)


itemEl.forEach((item)=>{
	console.log(`Category:`, item.firstElementChild.textContent)
	console.log(`Element`,item.lastElementChild.children.length )
})