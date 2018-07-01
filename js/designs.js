//Select elements from the dom using jquery and the element id
const pixelCanvas = $('#pixelCanvas');
const inputHeight = $('#inputHeight');
const inputWidth = $('#inputWidth');

//Listen for on-click events on the submit button
 
$(document).on('click', '#btn-submit', function(e){ 
    e.preventDefault();    
    makeGrid();
 }); 

 // When size is submitted by the user, call makeGrid() 
 function makeGrid(){     
    var height = inputHeight.val();
    var width = inputWidth.val();

    //Clear the table dom off all rows and columns
    pixelCanvas.empty();
    for(let i = 0; i< height; i++){

        //Append a row to the table
        pixelCanvas.append('<tr></tr>'); 
                
        for(let j= 0; j< width; j++){

            //Append a cells to the row
            $(pixelCanvas).find('tr:last').append('<td></td>');    
            
            //Get the recently added element
            var elem  =    $(pixelCanvas).find('tr:last td:last');

            //Listen for on-click events on the recently added element
            $(elem).on('click',  function(e){

                //Pick the color from the color picker
                var pickedColor = $("#colorPicker").val();

                //Change the color of the clicked cell
                $(this).css('background-color', pickedColor);            
            });            
        }
    } 
 }