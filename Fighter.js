// JavaScript Document

/*jshint esversion: 6 */ 

'use strict';

class Fighter extends Player
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
		this.MainStats.dex = statSet[1];
		this.MainStats.con = statSet[2];
		this.MainStats.int = statSet[3];
		this.MainStats.wis = statSet[4];
		this.MainStats.cha = statSet[5];
	}
	
	
	
}