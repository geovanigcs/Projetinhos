const inputBox = document.getElementById("input_box");
const listBox = document.getElementById("list_box");
function addTask(){
    if (inputBox.value === ""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)

    }
    inputBox.value = "";
}

listBox.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listBox.innerHTML);
}
function showTask(){
    listBox.innerHTML = localStorage.getItem("data");
}
showTask()