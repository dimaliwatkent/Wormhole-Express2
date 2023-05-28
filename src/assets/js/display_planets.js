const planets = [
  {
    name: "Moon",
    price: "₱30,000",
    imageSrc: "./assets/pictures/planets/earth_moon.png",
  },
  {
    name: "Earth",
    price: "₱3,000",
    imageSrc: "./assets/pictures/planets/earth.png",
  },
  {
    name: "Jupiter",
    price: "₱80,000",
    imageSrc: "./assets/pictures/planets/jupiter.png",
  },
  {
    name: "Mars",
    price: "₱50,000",
    imageSrc: "./assets/pictures/planets/mars.png",
  },
  {
    name: "Mercury",
    price: "₱5,000",
    imageSrc: "./assets/pictures/planets/mercury.png",
  },
  {
    name: "Venus",
    price: "₱70,000",
    imageSrc: "./assets/pictures/planets/venus.png",
  },
];

// Function to generate HTML code for a planet
function generatePlanetHTML(planet) {
  return `
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="planets">
          <a href="landing-page.html?planet=${planet.name.toLowerCase()}">
            <img src="${planet.imageSrc}" alt="${planet.name} Logo" />
          </a>
          <div class="informations">
            <h3 class="planet-name"><a href="landing-page.html?planet">${
              planet.name
            }</a></h3>
            <p class="price"><a href="landing-page.html?planet">${
              planet.price
            }</a></p>
          </div>
        </div>
      </div>
    `;
}

// Function to display all the planets on the homepage
function displayPlanets() {
  const planetsContainer = document.getElementById("planetsContainer");

  // Generate HTML code for each planet and append it to the container
  planets.forEach((planet) => {
    console.log(planet);
    const planetHTML = generatePlanetHTML(planet);
    planetsContainer.innerHTML += planetHTML;
  });
}

// Call the function to display the planets
displayPlanets();
