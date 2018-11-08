// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
const showImages = () => {

  const ul = document.querySelector('ul');
  const images = 'https://raw.githubusercontent.com/ilkkamtk/BCW2/master/images.json';


  fetch(images)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      json.forEach((image) => {
        
        const li = document.createElement('li');
        const figure = document.createElement('figure');
        const figcaption = document.createElement('figcaption');
        const title = document.createElement('h3');
        const a = document.createElement('a');
        const img = document.createElement('img');
        const p = document.createElement('p');
        const p2 = document.createElement('p');

        title.innerHTML = image.mediaTitle;
        p.innerHTML = 'Oh boy I do love photos';
        p2.innerHTML = "Can't believe I'm doing this";
        a.setAttribute('href', `img/original/${image.mediaURL}`);
        img.setAttribute('src', `img/thumbs/${image.mediaThumb}`);
        
        figcaption.appendChild(title);
        figcaption.appendChild(p);
        figcaption.appendChild(p2);
        a.appendChild(img);
        figure.appendChild(a);
        figure.appendChild(figcaption);
        li.appendChild(figure);
        ul.appendChild(li);
      });
      randomizeColors();
    });
};

showImages();

