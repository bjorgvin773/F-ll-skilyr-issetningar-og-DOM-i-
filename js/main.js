// ***** ROLLER ENDAR (SLOTMACHINE-EFFECT) ***** //

trump.ondblclick = function(e){
  console.log (e.altKey)
  var trumpos = 50;
  var trumpSlide = document.querySelector(".kassinn3");
  setInterval(function(){ 
    trumpos = trumpos + 15;
    trumpSlide.style.backgroundPosition = "50% " + trumpos + "%"
  }, 50);};

// ***** ROLLER ENDAR (SLOTMACHINE-EFFECT) ***** //


// ***** SEND-IT-SLIDING BYRJAR ***** //

var moveBox = function(kassi){
    var boxOne = document.getElementsByClassName(kassi)[0]

document.getElementsByClassName(kassi)[0].onclick = function() {
 if(this.innerHTML === 'Play')
 {
   this.innerHTML = 'Pause';
   boxOne.classList.add('verticTranslate');
 } else {
   this.innerHTML = 'Play';
   var computedStyle = window.getComputedStyle(boxOne),
       marginLeft = computedStyle.getPropertyValue('margin-left');
   boxOne.style.marginLeft = marginLeft;
   boxOne.classList.remove('verticTranslate'); 
}
};
}

moveBox('kassinn');
moveBox('kassinn2');
moveBox('kassinn4');
moveBox('kassinn5');

// ***** SEND-IT-SLIDING ENDAR ***** //


// ***** TRUMP QUOTE BYRJAR ***** // 
var trumpQuote = document.querySelector("#trump-quote"); 
trumpQuote.onmouseover = function(e){
  if(e.clientX > 920){ 
    trumpQuote.style.filter = "blur(5px)";
  } else if(e.clientY < 920){
    trumpQuote.style.filter = "blur(0px)";
  }
  //console.log(e.clientX)
  }
// ***** TRUMP QUOTE ENDAR ***** // 



// ***** SLIDESHOW BYRJAR ***** //

var i = 0; /*byrjunar punktur*/
var images = [];
var time = 800;

//***** myndir *****//
images[0] = 'images/trump3.png'
images[1] = 'images/trump1.png'
images[2] = 'images/trump2.png'


// ***** change img *****//
function changeImg(e){

  document.slide.src = images[i];
  
  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}
window.onload = changeImg;


// ***** SLIDESHOW ENDAR ***** //





// ***** LITASKIPTI (n OG b) BYRJAR ***** //

var kassinn5Blur = function(e){
  
  if(e.which === 66){
    
   litaskipti.style.backgroundColor = "green";
  }
  
  else if(e.which === 78){
   litaskipti.style.backgroundColor = "white";
  }
  else if(e.which === 77){
    litaskipti.style.backgroundColor = "orange";
   }
  else{
    console.log("please use the n and b keys");
  }
}
document.onkeydown = kassinn5Blur;

// ***** LITASKIPTI (n OG b) ENDAR ***** //


// ***** LAG BYRJAR ***** //

var playaudio = function(path){
  var audio = new Audio(path);
audio.play();
return audio;
}
var playing = false
document.onmousemove = function(e){
  if( e.pageX > 1600 && e.pageY < 170 && !playing){
  // var asdf = playaudio// 
  playaudio ("thedogs.wav");
  playing = true;} 
}

// ***** LAG ENDAR ***** //

// ***** RETURN MSG BYRJAR ***** //

bruni.ondblclick = function(e){
  return alert("Glæsilegt!")
}

// ***** RETURN MSG ENDAR ***** //

// ***** kgToPounds byrjar *****//

var kgToPounds = function (kg){
  lbs = kg * 2.2046;
}
var Pounds = kgToPounds (80);
console.log(lbs);

// ***** kgToPounds endar *****//