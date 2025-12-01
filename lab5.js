const form = document.querySelector('form')
const dobInput = document.getElementById('dob');
const submittedDataCards = document.querySelector('.submittedDataCards');
let submittedData = []
// let submittedData = [{
//     pib: 'Іванов А. І.',
//     passport: 'BB №123456',
//     faculty: 'ІАТ',
//     dob: '03.05.2003'
// },
// {
//     pib: 'Іванов А. І.',
//     passport: 'BB №123456',
//     faculty: 'ІАТ',
//     dob: '03.05.2003'
// }]
const inputsRegexArray = [
    {
        input: document.getElementById('pib'),
        regex: /^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ']+\s[A-ZА-ЯІЇЄҐ]\.[A-ZА-ЯІЇЄҐ]\.$/
    },
    {
        input: document.getElementById('passport'),
        regex: /^[A-ZА-ЯІЇЄҐ]{2}\s№\d{6}$/
    },
    {
        input: document.getElementById('faculty'),
        regex: /^[A-ZА-ЯІЇЄҐ]{3,5}$/
    }
]

const generateCardsHTML = (array) => {
    const cardsArray = array.map(obj => {
        return `
            <div class='card'>
                <p><strong>ПІБ:</strong> ${obj.pib}</p>
                <p><strong>Паспорт:</strong> ${obj.passport}</p>
                <p><strong>Факультет:</strong> ${obj.faculty}</p>
                <p><strong>Дата народження:</strong> ${obj.dob}</p>
            </div>
        `;
    }).join('');
    submittedDataCards.innerHTML = cardsArray;
};

generateCardsHTML(submittedData)


const paintRed = (el) =>{
    el.style.borderColor = 'red'
    console.log(el);
}
const resetColor = (el) => {
    el.style.borderColor = ''; 
}
document.getElementById('clearButton').addEventListener('click', () =>{
    submittedDataCards.innerHTML = ''
    submittedData = []
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputsRegexArray.forEach(el => resetColor(el.input))
    let hasError = false
    inputsRegexArray.forEach(el => {
        if(!el.regex.test(el.input.value.trim())){
            paintRed(el.input)
            hasError = true
        }
    })
    if(!hasError){
        submittedData.push({
            pib: inputsRegexArray[0].input.value,
            passport: inputsRegexArray[1].input.value,
            faculty: inputsRegexArray[2].input.value,
            dob: dobInput.value.split('-').reverse().join('.')
        })
    generateCardsHTML(submittedData)
    }}
);

///завдання 2

const variantCell = document.getElementById('variantCell')
const colorPicker = document.getElementById('colorPicker')
const diagonal = document.querySelectorAll('.diagonal')
colorPicker.addEventListener('input', (e) => {
    pickedColor = e.target.value;
});
let pickedColor
let variantCellColor = '#fff'
variantCell.addEventListener('mouseover', (e) =>{
    e.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
})
variantCell.addEventListener('mouseout', (e) =>{
    e.target.style.backgroundColor = variantCellColor
})
variantCell.addEventListener('click', (e) => {
    variantCellColor = pickedColor
     e.target.style.backgroundColor = variantCellColor
})
variantCell.addEventListener('dblclick', ()=>{
    diagonal.forEach((e)=>{
        e.style.backgroundColor = pickedColor
    })
})