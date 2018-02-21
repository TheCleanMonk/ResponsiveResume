$(document).ready(function experienceButton(){

// change all of these to import classes onclick rather than applying direct styles 
// also switch these if else statements to swtich
    var count = 0;
    $('#experience-button').on('click', function() {
    if(iter > 0 || sum > 0){
        iter = 0;
    sum = 0;
    }
    if ($('#experienceSection').css('opacity') == 0) {
        $('#experienceSection').css('opacity', 1);
        $('.expSection').css('opacity', 1);
        $('.skillBox').css('opacity', 0); 
        $('.skillHeader').css('opacity', 0);
        $('.badge').css('opacity', 0);
        $('.qualHeader').css('opacity', 0);      
    }

    if(count == 1){
        $('#fourfront').css('opacity', 1);
        $('#experienceSection').css('opacity', 0);
    }
    else if(count == 2){
        $('#fourfront').css('opacity', 0);    
        $('#experienceSection').css('opacity', 0);
        $('#brio').css('opacity', 1);
    }
    else if(count == 3){
        $('#brio').css('opacity', 0);
        count = 0;
    }
    count++;
});
});
$(function skillsButton(){
    var iter = 0;
    $('#skills-button').on('click', function() {
    if(count > 0 || sum > 0){
    sum = 0;
        count = 0;
    }
  iter++;

    if(iter == 1){
        $('.skillBox').css('opacity', 1); 
        $('.skillHeader').css('opacity', 1); 
      $('#expBox').css('opacity', 0);    
      $('#fourfront').css('opacity', 0);    
      $('#experienceSection').css('opacity', 0);
      $('#brio').css('opacity', 0);
      $('.expSection').css('opacity', 0); 
      $('.badge').css('opacity', 0); 
      $('.qualHeader').css('opacity', 0);   
        // change this so that on the first click a fade out
        // fade in is applied
    }
    if(iter > 1){
      iter = 0;
    }
});
});
$(document).ready(function qualsButton(){

    var sum = 0;
  $('#qualifications-button').on('click', function() {
  if(count > 0 || iter > 0){
    count = 0;
    iter = 0;
  }
  sum++;
    if ($('#hubspot').css('opacity') == 1) {
      $('#expBox').css('opacity', 0);    
      $('#fourfront').css('opacity', 0);    
      $('#experienceSection').css('opacity', 0);
      $('#brio').css('opacity', 0);
      $('.expSection').css('opacity', 0); 
      $('.skillHeader').css('opacity', 0); 

    }
    if(sum == 1){
      $('.badge').css('opacity', 1); 
      $('.qualHeader').css('opacity', 1); 
      $('.skillHeader').css('opacity', 0);
      $('.skillBox').css('opacity', 0);
      sum++;

      // change this so that on the first click a fade out
      // fade in is applied
    }
    if(sum > 1){
      sum = 0;
    }
    });
});