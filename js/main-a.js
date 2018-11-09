// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

const images = 'https://raw.githubusercontent.com/laavis/ajax-task/master/images.html';

const showImages = () => {
  fetch(images)
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