$(function(){
  "use strict";

  $('h1').click(function(){
      location.reload();
  });

var randomStart = $('.back').toArray();

  while(randomStart.length > 0) {
      var index = Math.floor((Math.random()*(randomStart.length - 1)));
      var element = randomStart.splice(index, 1);
      $('body').append(element[0]);
  }



var undefinedArr = [];
var clickArr = [];
var matchCounter = 0;

  $('.front').hover(function(){
    $(this).addClass('flip');
  },function(){
    $(this).removeClass('flip');
  });

  $('.back').click(function(){

      for(var i = 1; i <= 16; i++){
        undefinedArr.push($(this).children('#pikachu' + i).attr('src'));
      };

      for(var i = 0; i < undefinedArr.length; i++){
        if(undefinedArr[i]) {
          clickArr.push(undefinedArr[i]);
          undefinedArr = [];
        }
      }
  console.log(undefinedArr);
  console.log(clickArr);


      if(clickArr.length === 2 && clickArr[0] === clickArr[1]){
        $('h3').empty().append('MATCH! MATCH! MATCH!').fadeTo(3000,0);
        matchCounter+=1;
        $('h2').empty().append(matchCounter);
        console.log(matchCounter)
        $(this).fadeTo(1000,0);
        clickArr = [];

      }
        else if(clickArr.length >= 2){
        clickArr = [];
        // $('h3').append('')

      } else {}

  });





});




