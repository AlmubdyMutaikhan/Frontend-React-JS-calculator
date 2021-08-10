/* Helper functions to validate data*/

/*  Validation rules 
        1. if number has already '-' sign then ignore new '-'
        2. ignore all signs except numbers, '-', '.'
        3. if number has already '.' then ignore new '.'
*/

/* 
    Input params: Display value @String, New sign @Character
    Output: New display value @String  
    Description: Checks to whether concat or not new entered letter for validity by those rules
*/
const validateNumberValue = (dispayValue, sign) => { 
    if(dispayValue && sign) {
        let resultValue = null;
        // check for point, left '.' if value doesn't have any
        if(sign === '.') {
            sign = dispayValue.includes('.') ? '' : '0.';
        }
        
        // check for '-'
        if(sign === '-') {
            // if number doesnt have '-' then
            if(!dispayValue.includes('-')) {
                return '-';
            } else {
                // ignore its value by clearing 
                sign = '';
            }
        }

        if(dispayValue === '0') {
            resultValue = sign;
        } else if(!isNaN(sign)){
            resultValue = dispayValue.concat(sign); 
        } else {
            resultValue = dispayValue;
        }

        return resultValue; 
    } else {
        return 'Error';
    }
}

/* 
    Input params: Selected operator @Character
    Output: True/false @Boolean
    Description: Checks to whether selected operator is valid or not.
*/

const validateOperator = (operator) => {
    console.log("we get " + operator);
    const OPERATORS = ['+','-','/','x'];
    return OPERATORS.includes(operator);
}

const validateOutput = (value) => {
    if(value.length > 10) {
        const outputTag = document.getElementById('log');
        outputTag.style.fontSize="10px";    
    }

    return value;
}

export {
    validateNumberValue,
    validateOperator,
    validateOutput
}