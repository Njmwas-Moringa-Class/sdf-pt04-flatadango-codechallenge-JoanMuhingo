// Your code here
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const firstFilm = data[0];
            displayFirstFilm (firstFilm);
            displayFilmMenu(data);
            availableTickets(data);
            
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
        buyTicket();
});

function displayFirstFilm(film){
    const infoBox= document.getElementById('showing');
    const filmTitle = document.getElementById('title');
    const runTime = document.getElementById('runtime');
    const showTime = document.getElementById('showtime');
    const availableTickets = document.getElementById('ticket-num');

    const poster = document.createElement ('img');
    
    poster.src = film.poster; 
   filmTitle.textContent = film.title;
   runTime.textContent = film.runtime;
   showTime.textContent = film.showtime;

   availableTickets.innerHTML = '';
   availableTickets();
  infoBox.appendChild(poster);
};
displayFirstFilm();

function displayFilmMenu(films){
    let filmList = document.getElementById('films');
    filmList.innerHTML ='';
    for (const film of films){
        films.innerHTML += '<li>' + film.title +'</li>';
    }

}

displayFilmMenu();

function buyTicket(){
    const filmBox = document.getElementById('showing');
  const buyTicket = document.getElementById('buy-ticket');
  const remTickets = document.getElementById('ticket-num');
  remTickets.textContent = availableTickets();
  let tickets = remTickets.textContent ;
  buyTicket.addEventListener('onClick',function(e){
    e.preventDefault();
    if(tickets <= 0){
        alert('tickets are sold out.');
    }
    else{
       const ticketsOnSale = document.createElement('P');
       ticketsOnSale.textContent = tickets;
       filmBox.appendChild(ticketsOnSale);
    }
    
  });
}

function availableTickets(film){
    let capacity = film.capacity;
    let ticketsSold = film.tickets_sold;
    return capacity - ticketsSold;
}
