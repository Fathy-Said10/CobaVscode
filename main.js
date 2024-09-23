import './style.css'
import {tombol} from './tombol.js'
import $ from "jquery";

$('#app').html(`
  <div class="persegi">
    <h2 id="heading">Press the button</h2>
    <button id="changeText" class="btn">Klik</button>
  </div>
`)

tombol($('#changeText'))