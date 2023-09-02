function clearScreen(){
    document.getElementById("display").value = display.value.toString().slice(0,-1);
}
function show(value){
    document.getElementById("display").value += value;
}
function calculate(){
    let p = document.getElementById("display").value;
    let q = eval(p);
    document.getElementById("display").value = q;
}
