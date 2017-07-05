var audioContext;
var playSoundBuffer;

//code for sound provided by stack overflow post
//http://stackoverflow.com/questions/26447932/javascript-web-audio-cannot-properly-decode-audio-data
const init = () => {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  audioContext = new AudioContext();
};

const loadNote = (file) => {
  console.log("loadNote")
  const request = new XMLHttpRequest();
  request.open("GET", file, true);
  request.responseType = "arraybuffer";
  request.onload = () => {
    audioContext.decodeAudioData(request.response, (buffer) => {
      playSoundBuffer = buffer;
      playSound(); // don't start processing it before the response is there!
    }, (error) => {
      console.error("decodeAudioData error", error);
    });
  };
  request.send();//start doing something async


}
const playSound = () => {
  const source = audioContext.createBufferSource();
  source.buffer = playSoundBuffer; // This is the line that generates the error
  source.connect(audioContext.destination);
  source.start(0);
};
init();
