const urlParams = new URLSearchParams(window.location.search);
const planet = urlParams.get("planet");

// Array of planet information
const planets = [
  {
    name: "Moon",
    price: "₱30,000",
    imageSrc: "./assets/pictures/planets/earth_moon.png",
    distance: "384,400 km",
    travelTime: "3 days",
    funFact: "The Moon is Earth's only natural satellite.",
    description:
      "The Moon is a dusty and desolate place with a barren landscape. It has no atmosphere, which means there is no weather or air on the Moon. The surface is covered in craters, mountains, and plains called maria. Despite its desolation, the Moon has always been a source of fascination and inspiration for humanity.",
  },
  {
    name: "Earth",
    price: "₱3,000",
    imageSrc: "./assets/pictures/planets/earth.png",
    distance: "149.6 million km",
    travelTime: "6 months",
    funFact: "Earth is the only known planet to support life.",
    description:
      "Earth is a beautiful and diverse planet with a wide range of ecosystems. It has a unique atmosphere that provides the air we breathe and protects us from the harshness of space. The planet is home to an incredible variety of plants, animals, and humans. From stunning landscapes to bustling cities, Earth offers a rich tapestry of cultures and natural wonders.",
  },
  {
    name: "Jupiter",
    price: "₱80,000",
    imageSrc: "./assets/pictures/planets/jupiter.png",
    distance: "628.7 million km",
    travelTime: "2 years",
    funFact: "Jupiter is the largest planet in our solar system.",
    description:
      "Jupiter is a gas giant with a turbulent atmosphere and a system of rings. It is known for its iconic Great Red Spot, a massive storm that has been raging for centuries. Jupiter has a strong magnetic field and numerous moons, including the four largest ones known as the Galilean moons. Exploring Jupiter and its moons could provide valuable insights into the formation and evolution of our solar system.",
  },
  {
    name: "Mars",
    price: "₱50,000",
    imageSrc: "./assets/pictures/planets/mars.png",
    distance: "225 million km",
    travelTime: "9 months",
    funFact:
      "Mars is often called the Red Planet due to its reddish appearance.",
    description:
      "Mars is a rocky planet with polar ice caps and a thin atmosphere. Its reddish color comes from iron oxide, also known as rust, that covers much of its surface. Mars has been a focal point of scientific exploration and the search for signs of past or present life beyond Earth. With its similar geological features and potential for resources, Mars has captured the imagination of scientists and space enthusiasts alike.",
  },
  {
    name: "Mercury",
    price: "₱5,000",
    imageSrc: "./assets/pictures/planets/mercury.png",
    distance: "77.3 million km",
    travelTime: "3 months",
    funFact: "Mercury is the closest planet to the Sun.",
    description:
      "Mercury is a small and heavily cratered planet with a hot and inhospitable surface. It experiences extreme temperature variations, ranging from scorching hot during the day to freezing cold at night. Due to its proximity to the Sun, Mercury has a highly elliptical orbit and a relatively short year. Despite its harsh conditions, studying Mercury provides valuable insights into the formation and dynamics of rocky planets.",
  },
  {
    name: "Venus",
    price: "₱70,000",
    imageSrc: "./assets/pictures/planets/venus.png",
    distance: "38.0 million km",
    travelTime: "5 months",
    funFact: "Venus is the hottest planet in our solar system.",
    description:
      "Venus is a rocky planet with a thick and toxic atmosphere, making it a hostile environment. Its atmosphere is mainly composed of carbon dioxide, which creates a runaway greenhouse effect, leading to extreme heat and pressure on the planet's surface. Venus has a dense cloud cover that prevents us from seeing its surface in visible light. Despite its inhospitable conditions, studying Venus can provide valuable insights into the potential effects of climate change.",
  },
];

// Function to display the planet information on the landing page
function displayPlanetInformation() {
  // Find the selected planet in the array
  const selectedPlanet = planets.find(
    (p) => p.name.toLowerCase() === planet.toLowerCase()
  );

  // Update the content based on the selected planet
  if (selectedPlanet) {
    document.getElementById("planetName").textContent = selectedPlanet.name;
    document.getElementById("planetPrice").textContent = selectedPlanet.price;
    document.getElementById("planetImage").src = selectedPlanet.imageSrc;
    document.getElementById("planetDistance").textContent =
      selectedPlanet.distance;
    document.getElementById("planetTravelTime").textContent =
      selectedPlanet.travelTime;
    document.getElementById("planetFunFact").textContent =
      selectedPlanet.funFact;
    document.getElementById("planetDescription").textContent =
      selectedPlanet.description;
  } else {
    document.getElementById("planetName").textContent = "Planet Not Found";
    document.getElementById("planetPrice").textContent = "Price Not Available";
    // Set other planet information accordingly
  }
}

// Call the function to display the planet information
displayPlanetInformation();
