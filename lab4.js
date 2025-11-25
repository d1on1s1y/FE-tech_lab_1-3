const fifth_el = document.getElementById("fifth_el")
const sixth_el = document.querySelector(".sixth_el")

const changeColour = (e) => { e.target.classList.toggle('inverted');}

fifth_el.addEventListener('click', changeColour)
sixth_el.addEventListener('click', changeColour)

const img = document.querySelector("img")
let imgSize = 50;
document.querySelector(".addBtn").addEventListener("click", ()=>{
    img.style.display = "block"
})

document.querySelector(".delBtn").addEventListener("click", ()=>{
    img.style.display = "none"
})

document.querySelector(".decBtn").addEventListener("click", () => {
    imgSize -= 10
    console.log('-');
    img.style.width = `${imgSize}%`
    img.style.height = `${imgSize}%`
})
document.querySelector(".incBtn").addEventListener("click", () => {
    imgSize += 10
    console.log('+');
    img.style.width = `${imgSize}%`
    img.style.height = `${imgSize}%`
})