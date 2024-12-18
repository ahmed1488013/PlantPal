const plants = [
    { name: "Cactus", description: "A desert plant resistant to drought.", care: "Water it twice a week." },
    { name: "Philodendron", description: "A house plant that loves moderate light.", care: "Water it once a week." },
    { name: "Flowering Plant", description: "A beautiful plant that blooms in the spring.", care: "Water it three times a week." },
    { name: "Tarragon", description: "A great herb for cooking.", care: "Water it every three days." },
    { name: "Lavender", description: "An aromatic plant that loves bright sunlight.", care: "Water it once a week." }
];

function renderPlants(plantsList) {
    const plantListElement = document.getElementById("plantList");
    plantListElement.innerHTML = ""; // Clear current list

    plantsList.forEach(plant => {
        const plantCard = document.createElement("div");
        plantCard.classList.add("plant-card");

        const plantName = document.createElement("div");
        plantName.classList.add("plant-name");
        plantName.textContent = plant.name;

        const plantDescription = document.createElement("p");
        plantDescription.textContent = plant.description;

        const careButton = document.createElement("button");
        careButton.classList.add("care-button");
        careButton.textContent = "Care Instructions";
        careButton.onclick = () => showCareInstructions(plant);

        plantCard.appendChild(plantName);
        plantCard.appendChild(plantDescription);
        plantCard.appendChild(careButton);

        plantListElement.appendChild(plantCard);
    });
}

function showCareInstructions(plant) {
    const careModal = document.getElementById("careModal");
    const careInstructions = document.getElementById("careInstructions");
    careInstructions.textContent = plant.care;
    careModal.style.display = "flex";
}

function closeModal() {
    const careModal = document.getElementById("careModal");
    careModal.style.display = "none";
}

function searchPlants() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchQuery));
    renderPlants(filteredPlants);
}

// Initial render
renderPlants(plants);
