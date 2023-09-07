document.addEventListener("DOMContentLoaded", () => {
    
    const display = document.querySelector("#text-displayer")
    const input = document.querySelector("#input-text")
    const boldBtn = document.querySelector("#turn-text-bold")
    const italicBtn = document.querySelector("#turn-text-italic")
    const clearBtn = document.querySelector("#clear-text")
    
    function myDisplayText() {
        display.innerHTML = input.value
    }

    function myTurnBold() {
        display.innerHTML = input.value.bold()
    }

    function myTurnItalic() {
        display.innerHTML = input.value.italics()
    }

    function myClearText() {
        display.innerHTML = input.value
    }
    
    input.addEventListener("input", myDisplayText)
    boldBtn.addEventListener("click", myTurnBold)
    italicBtn.addEventListener("click", myTurnItalic)
    clearBtn.addEventListener("click", myClearText)
})

