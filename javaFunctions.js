const imageOptions = [
  "",
  "img/LeftFish.png",
  "img/nFish.png"
];

// Store current image index per cell
const cellStates = {};

document.addEventListener("DOMContentLoaded", () => {
  const tableCells = document.querySelectorAll("td img");

  tableCells.forEach((img, index) => {
    cellStates[index] = -1;

    img.addEventListener("click", () => {
      // Cycle to next image
      cellStates[index] = (cellStates[index] + 1) % imageOptions.length;
      img.src = imageOptions[cellStates[index]];
    });

    img.addEventListener("mouseover", () => {
      if (img.src === "") img.src = "img/Lgray.png";
    });

    img.addEventListener("mouseout", () => {
      if (cellStates[index] === -1) img.src = "";
    });
  });
});

