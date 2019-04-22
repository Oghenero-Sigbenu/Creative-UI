    
let mobileToggle = document.getElementById('mobile-nav-toggle');
let mobileDropdown = document.getElementById('mobile-nav-dropdown');

mobileToggle.addEventListener('click', function () {
  mobileToggle.classList.toggle('open');
  mobileDropdown.classList.toggle('hide-dropdown');
})