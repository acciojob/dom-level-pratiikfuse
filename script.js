//your JS code here. If required.
function getDOMLevel()
{
	const levelElement = document.getElementById('level');
	let count  = 1;
	while(levelElement.parentNode !== document.getElementsByTagName('html'))
		{
			levelElement = levelElement.parentNode;
			count++;
		}
	 alert("The level of the element is: "+count);
}

getDOMLevel();
