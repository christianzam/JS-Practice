// This file is automatically compiled by Webpack, along with any other files
// present in this directory.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'sweetalert';
import 'sweetalert2';
import 'bootstrap';

//import { initSweetalert } from "../packs/init_sweetalert";
//import { transformText } from "../components/transform_text";
//import { dynamicTextTypedJS2 } from '../components/dynamic_text_typed_js_2';
//import { randomWords} from "../components/random_words";
//import { animationTopBottomButton } from "../components/animation_top_bottom_button";
//import { projectsAnimation } from "../components/projects_animation";
//import { stretchingWords } from "../components/stretching_words";
//import { dynamicTextTypedJS } from '../components/dynamic_text_typed_js';
//import { movingArrows } from "../components/moving_arrows";
import { showDate} from "../components/show_date";
import { initUpdateNavbarOnScroll } from '../components/navbar';



document.addEventListener('turbolinks:load', () => {
  //initSweetalert();
  //transformText();
  //dynamicTextTypedJS2();
  //randomWords();
  //animationTopBottomButton();
  //projectsAnimation();
  //stretchingWords();
  //dynamicTextTypedJS();
  //movingArrows();
  showDate();
  initUpdateNavbarOnScroll();
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log("HELLO WORLD AGAIN, HAVE YOU FOUND WHAT YOU ARE LOOKING FOR?");