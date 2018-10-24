// JavaScript Document

/*jshint esversion: 6 */ 

'use strict';

class Ranger extends Player
{
	constructor()
	{
		super();
	}
	
	get mainStats()
	{
		return this.MainStats;
	}
	
	setMainStats(statSet)
	{
		this.MainStats.dex = statSet[0];
		this.MainStats.wis = statSet[1];
		this.MainStats.str = statSet[2];
		this.MainStats.con = statSet[3];
		this.MainStats.int = statSet[4];
		this.MainStats.cha = statSet[5];
	}
	
	
	
}