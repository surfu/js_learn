let butt = document.querySelector("#but");
let input = document.querySelector("#inp");
let box = document.querySelector(".container");

butt.addEventListener("click", () => {
    let childBox = document.createElement("div");

    let mark = document.createElement("input");
    mark.type = "checkbox";

    let newTask = document.createElement("p");
    newTask.textContent = input.value;
    newTask.style.background = "lightyellow";

    mark.addEventListener("change", () => {
        if (mark.checked){
            newTask.style.color = "red";
            newTask.style.textDecoration = "line-through";
        }else{
            newTask.style.color = "black";
        }
    });
    childBox.appendChild(mark);
    childBox.appendChild(newTask);
    box.appendChild(childBox);
    input.value = "";
});