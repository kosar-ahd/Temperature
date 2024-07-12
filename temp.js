let $ = document
let Cvalue = $.querySelector('.C')
let Fvalue = $.querySelector('.F')
let converterInput = $.querySelector('#converter')
let resultValue = $.querySelector('.result')
let convertButton = $.querySelector('.convertButton')
let resetButton = $.querySelector('.resetButton')
let changeButton = $.querySelector('.changeButton')


convertButton.addEventListener('click', function (){
    // console.log('convert')
    if(converterInput.value === ''){
        resultValue.innerHTML = 'Set Currect Value'
        resultValue.style.color = '#993300'
    }else{
        if(Cvalue.innerHTML === '°C'){
       calcF = (converterInput.value*9/5) + 32
       resultValue.innerHTML = calcF + '°F'
    }else{
        calcC = (converterInput.value-32)*5/9
        resultValue.innerHTML = calcC + '°C'
    }
    
    }
})

resetButton.addEventListener('click', function (){
    // console.log('reset')
    resultValue.innerHTML = ''
    converterInput.value = ''
})

changeButton.addEventListener('click', function (){
    // console.log('chanage')
    if(Cvalue.innerHTML === '°C'){
        Cvalue.innerHTML = '°F'
        Fvalue.innerHTML = '°C'
        $.title = 'Convert °F to °C'
        converterInput.setAttribute('placeholder', '°F')
    }else{
        Cvalue.innerHTML = '°C'
        Fvalue.innerHTML = '°F'
        $.title = 'Convert °C to °F'
        converterInput.setAttribute('placeholder', '°C')
    }
})

