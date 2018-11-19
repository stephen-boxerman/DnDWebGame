// JavaScript Document

/*jshint esversion: 6 */ 

class Player
{	
	constructor()
	{
		
		
		this.MainStats = {};
		this.race = "";
		this.occupation = "";
		this.level = 1;
		this.exp = 0;
		this.health = 0;
		this.prof = 2;
		this.AC = 0;
		this.numHitDice = 1;
		this.hitDie = 0;
		
		this.statMods = {str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0};
		
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

    setStatMod(key)
    {
        var stat = this.MainStats.key;
        if(stat == 1)
        {
            this.statMods.key = -5;
        }
        else if(stat == 2 || stat == 3)
        {
            this.statMods.key = -4;
        }
        else if(stat == 4 || stat == 5)
        {
            this.statMods.key = -3;
        }
        else if(stat == 6 || stat == 7)
        {
            this.statMods.key = -2;
        }
        else if(stat == 8 || stat == 9)
        {
            this.statMods.key = -1;
        }
        else if(stat == 10 || stat == 11)
        {
            this.statMods.key = 0;
        }
        else if(stat == 12 || stat == 13)
        {
            this.statMods.key = 1;
        }
        else if(stat == 14 || stat == 15)
        {
            this.statMods.key = 2;
        }
        else if(stat == 16 || stat == 17)
        {
            this.statMods.key = 3;
        }
        else if(stat == 18 || stat == 19)
        {
            this.statMods.key = 4;
        }
        else if(stat == 20 || stat == 21)
        {
            this.statMods.key = 5;
        }
        else if(stat == 22 || stat == 23)
		{
			this.statMods.key = 6;
		}
		else if(stat == 24 || stat == 25)
        {
            this.statMods.key = 7;
        }
        else if(stat == 26 || stat == 27)
        {
            this.statMods.key = 8;
        }
        else if(stat == 28 || stat == 29)
        {
            this.statMods.key = 9;
        }
        else if(stat == 30)
        {
            this.statMods.key = 10;
        }

    }

    setAC()
    {
        this.AC = 10 + this.statMods.dex;
    }
}