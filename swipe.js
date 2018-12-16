jQuery(document).ready(function(){
	$(document).on("swipeleft", swipeLeft);
	$(document).on("swiperight", swipeRight);
	$(document).on("swipeup", swipeDown);
	$(document).on("swipedown", swipeUp);
	
	function swipeLeft(event){
		alert("niceu");
	}
	function swipeRight(event){
		alert("niceuright");
	}
});
	

