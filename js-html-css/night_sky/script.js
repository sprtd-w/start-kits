(function(star_number) {
  const fragment = document.createDocumentFragment();

  const RANDOM_FACTOR = 0.4;
  const shiftValue = Math.ceil(star_number / (star_number * RANDOM_FACTOR));
  let sparkledStarIndex = 0;

  for (let i = 0; i < star_number; i++) {
    const star = document.createElement('span');
    const size = (Math.floor(Math.random() * 3) + 1);
    star.className = 'star';
    star.style.width = size +'px';
    star.style.height = size + 'px';
    star.style.background = `rgba(255, 255, 177, ${Math.random()})`;
    star.style.top = getRandomToCeilNumber() + '%';
    star.style.left = getRandomToCeilNumber() + '%';

    if (sparkledStarIndex === i) {
      console.count();
      setupAnimation(star);
      sparkledStarIndex += shiftValue;
    }

    fragment.appendChild(star);
  }

  document.body.appendChild(fragment);

  function setupAnimation(element) {
    element.style.animationName = 'spark';
    element.style.animationDelay = (getRandomToFloorNumber() + 1) + 's';
    element.style.animationDuration = (getRandomToFloorNumber() + 1) + 's';
  }

  function getRandomToCeilNumber(randomizerValue = 100) {
    return Math.ceil(Math.random() * randomizerValue);
  }

  function getRandomToFloorNumber(randomizerValue = 6) {
    return Math.floor(Math.random() * randomizerValue);
  }

})(100);


