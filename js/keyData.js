var audioContext;
var playSoundBuffer;

//code for sound provided by stack overflow post 
//http://stackoverflow.com/questions/26447932/javascript-web-audio-cannot-properly-decode-audio-data
function init() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();

}

function loadNote(file) {
  var request = new XMLHttpRequest();
  request.open("GET", file, true);
  request.responseType = "arraybuffer";
  request.onload = function() {
      audioContext.decodeAudioData(request.response, function(buffer) {
          playSoundBuffer = buffer;
          playSound(); // don't start processing it before the response is there!
      }, function(error) {
          console.error("decodeAudioData error", error);
      });
  };
  request.send();//start doing something async


}
function playSound() {
    var source = audioContext.createBufferSource();
    source.buffer = playSoundBuffer;       // This is the line that generates the error
    source.connect(audioContext.destination);
    source.start(0);
}
init()

var keyData = {
			q: {
				sound: function(){loadNote('sounds/A/bubbles.mp3')},
				color: '#1abc9c'
			},
			w: {
				sound: function(){loadNote('sounds/A/clay.mp3')},
				color: '#2ecc71'
			},
			e: {
				sound: function(){loadNote('sounds/A/confetti.mp3')},
				color: '#3498db'
			},
			r: {
				sound: function(){loadNote('sounds/A/corona.mp3')},
				color: '#9b59b6'
			},
				t: {
				sound: function(){loadNote('sounds/A/dotted-spiral.mp3')},
				color: '#34495e'
			},
			y: {
				sound: function(){loadNote('sounds/A/flash-1.mp3')},
				color: '#16a085'
			},
			u: {
				sound: function(){loadNote('sounds/A/flash-2.mp3')},
				color: '#27ae60'
			},
			i: {
				sound: function(){loadNote('sounds/A/flash-3.mp3')},
				color: '#2980b9'
			},
			o: {
				sound: function(){loadNote('sounds/A/glimmer.mp3')},
				color: '#8e44ad'
			},
			p: {
				sound: function(){loadNote('sounds/A/moon.mp3')},
				color: '#2c3e50'
			},
			a: {
				sound: function(){loadNote('sounds/A/pinwheel.mp3')},
				color: '#f1c40f'
			},
			s: {
				sound: function(){loadNote('sounds/A/piston-1.mp3')},
				color: '#e67e22'
			},
				d: {
				sound: function(){loadNote('sounds/A/piston-2.mp3')},
				color: '#e74c3c'
			},
			f: {
				sound: function(){loadNote('sounds/A/prism-1.mp3')},
				color: '#95a5a6'
			},
			g: {
				sound: function(){loadNote('sounds/A/prism-2.mp3')},
				color: '#f39c12'
			},
			h: {
				sound: function(){loadNote('sounds/A/prism-3.mp3')},
				color: '#d35400'
			},
			j: {
				sound: function(){loadNote('sounds/A/splits.mp3')},
				color: '#1abc9c'
			},
			k: {
				sound: function(){loadNote('sounds/A/squiggle.mp3')},
				color: '#2ecc71'
			},
			l: {
				sound: function(){loadNote('sounds/A/strike.mp3')},
				color: '#3498db'
			},
			z: {
				sound: function(){loadNote('sounds/A/suspension.mp3')},
				color: '#9b59b6'
			},
			x: {
				sound: function(){loadNote('sounds/A/timer.mp3')},
				color: '#34495e'
			},
			c: {
				sound: function(){loadNote('sounds/A/ufo.mp3')},
				color: '#16a085'
			},
			v: {
				sound: function(){loadNote('sounds/A/veil.mp3')},
				color: '#27ae60'
			},
			b: {
				sound: function(){loadNote('sounds/A/wipe.mp3')},
				color: '#2980b9'
			},
			n: {
				sound: function(){loadNote('sounds/A/zig-zag.mp3')},
				color: '#8e44ad'
			},
			m: {
				sound: function(){loadNote('sounds/A/moon.mp3')},
				color: '#2c3e50'
			}
		}
