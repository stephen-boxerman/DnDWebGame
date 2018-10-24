// JavaScript Document

/*jshint esversion: 6 */ 

'use strict';

class Sorcerer extends Player
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
		this.MainStats.cha = statSet[0];
		this.MainStats.con = statSet[1];
		this.MainStats.dex = statSet[2];
		this.MainStats.int = statSet[3];
		this.MainStats.wis = statSet[4];
		this.MainStats.str = statSet[5];
	}
	
	
	
}