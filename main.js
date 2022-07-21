var preVal = 0;
var flag = '';

function Display(Number) {

    document.getElementById('input_file').value += Number;

    var p = document.getElementById('input_file').value;
    console.log(p);
    // var q = eval(p);
    // document.getElementById('input_file').value = q;

}

function Percentage() {

}

function Clear() {
   
}

function allClear() {
    document.getElementById('input_file').value = '';
    preVal = '';
    flag = '';
}



function Sum(){
     preVal = document.getElementById('input_file').value;
     flag = "+";
     document.getElementById('input_file').value = '';
    

}

function Sub(){
    preVal = document.getElementById('input_file').value;
    flag = "-";
    document.getElementById('input_file').value = '';
}
function Mult(){
    preVal = document.getElementById('input_file').value;
     flag = "*";
     document.getElementById('input_file').value = '';
}

function Div(){
    preVal = document.getElementById('input_file').value;
     flag = "/";
     document.getElementById('input_file').value = '';
}


function Calculate(){
    let newVal = parseInt(document.getElementById('input_file').value);
    if(flag === "+"){
        res =  parseInt(preVal) + parseInt(newVal);
    }else if(flag === "-"){
        res =  parseInt(preVal)  - parseInt(newVal);
    }else if(flag === "*"){
        res = parseInt(preVal)  * parseInt(newVal);
    }else if(flag === "/"){
        res = parseInt(preVal)  / parseInt(newVal);
    }
   
  
    document.getElementById('input_file').value =res;
}

