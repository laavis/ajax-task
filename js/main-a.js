// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

const showImages = () => {
  fetch('/images.html')
    .then((response) => response.text())
    .then((html) => {
      const images = document.querySelector('#images');
      images.innerHTML = html;

      // function from main.js
      // randomizes hover overlay
      // don't mind
      randomizeColors();
    });
}

showImages();