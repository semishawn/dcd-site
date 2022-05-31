var zoneHeight = $(".directions-demo-container").height();
var zoneWidth = $(".directions-demo-container").width();
var color3 = $(":root").css("--color3");

var engine = Matter.Engine.create();
var render = Matter.Render.create({
	element: $(".directions-demo-container")[0],
	engine: engine,
	options: {
		height: zoneHeight,
		width: zoneWidth,
		background: color3,
		wireframes: false
	}
});

var wallThickness = 10;
var verticalSpeed = 0.08;
var horizontalSpeed = 0.05;



// Walls
var topWall = Matter.Bodies.rectangle(
	zoneWidth / 2,
	wallThickness / -2,
	zoneWidth,
	wallThickness,
	{
		render: {
			fillStyle: "red",
			lineWidth: 0
		},
		isStatic: true
	}
);

var bottomWall = Matter.Bodies.rectangle(
	zoneWidth / 2,
	zoneHeight + (wallThickness / 2),
	zoneWidth,
	wallThickness,
	{
		render: {
			fillStyle: "red",
			lineWidth: 0
		},
		isStatic: true
	}
);

var leftWall = Matter.Bodies.rectangle(
	wallThickness / -2,
	zoneHeight / 2,
	wallThickness,
	zoneHeight,
	{
		render: {
			fillStyle: "red",
			lineWidth: 0
		},
		isStatic: true
	}
);

var rightWall = Matter.Bodies.rectangle(
	zoneWidth + (wallThickness / 2),
	zoneHeight / 2,
	wallThickness,
	zoneHeight,
	{
		render: {
			fillStyle: "red",
			lineWidth: 0
		},
		isStatic: true
	}
);

var demoWallBodies = [topWall, bottomWall, leftWall, rightWall];



// Sprites
var meowmeow = Matter.Bodies.rectangle(
	zoneWidth / 3,
	zoneHeight / 2,
	90,
	60,
	{
		render: {
			sprite: {
				texture: "img/demo-cats/meowmeow.webp",
				xScale: 0.18,
				yScale: 0.18
			}
		},
		chamfer: {radius: 30}
	}
);

var purrpurr = Matter.Bodies.rectangle(
	2 * (zoneWidth / 3),
	zoneHeight / 2,
	90,
	45,
	{
		render: {
			sprite: {
				texture: "img/demo-cats/purrpurr.webp",
				xScale: 0.18,
				yScale: 0.18
			}
		},
		chamfer: {radius: 22.5}
	}
);

var demoCatBodies = [meowmeow, purrpurr];



// Run functionality
Matter.Composite.add(engine.world, demoWallBodies);
Matter.Composite.add(engine.world, demoCatBodies);
Matter.Runner.run(engine);
Matter.Render.run(render);

function runDemoCats() {
	engine.enabled = true;
	Matter.Render.run(render);

	Matter.Body.setPosition(
		meowmeow,
		{
			x: zoneWidth / 3,
			y: zoneHeight / 2
		}
	);
	Matter.Body.setAngle(meowmeow, 0);

	Matter.Body.setPosition(
		purrpurr,
		{
			x: 2 * (zoneWidth / 3),
			y: zoneHeight / 2
		}
	);
	Matter.Body.setAngle(purrpurr, 0);
}

function pauseDemoCats() {
	engine.enabled = false;
	Matter.Render.stop(render);
}
pauseDemoCats();



// Move demo cats
var keyPressing = false;
$(document).keydown(function(e) {
	if (keyPressing == false) {
		if (e.which == 87) {
			if (Matter.SAT.collides(meowmeow, bottomWall).collided == true)
				Matter.Body.applyForce(meowmeow, {x: meowmeow.position.x, y: meowmeow.position.y}, {x: 0, y: -1 * verticalSpeed});
		}
		else if (e.which == 65) Matter.Body.applyForce(meowmeow, {x: meowmeow.position.x, y: meowmeow.position.y}, {x: -1 * horizontalSpeed, y: 0});
		else if (e.which == 68) Matter.Body.applyForce(meowmeow, {x: meowmeow.position.x, y: meowmeow.position.y}, {x: horizontalSpeed, y: 0});
	
		if (e.which == 38) {
			if (Matter.SAT.collides(purrpurr, bottomWall).collided == true)
				Matter.Body.applyForce(purrpurr, {x: purrpurr.position.x, y: purrpurr.position.y}, {x: 0, y: -1 * verticalSpeed});
		}
		else if (e.which == 37) Matter.Body.applyForce(purrpurr, {x: purrpurr.position.x, y: purrpurr.position.y}, {x: -1 * horizontalSpeed, y: 0});
		else if (e.which == 39) Matter.Body.applyForce(purrpurr, {x: purrpurr.position.x, y: purrpurr.position.y}, {x: horizontalSpeed, y: 0});
	}

	keyPressing = true;
});

$(document).keyup(function() {
	keyPressing = false;
});