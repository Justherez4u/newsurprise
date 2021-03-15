// Write your JS in here
var pics = [
	"p1.jpg", //0
	"p2.jpg", //1
	"p3.jpg", //2
	"p4.jpg", //3
	"p5.jpg", //4
	"p6.jpg", //5
	"p7.jpg"  //6
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






