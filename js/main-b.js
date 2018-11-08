// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
let body = '';
const images = 'https://raw.githubusercontent.com/ilkkamtk/BCW2/master/images.json';


const showImages = () => {
  fetch(images)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      json.forEach((img) => {
        const markup = `<li>
                  <figure>
                    <a href="img/original/${img.mediaURL}"><img src="img/thumbs/${img.mediaThumb}"></a>
                    <figcaption>
                      <h3>${img.mediaTitle}</h3>
                      <div>
                        <p>This a picture</p>
                        <p>Oh boy I do love photos</p>
                        <p>Can't believe I'm doing this</p>
                      </div>
                    </figcaption>
                  </figure>
                </li>`;
        body += markup;
      });
      document.querySelector('#images').innerHTML = body;
      randomizeColors();
    });
};

showImages();


// After the loop print the HTML into <ul> element using innerHTML.
