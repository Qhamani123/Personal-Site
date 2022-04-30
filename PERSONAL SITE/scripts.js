function Rendertime() {

var Mydate=new Date();

var year=Mydate.getYear();

if (year<1000) {
	year +=1900
}

var day=Mydate.getDay();
var month=Mydate.getMonth();
var daym=Mydate.getDate();
var dayArr=new Array("SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY");
var monthArr =new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");


//Time...
var CurrentTime=new Date();

var h=CurrentTime.getHours();
var m=CurrentTime.getMinutes();	
var s=CurrentTime.getSeconds();


h = updateTime(hours);
m = updateTime(minutes);
s = updateTime(seconds);

if (h===24) {
h=0;

}else if(h>12){

h=h-0;
}

if(h<10){
	h="0" +h;
}

//CONDITIONS FOR MINUTES...


if(m===60){
m=0;}else if (m<10) {
	m="0" +m;
}
 if (s===60) {
 	s=0;
 } else if(s<10){
 	s="0" +s;
 }





var MyClock  =document.getElementById("DisplayClock");

MyClock.textContent= "" +dayArr[day]+ ", " +monthArr[month]+ ", " +year+ " | " +h +":" + m +":" +s;

MyClock.innerText= "" +dayArr[day]+ ", " +monthArr[month]+ ", " +year+ " | " +h +":" + m +":" +s;

setTimeout("Renderime()",1000);
}
Rendertime();