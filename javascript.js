console.log('hello, js!')

const handlebutton = () => {
    alert("Hi, please message me for more!")
}


var form = document.getElementById("my_form")
form.addEventListener("submit", handleform)

function handleform(e) {
    e.preventDefault()
    console.log("form submitted")
    var user_input = document.getElementById("user_input").value;
    console.log(user_input)
}