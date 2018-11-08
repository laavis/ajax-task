// don´t need to put anything here

const randomizeColors = () => {
  let colors = ['#D7D7D7', '#FFFE54', '#7FD0E3', '#75FA4C', '#EA4BC2', '#EA3223', '#001B99'];
  let rndColor = () => colors[Math.floor(Math.random() * colors.length)];

  console.log("ready!");
  const figcaps = document.querySelectorAll("figcaption");
  console.log(figcaps);

  for (let el of figcaps) {
    el.onmouseenter = () => {
      el.style.backgroundColor = rndColor();
    };
    el.onmouseleave = () => {
      el.style.backgroundColor = 'transparent';
    };
  };
};