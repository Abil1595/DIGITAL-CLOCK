function display()
{
	var a=new Date();
	var b=a.getHours();
	var c=electrical(a.getMinutes());
	var d=electrical(a.getSeconds());
	if (b==12) 
	{
      document.getElementById('ampm').innerHTML="PM";
      document.getElementById('hours').innerHTML="12";
	}
	else if(b>12)
	{
      b=b-12;
      document.getElementById('ampm').innerHTML="PM";
	}
	var e=document.getElementById('ampm').value;
	document.getElementById('hours').innerHTML=electrical(b);
	document.getElementById('minutes').innerHTML=c;
	document.getElementById('seconds').innerHTML=d;

}
function electrical(value)
{
	return value<10?"0"+value:value;   
}
setInterval(display,5);