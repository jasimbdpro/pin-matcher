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
})