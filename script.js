function expression(x){

    document.getElementById("exp").value = document.getElementById("exp").value + x;}
function clearall(){
    document.getElementById("exp").value="";
    document.getElementById("res").value="";
}
function clearele(){
    let a=document.getElementById("exp").value
    a=a.slice(0,-1);
    document.getElementById("exp").value=a
}
function result(){
    let y=document.getElementById("exp").value;
    y=eval(y);
    document.getElementById("exp").value="";
    document.getElementById("res").value=y;
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}