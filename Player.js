// JavaScript Document

/*jshint esversion: 6 */ 

class Player
{	
	constructor()
	{
		this.race = "";
		this.occupation = "";
		this.level = 1;
		this.exp = 0;
		this.health = 0;
		this.prof = 2;
		this.AC = 0;
		this.numHitDice = 1;
		
		this.stats = {};
		this.stats.str = 0;
		this.stats.dex = 0;
		this.stats.con = 0;
		this.stats.int = 0;
		this.stats.wis = 0;
		this.stats.cha = 0;
		
		this.statMods = {};
		this.statMods.str = 0;
		this.statMods.dex = 0;
		this.statMods.con = 0;
		this.statmods.int = 0;
		this.statmods.wis = 0;
		this.statMods.cha = 0;
		
		this.gold = 0;
		this.gender = 0;
		this.pronouns = [];
		this.heatCycle = -1;
		this.inHeat = false;
		this.pregDur = 0;
		this.isPreg = false;
	}
	
	get race()
	{
		return this.race;
	}
	
	set race(race)
	{
		this.race = race;
	}
	
	/////////
	
	get level()
	{
		return this.level;
	}

	////////////

	get exp()
	{
		return this.exp;
	}
	
	set exp(newEXP)
	{
		this.exp += newEXP;
		
		if(this.exp >= 300 * this.level)
			{
				this.level++;
			}
		
		if(this.level % 4 === 1  && this.level !== 1)
			{
				this.prof += 1;
			}
	}
	
	get prof()
	{
		return this.prof;
	}
	
	get ac()
	{
		return this.AC;
	}
	
	get numHitDice()
	{
		return this.numHitDice;
	}
	
	get gold()
	{
		return this.gold;
	}
	
	set gold(num)
	{
		this.gold += num;
	}
	
	get gender()
	{
		return this.gender;
	}
	
	set gender(gender)
	{
		this.gender = gender;
	}
	
	getPronouns(idx)
	{
		return this.pronouns[idx];
	}
	
	setPronouns()
	{
		switch(this.gender)
		{
			case("male"):
			case("cuntboy"):
			case("male-herm"):
				{
					this.pronouns = ["he","him","his"];
					break;
				}
			case("female"):
			case("dickgirl"):
			case("herm"):
				{
					this.pronouns = ["she","her","hers"];
					break;
				}
		}
	}
	
	get heatCycle()
	{
		return this.heatCycle;
	}
	
	get inHeat()
	{
		return this.inHeat;
	}
	
	get pregDur()
	{
		return this.pregDur;
	}
	
	get isPreg()
	{
		return this.isPreg;
	}
	
}