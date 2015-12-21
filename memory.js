$(function(){
  "use strict";


  $('h1').click(function(){
      location.reload();
  });


  $('img').hide(9000);


var randomStart = $('.back').toArray();
var clickArr = [];
var matchCounter = 0;
var missCounter = 7;


  while(randomStart.length > 0) {
      var index = Math.floor(( Math.random() * ( randomStart.length - 1 )));
      var random = randomStart.splice( index, 1 );
      $('#container').append(random[0]);
  }

  $('#container div').click(function(){
    $(('img'), $(this)).show(1000);
  });

  $('.back').click(function(){
    clickArr.push($(this));

      if(clickArr.length === 2
        && $(clickArr[0].children('img')[0]).attr('src') === $(clickArr[1].children('img')[0]).attr('src')
        && $(clickArr[0].children('img')[0]).attr('id') !== $(clickArr[1].children('img')[0]).attr('id')
        ){

          matchCounter+=1;
          clickArr[0].fadeTo(2000,0);
          clickArr[1].fadeTo(2000,0);
          clickArr = [];

          $('#counter').empty().append("Match Counter: " + matchCounter);
          $('h1').empty().append("You have chosen wisely...").fadeTo(2000, 0);

          setTimeout(function(){
            $('h1').empty().append("MEMORY").fadeTo(2000, 10);
            }, 2000);

          if(matchCounter === 9){
            $('#counter').fadeTo(3000, 0);
            $('#misses').fadeTo(3000, 0);
            $('h1').empty().append("NICE MEMORY").fadeTo(5000, 0);
            $('div').fadeTo(3000, 0);

          setTimeout(function(){
            location.reload();
            }, 4000);
          };
      }
      else if(clickArr.length >= 2){
        $(clickArr[0].children('img')).hide(2000);
        $(clickArr[1].children('img')).hide(2000);

        missCounter-=1;
        if(missCounter >= 3){
          $('#misses').empty().append("You have missed " + missCounter + " times.");
        } else if(missCounter === 2){
          $('#misses').empty().append("Careful, you only have two gueses left.");
        } else if(missCounter === 1){
          $('#misses').empty().append("You have one guess left!");
        }
        clickArr = [];

        if(missCounter === 0){
          $('#counter').fadeTo(3000, 0);
          $('#misses').fadeTo(3000, 0);
          $('h1').empty().append("LETS TRY THAT AGAIN...").fadeTo(5000, 0);
          $('div').fadeTo(3000, 0);

          setTimeout(function(){
            location.reload();
            }, 4000);

        };

      } else {}

  });
});
  // $("#button").click(function(){
  //     $('#container').append('<div id="box-18" class="back"><img id="pikachu18" src="img_pikachu/mew.png"></div>' + '<div id="box-17" class="back"><img id="pikachu18" src="img_pikachu/magikarp.gif"></div>');
  //     $('img').hide(9000);
  //     $('div').click(function(){
  //   $(('img'), $(this)).show(1000);
  //   $('.back').click(function(){clickArr.push($(this));});
  // });
  // })
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
          // console.log($(clickArr[0].children('img')[0]).attr('src'));
        // console.log($(clickArr[1].children('img')[0]).attr('src'));


