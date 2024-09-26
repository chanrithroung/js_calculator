const isDigitOperator = (a) => a !== 'AC' && a !=='DEL' && a !== '='
const display = document.getElementById('display');

const firstValid = (a, x) => {
    return !a && (x === '+' || x ==='-' || x === 'x'|| x === '/' || x === '%')
}

const notZero = (a, x) => a || x !== '0'

const isNumber = (x) => x === '0' || x === '1' || x === '2' || x === '3' || x === '4' || x === '5' || x ==='6' || x === '7' || x =='8' || x == '9'
const isvalid = (a) => {
    const last = a[a.length-1]
    return (last !== '+' && last !=='-' && last !== 'x' && last !== '/' && last !== '%');

}  

const replaceAll = (a, b) => {
    let result = ""
    for (let i = 0; i < a.length; i++){
        if (a[i] != 'x') result += a[i];
        else result += b
    }
    return result;
}

let command = "";
const action = (x) => {
    if(isDigitOperator(x) && (isvalid(command) || isNumber(x)) && !firstValid(command, x) && notZero(command, x)) { 
        command+=x;
    }
    else if (x === '=') {
        command = replaceAll(command, '*');
        command = eval(command);
    }
    else if (x === 'AC' && command) {
      command = '';
    } 
    else if (x === 'DEL' && command) {
        command = command.slice(0, command.length - 1);
        // console.log(command.slice(0, 3))
    }

    display.innerHTML = command ? command : '0';
}

