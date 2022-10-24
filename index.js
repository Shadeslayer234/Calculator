
const numbers = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation')
const deleteNumbers = document.querySelector('.delete')
const reset = document.querySelector('.reset')
const equal = document.querySelector('.equal')
const currentValue = document.querySelector('.value')

let result = ''
let operation = ''
let latestValue = 0

let values = []

const getValue = value => {
    result += value

    if(result.indexOf('.') === -1){ 
        result[0] === '0' && result.length > 1 ? result = result.substring(1,result.length) : result = result
    }
    setValue(result)
}

const setValue = value => {
    currentValue.innerHTML = value
}

const addNumber = () => {
    console.log(`Clicked`)
}

const resetValue = () => {
    result = ''
    values = []
    currentValue.innerHTML = 0
}

const deleteValue = () => {
    result = result.length >= 2 ? result.substring(0, result.length -1) : result = '0'
    setValue(result)
}

const getOperation = value => {
    values.push(result)
    result = ''
    operation = value
    if(values.length > 1) calculate(operation)
}

const calculate = operation => {
    switch (operation) {
        case '+':
                latestValue = Number(values[0]) + Number(values[1])
                result=''
                values = [latestValue]
                setValue(latestValue)
                break;
        
        case '-':
            
            latestValue = Number(values[0]) - Number(values[1])
            result=''
            values = [latestValue]
            setValue(latestValue)
            break;

        case 'X':
            
            latestValue = Number(values[0]) * Number(values[1])
            result=''
            values = [latestValue]
            setValue(latestValue)
            break;

        case '/':
            
            latestValue = Number(values[0]) / Number(values[1])
            result=''
            values = [latestValue]
            setValue(latestValue)
            break;
            }
}

const displayValue = operation => {
    values.push(result)
    calculate(operation)

    setValue(latestValue)
}


numbers.forEach(number => {
    number.addEventListener('click',()=> {
        getValue(number.innerHTML) 
    })
    }
)

operations.forEach(operation => {
    operation.addEventListener('click',()=>{
        getOperation(operation.innerHTML)
    })
})

reset.addEventListener('click',resetValue)
deleteNumbers.addEventListener('click',deleteValue)
equal.addEventListener('click',() => {
    displayValue(operation)
})

