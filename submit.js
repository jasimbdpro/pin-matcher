const calcBody = document.querySelectorAll('div.button')
const myInput = document.getElementById('myInput')
calcBody.forEach((button) => {
    button.addEventListener('click', e => {
        myInput.value = (e.target.dataset.value)
    })
})