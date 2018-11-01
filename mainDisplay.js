// JavaScript Document

/*jshint esversion: 6 */ 

"use strict";

var citys = ["Hivala", "Orafield", "Dadasa", "Nodross","Oniset","Ophison","Wawood","Sison","Arcron","Grock"]
var currentCity;

var townDiv = document.getElementById("town");

function mainDisplay()
{
	switch(player.getRace())
		{
				case(races[0]):
				{
					currentCity = "Wawood";
					break;
				}
				case(races[1]):
				{
					currentCity = "Dadasa";
					break;
				}
				case(races[2]):
				{
					currentCity = "Hivala";
					break;
				}
				case(races[3]):
				{
					currentCity = "Nodross";
					break;
				}
				case(races[4]):
				{
					currentCity = "Grock";
					break;
				}
				case(races[5]):
				{
					currentCity = "Orafield";
					break;
				}
				case(races[6]):
				{
					currentCity = "Oniset";
					break;
				}
				case(races[7]):
				{
					currentCity = "Ophison";
					break;
				}
				case(races[8]):
				{
					currentCity = "Arcron";
					break;
				}
				case(races[9]):
				{
					currentCity = "Sison";
					break;
				}
		}
	
	townDiv.innerHTML = "Town<br><b>" + currentCity + "</b>";
	
	disableAll()
	
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
					dadasaEsplore();
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
	buttons[1].style.visibility = "visible";
	buttons[1].innerHTML = citys[3];

	buttons[2].style.visibility = "visible";
	buttons[2].innerHTML = citys[9];

	buttons[3].style.visibility = "visible";
	buttons[3].innerHTML = citys[4];

	buttons[7].style.visibility = "visible";
	buttons[7].innerHTML = currentCity;
}

function orafieldExplore()
{
	buttons[1].style.visibility = "visible";
	buttons[1].innerHTML = citys[6];

	buttons[2].style.visibility = "visible";
	buttons[2].innerHTML = citys[7];

	buttons[3].style.visibility = "visible";
	buttons[3].innerHTML = citys[9];
	
	buttons[7].style.visibility = "visible";
	buttons[7].innerHTML = currentCity;
}

function dadasaExplore()
{
	buttons[1].style.visibility = "visible";
	buttons[1].innerHTML = citys[6];

	buttons[2].style.visibility = "visible";
	buttons[2].innerHTML = citys[7];

	buttons[3].style.visibility = "visible";
	buttons[3].innerHTML = citys[9];
	
	buttons[6].style.visibility = "visible";
	buttons[6].innerHTML = citys[2]

	buttons[8].style.visibility = "visible";
	buttons[8].innerHTML = currentCity;
}

function nodrossExplore()
{
	buttons[1].style.visibility = "visible";
	buttons[1].innerHTML = citys[9];

	buttons[2].style.visibility = "visible";
	buttons[2].innerHTML = citys[4];

	buttons[3].style.visibility = "visible";
	buttons[3].innerHTML = citys[0];
	
	buttons[7].style.visibility = "visible";
	buttons[7].innerHTML = currentCity;
}

function onisetExplore()
{
	buttons[1].style.visibility = "visible";
	buttons[1].innerHTML = citys[5];

	buttons[2].style.visibility = "visible";
	buttons[2].innerHTML = citys[7];

	buttons[3].style.visibility = "visible";
	buttons[3].innerHTML = citys[9];
	
	buttons[6].style.visibility = "visible";
	buttons[6].innerHTML = citys[3];
	
	buttons[7].style.visibility = "visible";
	buttons[7].innerHTML = currentCity;
	
	buttons[8].style.visibility = "visible"
	buttons[8].innerHTML = citys[0];
}

//["Hivala", "Orafield", "Dadasa", "Nodross","Oniset","Ophison","Wawood","Sison","Arcron","Grock"]

function ophisonExplore()
{
	buttons[1].style.visibility = "visible";
	buttons[1].innerHTML = citys[4];

	buttons[2].style.visibility = "visible";
	buttons[2].innerHTML = citys[7];

	buttons[3].style.visibility = "visible";
	buttons[3].innerHTML = citys[9];
	
	buttons[6].style.visibility = "visible";
	buttons[6].innerHTML = citys[6];
	
	buttons[7].style.visibility = "visible";
	buttons[7].innerHTML = currentCity;
	
	buttons[8].style.visibility = "visible"
	buttons[8].innerHTML = citys[8];
}

function wawoodExplore()
{
	buttons[0].style.visibility = "visible";
	buttons[0].innerHTML = citys[2]
	
	buttons[1].style.visibility = "visible";
	buttons[1].innerHTML = citys[5];

	buttons[2].style.visibility = "visible";
	buttons[2].innerHTML = citys[7];

	buttons[3].style.visibility = "visible";
	buttons[3].innerHTML = citys[9];
	
	buttons[5].style.visibility = "visible";
	buttons[5].innerHTML = citys[4]
	
	buttons[6].style.visibility = "visible";
	buttons[6].innerHTML = citys[3];
	
	buttons[7].style.visibility = "visible";
	buttons[7].innerHTML = currentCity;
	
	buttons[8].style.visibility = "visible";
	buttons[8].innerHTML = citys[8];
	
}

function sisonExplore()
{
	buttons[0].style.visibility = "visible";
	buttons[0].innerHTML = citys[2]
	
	buttons[1].style.visibility = "visible";
	buttons[1].innerHTML = citys[5];

	buttons[2].style.visibility = "visible";
	buttons[2].innerHTML = citys[6];

	buttons[3].style.visibility = "visible";
	buttons[3].innerHTML = citys[9];
	
	buttons[5].style.visibility = "visible";
	buttons[5].innerHTML = citys[4]
	
	buttons[6].style.visibility = "visible";
	buttons[6].innerHTML = citys[3];
	
	buttons[7].style.visibility = "visible";
	buttons[7].innerHTML = currentCity;
	
	buttons[8].style.visibility = "visible";
	buttons[8].innerHTML = citys[8];
}

//["Hivala", "Orafield", "Dadasa", "Nodross","Oniset","Ophison","Wawood","Sison","Arcron","Grock"]

function arcronExplore()
{
	buttons[1].style.visibility = "visible";
	buttons[1].innerHTML = citys[6];

	buttons[2].style.visibility = "visible";
	buttons[2].innerHTML = citys[7];

	buttons[3].style.visibility = "visible";
	buttons[3].innerHTML = citys[9];
	
	buttons[6].style.visibility = "visible";
	buttons[6].innerHTML = citys[5]

	buttons[8].style.visibility = "visible";
	buttons[8].innerHTML = currentCity;
}

function grockExplore()
{
	buttons[0].style.visibility = "visible";
	buttons[0].innerHTML = citys[2]
	
	buttons[1].style.visibility = "visible";
	buttons[1].innerHTML = citys[7];

	buttons[2].style.visibility = "visible";
	buttons[2].innerHTML = citys[6];

	buttons[3].style.visibility = "visible";
	buttons[3].innerHTML = citys[0];
	
	buttons[4].style.visibility = "visible";
	buttons[4].innerHTML = citys[5]
	
	buttons[5].style.visibility = "visible";
	buttons[5].innerHTML = citys[4]
	
	buttons[6].style.visibility = "visible";
	buttons[6].innerHTML = citys[3];
	
	buttons[7].style.visibility = "visible";
	buttons[7].innerHTML = currentCity;
	
	buttons[8].style.visibility = "visible";
	buttons[8].innerHTML = citys[8];
}

function explore(e)
{
	for(var i = 0; i < 10, i++)
		{
			if(e.target = buttons[i])
				
		}
}
