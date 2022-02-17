/* This animation starts going down and comes back up */

const animationTopBottomButton = () => {
  const button = document.querySelector("#clicker");
  const ball = document.querySelector("#target");
   
    button.addEventListener("click", () => {
      console.log("times pressed")
      window.requestAnimationFrame(function() {
        document.getElementById("target").classList.remove('animate');   
        window.requestAnimationFrame(function() {
          document.getElementById("target").classList.add('animate');
        });
      });
    });
};

export { animationTopBottomButton };

--------------------------------CSS-------------------------------------------

.button {
  background-color: transparent;
  display: inline-block;
}

.about-text {
  position: relative;
  font-size: 40px;
  font-family: $titles;
}

.about-text:hover {
  font-size: 45px;
  transition: all 0.5s ease-in-out;
  color: yellow;
  cursor: default;
}

@-webkit-keyframes down {
  0% { top: 0px; }
  50% { top: 200px; }
  100% { top: 0px; }
}
.animate {
  -webkit-animation: down 5s;
  -moz-animation: down 5s;
  -webkit-animation-iteration-count: 1;
  -moz-animation-iteration-count: 1;
}


@-moz-keyframes down {
    0% { top: 0px; }
   50% { top: 200px; }
  100% { top: 0px; }
}


-------------------------------------HTML-----------------------------


    <div id="clicker" class="button">
      <div id="target" class="row justify-content-center about-text">
        ABOUT
      </div>
    </div>
