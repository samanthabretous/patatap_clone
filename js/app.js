const elem = document.getElementById('draw-shapes-js');
var params = { width: window.innerWidth, height: window.innerHeight };
var two = new Two(params).appendTo(elem);
console.log(two)
const circles = [];
const createNewCircleOnKeyDown = (event) => {
  if(keyData[event.key]){
    // get document size boundries
    const randomWidth = Math.floor(Math.random() * window.innerWidth);
    const randomHeight = Math.floor(Math.random() * window.innerHeight);
    const newCircle = two.makeCircle(randomWidth, randomHeight, 200);
    newCircle.fill = keyData[event.key].color;
    newCircle.noStroke();
    circles.push(newCircle);
  }
}

document.addEventListener('keypress', createNewCircleOnKeyDown);

two.bind('update', function(frameCount) {
  for(let i = 0; i < circles.length; i++) {
    var t = circles[i].scale - 0.03;
    circles[i].scale = t;
    // remove circle when animation is complete
    if(circles[i].scale < 0) {
      two.remove(circles[i])
      circles.splice(circles[i], 1)
    }
  }
}).play();
