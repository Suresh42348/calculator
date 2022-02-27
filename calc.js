function display(val){
    document.getElementById("result").value+= val;
     
}

// clear display
function Clear()
{
document.getElementById("result").value = ""
}
// function for backspacing
function ce()  
{  
var a = document.getElementById("result").value;
document.getElementById("result").value = a.substring(0, a.length - 1);
/* remove the element from total length ? 1 */   
}  

// function for calculation
function calc()
{
let x = document.getElementById("result").value
let y = eval(x)
document.getElementById("result").value = y
}
