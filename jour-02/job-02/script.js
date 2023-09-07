let count = 0

function myAddCount() {
    
    count++
    const display = document.querySelector("#count-displayer")
    display.innerHTML = count
}

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector("#add-count-btn")
    

    btn.addEventListener("click", myAddCount)
})