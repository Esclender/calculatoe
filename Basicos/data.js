let ipt = document.querySelector(`#ipt`)
let pastN = document.querySelector(`.past`)
let plus = document.querySelector(`.plus`)
let less = document.querySelector(`.less`)
let slide = document.querySelector(`.slide`)
let multiply= document.querySelector(`.mult`)

let rT= document.querySelector(`#result-tit`)
let result = document.querySelector(`#result`)
let valores = [];
let operadores = ["0","+", "-", "*", "/"]
let suma = 0;
let simbolo = "";
let condicion = 0;



function saveValue(simbo){
    
    valores.push(ipt.value)
    let ancho = valores.length - 1;

    if (condicion == 0) {
        if (suma == 0) {
            suma = parseFloat(valores[0]);
            pastN.innerHTML = `${suma}`
        }

        for (let index = 4; index > 0; index--) {
            if (index == simbo) {
                simbolo = operadores[index]
                console.log(simbolo)
            }
        }
    }
    if (pastN.value > 0) {
    
            
        pastN.value = valores[ancho]

        switch (simbo) {
            case 1:
                suma = parseFloat(suma) + parseFloat(pastN.value);
                break;
            case 2:
                suma = parseFloat(suma) - parseFloat(pastN.value);
                break; 
            case 3:
                suma = parseFloat(suma) * parseFloat(pastN.value);
                break;  
            case 4:
                suma = parseFloat(suma) / parseFloat(pastN.value);
                break;      
        
            default:
                break;
        }
        
        pastN.innerHTML = `${suma}`
        console.log(suma)
       
    }
    pastN.value =  ipt.value
}


function resul() {
    switch (simbolo) {
        case "+":
            suma = parseFloat(suma) + parseFloat(ipt.value);
            rT.innerHTML = "Tu respuesta es "
            result.innerHTML = `${suma}`
            break;
        case "-":
            suma = -parseFloat(suma) + parseFloat(ipt.value);
            rT.innerHTML = "Tu respuesta es "
            result.innerHTML = `${suma}`
            break; 
        case "*":
            suma = parseFloat(suma) * parseFloat(ipt.value);
            rT.innerHTML = "Tu respuesta es "
            result.innerHTML = `${suma}`
            break;  
        case "/":
            suma = parseFloat(suma) / parseFloat(ipt.value);
            rT.innerHTML = "Tu respuesta es "
            result.innerHTML = `${suma}`
            break;      
    
        default:
            break;
    }
}
