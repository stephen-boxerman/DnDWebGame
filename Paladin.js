// JavaScript Document

/*jshint esversion: 6 */ 

'use strict';

class Paladin extends Player
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
		this.MainStats.str = statSet[0];
		this.MainStats.cha = statSet[1];
		this.MainStats.dex = statSet[2];
		this.MainStats.con = statSet[3];
		this.MainStats.int = statSet[4];
		this.MainStats.wis = statSet[5];
	}
	
	
	
}