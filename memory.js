$(function(){
  "use strict";


  $('h1').click(function(){
      location.reload();
  });

//gives ability to refresh page by clicking h1

  $('img').hide(9000);
//the images are shown initialy upon refresh then this command hides all the images on the page
//images stay hidden throught the game till they're clicked below

var clickArr = [];  //array that clicked images are pushed into to compare
var matchCounter = 0; // counter for matches starts at 0
var missCounter = 4; //counter for misses starts at 4
var randomStart = $('.back').toArray(); //array that divs are held in when game starts to reshuffle

  while(randomStart.length > 0) {

      var index = Math.floor(( Math.random() * ( randomStart.length - 1 )));
      var random = randomStart.splice( index, 1 );
      $('#container').append(random[0]);

  } //the divs get held in randomStart, index is a random number, splice method is used which inserts a div
    //with a now random index and they are appended to container with a new index, this idea was found on stack //overflow

  $('#container div').click(function(){
    $(('img'), $(this)).show(1000);
  });
    //click the div to show the previously hidden image

  $('.back').click(function(){
    clickArr.push($(this));
    //now the shown images are pushed into clickArr

      if(clickArr.length === 2

        && $(clickArr[0].children('img')[0]).attr('src') === $(clickArr[1].children('img')[0]).attr('src')
        && $(clickArr[0].children('img')[0]).attr('id') !== $(clickArr[1].children('img')[0]).attr('id')
        ){
    //if click array has two elements and the image of index one and index two are equal and the ids are not equal (this part was added to ensure you cant click on an image twice to cheat!)

          matchCounter+=1; //adds match to counter
          clickArr[0].fadeTo(2000,0); //fades image one and two in array out
          clickArr[1].fadeTo(2000,0);

          clickArr = []; //clears out the array to start over with

          $('#counter').empty().append("Match Counter: " + matchCounter); //updates counter on page
          $('h1').empty().append("You have chosen wisely...").fadeTo(2000, 0); //new header with message(fades)

          setTimeout(function(){
            $('h1').empty().append("MEMORY").fadeTo(2000, 10);
            }, 2000); //after fadeout above, bring back the header 'memory'

          if(matchCounter === 6){
            $('#counter').fadeTo(3000, 0);
            $('#misses').fadeTo(3000, 0);
            $('h1').empty().append("NICE MEMORY").fadeTo(5000, 0);
            $('div').fadeTo(3000, 0);

          setTimeout(function(){
            location.reload();
            }, 4000);
          };
    //this if statement checks for winner, fades everything out and appends message, reloads page after timeout

      } else if(clickArr.length >= 2) {

        $(clickArr[0].children('img')).hide(2000);
        $(clickArr[1].children('img')).hide(2000);

        //if there isnt a match with clickArr index 0 & 1 that is caught in the if above the array becomes 3 elements and then the images are hidden
        missCounter-=1; //logged as a miss which triggers the counter and various messages below:

        if(missCounter >= 3){
          $('#misses').empty().append("You have missed " + missCounter + " times.");
        } else if(missCounter === 2){
          $('#misses').empty().append("Careful, you only have two gueses left.");
        } else if(missCounter === 1){
          $('#misses').empty().append("You have one guess left!");
        }

        clickArr = []; //click array reset

        if(missCounter === 0){
          $('#counter').fadeTo(3000, 0);
          $('#misses').fadeTo(3000, 0);
          $('h1').empty().append("LETS TRY THAT AGAIN...").fadeTo(5000, 0);
          $('div').fadeTo(3000, 0);

          setTimeout(function(){
            location.reload();
            }, 4000);

        };

        //above if statement ends the game, your miss counter is down to 0 and everything fades out, message
        //appended and the timeout resets the game

      }

  });
});



