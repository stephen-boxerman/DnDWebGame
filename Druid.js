// JavaScript Document

/*jshint esversion: 6 */ 

'use strict';

class Druid extends Player
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
		this.MainStats.con = statSet[1];
		this.MainStats.dex = statSet[2];
		this.MainStats.int = statSet[3];
		this.MainStats.str = statSet[4];
		this.MainStats.cha = statSet[5];
	}
	
	
	
}