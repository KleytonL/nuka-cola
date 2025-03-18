function saveInput() {
    const input = document.getElementById('username');
    sessionStorage.setItem("user", input.value);
    console.log(input.value);
}

function printInput() {
    const storedName = sessionStorage.getItem('user');
    var title = document.getElementById('helloUser');
    title.innerText += " " + storedName + "!";
}

window.onload = printInput();