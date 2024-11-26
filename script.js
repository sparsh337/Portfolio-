function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// function scrollProjects(direction) {
//   const wrapper = document.querySelector('.projects-wrapper');
//   const scrollAmount = 220;  // Amount to scroll when clicking the button
  
//   wrapper.scrollLeft += direction * scrollAmount;
// }

function scrollProjects(direction) {
  const wrapper = document.querySelector('.projects-wrapper');
  const scrollAmount = wrapper.offsetWidth / 3;  // Scroll by one visible project width
  
  wrapper.scrollLeft += direction * scrollAmount;
}

