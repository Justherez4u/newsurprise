// Write your JS in here
var pics = [
	"img/p1.jpg", //0
	"img/p2.jpg", //1
	"img/p3.jpg", //2
	"img/p4.jpg", //3
	"img/p5.jpg", //4
	"img/p6.jpg", //5
	"img/p7.jpg"  //6
	              //7
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 7){
		counter = 0;
	}
    img.src = pics[counter]
    counter = counter + 1;
});






