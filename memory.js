$(function(){
  "use strict";

var randomStart = $('.box').toArray();

while(randomStart.length > 0) {
  var index = Math.floor((Math.random()*(randomStart.length - 1)));
  var element = randomStart.splice(index, 1);
  $('body').append(element[0]);
}


var selection;
var clickArr = [];

$('.box').click(function(){
  // debugger
  // selection = $(this).children('#pikachu').attr('src'); //need to change children
  selection = $(this).children('#pikachu').attr('src');
  clickArr.push(selection);
  console.log(clickArr)

    if(clickArr.length === 2 && clickArr[0] === clickArr[1]){
      alert('match');
      // $(#pikachu).fadeTo(2000, 0); // children
      clickArr = [];

    }
      else if(clickArr.length >= 2){
      clickArr = [];

    } else {}
});



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


});