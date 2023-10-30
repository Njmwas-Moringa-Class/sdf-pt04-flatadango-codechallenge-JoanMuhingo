// Your code here
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const firstFilm = data[0];
            displayFirstFilm(firstFilm);
            displayAvailableTickets(data);
            availableTickets(data);
            displayFilmMenu(data);
            displayFilmInfo(data);

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

function displayAvailableTickets(films) {
    const tickets = document.getElementById('ticket-num');
        films.forEach(film => {
            const available = availableTickets(film);
            const ticketsOnSale = document.createElement('p');
            ticketsOnSale.textContent = `Available Tickets: ${available}`;
            tickets.appendChild(ticketsOnSale);
        });
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
    runTime.textContent = film.runtime;
    description.textContent = film.description;
    showTime.textContent = film.showtime;

    const availableTicketsCount = availableTickets(film);
    ticketsAvailable.textContent = `Available Tickets: ${availableTicketsCount}`;
    
};

displayFirstFilm();


function displayFilmMenu(films){
    let filmList = document.getElementById('films');
    filmList.innerHTML ='';
    for (const film of films){
        const filmTitles = document.createElement('li');
        filmTitles.textContent =film.title;
        filmTitles.addEventListener('click',function () {
            displayFilmInfo(film);
        });
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

    const availableTicketsCount = availableTickets(film);
    ticketsAvailable.textContent = `Available Tickets: ${availableTicketsCount}`;

}
function buyTicket(){
const button = document.getElementById('buy-ticket');
button.addEventListener('click',function(e){
    e.preventDefault();
    const ticketsAvailable = document.getElementById('ticket-num');
    const availableTicketsCount = availableTickets(film);
    if( availableTicketsCount <= 0){
        alert('tickets are sold out');
    }
    else{
    availableTicketsCount--;
    ticketsAvailable.textContent = `Available Tickets: ${availableTicketsCount}`;

    }

})
}