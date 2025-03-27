document.addEventListener('DOMContentLoaded', () => {
   // Select DOM elements
   let menuIcon = document.querySelector('#menu-icon');
   let navbar = document.querySelector('.navbar');
   let logoLink = document.querySelector('#logo-link');
   let clickSound = document.querySelector('#clickSound');
   let soundToggle = document.querySelector('#soundToggle');
   let isSoundEnabled = true; // Sound is enabled by default

   // Debug: Log all elements to ensure they are found
   console.log('menuIcon:', menuIcon);
   console.log('navbar:', navbar);
   console.log('logoLink:', logoLink);
   console.log('clickSound:', clickSound);
   console.log('soundToggle:', soundToggle);

   // Toggle the navbar and menu icon on click
   if (menuIcon && navbar) {
      menuIcon.onclick = () => {
         menuIcon.classList.toggle('bx-x');
         navbar.classList.toggle('active');
      };
   } else {
      console.error('menuIcon or navbar not found in the DOM');
   }

   // Close the navbar when a link is clicked
   if (navbar) {
      navbar.querySelectorAll('a').forEach(link => {
         link.addEventListener('click', () => {
            if (menuIcon && navbar) {
               menuIcon.classList.remove('bx-x');
               navbar.classList.remove('active');
            }
         });
      });
   } else {
      console.error('navbar not found, cannot add click listeners to links');
   }

   // Play sound when the logo link is clicked, if sound is enabled
   if (logoLink && clickSound) {
      logoLink.addEventListener('click', () => {
         if (isSoundEnabled) {
            console.log('Attempting to play sound...');
            clickSound.currentTime = 0; // Reset the sound to the beginning
            clickSound.play().catch(error => {
               console.error('Error playing sound:', error);
            });
         }
      });
   } else {
      console.error('logoLink or clickSound not found in the DOM');
   }

   // Toggle sound on/off when the button is clicked
   if (soundToggle) {
      soundToggle.textContent = isSoundEnabled ? 'Disable Sound' : 'Enable Sound'; // Set initial text
      soundToggle.addEventListener('click', () => {
         isSoundEnabled = !isSoundEnabled;
         soundToggle.textContent = isSoundEnabled ? 'Disable Sound' : 'Enable Sound';
         console.log('Sound toggle clicked, isSoundEnabled:', isSoundEnabled);
      });
   } else {
      console.error('soundToggle element not found in the DOM');
   }
});
