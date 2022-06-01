// Title screen buttons
$(`.title-btn[data-screen="play"]`).click(function() {
	$(".choose-your-cat-screen").maxZ(".screen");
});

$(`.title-btn[data-screen="how-to-play"]`).click(function() {
	tutorialCardCount = 1;
	$(".tutorial-card").first().maxZ(".tutorial-card");
	$(".tutorial-btn").first().addClass("hide-btn");
	$(".how-to-play-screen").maxZ(".screen");
});

$(`.title-btn[data-screen="controls"]`).click(function() {
	runDemoCats();
	$(".flipped").remove();
	$(".controls-screen").maxZ(".screen");
});

$(`.title-btn[data-screen="credits"]`).click(function() {
	$(".credits-screen").maxZ(".screen");
});



// Back buttons
$(".choose-your-cat-screen .back-btn").click(function() {
	$(".title-screen").maxZ(".screen");
	$(".choose-your-cat-screen .reset-btn").click();
});

$(".stage-select-screen .back-btn").click(function() {
	$(".choose-your-cat-screen").maxZ(".screen");
	$(".stage-btn").removeClass("stage-selection");
	$(".stage-btn").first().addClass("stage-selection");
});

$(".battle-settings-screen .back-btn").click(function() {
	$(".stage-select-screen").maxZ(".screen");
	$(".battle-settings-screen .reset-btn").click();
});

$(".card-screen .back-btn").click(function() {
	$(".battle-settings-screen").maxZ(".screen");
});

$(".how-to-play-screen .back-btn").click(function() {
	$(".title-screen").maxZ(".screen");
});

$(".controls-screen .back-btn").click(function() {
	$(".title-screen").maxZ(".screen");
	pauseDemoCats();
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
	$(".card-screen").maxZ(".screen");
});



// Reset buttons
$(".choose-your-cat-screen .reset-btn").click(function() {
	$(".cat-btn").removeClass("player1-cat-selection player2-cat-selection");
	currentPlayerSelection = 1;
	$(".choose-your-cat-screen .next-btn").addClass("hide-btn");
});

$(".battle-settings-screen .reset-btn").click(function() {
	$(".setting-btn").removeClass("setting-selection");
	$(`.setting-btn[data-setting="normal"]`).addClass("setting-selection");
	slider.val(20).trigger("input");
});