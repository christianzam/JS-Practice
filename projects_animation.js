// This animation runs from top to bottom with one iteration transforming text

const projectsAnimation = () => {
    
  const x = document.getElementById("projects-animation");
    window.addEventListener("scroll", () => {
      console.log("animation done")
      x.style.WebkitAnimation = "mymove 4s loop"; // Code for Chrome, Safari and Opera
      
      // Code for Chrome, Safari and Opera
      x.addEventListener("webkitAnimationStart", myStartFunction);
      x.addEventListener("webkitAnimationIteration", myRepeatFunction);
      x.addEventListener("webkitAnimationEnd", myEndFunction);
      
          
      function myStartFunction() {
        this.innerHTML = "I'VE PLAYED HARD";
        this.style.color = "yellow";
        //this.style.backgroundColor = "transparent";
      }
      
      function myRepeatFunction() {
        this.innerHTML = "AND";
        this.style.color = "white";  
      }
      
      function myEndFunction() {
        this.innerHTML = "WORKED HARD";
        this.style.color = "yellow";
      }


      window.requestAnimationFrame(function() {
        document.getElementById("projects-animation").classList.remove('mymove');   
        window.requestAnimationFrame(function() {
          document.getElementById("projects-animation").classList.add('mymove');
        });
      });
    });  
};

export { projectsAnimation };


// -------------------------------------CSS-----------------------------

#projects-animation {
  position: relative;
  font-size: 40px;
  font-family: $links;
}

// Chrome, Safari, Opera 
@-webkit-keyframes mymove {
  from {top: 0px;}
  to {top: 100px;}
}

@keyframes mymove {
  from {top: 0px;}
  to {top: 100px;}
}

// -------------------------------------HTML-----------------------------

<div id="projects-animation">WORD TO START WITH</div>