// JavaScript Document

/*jshint esversion: 6 */

'use strict';

class RNG
{
	cunstructor()
	{
		this.vals = [];
	}
	getVals(die, rolls)
	{
		for(var i = 0; i < rolls; i++)
		{
			var roll = Math.floor((Math.random() * die)) + 1;
			this.vals.push(roll);
		}
		return this.vals;
	}
	
	
}

