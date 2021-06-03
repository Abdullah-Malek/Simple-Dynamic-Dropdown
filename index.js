var appendBtn = document.getElementById("append")
var container = document.getElementById('container')
var inputBox = document.getElementById('message')
// var firstItem = document.getElementById('item1')
var addBtn = document.getElementById('add-first')


var msgValue = ''
inputBox.addEventListener('input', function (e) {
    msgValue = e.target.value
})

function createElement() {
    if (msgValue == '' && msgValue == null && msgValue == undefined) {
        alert("enter some text into textbox")
    }
    else {
        var newele = document.createElement('li')
        var textNode = document.createTextNode(msgValue)
        newele.appendChild(textNode)
        newele.id = "item" + (container.childElementCount + 1);
    }
    return newele;
}


//Append Child
function append() {
    if (msgValue == '' && msgValue == null && msgValue == undefined) {
        alert("enter some text into textbox")
    }
    else {
        var newele = document.createElement('li')
        var textNode = document.createTextNode(msgValue)
        newele.appendChild(textNode)
        newele.id = "item" + (container.childElementCount + 1);
        container.appendChild(newele);
        inputBox.value = ''
        msgValue = ''
    }
}
appendBtn.addEventListener('click', append)
inputBox.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        append()
    }
})

//Insert Before First
addBtn.addEventListener('click', function () {
    if (msgValue == '' && msgValue == null && msgValue == undefined) {
        alert("enter some text into textbox")
    }
    else {
        var newele = document.createElement('li')
        var textNode = document.createTextNode(msgValue)
        newele.appendChild(textNode)
        newele.id = "item" + (container.childElementCount + 1);
        //First Item Dynamically
        var firstItem = container.firstElementChild
        container.insertBefore(newele, firstItem)
        inputBox.value = ''
        msgValue = ''
    }
})


var icon = document.getElementById('icon');

icon.addEventListener('click', function () {
    document.body.classList.toggle("light-theme")
    if (document.body.classList.contains("light-theme")) {
        icon.src = "/dark theme icon/moon.png"
    }
    else {
        icon.src = "/dark theme icon/sun.png"
    }
})


