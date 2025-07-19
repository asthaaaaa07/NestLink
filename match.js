const profiles = [
  {
    name: "Ananya, 22",
    info: "Early riser • Vegetarian • Introvert",
    image: "images/user1.jpg",
  },
  {
    name: "Riya, 24",
    info: "Night owl • Non-smoker • Loves pets",
    image: "images/user2.jpg",
  },
  {
    name: "Karan, 23",
    info: "Gym lover • Early riser • Extrovert",
    image: "images/user3.jpg",
  },
  {
    name: "Aman, 21",
    info: "Student • Quiet • Likes reading",
    image: "images/user4.jpg",
  }
];

let currentIndex = 0;
const container = document.getElementById("card-container");

function showProfile(index) {
  if (index >= profiles.length) {
    container.innerHTML = "<h2>No more profiles!</h2>";
    return;
  }

  const profile = profiles[index];
  container.innerHTML = `
    <div class="match-card" id="current-card">
      <img src="${profile.image}" alt="Roommate Profile" />
      <h2>${profile.name}</h2>
      <p>${profile.info}</p>
    </div>
  `;
}

document.getElementById("swipe-left").addEventListener("click", () => {
  const card = document.getElementById("current-card");
  card.style.transform = "translateX(-400px) rotate(-15deg)";
  card.style.opacity = 0;
  setTimeout(() => {
    currentIndex++;
    showProfile(currentIndex);
  }, 400);
});

document.getElementById("swipe-right").addEventListener("click", () => {
  const card = document.getElementById("current-card");
  card.style.transform = "translateX(400px) rotate(15deg)";
  card.style.opacity = 0;
  setTimeout(() => {
    currentIndex++;
    showProfile(currentIndex);
  }, 400);
});

// Initial load
showProfile(currentIndex);
