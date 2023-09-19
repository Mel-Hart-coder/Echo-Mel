// I narrowed the position that had the wows to make it a tad more challenging. I also made the meme change when you find the wows and when you leave the wows. 


$( document ).ready(function() {
  $('#dogememe').click(
     function(
     ){
       //code'#dogememe'
       console.log("position: ", $('#dogememe').position())
   });
  

       
 
  
  
  $('#dogememe').draggable({
   
  start: function(){
    
   
    if ($('#dogememe').position().left > 500){
      $('#something').text("Try a little further left!");
      $('#dogememe').attr('src', 'https://wallpapercave.com/wp/wp6956355.jpg');
     }
   else if($('#dogememe').position().left > 300 && $('#dogememe').position().left < 400){
    $('#something').text("You found the wows!");
    $('#dogememe').attr('src', 'https://i.marketingprofs.com/assets/images/articles/content/210715-doge-1.jpg');
   }
   else {
    $('#something').text("try a little further right!");
    $('#dogememe').attr('src', 'https://wallpapercave.com/wp/wp6956355.jpg');
   }


}
    
    
    
    
    
  });
});