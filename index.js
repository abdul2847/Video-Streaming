function searchVideos() {
    const searchQuery = document.getElementById('searchQuery').value;
    const accessToken = '47709130ed82c04a8d8e2a048a3f6086'; // Replace with your Vimeo access token

    // Construct the API URL for searching videos
    const apiUrl = `https://api.vimeo.com/videos?query=${encodeURIComponent(searchQuery)}`;

    // Make a GET request to the API
    fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayResults(data.data);
    })
    .catch(error => {
        console.error('Error fetching videos:', error);
    });
}

function displayResults(videos) {
    const videoResults = document.getElementById('videoResults');
    videoResults.innerHTML = '';

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');

        const videoEmbed = document.createElement('div');
        videoEmbed.classList.add('video-embed');
        videoEmbed.innerHTML = video.embed.html;

        const videoTitle = document.createElement('h2');
        videoTitle.classList.add('video-title');
        videoTitle.textContent = video.name;

        const videoDescription = document.createElement('p');
        videoDescription.classList.add('video-description');
        videoDescription.textContent = video.description;

        videoCard.appendChild(videoEmbed);
        videoCard.appendChild(videoTitle);
        videoCard.appendChild(videoDescription);

        videoResults.appendChild(videoCard);
    });
}
