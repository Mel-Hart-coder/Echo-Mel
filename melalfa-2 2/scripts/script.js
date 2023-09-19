$(document).ready(function() {
  
  var userName, nameLength, eyeColor= "";
  

  

  $('#btnUserName').click(function() {
     
    

     let userName = $('#userName').val();
     let nameLength = getStringLength(userName);
     let eyeColor = getEyeColor(nameLength);
    

     let response = userName + ', I sense that your eye color is ' + eyeColor; 
     let nonResponse = 'Lost your nerve huh? Cannot say that I blame you..';
     userName ?  $('#answer').text(response) : $('#answer').text(nonResponse);

     $('#btnClear').click(function(){
          clearElement("#nameOutput", "html");
          clearElement("#userName", "input");
    })

function getStringLength(stringVal){
     var stringLength = stringVal.length; 
    return stringLength; 


}
  function clearElement(elementId, elementType){
      if(elementType == "html"){
          $(elementId).html(""); 
      }
      else if(elementType=="input"){
          $(elementId).val(" "); 
      }
     }
      
  function getEyeColor(nameLen){
     var color = '';
     switch(nameLen){
        case 1:
           color = 'emerald';
           break;
        case 2:
           color = 'magenta';
           break;
        case 3:
              color = 'green';
              break;
        case 4:
              color = 'blue';
              break;
        case 5:
              color = 'light blue';
             break;
        case 6:
           color = 'dark brown';
           break;
        default: 
           color = 'brown';
           break;
     }

     return color;
  }
  });



});

