document.addEventListener('DOMContentLoaded', () => {
   let menuIcon = document.querySelector('#menu-icon');
   let navbar = document.querySelector('.navbar');
   let logoLink = document.querySelector('#logo-link');
   let clickSound = document.querySelector('#clickSound');
   let soundToggle = document.querySelector('#soundToggle');
   let isSoundEnabled = true; // Sound is enabled by default

   // Debug: Check if soundToggle is found
   console.log('soundToggle element:', soundToggle);

   // Toggle the navbar and menu icon on click
   menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
   };

   // Close the navbar when a link is clicked
   navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
         menuIcon.classList.remove('bx-x');
         navbar.classList.remove('active');
      });
   });

   // Play sound when the logo link is clicked, if sound is enabled
   logoLink.addEventListener('click', () => {
      if (isSoundEnabled) {
         clickSound.currentTime = 0; // Reset the sound to the beginning
         clickSound.play(); // Play the sound
      }
   });

   // Toggle sound on/off when the button is clicked
   soundToggle.addEventListener('click', () => {
      console.log('Sound toggle clicked, isSoundEnabled:', isSoundEnabled); // Debug
      isSoundEnabled = !isSoundEnabled;
      soundToggle.textContent = isSoundEnabled ? 'Disable Sound' : 'Enable Sound';
   });
});