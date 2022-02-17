function stretchingWords() {
	document.querySelector('stretch-animation')
  var d = new Date();     
	var date = d.getUTCDate();
	var month = d.getUTCMonth() + 1; // here getUTCMonth() returns month from 0-11 not 1-12
	var year = d.getUTCFullYear();
	var s = d.getSeconds();
	var m = d.getMinutes();
	var h = d.getHours();
	var dateStr = "AS PER TODAY " + date + "/" + "0" + month + "/" + year + " " + "at" + " " + ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
	setInterval(stretchingWords, 1000);
	document.getElementById("show-date").innerHTML=dateStr;
	console.log("now showing off the date")
}
window.onload = stretchingWords;

export { stretchingWords };

//-----------------------------CSS ----------------
.stretch-animation {
  animation-duration: 2.2s;
  animation-name: slidein;
  animation-iteration-count: 1;
}

@keyframes slidein {
  from {
    transform: translateX(20%) scaleX(1.5);
  }
  to {
    transform: translateX(0) scaleX(1);
  }
}

//--------------------------------HTML--------------

<div class="banner-projects projects-banner-grid ">
  <div class="projects-banner-title-container">
    <div class="stretch-animation projects-banner-title"> 
        SOME P<span style="color:yellow;">RO</span>JECTS<br>&nbsp;&nbsp;&nbsp;I HAVE<br>&nbsp;W<span style="color:yellow;">OR</span>KED ON
    </div>
    <div class="projects-banner-clock-container">  
    <p id="show-date"></p>
    </div>
  </div>
  
<script>
  function stretchingWords() {
    document.querySelector('stretch-animation') 
  }
</script>
