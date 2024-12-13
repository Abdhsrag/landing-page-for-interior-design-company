const cardTestOne = document.querySelector('.cardTestOne');
const cardTestTwo = document.querySelector('.cardTestTwo');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

function swapCards(direction) {
  if (direction === 'left') {
    const tempContent = cardTestOne.innerHTML;
    cardTestOne.innerHTML = cardTestTwo.innerHTML;
    cardTestTwo.innerHTML = tempContent;
  } else if (direction === 'right') {
    const tempContent = cardTestTwo.innerHTML;
    cardTestTwo.innerHTML = cardTestOne.innerHTML;
    cardTestOne.innerHTML = tempContent;
  }
}

leftArrow.addEventListener('click', () => swapCards('left'));
rightArrow.addEventListener('click', () => swapCards('right'));