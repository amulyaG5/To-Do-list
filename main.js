let newItem = document.getElementById("newItem");
let post = document.getElementById("post");
let edit = false;
let editIndex = -1;


let toDoList = [];

function addItem() {
    console.log('submit');

    formValidation();
}


let formValidation = () => {

    if (newItem.value === "") {
        console.log("error")

    }
    else {
        console.log("it works")
        console.log(newItem.value)

        if (edit == true) {
            toDoList[editIndex] = newItem.value;
            newItem.value = "";
            edit = false;
            showPosts();
        } else {
            createToDoList();
        }


    }


}

let createToDoList = () => {
    toDoList.push(newItem.value);
    console.log(toDoList)
    showPosts();
}

let showPosts = () => {

    post.innerHTML = '';

    for (let i = 0; i < toDoList.length; i++) {
        post.innerHTML += '<p>' + toDoList[i] + '<i class="fas fa-edit edit" onclick="editPosts(' + i + ')"> <i>   <i class="fas fa-trash-alt" onclick="deletePosts(' + i + ')" ></i> </p>'
    }

    newItem.value = "";
}



let update = (i) => {
    toDoList[i] = newItem.value
    showPosts();

}

let deletePosts = (i) => {
    if (i > -1) {
        toDoList.splice(i, 1);
    }
    showPosts();
}

let editPosts = (i) => {
    newItem.value = toDoList[i];
    edit = true;
    editIndex = i;
};
