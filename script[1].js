// Set minimum date to today
const dateInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

// Time slot selection
const timeSlots = document.querySelectorAll(".time-slot");
const timeInput = document.getElementById("timeSlot");

timeSlots.forEach((slot) => {
  slot.addEventListener("click", function () {
    timeSlots.forEach((s) => s.classList.remove("selected"));
    this.classList.add("selected");
    timeInput.value = this.dataset.time;
  });
});

// Form submission
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!timeInput.value) {
    alert("Please select a time slot");
    return;
  }

  alert("✓ Reservation Confirmed!\n\nThank you for choosing Bella Italia. We look forward to serving you!");
  this.reset();
  timeSlots.forEach((s) => s.classList.remove("selected"));
});
