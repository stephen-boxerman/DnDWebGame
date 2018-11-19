// JavaScript Document

/*jshint esversion: 6 */ 

"use strict";

var classes = ["Cleric","Druid", "Fighter", "Mist Walker","Monk","Paladin","Ranger","Sorcerer","Wizard","Warlock"];
var races = ["Wolf","Lion","Horse","Otter","Alligator","Orca","Dragon","Pheonix","Griphon","Naga"];
var classText = [clericText, druidText, fighterText, mwText, monkText, paladinText, rangerText, sorcererText, wisardText, warlockText];
var raceText = [wolfText, lionText, horseText, otterText, alligatorText, orcaText, dragonText, pheonixText, griphonText, nagaText];
var buttons = [];
var display = document.getElementById('display');
var chosenClass;
var chosenRace;
var player;
var statDivs = [];

for(var i = 1; i < 11; i++)
{
	var button = document.getElementById("B" + i);
	buttons.push(button);
}

statDivs.push(document.getElementById("str"));
statDivs.push(document.getElementById("dex"));
statDivs.push(document.getElementById("con"));
statDivs.push(document.getElementById("int"));
statDivs.push(document.getElementById("wis"));
statDivs.push(document.getElementById("cha"));

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
	display.innerHTML = "";
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
			chosenClass = classes[i];
			display.innerHTML = classText[i];
		}
	}
}

function returnToClasses(e)
{
	e.target.removeEventListener(e.type, returnToClasses);
	displayClasses();
	chosenClass = "";
	display.innerHTML = backToClasses;
}

function raceEvents(e)
{
	hideRaces();
	
	buttons[1].style.visibility = "visible";
	buttons[3].style.visibility = "visible";
	
	buttons[1].innerHTML = "Yes";
	buttons[3].innerHTML = "No";
	
	buttons[1].addEventListener('click', raceSet)
	buttons[3].addEventListener('click', returnToRaces);
	
	for(var i = 0; i < 10; i++)
	{
		buttons[i].removeEventListener(e.type, raceEvents)
		if(e.target === buttons[i])
		{
			chosenRace = races[i];
			display.innerHTML = raceText[i];
			console.log(chosenClass)
		}
	}
}

function raceSet(e)
{
	e.target.removeEventListener(e.type, raceSet);
	buttons[3].removeEventListener(e.type, returnToRaces);
	
	player.setRace(chosenRace);
	showStats();
	
	switch(player.getRace())
		{
			case(races[0]):
			{
				currentCity = "Wawood";
				break;
			}
			case(races[1]):
			{
				currentCity = "Dadasa";
				break;
			}
			case(races[2]):
			{
				currentCity = "Hivala";
				break;
			}
			case(races[3]):
			{
				currentCity = "Nodross";
				break;
			}
			case(races[4]):
			{
				currentCity = "Grock";
				break;
			}
			case(races[5]):
			{
				currentCity = "Orafield";
				break;
			}
			case(races[6]):
			{
				currentCity = "Oniset";
				break;
			}
			case(races[7]):
			{
				currentCity = "Ophison";
				break;
			}
			case(races[8]):
			{
				currentCity = "Arcron";
				break;
			}
			case(races[9]):
			{
				currentCity = "Sison";
				break;
			}
		}
	
	mainDisplay();
}

function displayRaces(e)
{
	e.target.removeEventListener(e.type, displayRaces);
	buttons[3].removeEventListener('click', returnToClasses);
	
	var statSet1 = getStats();
	var statSet2 = getStats();

	var count1 = 0;
	var count2 = 0;

	for(var i = 0; i < 6; i++)
	{
		if(statSet1[i] >= statSet2[i])
		{
			count1++;
		}
		else
		{
			count2++;
		}
	}

	
	
	switch(chosenClass)
	{
			case("Cleric"):
			{
				player = new Cleric();
				break;
			}
			case("Druid"):
			{
				player = new Druid();
				break;
			}
			case("Fighter"):
			{
				player = new Fighter();
				break;
			}
			case("Mist Walker"):
			{
				player = new MistWalker();
				break;
			}
			case("Monk"):
			{
				player = new Monk();
				break;
			}
			case("Paladin"):
			{
				player = new Paladin();
				break;
			}
			case("Ranger"):
			{
				player = new Ranger();
			}
			case("Sorcerer"):
			{
				player = new Sorcerer();
				break;
			}
			case("Warlock"):
			{
				player = new Warlock;
				break;
			}
			case("Wizard"):
			{
				player = new Wizard();
				break;
			}
	}
	
	if(count1 > count2)
		{
			player.setMainStats(statSet1);
		}
	else
		{
			player.setMainStats(statSet2);
		}
	
	showStats();
	
	display.innerHTML = choseRace;
	
	for(var i = 0; i < 10; i++)
	{	
		buttons[i].style.visibility = "visible";
		buttons[i].innerHTML = races[i];
		buttons[i].addEventListener('click', raceEvents);
	}
}

function showStats()
{
	var statBlock = player.mainStats;
	statDivs[0].innerHTML = "Strength&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + statBlock.str;
	statDivs[1].innerHTML = "Dexterity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + statBlock.dex;
	statDivs[2].innerHTML = "Constetution&nbsp;: " + statBlock.con;
	statDivs[3].innerHTML = "Intellegence&nbsp;&nbsp;: " + statBlock.int;
	statDivs[4].innerHTML = "Wisdom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + statBlock.wis;
	statDivs[5].innerHTML = "Charisma&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + statBlock.cha;
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

function getStats()
{
	var stat = 0;
	var stats = [];
	
	for(var i = 0; i < 6; i++)
	{
		var statRoll = rng(6, 4);
		statRoll.sort();
		statRoll.reverse();
		stat = statRoll[0] + statRoll[1] + statRoll[2];
		stats.push(stat);
	}

	var key;
	var j; 
   for (i = 0; i < stats.length; i++) 
   { 
       key = stats[i]; 
       j = i-1; 
  
       /* Move elements of arr[0..i-1], that are 
          greater than key, to one position ahead 
          of their current position */
       while (j >= 0 && stats[j] > key) 
       { 
           stats[j+1] = stats[j]; 
           j = j-1; 
       } 
       stats[j+1] = key
   }
	   
	stats.reverse();
	console.log(stats)

	return stats;
	
}

function rng(die,numRoll)
{
	var rolls = [];
	for(var i = 0; i < numRoll; i++)
		{
			var roll = Math.floor((Math.random() * die)) + 1;
			rolls.push(roll);
		}
	
	return rolls;
}
								

start_game();