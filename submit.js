const calcBody = document.querySelectorAll('div.button')
const myInput = document.getElementById('myInput')
calcBody.forEach((button) => {
    button.addEventListener('click', e => {
        myInputValue(e.target.dataset.value)
    })
})
const myInputValue = (myValue) => {
    if (myValue === 'C') return myInput.value = '';
    else if (myValue === '<') return myInput.value = myInput.value.toString().slice(0, -1);
    else if (myInput.value !== '' && myValue !== '<' && myValue !== 'C') {
        myInput.value = myInput.value + myValue
    }
    else {
        myInput.value = myValue;
    }
}