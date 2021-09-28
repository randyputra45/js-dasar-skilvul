document
  .getElementById("card-01")
  .addEventListener("click", () =>
    clickedButton(
      "Milk Based Coffee",
      "Some quick example text to build on the card title and make up the bulk of the card's content",
      "card-01"
    )
  );

document
  .getElementById("card-02")
  .addEventListener("click", () =>
    clickedButton(
      "V60 Coffee",
      "Some quick example text to build on the card title and make up the bulk of the card's content",
      "card-02"
    )
);
  
document
  .getElementById("card-03")
  .addEventListener("click", () =>
    clickedButton(
      "Coffee Roastery",
      "Some quick example text to build on the card title and make up the bulk of the card's content",
      "card-03"
    )
);
  
document
  .getElementById("card-04")
  .addEventListener("click", () =>
    clickedButton(
      "Coffee Grinder",
      "Some quick example text to build on the card title and make up the bulk of the card's content",
      "card-04"
    )
);

function clickedButton(judul, deskripsi, idButton) {
  let imgSrc = idButton + "-image";
  document.getElementById("modal-title").innerHTML = judul;
  document.getElementById("modal-text").innerHTML = deskripsi;
  document.getElementById("modal-image").src = document.getElementById(imgSrc).src;
}