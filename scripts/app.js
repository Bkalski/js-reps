// Final Round
//This is really bad code for Final Round, you dont have to begin reading this one
//I need to research more about arrays with multiple strings and combinging into one var


var roboCop = ["Never", "give", "your", "heart", "to", "a", "blockhead"];

var beetleJuice = ["proves", "that", "I", "am", "the" "rep", "MASTER!"];


function repMaster(beastMode, jaxTeller){
	


}


<form action="demo_form.asp">
  completed: <input type="text" name="finished"><br>
  <input type="submit" value="Submit">
</form>








// round 6
//Siting example code that helped me
//https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c#.taf6teqzm


var longWord = ["Bambi", "Thumper", "Flower"];

function longest(giant){
	var lgth = 0;
	var longLong;

	for(var i=0; i < giant.length; i++){
    if(giant[i].length > lgth){
        var lgth = giant[i].length;
        longLong = giant[i];
    }   
}
 console.log(longLong)
}

longest(longWord)





// round 5
//try and get it into an array...so technically didnt finish

var mySentence = "Hey get a mirror!"
var kayak = "kayak civic mom sagas wow"

function letterReverse(str){

var mixIt= str.split("").reverse().join("").split(" ").reverse().join(" ");
console.log(mixIt)

}

letterReverse(mySentence)
letterReverse(kayak)




// round 4

//Try and make split and reverse on same line

var Yoda = "You must unlearn what you have learned";

function wordReverse(theForce){
	var forceStrong = theForce.split(" ");
	var darkSide = forceStrong.reverse(" ");
	var Luke = darkSide.join();
	console.log(Luke);
}
wordReverse(Yoda)




//round 3
//code in this stack overflow helped me 
//http://stackoverflow.com/questions/2116558/fastest-method-to-replace-all-instances-of-a-character-in-a-string


var daffy = "I disagree, so move on sweetie!";
var elmer = "Be very very quiet!";

String.prototype.toonify = function(accent, sentence, ignore) {
   return this.replace(new RegExp(accent.replace(/([\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, function(c){return "\\" + c;}), "g"+(ignore?"i":"")), sentence);
};


daffy.toonify("s", "th");
elmer.toonify("r", "ww")



//round 2


//Math.pow(base, exponent)


var transmogrifier = function(x1,x2,x3){
	var multi = (x1 * x2)
	var expon = Math.pow(multi, x3)

	console.log(expon)
}

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);







// Round 1

var strings = ["Harry", "James", "Ben", "Brett"]


var lengths = function(array){
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].length;
		
	}
	console.log(array);
}

lengths(strings)


