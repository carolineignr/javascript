var list = document.getElementById('objectsList');
var objectList = ['João', 'Rafael', 'Heloisa'];
creatList();

function creatList() {
    objectList.forEach(addToList);
}

function addToList(value) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(value));
    list.appendChild(item);
}

function updateList(value) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(value));
    list.appendChild(item);
}

function search() {
    var input = document.getElementById('searchInput');
    var value = input.value.toUpperCase();
    var li = list.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        var txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(value) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
            console.log("else");
        }
    }
}

function addElements() {
    var input = document.getElementById('addInput');
    var value = input.value;
    objectList.push(value);
    updateList(value);
    input.value = "";
}
