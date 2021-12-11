
// Detecting Button Clicks

    $(".drum").click(function (){
      var buttonInnerHtml=this.innerHTML;
      makeSound(buttonInnerHtml);
      animation(buttonInnerHtml);
      });


// Detecting Keyboard Clicks
$("body").keypress (function(event){

 makeSound(event.key);
 animation(event.key);
});
// Sounds TO be played
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
        break;
    case "a":
      var tom2= new Audio("sounds/tom-2.mp3");
      tom2.play();
        break;
    case "s":
        var tom3= new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
      var tom4= new Audio("sounds/tom-4.mp3");
      tom4.play();
        break;
    case "j":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
          break;
    case "l":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    default:
        console.log(buttonInnerHtml);
        break;
}
}


// Adding annimation

function animation(currentKey){
  var pressedKey=document.querySelector("." + currentKey);
  pressedKey.classList.add("pressed");

  setTimeout(function(){
    pressedKey.classList.remove("pressed");
  },100);
}