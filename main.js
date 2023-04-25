let newItem = document.getElementById("newItem");
let post = document.getElementById("post");

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
        createToDoList();
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
        post.innerHTML += '<p>' + toDoList[i] + '</p>'
    }
}


