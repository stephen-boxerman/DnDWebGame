// JavaScript Document

/*jshint esversion: 6 */ 

'use strict';

class Cleric extends Player
{
	constructor()
	{
		super();
		console.log("cleric made");
	}
	
	get mainStats()
	{
		console.log("geting main stats")
		return this.MainStats;
	}
	
	setMainStats(statSet)
	{
		this.MainStats.wis = statSet[0];
		this.MainStats.str = statSet[1];
		this.MainStats.con = statSet[2];
		this.MainStats.dex = statSet[3];
		this.MainStats.int = statSet[4];
		this.MainStats.cha = statSet[5];
	}
	
	
	
}

//wis +2
//str +2
//dex +3
//cha +2
//int +1