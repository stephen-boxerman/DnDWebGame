// JavaScript Document

/*jshint esversion: 6 */ 

"use strict";

var citys = ["Hivala", "Orafield", "Zhirith", "Nodross","Oniset","Ophison","Wawood","Sison","Arcron","Grock"]
var currentCity;

var townDiv = document.getElementById("town");

function mainDisplay()
{
	switch(player.getRace)
		{
				case("Wolf"):
				{
					currentCity = "Wawood";
					break;
				}
				case("Lion"):
				{
					currentCity = "Zhirith";
					break;
				}
				case("Horse"):
				{
					currentCity = "Hivala";
					break;
				}
				case("Otter"):
				{
					currentCity = "Nodross";
					break;
				}
				case("Alligator"):
				{
					currentCity = "Grock";
					break;
				}
				case("Orca"):
				{
					currentCity = "Orafield";
					break;
				}
				case("Dragon"):
				{
					currentCity = "Oniset";
					break;
				}
				case("Phoenix"):
				{
					currentCity = "Ophison";
					break;
				}
				case("Griphon"):
				{
					currentCity = "Arcron";
					break;
				}
				case("Naga"):
				{
					currentCity = "Sison";
					break;
				}
		}
	
	townDiv.innerHTML = "Town<br><b>" + currentCity + "</b>";
	
	buttons[0].innerHTML = "Inventory";
	buttons[0].style.visibility = "visible";
	buttons[0].disabled = true;
	
	buttons[1].innerHTML = "Shops";
	buttons[1].style.visibility = "visible";
	buttons[1].disabled = true;
	
	buttons[2].innerHTML = "Jobs";
	buttons[2].style.visibility = "visible";
	buttons[2].disabled = true;
	
	buttons[3].innerHTML = "Make Potions";
	buttons[3].style.visibility = "visible";
	buttons[3].disabled = true;
	
	buttons[5].innerHTML = "Rest";
	buttons[5].style.visibility = "visible";
	buttons[5].disabled = true;
	
	buttons[6].innerHTML = "Wait";
	buttons[6].style.visibility = "visible";
	buttons[6].disabled = true;
	
	buttons[9].innerHTML = "Explore";
	buttons[9].style.visibility = "visible";
	buttons[9].addEventListener('click', exploreOptions)
}

function exploreOptions(e)
{
	e.target.removeEventListener(e.type, exploreOptions);
	buttons[0].innerHTML = currentCity;
	
	switch(currentCity)
		{
				case(citys[0]):
				{
					buttons[1].disabled = false;
					style.visibility = "visible";
					buttons[1].innerHTML = citys[6];
					
					buttons[2].disabled = false;
					buttons[2].style.visibility = "visible";
					buttons[2].innerHTML = citys[4]
				}
		}
}