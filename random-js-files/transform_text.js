/* THIS FUNCTION CAN BE USED WHEN NEEDED TO SHOW TRANSFORM WITH HOVER */

const transformText = () => {
  const bannerText = document.querySelector("#about-myself");
    bannerText.addEventListener("mouseover", () => {
      console.log("you have hovered")
      bannerText.classList.toggle("myself-text")
    });
};

export { transformText };

/*
---------------------------------CSS--------------------------------- 

.about-text {
  font-size: 40px;
  font-family: $titles;
  font-colour: white;
}

.myself-text {
  font-size: 45px;
  font-family: $titles;
  font-colour: yellow;
  transition: all 0.5s ease-in-out;
  cursor: default;
}

---------------------------------HTML--------------------------------- 
// add the below to PAGE_NAME.html.erb
// <h1 class="about-text" id="about-myself"> ABOUT </h1>

*/

