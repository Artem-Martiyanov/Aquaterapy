const reviewCards = document.querySelectorAll(".reviews__card");
const reviewTitle = document.querySelectorAll(".reviews__title");
const reviewText = document.querySelectorAll(".reviews__text");
//let cardWidth;
//let cardMargin = 20 * 2;
reviewCards.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentCard = item;
    let cardId = currentCard.getAttribute("data-tab");
    let currentId = document.querySelectorAll(cardId);

    if (!currentCard.classList.contains("active")) {
      reviewCards.forEach(function (item) {
        item.classList.remove("active");
        /*item.style.transform =
          "translateX(- " + cardWidth + cardMargin + " px) ";*/
      });
      reviewTitle.forEach(function (item) {
        item.classList.remove("active");
      });
      reviewText.forEach(function (item) {
        item.classList.remove("active");
      });

      currentId.forEach(function (item) {
        item.classList.add("active");
      });

      currentCard.classList.add("active");
    }
  });
});
