// Bring screen to front on click
$.fn.maxZ = function(selector) {
	var topZ = 0;

	$(selector).each(function() {
		var thisZ = parseInt($(this).css('z-index'));
		if (thisZ > topZ) topZ = thisZ;
	});

	$(this).css('z-index', topZ + 1);
}



// Cat select functionality
var currentPlayerSelection = 1;
$(".cat-btn").click(function() {
	if (currentPlayerSelection <= 2) {
		$(this).addClass(`player${currentPlayerSelection}-cat-selection`);
		currentPlayerSelection++;
	}

	if (currentPlayerSelection == 3) {
		$(".next-btn").removeClass("hide-btn");
	}
});



// Stage select functionality
$(".stage-btn").click(function() {
	$(".stage-btn").removeClass("stage-selection");
	$(this).addClass("stage-selection");
	$(".fight-btn").removeClass("hide-btn");
});



// Controls screen demos
$(document).on("keydown keyup", function(e) {
	e.preventDefault();

	var key = "";
	var keyDoesSomething = false;
	var wasd = [87, 83, 65, 68];
	var arrows = [38, 40, 37, 39];

	if (wasd.includes(e.which) || arrows.includes(e.which)) {
		if (wasd.includes(e.which)) player = 1;
		if (arrows.includes(e.which)) player = 2;
	
		if (e.which == 38 || e.which == 87)      direction = "up";
		else if (e.which == 40 || e.which == 83) direction = "down";
		else if (e.which == 37 || e.which == 65) direction = "left";
		else if (e.which == 39 || e.which == 68) direction = "right";
		
		keyDoesSomething = true;
		key = $(`.key-section[data-player="${player}"] .direction-key[data-direction="${direction}"]`);
	}

	// Space
	else if (e.which == 32) {
		if (e.type == "keydown") {
			var card = $(".demo-flip-card").eq(1).clone();
			$(".demo-flip-card-container").prepend(card);
			$(".demo-flip-card-container .demo-flip-card").not(".flipped").last().addClass("flipped").maxZ(".demo-flip-card");
		}

		key = $(".space-key");
		keyDoesSomething = true;
	}

	// Escape button
	else if (e.which == 27) {
		key = $(".escape-key");
		keyDoesSomething = true;

		if (e.type == "keydown") {
			$(".pause-demo-container svg").toggleClass("pause-demo-hide");
		}
	}

	// Animate button press
	if (keyDoesSomething == true) {
		if (e.type == "keydown") key.addClass("pressed");
		else key.removeClass("pressed");
	}
});