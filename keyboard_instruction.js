document.onkeydown = CheckKey;

var max_value = 2;
var perdu = false;
var score = 0;

function drawScore() {
}
function new_game() {
    location.reload();
}
function myFunction() {
    var x = document.getElementById("color");
	if (color == 2){
    x.style.backgroundColor = "#E73C7E";
	}
}
function random24() {
    var x = Math.random();
    if (x < 0.20) {
        return 4;
    } else {
        return 2;
    }
}


function spawn() {
    for (i = 0; i < 2; i++) {
        var nb = random24();
        var row_cor = Math.floor(Math.random() * 4);
        var cell_cor = Math.floor(Math.random() * 4);
        $('#tableau .row:eq('+row_cor+') .col:eq('+cell_cor+')').html(nb);
		//$() tu sélectionne un element et html c'est comme le innerHTML
    }
}
function place(tableau) {
    var NB = 0
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if ($('#tableau .row:eq('+i+') .col:eq('+j+')').html().length == 0) {
                NB = NB + 1;
            }
        }
    }
    return NB;
}
$(function() {			
	//Enable swiping...
	$(".itemSlideInner").swipe( {
		//Generic swipe handler for all directions
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == "left") {
					$( ".right.carousel-control" ).trigger( "click" );
					//console.log("left swipe");
			}
			if (direction == "right") {
					$( ".left.carousel-control" ).trigger( "click" );
					//console.log("right swipe");
			}			
			if (direction == "down") {
					window.scrollBy(0,-300);
			}
			if (direction == "up") {
					window.scrollBy(0,300);
			}
		},
		//Default is 75px, set to 0 for demo so any distance triggers swipe
	   threshold:0
	});
});
function ma_fonction(compteur, i, j, k, l){
	var n = i;
	var plus = 0;
	if (j == l){
		n = j;
	}
	
	if (($('#tableau .row:eq('+k+') .col:eq('+l+')').html().length == 0) && // si length = 0 alors la case est libre 
		($('#tableau .row:eq('+i+') .col:eq('+j+')').html().length != 0)) {//si length != 0 alors la case est libre
		var val = $('#tableau .row:eq('+i+') .col:eq('+j+')').html();
		
		$('#tableau .row:eq('+k+') .col:eq('+l+')').html(val);
		$('#tableau .row:eq('+i+') .col:eq('+j+')').html("");
		plus++;
	}

	else if (compteur[n] == 0 && $('#tableau .row:eq('+k+') .col:eq('+l+')').html().length != 0 && $('#tableau .row:eq('+i+') .col:eq('+j+')').html() == $('#tableau .row:eq('+k+') .col:eq('+l+')').html()){
		var new_val = parseInt($('#tableau .row:eq('+k+') .col:eq('+l+')').html())+parseInt($('#tableau .row:eq('+i+') .col:eq('+j+')').html());
		
		$('#tableau .row:eq('+k+') .col:eq('+l+')').html(new_val);
		$('#tableau .row:eq('+i+') .col:eq('+j+')').html("");
		
		compteur[n]+=1;
		
		if (new_val > max_value){
			max_value = new_val;
		}
	}
	
	return compteur;
}

function CheckKey(e) {
	if (!perdu){
		var row_cor = Math.floor(Math.random() * 4);
		var cell_cor = Math.floor(Math.random() * 4);
		var elt = random24();
		
		var compteur = [0, 0, 0, 0];
		switch (e.keyCode) {
			
			// haut
			case 38:
				for (tour = 4; tour > 1; tour--) {
					for (var i = 1; i < tour; i++) {
						for (var j = 0; j < 4; j++) { 
							compteur = ma_fonction(compteur, i, j, i-1, j);
						}
					}
				}
				break;
			
			// bas
			case 40:
				for (tour = 4; tour > 1; tour--) {
					for (var i = 0; i < tour-1; i++) {
						for (var j = 0; j < 4; j++) {
							compteur = ma_fonction(compteur, i, j, i+1, j);
						}
					}
				}
				break;
			
			// gauche
			case 37:
				for (tour = 4; tour > 1; tour--) {
					for (var j = 1; j < tour; j++) {
						for (var i = 0; i < 4; i++) {
							compteur = ma_fonction(compteur, i, j, i, j-1);
						}
					}
				}
				break;
			
			// droite
			case 39:
				for (tour = 4; tour > 1; tour--) {
					for (var j = 0; j < tour-1; j++) {
						for (var i = 0; i < 4; i++){
							compteur = ma_fonction(compteur, i, j, i, j+1);
						}
					}
				}
				break;
		}
		
		if (e.keyCode >= 37 && e.keyCode <= 40){
			while ($('#tableau .row:eq('+row_cor+') .col:eq('+cell_cor+')').html().length != 0) {
				row_cor = Math.floor(Math.random() * 4);
				cell_cor = Math.floor(Math.random() * 4);
			}
			
			$('#tableau .row:eq('+row_cor+') .col:eq('+cell_cor+')').html(elt);
		}
		
		if (place(tableau) == 0){
			$('#mazone').html("Vous avez perdu !");
			perdu = true;
		}
		if (max_value == 2048){
			$('#mazone').html("!!!!!!!!!!!!!!!!Vous avez gagné !!!!!!!!!!!!!!!");
		}
	}
}