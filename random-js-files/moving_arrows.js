function movingArrows = () => {   
  const arrowsmovingdown = document.getElementById("moving-arrows-div");
    window.addEventListener("scroll", () => {
      window.requestAnimationFrame(function() {
        document.getElementById("moving-arrows-div").classList.remove('arrowsmovement');   
          window.requestAnimationFrame(function() {
            document.getElementById("moving-arrows-div").classList.add('arrowsmovement');
          });
      });
    });   
};

export { movingArrows };

// -------------------------------------HTML-----------------------------

<script>
  const movingarrows = document.getElementById("moving-arrows-div");
    window.addEventListener("scroll", () => {
          window.requestAnimationFrame(function() {
            document.getElementById("moving-arrows-div").classList.remove('arrowsmovement');   
            window.requestAnimationFrame(function() {
              document.getElementById("moving-arrows-div").classList.add('arrowsmovement');
            });
          });
    });  
</script>


