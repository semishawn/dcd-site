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
});



// Battle settings select functionality
var slider = $(".points-to-win-slider");
var sliderThumb = $(".points-to-win-thumb-number");
var sliderWidth = slider.width();
var sliderMin = slider.attr("min");
var sliderMax = slider.attr("max");
var sliderSteps = sliderMax - sliderMin;

slider.on("input change", function() {
	var value = $(this).val();
	var proportionalValue = value - sliderMin;
	var thumbLeft = (sliderWidth / sliderSteps) * proportionalValue;
	var thumbDimension = sliderThumb.width();
	var thumbRight = (thumbDimension / sliderSteps) * proportionalValue;
	var thumbPlacement = thumbLeft - thumbRight;
	sliderThumb.css("left", thumbPlacement);
	sliderThumb.html(value);
	$(".battle-setting-row").first().find(".random-btn").removeClass("setting-selection");
});

$(".battle-setting-row").first().find(".random-btn").click(function() {
	slider.val(20).trigger("input");
	sliderThumb.html("?");
});

$(".setting-btn, .points-to-win-slider").click(function() {
	var settingRow = $(this).closest(".battle-setting-row");
	settingRow.find(".setting-btn, .points-to-win-slider").removeClass("setting-selection");
	$(this).addClass("setting-selection");
});



// Controls screen demos
var wasd = [87, 83, 65, 68];
var arrows = [38, 40, 37, 39];

$(document).on("keydown keyup", function(e) {
	var key;
	var keyDoesSomething = false;

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
		e.preventDefault();

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
		e.preventDefault();
		
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



// Fullscreen functionality
/* $(document).keydown(function(e) {
	var game = $("main")[0];

	if (e.which == 70) {
		if (game.requestFullscreen) game.requestFullscreen();
		else if (game.webkitRequestFullscreen) game.webkitRequestFullscreen();
		else if (game.msRequestFullscreen) game.msRequestFullscreen();
	}
}); */