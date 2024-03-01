document.addEventListener('DOMContentLoaded', () => {
    const seatSelectionDiv = document.querySelector('.seat-selection');
    const numRows = 30; // Total number of rows
    const seatConfig = ['A', 'B', 'C', '', 'D', 'E', 'F', 'G', '', 'H', 'J', 'K']; // Seat configuration for a 3-4-3 layout

    // Generate the seat layout
    for (let row = 1; row <= numRows; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        seatConfig.forEach(seatLetter => {
            if (seatLetter) {
                const seat = document.createElement('div');
                seat.className = 'seat available';
                seat.dataset.seat = `${row}${seatLetter}`;
                seat.innerText = seatLetter;
                rowDiv.appendChild(seat);
            } else {
                // Create an aisle
                const aisle = document.createElement('div');
                aisle.className = 'aisle';
                rowDiv.appendChild(aisle);
            }
        });

        seatSelectionDiv.appendChild(rowDiv);
    }

    // Add click event listeners to all available seats
    document.querySelectorAll('.seat.available').forEach(seat => {
        seat.addEventListener('click', function() {
            this.classList.toggle('selected');
            updateTotalPrice();
        });
    });

    // Pricing information
    const seatPrice = {
        regular: 100,
        premium: 150
    };

    // Update the total price based on selected seats
    function updateTotalPrice() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        let totalPrice = 0;

        selectedSeats.forEach(seat => {
            if (seat.classList.contains('premium')) {
                totalPrice += seatPrice.premium;
            } else {
                totalPrice += seatPrice.regular;
            }
        });

        document.getElementById('total-price').value = totalPrice;
    }

    // Handle form submission
    document.querySelector('#booking-form').addEventListener('submit', function(e) {
        // Get all selected seats
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const seatNumbers = Array.from(selectedSeats).map(seat => seat.dataset.seat);

        // Update the hidden input with the selected seat numbers
        document.getElementById('selected-seats').value = seatNumbers.join(',');
    });
});
