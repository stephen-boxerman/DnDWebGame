// JavaScript Document

/*jshint esversion: 6 */ 

"use strict";

var citys = ["Hivala", "Orafield", "Dadasa", "Nodross","Oniset","Ophison","Wawood","Sison","Arcron","Grock"]
var currentCity;

var townDiv = document.getElementById("town");

function mainDisplay()
{
	townDiv.innerHTML = "Town<br><b>" + currentCity + "</b>";
	
	disableAll();
	hideAll();
	
	buttons[0].innerHTML = "Inventory";
	buttons[0].style.visibility = "visible";
	
	buttons[1].innerHTML = "Shops";
	buttons[1].style.visibility = "visible";
	
	buttons[2].innerHTML = "Jobs";
	buttons[2].style.visibility = "visible";
	
	buttons[3].innerHTML = "Make Potions";
	buttons[3].style.visibility = "visible";
	
	buttons[5].innerHTML = "Rest";
	buttons[5].style.visibility = "visible";
	buttons[5].disabled = true;
	
	buttons[6].innerHTML = "Wait";
	buttons[6].style.visibility = "visible";
	
	buttons[9].innerHTML = "Explore";
	buttons[9].disabled = false;
	buttons[9].style.visibility = "visible";
	buttons[9].addEventListener('click', exploreOptions)
}

function exploreOptions(e)
{
	e.target.removeEventListener(e.type, exploreOptions);
	buttons[0].innerHTML = currentCity;
	enableAll();
	hideAll();
	
	for(var i = 0; i < 10; i ++)
		{
			buttons[i].innerHTML = citys[i];
			buttons[i].addEventListener('click', explore)
		}
	
	switch(currentCity)
		{
				case(citys[0]):
				{
					hivalaExplore()
					break;
				}
				case(citys[1]):
				{
					orafieldExplore();
					break;
				}
				case(citys[2]):
				{
					dadasaExplore();
					break;
				}
				case(citys[3]):
				{
					nodrossExplore();
					break;
				}
				case(citys[4]):
				{
					onisetExplore();
					break;
				}
				case(citys[5]):
				{
					ophisonExplore();
					break;
				}
				case(citys[6]):
				{
					wawoodExplore();
					break;
				}
				case(citys[7]):
				{
					sisonExplore();
					break;
				}
				case(citys[8]):
				{
					arcronExplore();
					break;
				}
				case(citys[9]):
				{
					grockExplore;
					break;
				}
				
		}
}

function hideAll()
{
	for(var i = 0; i < 10; i++)
	{
		buttons[i].style.visibility = "hidden";
	}
}

function showAll()
{
	for(var i = 0; i < 10; i++)
	{
		buttons[i].style.visibility = "visible";
	}
}

function disableAll()
{
	for(var i = 0; i < 10; i++)
	{
		buttons[i].disabled = true;
	}
}

function enableAll()
{
	for (var i = 0; i < 10; i++)
	{
		buttons[i].disabled = false;
	}
}

function hivalaExplore()
{
	buttons[3].style.visibility = "visible";

	buttons[9].style.visibility = "visible";

	buttons[4].style.visibility = "visible";

	buttons[0].style.visibility = "visible";
	buttons[0].disabled = true;
}

function orafieldExplore()
{
	buttons[6].style.visibility = "visible";

	buttons[7].style.visibility = "visible";

	buttons[9].style.visibility = "visible";
	
	buttons[1].style.visibility = "visible";
	buttons[1].disabled = true;
}

function dadasaExplore()
{
	buttons[6].style.visibility = "visible";

	buttons[7].style.visibility = "visible";

	buttons[9].style.visibility = "visible";
	
	buttons[1].style.visibility = "visible";

	buttons[2].style.visibility = "visible";
	buttons[2].disabled = true;
}

function nodrossExplore()
{
	buttons[9].style.visibility = "visible";

	buttons[4].style.visibility = "visible";

	buttons[0].style.visibility = "visible";
	
	buttons[3].style.visibility = "visible";
	buttons[3].disabled = true;
}

function onisetExplore()
{
	buttons[5].style.visibility = "visible";

	buttons[7].style.visibility = "visible";

	buttons[9].style.visibility = "visible";
	
	buttons[3].style.visibility = "visible";
	
	buttons[0].style.visibility = "visible"
	
	buttons[4].style.visibility = "visible";
	buttons[4].disabled = true;
}

//["Hivala", "Orafield", "Dadasa", "Nodross","Oniset","Ophison","Wawood","Sison","Arcron","Grock"]

function ophisonExplore()
{
	buttons[4].style.visibility = "visible";

	buttons[7].style.visibility = "visible";

	buttons[9].style.visibility = "visible";
	
	buttons[6].style.visibility = "visible";
	
	buttons[8].style.visibility = "visible"
	
	buttons[5].style.visibility = "visible";
	buttons[5].disabled = true;
	
}

function wawoodExplore()
{
	buttons[2].style.visibility = "visible";
	
	buttons[5].style.visibility = "visible";

	buttons[7].style.visibility = "visible";

	buttons[9].style.visibility = "visible";
	
	buttons[4].style.visibility = "visible";
	
	buttons[3].style.visibility = "visible";
	
	buttons[6].style.visibility = "visible";
	buttons[6].disabled = true;
	
	buttons[8].style.visibility = "visible";
	
}

function sisonExplore()
{
	buttons[2].style.visibility = "visible";
	
	buttons[5].style.visibility = "visible";

	buttons[6].style.visibility = "visible";

	buttons[9].style.visibility = "visible";
	
	buttons[4].style.visibility = "visible";
	
	buttons[3].style.visibility = "visible";
	
	buttons[7].style.visibility = "visible";
	buttons[7].disabled = true;
	
	buttons[8].style.visibility = "visible";
}

//["Hivala", "Orafield", "Dadasa", "Nodross","Oniset","Ophison","Wawood","Sison","Arcron","Grock"]

function arcronExplore()
{
	buttons[6].style.visibility = "visible";

	buttons[7].style.visibility = "visible";

	buttons[9].style.visibility = "visible";
	
	buttons[5].style.visibility = "visible";

	buttons[8].style.visibility = "visible";
	buttons[8].disabled = true;
}

function grockExplore()
{
	buttons[2].style.visibility = "visible";
	
	buttons[7].style.visibility = "visible";

	buttons[6].style.visibility = "visible";

	buttons[0].style.visibility = "visible";
	
	buttons[5].style.visibility = "visible";
	
	buttons[4].style.visibility = "visible";
	
	buttons[3].style.visibility = "visible";
	
	buttons[9].style.visibility = "visible";
	buttons[9].disabled = true;
	
	buttons[8].style.visibility = "visible";
}

function explore(e)
{
	for(var i = 0; i < 10; i++)
		{
			buttons[i].removeEventListener(e.type, explore)
			
			if(e.target == buttons[i])
				{
					if(rng(10,1) > 3)
						{
							currentCity = citys[i];
							mainDisplay();
						}
					else
						{
							//combat();
							currentCity = citys[i];
							mainDisplay();
						}
				}
		}
	mainDisplay();
}
