document.addEventListener('DOMContentLoaded', function () {
    // Fetch pets data from the API
    fetch('/api/v1/pets')
        .then(response => response.json())
        .then(pets => {
            // Render pets data on the webpage
            const petsContainer = document.getElementById('pets-container');
            pets.forEach(pet => {
                const petElement = document.createElement('p');
                petElement.textContent = `${pet.name} - ${pet.breed}`;
                petsContainer.appendChild(petElement);
            });
        })
        .catch(error => console.error('Error fetching pets:', error));
});