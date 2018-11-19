// JavaScript Document

/*jshint esversion: 6 */ 

'use strict';

class Cleric extends Player
{
	constructor()
	{
		super();
		this.hitDie = 10;
		this.health = Math.floor((Math.random() * this.hitDie)) + 1;
	}
	
	get mainStats()
	{
		console.log("geting main stats")
	}
	
	setMainStats(statSet)
	{
		this.MainStats.wis = statSet[0];
		this.MainStats.str = statSet[1];
		this.MainStats.con = statSet[2];
		this.MainStats.dex = statSet[3];
		this.MainStats.int = statSet[4];
		this.MainStats.cha = statSet[5];

		for(var key in this.statMods)
		{
			this.setStatMod(key);
		}

		this.setAC
	}
	
	
	
}

//wis +2
//str +2
//dex +3
//cha +2
//int +1