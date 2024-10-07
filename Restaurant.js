class Reservation {
    constructor(customerName, numberOfGuests, reservationTime) {
        this.customerName = customerName;
        this.numberOfGuests = numberOfGuests;
        this.reservationTime = reservationTime;
    }
}

class ReservationSystem {
    constructor() {
        this.reservations = [];
    }

    addReservation(customerName, numberOfGuests, reservationTime) {
        const newReservation = new Reservation(customerName, numberOfGuests, reservationTime);
        this.reservations.push(newReservation);
        this.displayReservations();
    }

    displayReservations() {
        const reservationList = document.getElementById("reservationList");
        reservationList.innerHTML = ""; 

        this.reservations.forEach((reservation, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. Customer: ${reservation.customerName}, Guests: ${reservation.numberOfGuests}, Time: ${reservation.reservationTime}`;
            reservationList.appendChild(listItem);
        });
    }
}


document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const customerName = document.getElementById("customerName").value;
    const numberOfGuests = document.getElementById("numberOfGuests").value;
    const reservationTime = document.getElementById("reservationTime").value;

    const reservationSystem = new ReservationSystem();
    reservationSystem.addReservation(customerName, numberOfGuests, reservationTime);

    this.reset();
});
