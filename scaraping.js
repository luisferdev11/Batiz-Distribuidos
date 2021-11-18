let array = new Array();
let li = document.getElementsByTagName("li");

alert(li);
for (let i = 0; i < li.length; i++) {
    array[i] = li[i].textContent;
}

console.log(array);

document.getElementById("salida").innerHTML = array;
