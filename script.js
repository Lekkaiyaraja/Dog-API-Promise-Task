document.addEventListener("DOMContentLoaded", function() {
    // Fetch the image and display it
    fetchImage()
        .then(displayImage)
        .catch(handleError);
});

function fetchImage() {
    // Function to fetch the image using a Promise
    return new Promise((resolve, reject) => {
        fetch('https://http.dog/101.jpg') // Replace with actual URL
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                resolve(URL.createObjectURL(blob)); // Resolve with the URL to the image blob
            })
            .catch(error => {
                reject(error);
            });
    });
}

function displayImage(imageUrl) {
    // Function to display the image on the webpage
    const imageContainer = document.getElementById('imageContainer');
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.classList.add('img-fluid'); // Bootstrap class for responsive images
    imageContainer.appendChild(imageElement);
}

function handleError(error) {
    // Function to handle errors
    console.error('Error fetching image:', error);
    // Display an error message on the webpage if needed
}
