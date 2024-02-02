let toDos = [];

let form = document.forms.toDoList;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let input = form.elements.input.value;
    let checked = false;
    toDos.push([input,  checked]);
    console.log(toDos);
    document.getElementById("toDos").innerHTML = "";

    toDos.forEach((element, index) => {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";



        
        checkbox.classList.add("leftItem");
        checkbox.classList.add("checkbox");
        let p = document.createElement("p");
        p.classList.add("leftItem");
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("rightItem");
        let editButton = document.createElement("button");
        editButton.classList.add("rightItem");
        let div = document.createElement("div");
        div.classList.add("listdiv");




        p.innerText = element[0];
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", () => {
            li.remove();
            toDos.splice(index, 1);

        });


        if (element[1]) {
            checkbox.checked = true;
            editButton.classList.add("checked")
            p.classList.add("checked");
        } else {
            checkbox.checked = false;
        }


        editButton.innerText = "Edit";
        editButton.classList.add("editButton");
        editButton.style.marginLeft = "1rem";

        div.appendChild(checkbox);
        div.appendChild(p);
        div.appendChild(deleteButton);
        div.appendChild(editButton);
        li.appendChild(div);


        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                p.classList.add("checked");
                editButton.classList.add("checked")
                toDos[index][1] = true;
            } else {
                p.classList.remove("checked");
                editButton.classList.remove("checked")
                div.style.opacity = "1";
                toDos[index][1] = false;
            }
        });



        editButton.addEventListener("click", () => {
            if (toDos[index][1] === true){
                return;
            } else {
                const editInput = document.createElement("input");
                editInput.classList.add("editInput");
                editInput.value = toDos[index][0];
                div.replaceChild(editInput, p);
                editInput.focus();
    
                editInput.addEventListener("blur", () => {
                    if (editInput.value === "") {
                        div.replaceChild(p, editInput);
                    } else {
                        toDos[index][0] = editInput.value;
                        p.innerText = editInput.value;
                        div.replaceChild(p, editInput);
                        console.log(toDos);
                    }
    
                });
            }

            
        });

        document.getElementById("toDos").append(li);
    });

    form.reset();
});

form.resetButton.addEventListener("click", () => {
    document.getElementById("toDos").innerHTML = "";
    toDos = [];
});



