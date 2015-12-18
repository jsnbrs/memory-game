previous js

$(function(){
  "use strict";

  // $('#box-1').click(function(event) {
  //   $('.box').css('background-color', 'black');
  // });

  // $('#box-4').click(function(){
  //   $(this).fadeTo(1000,0);
  // })

// var random = Math.floor(Math.random()*17) + 1;
// $(".box").eq(random).click(function(event) {
//     $(this).fadeTo(600,0);
//   });

//do I want to start with no id's, then add them randomly...

 // $("#box-3").fadeOut(1000, function () {
 //                $('#box-3').prepend('<img id="theImg" src="https://upload.wikimedia.org/wikipedia/en/7/78/SMWYoshi.png" />');
 //            });
// var yoshi;
var imgPikachu = [
'img_pikachu/charizard.png',
'img_pikachu/beedrill.png',
'img_pikachu/eevee.png',
'img_pikachu/gastly.png',
'img_pikachu/gyarados.png',
'img_pikachu/kabutops.png',
'img_pikachu/magikarp.gif',
'img_pikachu/mew.png',
'img_pikachu/snorlax.png'
]

var random = Math.floor(Math.random()*8) + 1;
var randImage = imgPikachu[Math.floor(Math.random()*imgPikachu.length)];



var appendImage = function(){
  $(".box").eq(random).click(function(event) {
  $(this).prepend('<img id="randImg" src="' + randImage +'" />');
  })
  return false;
};
// appendImage();

var appendRand = function(){
  for(var i = 0; i < 2; i++){
  appendImage();
  };
};
appendRand();
  // $('.box').click(function(){
  //   $(this).fadeTo(1000,0);
  // });







// var imgPikachu = [
//   'img_pikachu/charizard.png',
//   'img_pikachu/beedrill.png',
//   'img_pikachu/eevee.png',
//   'img_pikachu/gastly.png'
// ]
// // var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'black', 'purple', 'white']
// // var randColor = colors[Math.floor(Math.random()*colors.length)];
// var random = Math.floor(Math.random()*7) + 1;
// var randImage = imgPikachu[Math.floor(Math.random()*imgPikachu.length)];
// var currentImage;
// var usedImage = [];

// var appendImage = function(){
//   $('.box').eq(random).click(function(event) {
//   $(this).prepend('<img id="randImg" src="' + randImage +'" />');
//   });
//     usedImage.push(randImage);
//     console.log(randImage);
//   return this;

//   var currentImage = $(this).val();
//     console.log(currentImage);

// };
// appendImage();

// $('.box').click(function(){
//   debugger
// })



// var appendImage2 = function(){
//   $('.box').eq(random).click(function(event) {
//   $(this).prepend('<img id="randImg" src="' + randImage +'" />');
//   })
//   return this;
// };

// var appendRand = function(){
//   for(var i = 0; i < 2; i++){
//   appendImage();
//   // appendImage2();
//   };
// };
// // appendRand();


// var match = function(){
//   if(currentImage === secondImage);
//         (currentImage).fadeTo(1000,0);
//         (secondImage).fadeTo(1000,0);
//     console.log("match");
//     //then call hide or fadeout function to hide both
//   } else {
//       console.log("not a match");
//       //then flip them back over
//     }
// };


//
// var appendImage1 = function(){
//   $(".box").eq(random).click(function(event) {
//   $(this).css('background-color', randColor);
//   })
//   return this;
// };

  // $('#box-1').click(function(event) {
  //   $('.box').css('background-color', 'black');
  // });

  // $('#box-4').click(function(){
  //   $(this).fadeTo(1000,0);
  // })

// var random = Math.floor(Math.random()*17) + 1;
// $(".box").eq(random).click(function(event) {
//     $(this).fadeTo(600,0);
//   });

//do I want to start with no id's, then add them randomly...

 // $("#box-3").fadeOut(1000, function () {
 //                $('#box-3').prepend('<img id="theImg" src="https://upload.wikimedia.org/wikipedia/en/7/78/SMWYoshi.png" />');
 //            });
// var yoshi;
// var appendImage2 = function(){
//   $(".box").eq(random).click(function(event) {
//   $(this).css('background-color', 'green');
//   })
//   return this;
// };
// appendImage1();
// appendImage2();

// var appendRand = function(){
//   appendImage1();
//   appendImage2();
// };
// appendRand();


// $('#box-5').prepend('<img id="randImg" src="https://upload.wikimedia.org/wikipedia/en/7/78/SMWYoshi.png" />');


// $('#box-5').prepend('<img id="randImg" src="https://upload.wikimedia.org/wikipedia/en/7/78/SMWYoshi.png" />');


});



img_pikachu/gastly.png
this
<div id=​"box-2" class=​"box">​<img id=​"randImg" src=​"img_pikachu/​gastly.png">​</div>​
this.id
"box-2"
this.attr()
VM1414:1 Uncaught TypeError: this.attr is not a function(…)(anonymous function) @ VM1414:1InjectedScript._evaluateOn @ VM1333:875InjectedScript._evaluateAndWrap @ VM1333:808InjectedScript.evaluateOnCallFrame @ VM1333:933(anonymous function) @ memory.js:33jQuery.event.dispatch @ jquery-2.1.4.js:4435elemData.handle @ jquery-2.1.4.js:4121
this
<div id=​"box-2" class=​"box">​…​</div>​
$(this)
[<div id=​"box-2" class=​"box">​<img id=​"randImg" src=​"img_pikachu/​gastly.png">​</div>​]
$(this).children('img')
[<img id=​"randImg" src=​"img_pikachu/​gastly.png">​]
$(this).children('randImg')
[]
$(this).children('#randImg')
[<img id=​"randImg" src=​"img_pikachu/​gastly.png">​]
$(this).children('#randImg').attr('src')
"img_pikachu/gastly.png"