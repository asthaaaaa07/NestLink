// JS for NestLink Platform (wadh.js)

// Ripple button click to reveal sections
document.addEventListener('DOMContentLoaded', () => {
  const rippleBtn = document.getElementById('ripple-btn');
  const hiddenSection = document.getElementById('hidden-section');

  if (rippleBtn && hiddenSection) {
    rippleBtn.addEventListener('click', () => {
      hiddenSection.classList.remove('hidden');
      rippleBtn.classList.add('clicked'); // Optional: fade or hide button after click
    });
  }

  // Example swipe matching logic (Tinder-style)
  const swipeLeftBtn = document.getElementById('swipe-left');
  const swipeRightBtn = document.getElementById('swipe-right');
  const matchCard = document.getElementById('match-card');

  if (swipeLeftBtn && swipeRightBtn && matchCard) {
    swipeLeftBtn.addEventListener('click', () => {
      swipeCard('left');
    });

    swipeRightBtn.addEventListener('click', () => {
      swipeCard('right');
    });
  }

  function swipeCard(direction) {
    matchCard.classList.add(`swipe-${direction}`);
    setTimeout(() => {
      matchCard.classList.remove(`swipe-${direction}`);
      loadNextProfile();
    }, 400);
  }

  function loadNextProfile() {
    // Replace with real logic to load next roommate/profile
    matchCard.innerHTML = "<p>Next profile coming soon...</p>";
  }

  // Placeholder for compatibility score calculation
  function calculateCompatibility(userA, userB) {
    // Compare lifestyle preferences, return % match
    return Math.floor(Math.random() * 100);
  }
});
