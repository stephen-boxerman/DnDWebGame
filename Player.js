// JavaScript Document

/*jshint esversion: 6 */ 

class Player
{	
	constructor()
	{
		
		
		this.MainStats = {};
		console.log("running constructor")
		this.race = "";
		this.occupation = "";
		this.level = 1;
		this.exp = 0;
		this.health = 0;
		this.prof = 2;
		this.AC = 0;
		this.numHitDice = 1;
		
		console.log("creating stats json");
		console.log("stats json created");
		
		this.statMods = [0,0,0,0,0,0]
		
		this.gold = 0;
		
		console.log("cunstructor finished");
	}
	
	getRace()
	{
		return this.race;
	}
	
	setRace(race)
	{
		this.race = race;
		console.log(this.race);
		switch(this.race)
			{
					case("Wolf"):
					{
						console.log("hello")
						this.MainStats.int += 2;
						break;
					}
					case("Lion"):
					{
						break;
					}
					case("Horse"):
					{
						break;
					}
					case("Otter"):
					{
						break;
					}
					case("Alligator"):
					{
						break;
					}
					case("Dragon"):
					{
						break;
					}
					case("Phoenix"):
					{
						break;
					}
					case("Orca"):
					{
						break;
					}
					case("Griphon"):
					{
						break;
					}
					case("Naga"):
					{
						break;
					}
			}
	}
	
	/////////
	
	getLevel()
	{
		return this.level;
	}

	////////////

	getExp()
	{
		return this.exp;
	}
	
	setExp(newEXP)
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
	
	getProf()
	{
		return this.prof;
	}
	
	getAC()
	{
		return this.AC;
	}
	
	getNumHitDice()
	{
		return this.numHitDice;
	}
	
	getGold()
	{
		return this.gold;
	}
	
	setGold(num)
	{
		this.gold += num;
	}
	
	
}