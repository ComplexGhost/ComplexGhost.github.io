// Get the current hour
const currentHour = new Date().getHours();

// Get the welcome message element
const welcomeMessage = document.getElementById('welcome-message');

// Set different welcome messages based on the time of day
if (currentHour < 12) {
    welcomeMessage.textContent = 'Good morning! Welcome to School Resources';
} else if (currentHour < 18) {
    welcomeMessage.textContent = 'Good afternoon! Welcome to School Resources';
} else {
    welcomeMessage.textContent = 'Good evening! Welcome to School Resources';
}
