function myRegisterStudent() {

    const email = document.querySelector("#student-mail").value
    const fullname = document.querySelector("#student-fullname").value
    const gender = document.querySelector("#student-gender").value
    const grade = document.querySelector("#student-grade").value
    const birthdate = document.querySelector("#student-birthdate").value

    const data = new FormData()

    fetch("request.php", {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(response => console.log(response))
}

document.addEventListener("DOMContentLoaded", () => {
    
    const submitBtn = document.querySelector("#submit-btn")

    submitBtn.addEventListener("click", myRegisterStudent)
})