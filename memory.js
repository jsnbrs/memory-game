$(function(){
  "use strict";

  $('h1').click(function(){
      location.reload();
  });

  $('img').hide(9000);

var randomStart = $('.back').toArray();
var undefinedArr = [];
var clickArr = [];
var matchCounter = 0;

  while(randomStart.length > 0) {
      var index = Math.floor(( Math.random() * ( randomStart.length - 1 )));
      var element = randomStart.splice( index, 1 );
      $('body').append(element[0]);
  }

  $('div').click(function(){
    $(('img'), $(this)).show(1000);
  });

  $('.back').click(function(){
    // $('img', $(this)).show();
    clickArr.push($(this));

      // for(var i = 1; i <= 16; i++){
      //   undefinedArr.push($(this).children('#pikachu' + i).attr('src'));
      // };

      // for(var i = 0; i < undefinedArr.length; i++){
      //   if(undefinedArr[i]) {
      //     clickArr.push(undefinedArr[i]);
      //     console.log(undefinedArr);
      //     undefinedArr = [];
      //   }
      // }
  // console.log(undefinedArr);
  // console.log(clickArr);
        //   console.log($(clickArr[0].children('img')[0]).attr('src'));
        // console.log($(clickArr[1].children('img')[0]).attr('src'));

      if(clickArr.length === 2 && $(clickArr[0].children('img')[0]).attr('src') === $(clickArr[1].children('img')[0]).attr('src')){

      // if(clickArr.length === 2 && clickArr[0].attr('src') === clickArr[1].attr('src')){
        // $('h3').append('MATCH! MATCH! MATCH!').fadeTo(3000,0);
        matchCounter+=1;
        $('h2').empty().append("Match Counter: " + matchCounter);

          clickArr[0].fadeTo(2000,0);
          clickArr[1].fadeTo(2000,0);
        clickArr = [];
        // console.log(clickArr);

      }
        else if(clickArr.length >= 2){
          $(clickArr[0].children('img')).hide(2000);
          $(clickArr[1].children('img')).hide(2000);
          clickArr = [];
          // console.log(clickArr);


      } else {}
// console.log(clickArr);
  });


});




