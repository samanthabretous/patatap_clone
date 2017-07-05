import keyData from './keyData';

const startAnimation = (event) => {
  if (keyData[event.key]) {
    keyData[event.key].animate();
  }
};

document.addEventListener('keypress', startAnimation);
