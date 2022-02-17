  // Get the <span> and <modal> element that closes the modal
  var span = document.getElementsByClassName("close-oops")[0];
  var modal = document.getElementsByClassName("modal")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // =====================================================

  const toggleButton = document.querySelector('#toggle_notification')

  toggleButton.addEventListener('click', (event) => {
    const target = document.querySelector(event.currentTarget.dataset.target);
    target.classList.toggle('active')
  })