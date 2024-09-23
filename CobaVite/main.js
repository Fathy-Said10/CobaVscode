import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="persegi">
    <h2 id="heading">Press the button</h2>
    <button id="changeText" class="btn">Klik</button>
  </div>
`;

$(document).ready(function() {
  var sentences = [
    "Hello",
    "Hai",
    "💀"
  ];

  var index = 0;

  $('#changeText').click(function(){
    index = (index + 1) % sentences.length;
    $('#heading').text(sentences[index]);
  });
});
