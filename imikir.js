const input = document.querySelector('input');
let p = document.querySelector('p');
function convert(t) {
  p.innerHTML = t.replace(/a|e|o|u/gi, "i");
}
input.addEventListener('keypress', (e) => {
  const key = e.which || e.keyCode;
  if (key === 13) {
    text = input.value;
    convert(text);
  }
});