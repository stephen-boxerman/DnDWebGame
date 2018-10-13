// JavaScript Document

"use strict";

var classes = ["Cleric","Druid", "Fighter", "Mist Walker","Monk","Paladin","Ranger","Sorcerer","Wizard","Warlock"];
var races = ["Wolf","Lion","Horse","Otter","Alligator","Orca","Dragon","Pheonix","Griphon","Naga"];
var classText = [clericText, druidText, fighterText, mwText, monkText, paladinText, rangerText, sorcererText, wisardText, warlockText];
var raceText = [wolfText, lionText, horseText, otterText, alligatorText, orcaText, dragonText, pheonixText, griphonText, nagaText];
var buttons = [];
var display = document.getElementById('display');

for(var i = 1; i < 11; i++)
{
	var button = document.getElementById("B" + i);
	buttons.push(button);
}

function start_game()
{
	for(var i = 0; i < 10; i++)
	{
		if(i !== 1 && i !== 3)
		{
			buttons[i].style.visibility = "hidden";
		}
	}
	
	buttons[1].innerHTML = "New Game";
	buttons[3].innerHTML = "Load Game";
	buttons[3].disabled = true;
	buttons[1].addEventListener("click", newGame);
}

function newGame(e)
{
	e.target.removeEventListener(e.type, newGame);
	buttons[3].disabled = false;
	
	display.innerHTML = startText;
	
	buttons[1].innerHTML = "Stay Calm";
	buttons[3].innerHTML = "Freak Out";
	
	buttons[1].addEventListener('click', stayCalm);
	buttons[3].addEventListener('click', freakOut);
}

function stayCalm(e)
{
	e.target.removeEventListener(e.type, stayCalm);
	buttons[3].removeEventListener('click', freakOut);
	
	console.log(calmText)
	display.innerHTML = calmText;
	
	displayClasses();
}

function freakOut(e)
{
	e.target.removeEventListener(e.type, freakOut);
	buttons[1].removeEventListener('click', stayCalm);
	
	display.innerHTML = freakText;
	
	displayClasses();
}

function displayClasses()
{
	for(var i = 0; i < 10; i++)
	{
		buttons[i].style.visibility = "visible";
		buttons[i].innerHTML = classes[i];
		buttons[i].addEventListener('click', classEvents);
	}
}
function hideClasses()
{
	for(var i = 0; i < 10; i++)
	{
		buttons[i].style.visibility = "hidden";
		buttons[i].removeEventListener('click', classEvents);
	}
}

function classEvents(e)
{
	hideClasses();
	
	buttons[1].style.visibility = "visible";
	buttons[3].style.visibility = "visible";
	
	buttons[1].innerHTML = "Yes";
	buttons[3].innerHTML = "No";
	
	buttons[1].addEventListener('click', displayRaces);
	buttons[3].addEventListener('click', returnToClasses);
	
	for(var i = 0; i < 10; i++)
	{
		if(e.target === buttons[i])
		{
			display.innerHTML = classText[i];
		}
	}
}

function raceEvents(e)
{
	hideRaces();
	
	buttons[1].style.visibility = "visible";
	buttons[3].style.visibility = "visible";
	
	buttons[1].innerHTML = "Yes";
	buttons[3].innerHTML = "No";
	
	//buttons[1].addEventListener('click', )
	buttons[3].addEventListener('click', returnToRaces);
	
	for(var i = 0; i < 10; i++)
	{
		if(e.target === buttons[i])
		{
			display.innerHTML = raceText[i];
		}
	}
}

function displayRaces(e)
{
	e.target.removeEventListener(e.type, displayRaces);
	buttons[3].removeEventListener('click', returnToClasses);
	
	display.innerHTML = choseRace;
	
	for(var i = 0; i < 10; i++)
	{	
		buttons[i].style.visibility = "visible";
		buttons[i].innerHTML = races[i];
		buttons[i].addEventListener('click', raceEvents);
	}
}

function hideRaces()
{
	for(var i = 0; i < 10; i++)
	{	
		buttons[i].removeEventListener('click', raceEvents);
		buttons[i].style.visibility = "hidden";
		buttons[i].innerHTML = races[i];
	}
}

function returnToRaces(e)
{
	e.target.removeEventListener(e.type, displayRaces);
	buttons[3].removeEventListener('click', returnToClasses);
	
	display.innerHTML = backToRaces;
	
	for(var i = 0; i < 10; i++)
	{	
		buttons[i].style.visibility = "visible";
		buttons[i].innerHTML = races[i];
		buttons[i].addEventListener('click', raceEvents);
	}
}

function returnToClasses(e)
{
	e.target.removeEventListener(e.type, returnToClasses);
	displayClasses();
	display.innerHTML = backToClasses;
}
								

start_game();