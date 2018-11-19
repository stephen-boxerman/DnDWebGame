// JavaScript Document

/*jshint esversion: 6 */ 

"use strict";

class npc
	{
		constructor(race)
		{
			this.race = race;
			this.hp = 30;
		}
		
		getRace()
		{
			return this.race;
		}
		
		getHP()
		{
			return this.hp;
		}
		
		rng(die)
		{
			var roll = Math.floor((Math.random() * die)) + 1;
			return roll;
		}
		
		attack(playerAC)
		{
			var attackRoll = this.rng(20);
			if(attackRoll >= playerAC)
			{
				return this.rng(10);
			}
			else
			{
				return 0;
			}
		}
	}