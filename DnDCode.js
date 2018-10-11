// JavaScript Document

"use strict";

var classButtons = [];
var classes = ["Cleric","Druid", "Fighter", "Mist Walker","Monk","Paladin","Ranger","Sorcerer","Wizard","Warlock"];

function start_game()
{
	for(var i = 1; i < 11; i++)
	{
		console.log("CB" + i)
		var button = document.getElementById("CB" + i);
		button.innerHTML = classes[i - 1];
		classButtons.push(button);
		button.style.visibility = "hidden";
	}
}

start_game();