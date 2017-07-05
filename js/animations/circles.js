const circles = [];

const createNewCircle = (color) => {
  // get document size boundries
  const randomWidth = Math.floor(Math.random() * window.innerWidth);
  const randomHeight = Math.floor(Math.random() * window.innerHeight);
  const newCircle = two.makeCircle(randomWidth, randomHeight, 200);
  newCircle.fill = color;
  newCircle.noStroke();
  circles.push(newCircle);
};

two.bind('update', () => {
  for (let i = 0; i < circles.length; i += 1) {
    const t = circles[i].scale - 0.03;
    circles[i].scale = t;
    // remove circle when animation is complete
    if (circles[i].scale < 0) {
      two.remove(circles[i]);
      circles.splice(circles[i], 1);
    }
  }
}).play();

export default createNewCircle;
