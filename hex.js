const hex=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let btn = document.getElementById("btn");

function myFuntion(){
    let hexColor = " #";
    for(let i =0; i<6; i++){
        hexColor += hex[randomColor()]
    }
    document.getElementById('bgc').innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;
    document.getElementById("myInput").value = hexColor;
}
function randomColor(){
   return Math.floor(Math.random() * 16);
}

function myFunctioncopy(){
    let copycolor = document.getElementById("myInput");
    copycolor.select();
    copycolor.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copycolor.value);
}