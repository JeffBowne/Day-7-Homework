jQuery(document).ready(function() {




// //----------For Loop-----------

// var SixStrings = [['Les Paul', 'SG', 'Flying V', 'Explorer', 'ES-335'], ['s-1', 'Ultra II', 'Ultra VI', 'Corsair', 'PT Fastback']]

// for (var i = 0; i< SixStrings.length; i++) {
// 	console.log(SixStrings[i]);
// };




// //----------While Loop-----------

// x = 99
// while(x >=1){
//   console.log(x + " bottles of beer on the wall " + x + " bottles of beer. Take one down, pass it around. " + (x-1) + " BOTTLES OF BEER ON THE WALL!" )
// x--; } 



////----------Variable Scope-----------

// //GLOBAL VS. LOCAL SCOPE
// var rat = 13;

// function pest(rat) {
// 	rat = 666;
// 	console.log(rat)
// }

// pest()




// //-------------------------Palindrome

 

// function pal(word) {

// 	if ((word.charAt(0) === word.charAt(word.length - 1)) && (word.charAt(1) === word.charAt(word.length - 2)) && (word.charAt(2) === word.charAt(word.length - 3)) && (word.charAt(3) === word.charAt(word.length - 4)) && (word.charAt(4) === word.charAt(word.length - 5)) && (word.charAt(5) === word.charAt(word.length - 6)) && (word.charAt(6) === word.charAt(word.length - 7)) && (word.charAt(7) === word.charAt(word.length - 8)) && (word.charAt(8) === word.charAt(word.length - 9))) {
// 		console.log("cools");
// 	} else {
// 		console.log("NOT");
// 	}
// }


// pal("emilyssassylime");


//---------------------------Vowel Count

var string = "Whatever dude."
var vowelCount = 1;

for (i = 0; i < string.length; ++i) {
    switch(string.charAt(i)) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
    console.log(vowelCount++);
            
    }
}



// //-------------------------Name Check

// $('#clickthis').click(function() {
// 	if($("#username").val() === "Jeff") {
// 		alert("You're Jeff!");
// 	} else {
// 		alert($("#username").val() + " is not Jeff")
// 	}
// });
















});