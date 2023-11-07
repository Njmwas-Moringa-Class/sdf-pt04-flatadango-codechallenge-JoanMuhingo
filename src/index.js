// Your code here
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayFirstFilm(data[0]);
            displayAvailableTickets(data);
            availableTickets(data);
            displayFilmMenu(data);
            displayFilmInfo(data[0]);

        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

function availableTickets(film) {
    let capacity = film.capacity;
    let ticketsSold = film.tickets_sold;
    return capacity - ticketsSold;
}

function displayAvailableTickets(film) {
    const tickets = document.getElementById('ticket-num');
        
            const available = availableTickets(film);
            const ticketsOnSale = document.createElement('p');
            ticketsOnSale.textContent = ` ${available} remaining tickets`;
            tickets.appendChild(ticketsOnSale);
            return available;
        };

function displayFirstFilm(film) {
    const poster = document.getElementById('poster');
    const filmTitle = document.getElementById('title');
    const runTime = document.getElementById('runtime');
    const description = document.getElementById('film-info');
    const showTime = document.getElementById('showtime');
    const ticketsAvailable = document.getElementById('ticket-num');

    
    poster.src= film.poster;
    filmTitle.textContent = film.title;
    runTime.textContent = `${film.runtime} minutes`;
    description.textContent = film.description;
    showTime.textContent = film.showtime;

    const remainingTickets = displayAvailableTickets(film);
    ticketsAvailable.textContent = ` ${remainingTickets} available tickets`;
    
};

function displayFilmMenu(films){
    let filmList = document.getElementById('films');
    filmList.innerHTML ='';
    for (const film of films){
        const filmTitles = document.createElement('li');
        const filmTitleLink =document.createElement('a');
        filmTitleLink.href = '#';
        filmTitleLink.textContent =film.title;
        filmTitles.addEventListener('click',function (e) {
            e.preventDefault();
            displayFilmInfo(film);
        });
        filmTitles.appendChild(filmTitleLink);
        filmList.appendChild(filmTitles);
    }
 
}
function displayFilmInfo(film){
    const poster = document.getElementById('poster');
    const filmTitle = document.getElementById('title');
    const runTime = document.getElementById('runtime');
    const description = document.getElementById('film-info');
    const showTime = document.getElementById('showtime');
    const ticketsAvailable = document.getElementById('ticket-num');

    
    poster.src= film.poster;
    filmTitle.textContent = film.title;
    runTime.textContent = film.runtime;
    description.textContent = film.description;
    showTime.textContent = film.showtime;

    const remainingTickets = availableTickets(film);
    ticketsAvailable.textContent = ` ${remainingTickets} remaining tickets`;

}
function buyTicket(film){
const buyButton = document.getElementById('buy-ticket');
buyButton.addEventListener('click',function(e){
    e.preventDefault();
    const ticketsAvailable = document.getElementById('ticket-num');
    const availableTickets = parseInt(availableTickets.textContent);
    if( availableTickets <= 0){
        alert('tickets are sold out');
    }
    else{
    availableTickets--;
    ticketsAvailable.textContent = ` ${availableTickets} remaining tickets`;

    }

})
}


