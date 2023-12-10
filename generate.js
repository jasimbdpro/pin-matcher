//Generate part
let randomNumbers = [];
for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 10)
    randomNumbers.push(randomNumber);
}
let generatedNumber = randomNumbers.join('')
let generateButton = document.getElementById('generate-btn-id')
let myGeneration = document.getElementById('myGeneration')
generateButton.addEventListener('click', function () {
    myGeneration.value = generatedNumber
    const notifyGenerate = document.getElementById('notify-click-generate')
    notifyGenerate.style.display = 'none'

})

// Submit part
const calcBody = document.querySelectorAll('div.button')
const myInput = document.getElementById('myInput')
calcBody.forEach((button) => {
    button.addEventListener('click', e => {
        myInputValue(e.target.dataset.value)
    })
})
const myInputValue = (myValue) => {
    const notifyGenerate = document.getElementById('notify-click-generate')
    if (myGeneration.value === '') return notifyGenerate.style.display = 'block';
    else if (myValue === 'C') return myInput.value = '';
    else if (myValue === '<') return myInput.value = myInput.value.toString().slice(0, -1);
    else if (myInput.value !== '' && myValue !== '<' && myValue !== 'C') {
        myInput.value = myInput.value + myValue
    }
    else {
        myInput.value = myValue;
    }

}

// combination part 
const mySubmit = document.querySelector('.submit-btn')
mySubmit.addEventListener('click', function () {
    const notifyFalse = document.getElementById('notify-false')
    const notifyTrue = document.getElementById('notify-true')
    const notifyGenerate = document.getElementById('notify-click-generate')
    if (myGeneration.value === '') return notifyGenerate.style.display = 'block';
    else if (myInput.value === myGeneration.value) {
        notifyTrue.style.display = 'block'
        notifyFalse.style.display = 'none'
    }
    else {
        notifyFalse.style.display = 'block'
        notifyTrue.style.display = 'none'
    }
})