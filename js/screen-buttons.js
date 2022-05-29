// Title screen buttons
$(`.title-btn[data-screen="play"]`).click(function() {
	$(".choose-your-cat-screen").maxZ(".screen");
});

$(`.title-btn[data-screen="how-to-play"]`).click(function() {
	$(".how-to-play-screen").maxZ(".screen");
});

$(`.title-btn[data-screen="controls"]`).click(function() {
	$(".controls-screen").maxZ(".screen");
	resetDemoCats();
	$(".flipped").remove();
});

$(`.title-btn[data-screen="credits"]`).click(function() {
	$(".credits-screen").maxZ(".screen");
});



// Back buttons
$(".choose-your-cat-screen .back-btn").click(function() {
	$(".title-screen").maxZ(".screen");
});

$(".stage-select-screen .back-btn").click(function() {
	$(".reset-btn").click();
	$(".choose-your-cat-screen").maxZ(".screen");
	$(".stage-btn").removeClass("stage-selection");
});

$(".battle-settings-screen .back-btn").click(function() {
	$(".stage-select-screen").maxZ(".screen");
});

$(".how-to-play-screen .back-btn").click(function() {
	$(".title-screen").maxZ(".screen");
});

$(".controls-screen .back-btn").click(function() {
	$(".title-screen").maxZ(".screen");
});

$(".credits-screen .back-btn").click(function() {
	$(".title-screen").maxZ(".screen");
});



// Continue buttons
$(".choose-your-cat-screen .next-btn").click(function() {
	$(".stage-select-screen").maxZ(".screen");
});

$(".stage-select-screen .next-btn").click(function() {
	$(".battle-settings-screen").maxZ(".screen");
});

$(".battle-settings-screen .fight-btn").click(function() {
	$(".battle-screen").maxZ(".screen");
});



// Reset buttons
$(".choose-your-cat-screen .reset-btn").click(function() {
	$(".cat-btn").removeClass("player1-cat-selection player2-cat-selection");
	currentPlayerSelection = 1;
	$(".choose-your-cat-screen .next-btn").addClass("hide-btn");
});

/* $(".battle-settings-screen .reset-btn").click(function() {

}); */