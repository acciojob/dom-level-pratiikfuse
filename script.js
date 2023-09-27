//your JS code here. If required.
function getDOMLevel()
{
	const levelElement = document.getElementById('level');
	let count  = 0;
	while(levelElement.parentNode)
		{
			levelElement = levelElement.parentNode;
			count++;
		}
	alert("The level of the element is: "+count);
}

getDOMLevel();
