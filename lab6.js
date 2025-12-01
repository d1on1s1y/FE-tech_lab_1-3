let fetchedData;
const usersNumber = 20;
const dataCards = document.querySelector('.dataCards');

document.querySelector('button').addEventListener('click', ()=> {
    console.log('+');
    fetch(`https://randomuser.me/api/?results=${usersNumber}`)
    .then((response) => {
        return response.json();
    })
    .then(data=>{
        console.log(data.results);
        drawCards(data.results)
    })
})

const drawCards = (array) => {
    const cardsString = array.map(user => {
        return `
            <div class='card'>
                <img src ="${user.picture.large}" alt = "photo of ${user.name.title} ${user.name.first} ${user.name.last}"/>
                <p><strong>Name:</strong><br/> ${user.name.title} ${user.name.first} ${user.name.last}</p>
                <p><strong>Location:</strong><br/> ${user.location.city}, ${user.location.state} </p>
                <p><strong>Phone:</strong><br/> ${user.cell} </p>
            </div>
        `;
    }).join('');
    dataCards.innerHTML = cardsString;
};