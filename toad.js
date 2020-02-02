var playing = false;
var clicked = false;

$(document).ready(function(){

	setTimeout(function() {
	if(!clicked){
      $('#clickme').fadeIn();
      }
    }, 3000);$()
	
   $('#main').click(function(){
   		clicked = true;
   		$('#clickme').hide();
   		if(!playing){
   			playing = true;
   		 	audio.play();
   			$('#imgtoad').attr("src","toad_o.png");
   		}
   });
   
   var audio = document.getElementById('croak');
	audio.addEventListener('ended', function (){ 
		playing = false;
        $('#imgtoad').attr("src","toad.png");
   		 //audio.pause();
	});
 });