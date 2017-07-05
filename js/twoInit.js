export default () => {
  const elem = document.getElementById('draw-shapes-js');
  const params = { width: window.innerWidth, height: window.innerHeight };
  const two = new Two(params).appendTo(elem);
};
