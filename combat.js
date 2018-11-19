// JavaScript Document

/*jshint esversion: 6 */ 

"use strict";

function combat()
{
	var race = rng(10, 1);
	race = races[race];
	
	var enemy = new npc(race);
	
	display.innerHTML = "As you journy to your next destination, you stuble across a member of the " + enemy.getRace() + ", but he doesnt look all that friendly.  Suddenly, he lunges at you!   Aperently he's spoiling for a fight."
	
	var combatOver = false;
	
	while(! combatOver)
		{
			showAll()
			disableAll()
			
			for(var i = 0, i < 10, i++)
				{
					buttons[i].innerHTML = "";
				}
			buttons[0].innerHTML = "Attack";
			buttons[0].disabled = false;


			if(player.getHP() <= 0 || enemy.getHP() <= 0)
			{
				combatOver = true;
			}
		}
	
}