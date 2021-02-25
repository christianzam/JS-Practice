var words = ['hello world', 'foo bar', 'john smith', 'my name'],
element = document.body,
currentWord = 0;

var getRandom = function() {
return parseInt(Math.random()*words.length);
};


window.setInterval(function(){
var newWord = getRandom();
while(newWord === currentWord) newWord = getRandom();
currentWord = newWord;
element.textContent = words[currentWord];
}, 5000);

