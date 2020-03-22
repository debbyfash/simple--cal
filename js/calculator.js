
var Operand1 = document.getElementById ('Operand1')
var Operand2 = document.getElementById('Operand2')

var Result =  document.getElementById ('Result')


function cal(Operator){
    var res;
    var Operator;

    if (Operator === "+"){
        res=parseInt(Operand1) + parseInt(Operand2); 
    }else if(Operator === "-"){
        res=parseInt(Operand1) - parseInt(Operand2);
    }else if( Operator === "/"){
        res=parseInt(Operand1) / parseInt(Operand2);
    }else if(Operator === "*"){
        res=parseInt(Operand1) * parseInt(Operand2);
    }else if(Operator === "%"){
        res=parseInt(Operand1) % parseInt(Operand2);
    }
     Result.value = res;       
}