
function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    contents.forEach(content => {
        content.classList.add('hidden');
    });

    document.getElementById(tabId).classList.remove('hidden');
    event.target.classList.add('active');
}

function addImage() {
    const gallery = document.getElementById('gallery-images');
    
    // Dummy image URL for adding new images
    const newImage = document.createElement('img');
    newImage.src = 'https://via.placeholder.com/100';
    gallery.appendChild(newImage);
}
