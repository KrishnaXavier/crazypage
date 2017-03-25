//document.body.style.backgroundColor="red";
interval = 1000;
function allTags()
{
	return document.getElementsByTagName("*");	
}

function randomColorHex(){
	color = decimalToHex(Math.floor((Math.random() * 16777215) + 0));
	return "#"+color;
}

function decimalToHex(d) {
	var hex = Number(d).toString(16);
	hex = "000000".substr(0, 6 - hex.length) + hex; 
	return hex;
}

setInterval(function siteRandomColor(){
	for(i=0; i<allTags().length; i++)
	{
		allTags()[i].style.color=randomColorHex();
	}

}, interval);