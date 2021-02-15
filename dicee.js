
var randomNum1=Math.floor(Math.random() * 6)+1;
var randomDiceeImg="dice"+randomNum1+".png";
var randomImgSource="Dicee_images/"+randomDiceeImg;
document.querySelectorAll("img")[0].setAttribute("src",randomImgSource);

var randomNum2=Math.floor(Math.random()*6)+1;
var randomImgSource2="Dicee_images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

if(randomNum1>randomNum2){
	document.querySelector("h1").style.color="#0d18f3";
	document.querySelector("h1").innerHTML=("🤩 Player A Winnier! 🤩");
	document.querySelector("h2").innerHTML=("✔ refresh to play more");
}else if(randomNum2>randomNum1){

	
	document.querySelector("h1").style.color="#1cf906";
	document.querySelector("h1").innerHTML=("🤩 Player B Winnier! 🤩");
	document.querySelector("h2").innerHTML=("✔ refresh to play more");
}else{
	document.querySelector("h1").style.color="red";
	document.querySelector("h1").innerHTML=("DRAW!");
	document.querySelector("h2").innerHTML=("✔refresh to play more");
}