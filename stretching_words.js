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
