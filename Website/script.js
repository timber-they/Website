var pi = 3.14159265359;
var g = 9.81;
var densityAir = 1.2041;

window.onload = startTime;
function changeText (id, text)
{
	document.getById(id).innerHTML = text;
}

function switchText (id, text1, text2)
{
	var x = document.getElementById(id);
	if(x.innerHTML == text2) x.innerHTML = text1;
	else x.innerHTML = text2;
}

function getText (id)
{
	return document.getElementById(id).innerHTML;
}

function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function collatz (Number)
{
	document.getElementById("solution").innerHTML = Number;
	var x = Number;
	while(x > 1)
	{
		if(x%2 == 0) 
			{
				x /= 2;
			}
		else 
			{
				x = 3 * x + 1;
			}
		document.getElementById("solution").innerHTML += " " + x;
	} 
}

function random(start, end)
{
	return Math.floor(Math.random()*end+start);
}

function eea(a, b)
{
	if(b == 0) return [a, 1, 0];
	else 
	{
		var x = eea(b, a % b);
		return [x[0], x[2], x[1] - Math.floor(a / b) * x[2]];
	}
}

function eeaString(a, b)
{
	var x = eea(a, b);
	return x[0].toString() + " " + x[1].toString() + " " + x[2].toString();
}

function getresVector (vectors)
{
	var xsum = 0, ysum = 0;
	var vector;
	for (var i = 0; i < vectors.length; i--) 
	{
		vector[0] = vectors[i][0];
		vector[1] = vectors[i][1];
	}
}

function getzerossin (y, a, b, p, v)
{
	if(y, a, b, p, v = null) return;
	var x1 = Math.asin(y) + v, n = 0, x2 = pi - x1 + 2 * v;
	var x = [];
	while(true)
	{
		if(n * p + x1 <= b && n * p + x1 >= a) x.push(n * p + x1);
		if(n * p + x2 <= b && n * p + x2 >= a) x.push(n * p + x2);
		else if (n * p + x1 > b && n * p + x2 > b) break;
		n++;
	}
	n = -1;
	while(true)
	{
		if(n * p + x1 <= b && n * p + x1 >= a) x.push(n * p + x1);
		if(n * p + x2 <= b && n * p + x2 >= a) x.push(n * p + x2);
		else if (n * p + x1 < a && n * p + x2 < a) break;
		n--;
	}
	return x;
}

function getzeroscos (y, a, b, p, v)
{
	var x1 = Math.acos(y) + v, n = 0, x2 = -1 * x1 + 2 * v;

	var x = [];
	while(true)
	{
		if(n * p + x1 <= b && n * p + x1 >= a) x.push(n * p + x1);
		if(n * p + x2 <= b && n * p + x2 >= a) x.push(n * p + x2);
		else if (n * p + x1 > b && n * p + x2 > b) break;
		n++;
	}
	n = -1;
	while(true)
	{
		if(n * p + x1 <= b && n * p + x1 >= a) x.push(n * p + x1);
		if(n * p + x2 <= b && n * p + x2 >= a) x.push(n * p + x2);
		else if (n * p + x1 < a && n * p + x2 < a) break;
		n--;
	}
	return x;
}

function writearray (id, x)
{
	var y = " ";
	for (var i = 0; i < x.length; i++) 
	{
		y += x[i].toString() + " ";
	}
	document.getElementById(id).innerHTML = y;
}