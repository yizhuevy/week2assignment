$(document).ready(function() {
    console.log("Hello world.")
});

var playerData;

$(document).ready(function(){
	getData();
});

function getData() {
	$.getJSON("js/baseballYizhuWang", function(data, error){
			playerData = data;
			drawStuff();

	});
}

function drawStuff() {
	var playerName = playerData.name;
	var playerTeam = playerData.club;

	var playerStats = playerData.stats;
	var lastSeasonIndex = playerStats.length -2;
	var lastSeasonStats = playerData.stats[lastSeasonIndex];
	var lastSeasonAVG = lastSeasonStats.AVG;
	var lastSeasonYear = lastSeasonStats.year;
	var lastSeasonTeam = lastSeasonStats.club;

	$(".chart").append("<h1>"+playerName+"</h1>");
	$(".chart").append("<h3>"+playerTeam+"</h3>");
	$(".chart").append("<p>In "+lastSeasonYear+", "+playerName+"'s batting average was "+lastSeasonAVG+" when he played for the "+lastSeasonTeam+".");
}