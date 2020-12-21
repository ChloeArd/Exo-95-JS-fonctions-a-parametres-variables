div1 = document.getElementById("div1");

function bonjour(...myValue) {
    div1.innerHTML = "Bonjour ";
    for (let value of myValue) {
        div1.innerHTML += value + ", ";
    }
    div1.innerHTML = div1.innerHTML.trim().slice(0, -1);
}

bonjour("param1", "param2", "param3");
