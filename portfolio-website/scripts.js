// Update Date and Time
function updateDateTime() {
    const dateTime = new Date();
    document.getElementById('datetime').innerText = dateTime.toLocaleString();
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call on page load

// Dark/Light Mode Toggle
const toggleButton = document.getElementById('toggle-dark-mode');
const icon = document.getElementById('icon');


// Load the saved theme preference on page load
document.addEventListener("DOMContentLoaded", () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark', isDarkMode);
    icon.src = isDarkMode 
        ? "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png"  // Sun icon for dark mode
        : "https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png"; // Moon icon for light mode
});

// Toggle dark mode and save preference
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');

    // Update icon based on mode
    icon.src = isDarkMode 
        ? "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png"  // Sun icon for dark mode
        : "https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png"; // Moon icon for light mode

    // Save the mode preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
});
