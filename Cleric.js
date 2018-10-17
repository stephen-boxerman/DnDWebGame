// JavaScript Document

/*jshint esversion: 6 */ 

'use strict';

const rng = require(['RNG']);
const pc = require(['Player']);

class Cleric extends pc
{
	constructor()
	{
		super();
		this.rng = new rng();
		
		var statSet1 = this.getStats();
		var statSet2 = this.getStats();

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

		if(count1 > count2)
			{
				this.Stats(statSet1);
			}
		else
			{
				this.Stats(statSet2);
			}
		
	}
	
	getStats()
	{
		var stat = 0;
		var stats = [];

		for(var i = 0; i < 6; i++)
		{
			var statRoll = this.rng.getVals(6, 4);
			statRoll.sort();
			statRoll.reverse();

			stat = statRoll[0] + statRoll[1] + statRoll[2];
			stats.push(stat);
		}

		stats.sort();
		
		return stats;
	}
	
	set Stats(statSet)
	{
		this.stats.wis = statSet[0];
		this.stats.str = statSet[1];
		this.stats.con = statSet[2];
		this.stats.dex = statSet[3];
		this.stats.int = statSet[4];
		this.stats.cha = statSet[5];
	}
	
	
	
}