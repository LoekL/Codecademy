
  /* Notes for the JavaScript Course on Codecademy */

// 1 - Introduction to JavaScript

// Single line comment

/*
Mult-line comment
*/

"Loek".length
// > 4

3 + 4
// > 7

// These boxes can be used on websites to confirm things with users. 
// You've probably seen them pop up when you try to delete important things or leave a website with unsaved changes.

confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');
// true // <- if you pressed 'OK'

prompt("Where are you from?")
// > Breda // <- if you entered 'Breda' & hit OK

// console.log() will take whatever is inside the parentheses and log it to the console below your code
// This is commonly called printing out
console.log(2 * 5)
console.log("Hello")
// > 10
// > Hello

/*

List of comparison operators:

a) > Greater than
b) < Less than
c) <= Less than or equal to
d) >= Greater than or equal to
e) === Equal to
f) !== Not equal to

*/

// Here is an example of using the greater than (>) operator.
console.log(15 > 4); // 15 > 4 evaluates to true, so true is printed.

// Fill in with >, <, === so that the following print out true:
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length >  8);
console.log(8 * 2 === 16);

// Conditionals

if ("LoekLandzaat".length > 7) {
    console.log("Your name > 7 chars!");
}
// > Your name > 7 chars!

if ("Loek".length > 7) {
    console.log("You have a long name!");
} else {
    console.log("You have a long name!")
}
// > You have a long name!

/*

Interim Summary

1. Confirm and prompt

We can make pop-up boxes appear! 
- confirm("I am ok");
- prompt("Are you ok?");

2. Data types

a. numbers (e.g. 4.3, 134)
b. strings (e.g. "dogs go woof!", "JavaScript expert")
c. booleans (e.g. false, 5 > 4)

3. Conditionals

If the first condition is met, execute the first code block. 
If it is not met, execute the code in the else block.

*/

// Math

if ("Jon".length * 2 / (2 + 1) === 2) {
    console.log("The answer makes sense!") 
} else {
  console.log("Error Error Error")      
}

// Let's meet an interesting symbol called modulo. When % is placed between two numbers, 
// the computer will divide the first number by the second, and then return the remainder of that division.

// Modulo

console.log(14 % 3)
// > 2

// Substrings

'wonderful day'.substring(3, 7)
// > "derf"

console.log("January".substring(0, 3))
// > Jan
console.log("Melbourne is great".substring(0, 12))
// > Melbourne is
console.log("Hamburgers".substring(3, 10))
// > burgers

// Variables

var myAge = 27
console.log(myAge)
// > 27

// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "Ireland"

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3));

// Change variable values

// Declare a variable myName and give it your name.
var myName = "Loek"
// Use console.log to print out the myName variable.
console.log(myName)
// Change the value of myName to be just the first 2 letters of your name.
myName = myName.substring(0, 2)
// Use console.log to print out the myName variable.
console.log(myName)

// Game

// Check if the user is ready to play!

confirm("I am ready to play!")

var age = prompt("What's your age");

if (age < 13) {
    console.log("You're allowed to play this game but I do not take any responsibility")
} else {
    console.log("Enjoy the game!")
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

var userAnswer = prompt("Do you want to race Bieber on stage?")

if (userAnswer === 'yes') {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
} else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}

var feedback = prompt("Rate this game from 1 to 10")

if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!")
} else {
    console.log("I'll keep practicing coding and racing.")
}

// 2 - Functions

// 2.1 - Introduction to Functions in JS

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

divideByThree(6)
// > 2

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!

greeting("Loek")
// > Great to see you, Loek

var orangeCost = function (price) {
    var cost = price * 5;
    console.log(cost);
};

orangeCost(5)

// When we call a function, we don't always want to just print stuff. Sometimes, we just want it to return 
// a value. We can then use that value (i.e. the output from the function) in other code.

// Parameter is a number, and we do math with that parameter
var timesTwo = function (number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(2);
console.log(newNumber);
// > 4

var quarter = function (number) {
    var value = number / 4;
    return value;
};

if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}
// > true

// Multiple parameters

var perimeterBox = function (length, width) {
    return length * 2 + width * 2
}

perimeterBox(4,6)

// Global vs Local Variables

// Variables defined outside a function are accessible anywhere once they have been declared. 
// They are called global variables and their scope is global.

var globalVar = "hello";

var foo = function() {
    console.log(globalVar);  // prints "hello"
}

// Variables defined inside a function are local variables. They cannot be accessed outside of that function.

var bar = function() {
    var localVar = "howdy";
}

console.log(localVar);  // error

// Until now you've been using the var keyword without really understanding why. The var keyword creates a 
// new variable in the current scope. That means if var is used outside a function, that variable has a 
// global scope. If var is used inside a function, that variable has a local scope.

// On line 4 we have not used the var keyword, so when we log my_number to the console outside of the function, it will be 14.

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ");
console.log(my_number);

// Using my_number without the var keyword refers to the global variable that has already been declared outside 
// the function in line 1. However, if you use the var keyword inside a function, it declares a new local variable that only exists within that function.

var nameString = function (name) {
    return "Hi, I am" + " " + name;
};

console.log(nameString("Loek"))


var sleepCheck = function (numHours) {
    if (numHours >= 8) {
        return "You're getting plenty of sleep! Maybe even too much!";
    } else {
        return "Get some more shut eye!";
    }
}

sleepCheck(10);
// > "You're getting plenty of sleep! Maybe even too much!"

// Game - Rock, Paper & Scissors

var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
}

compare(userChoice, computerChoice)

// 3 - For Loops in JavaScript

for (var i = 4; i < 24; i = i + 1) { // i = i + 1 === increment (increase) the variable i by 1 each time
	console.log(i); // 4 up to and including 23
}

/*

Rules to learn

a. A more efficient way to code to increment up by 1 is to write i++.
b. We decrement down by 1 by writing i--.
c. We can increment up by any value by writing i += x, where x is how much we 
   want to increment up by. e.g., i += 3 counts up by 3s.
d. We can decrement down by any value by writing i -= x. (See the Hint for more.)
e. Be very careful with your syntax—if you write a loop that can't properly end, 
   it's called an infinite loop. It will crash your browser!

*/


for (var i = 5; i < 51; i += 5) {
	console.log(i);
}
// > 5, 10, ..., 45, 50

for (var i = 2 ; i < 13; i++) {
	console.log(i);
}

/*

We've gone through the three bits of syntax for a for loop. 
But how exactly does it work? 
Let's imagine the steps the computer takes to run the for loop on the right.

1 - It starts off with i = 2
2 - It then asks: Is i currently less than 13? Because i = 2, this is true and we continue.
3 - We do NOT increment now. Instead, if the condition is met, we run the code block.
4 - Here, the code block prints out the value of i. It is currently 2 so 2 will be printed out.
5 - Once the code block is finished, the for loop then increments / decrements. Here, we add 1.
6 - Now i = 3. We check if it is less than 13. If it is true, we run the code block.
7 - The code block runs, and then we increment.
8 - We repeat these steps until the condition i < 13 is no longer true.

*/

for (var i = 100 ; i >= 1; i -= 5) {
	console.log(i);
}
// > 100, 95, ..., 10, 5

// Arrays
// a. store lists of data
// b. can store different data types at the same time
// c. are ordered so the position of each piece of data is fixed

var names = ["Mao","Gandhi","Mandela"];
var sizes = [4, 6, 3, 2, 1, 9];
var mixed = [34, "candy", "blue", 11];

var junkData = ["Eddie Murphy", 49, "peanuts", 31];

console.log(junkData[3])
// > 31

var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Breda"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

var names = ["Loek", "Ruben", "Andy", "Ying", "Lonneke"]

for (i = 0; i < names.length; i++) {
    console.log("I know someone called " + names[i])
}

// For loop - game

/*jshint multistr:true */ //  tell the console to stop worrying about our use of backslash characters for wrapping long lines of text

// use a backslash (\) at the end of each line to make your string "wrap" to the next line
var text = "bla bla bla Loek bla bla bla \
bla bla bla Loek bla bla bla Loek Loek"
var myName = 'Loek'
var hits = []

for (var i = 0; i < text.length; i++) {
    if (text[i] === 'L') {
        for (j = i; j < (myName.length + i); j++) {
            // push into array
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name was not found!");
} else {
    console.log(hits);
}

// Flipping a coin

var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

var understand = true;

while(understand) {
	console.log("I'm learning while loops!");
	understand = false;
}

// If you happen to be using numbers, as we did earlier, you could even do:

var myNumber = 1;
while(myNumber) {
    // Do something!
}

// JavaScript understands 1 === True & 0 === False

var count = 0

var loop = function () {
	while (count < 3) {
	    console.log("I'm looping!");
	    count += 1;
	}
};

loop();

// As we mentioned, for loops are great for doing the same task over and over when you know ahead of time how many times you'll have to repeat the loop. 
// On the other hand, while loops are ideal when you have to loop, but you don't know ahead of time how many times you'll need to loop.
// As you saw, however, you can combine a while loop with a counter variable to do the same kind of work a for loop does. In these cases, it's often a matter of preference.

for (i = 0; i < 6; i++) {
    console.log(i);
}

var i = 0
while (i < 5) {
    console.log(i);
    i += 1;
}

// The 'do' / 'while' loop

// Sometimes you want to make sure your loop runs at least one time no matter what. When this is the case, you want a modified while loop called a do/while loop.
// This loop says: "Hey! Do this thing one time, then check the condition to see if we should keep looping." After that, it's just like a normal while: the loop will continue so long as the condition being evaluated is true.

var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);
// > I'm gonna stop looping 'cause my condition is false!

var getToDaChoppa = function () {
  do {
      console.log("First do/while loop.");
      loopCondition = false
  } while (loopCondition);
};

getToDaChoppa();
// > First do/while loop.

for (i = 0; i < 5; i++) {
    console.log(i);
}
// > 0 1 2 3 4 

var i = 0
while (i < 5) {
    console.log(i);
    i += 1;
}
// > 0 1 2 3 4

var j = 0
do {
    console.log(j);
    j += 1;
} while (j < 5);
// > 0 1 2 3 4 5

// Game - Dragon Slayer

var slaying = true
var youHit = Math.floor(Math.random() * 2)
var damageThisRound = Math.floor(Math.random()*5 + 1)
var totalDamage = 0

while (slaying) {
    if (youHit) {
        console.log("Congratulations, you hit the Dragon!");
        totalDamage += damageThisRound
        if (totalDamage >= 4) {
            console.log("You slew the Dragon!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2)
        }
        slaying = false;
    } else {
        console.log("The Dragon has defeated you!");
        slaying = false;
    }
};

// 4 - More on Control Flows in JS

var isEven = function (number) {
  if (number % 2 === 0) {
      return true;
  } else {
      return false;
  }
};

// If you call isNaN on something, it checks to see if that thing is not a number.

isNaN('berry'); // => true
isNaN(NaN); // => true
isNaN(undefined); // => true
isNaN(42);  // => false

// Be careful: if you call isNaN on a string that looks like a number, like '42', 
// JavaScript will try to help by automatically converting the string '42' to the number 42 and return false (since 42 is a number).

var isEven = function (number) {
  if (number % 2 === 0) {
      return true;
  } else if (isNaN(number)) {
      return "Input is NaN!";
  } else {
      return false;
  }
};

// As you might imagine, if you have a lot of choices you want to cover in a program, 
// it might be annoying to type else if () ten times. That's why JavaScript has the switch statement!

// switch allows you to preset a number of options (called cases), then check an expression to see if 
// it matches any of them. If there's a match, the program will perform the action for the matching case; 
// if there's no match, it can execute a default option.

// Don't forget to end your case with a break statement—otherwise, it will go on and execute the code for default, too! We don't want that.

var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

// What if we want to check more than one variable?

// For this, we'll need logical operators. 
// JavaScript has three: and (&&), or (||), and not (!).

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

// and

// The logical operator and is written in JavaScript like this: &&. 
// It evaluates to true when both expressions are true; if they're not, 
// it evaluates to false.

true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false

var hungry = true
var foodHere = true

var eat = function () {
  if (hungry && foodHere) {
      return true;
  } else {
      return false;
  }
};

console.log(eat())
// > true

// or

// The logical operator or is written in JavaScript like this: ||. 
// It evaluates to true when one or the other or both expressions are true; 
// if they're not, it evaluates to false.

true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false

tired = true
bored = false

var nap = function() {
  if (tired || bored) {
      return true;
  } else {
      return false;
  }
};

console.log(nap())
// > true

// Not

// The logical operator not is written in JavaScript like this: !. 
// It makes true expressions false, and vice-versa.

!true;   // => false
!false;  // => true

// Write an if/else statement inside happy so that happy returns true 
// if programming is false and false otherwise.

programming = false

var happy = function() {
  return !programming;
};

console.log(happy())
// > true

var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}


// Own Try

var user = prompt("What is your fav. colour?").toLowerCase();

switch (user) {

    case 'blue':
      var purple = prompt("Do you like to mix it with green?").toLowerCase();
      var lightblue = prompt("Do you like to mix it with white?").toLowerCase();
      if (purple === 'yes' && lightblue === 'yes') {
      	console.log("I agree both ideas are great!");
      } else {
      	console.log("Too bad!");
      }
      break; 
      
    case 'red':
      var rose = prompt("Do you like red roses?").toLowerCase();
      var wine = prompt("Do you like red wine?").toLowerCase();
      if (rose === 'yes' || wine === 'yes') {
      	console.log("Either one will do!"); 
      } else {
      	console.log("Neither?!")
      }
      break;    

    case 'green':
      break;    

    default:
      console.log("Never heard of that colour. What about blue green or red?")
}

// 5 - Arrays and Objects in JavaScript

var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for (i = 0; i < languages.length; i++) {
    console.log(languages[i])
}

// Homogeneous arrays
var pronouns = ["I", "you", "we"];
var numbers = [1, 2, 3];

// Heterogeneous arrays
var mix = [42, true, "towel"];

// Two-dimensional array
var twoDimensional = [[1, 1], [1, 1]];

// Jagged array
var jaggedArray = [[1, 2, 3], [1, 2]]

// Objects

var phonebookEntry = {};


// We give the key name the value 'Oxnard Montalvo' and the key number the value '(555) 555-5555'. 
// An object is like an array in this way, except its keys can be variables and strings, not just numbers.
phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...'); // this == self of Python classes?
};

phonebookEntry.phone();

// > Calling Oxnard Montalvo at (555) 555-5555...

// Objects are just collections of information (keys and values) between curly braces, like this:

// Create Object: Literal Notation

var me = {
    name: "Loek",
    age: 27
};

// There are two ways to create an object: using object literal notation (lines 814-817) and using the object constructor.

// Create Object: Object Constructor

var myObj = new Object();

// You can add keys to your object after you've created it in two ways:

myObj["name"] = "Charlie";
myObj.name = "Charlie";

// Heterogeneous arrays

myArray = [1, true, "Loek", {}]

// Contact List

friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "0612345678",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "0612345678",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function (obj) {
    for (var key in obj) {
        console.log(key);
    }
}

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};

list(friends);
search("Steve");

// > bill
// > steve
// > { firstName: 'Steve',
// >   lastName: 'Jobs',
// >   number: '(408) 555-5555',
// >   address: [ '1 Infinite Loop', 'Cupertino', 'CA', '95014' ] }
// > {"firstName":"Steve","lastName":"Jobs","number":"0612345678","address":["1 Infinite Loop","Cupertino","CA","95014"]}

// 6 - Introduction to Objects I

(((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");

answer = true;

var multiplesOfEight = [8,16,24,32,40,58]
var answer = multiplesOfEight[5] % 8 !== 0; // true

for (i = 1; i < 21; i++) {
    var a = i % 3 === 0
    var b = i % 5 === 0
    if (a && b) {
        console.log("FizzBuzz");
    } else if (a) {
        console.log("Fizz");
    } else if (b) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
};

var getReview = function (movie) {
    switch(movie) {
        case "Toy Story 2":
            return "Great story. Mean prospector.";
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
        case "The Lion King":
            return "Great songs.";
        default:
            return "I don't know!";
    }
};

var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};

var name1 = bob.name;
var age1 = bob.age;

var name2 = susan[name];
var age2 = susan[age];

// here is bob again, with his usual properties

var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;

// this time we have added a method, setAge

bob.setAge = function (newAge) {
  bob.age = newAge;
};

// here we set bob's age to 40

bob.setAge(17);

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());
// > 1997

//  we can make a method work for many objects using a new keyword 'this'. 
// The keyword this acts as a placeholder, and will refer to whichever object called that method when the method is actually used.
å
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// You basically now add this method to the bob object, it will be part of the dictionary now - so we can call it!
bob.setAge = setAge;
// updating bob's age to 50
bob.setAge(50);

// make susan here, and first give her an age of 25

var susan = {
    age: 25
  };

// Updating Susan's age to 35 using the method

susan.setAge = setAge;
susan.setAge(35);

// Note we have used the keyword this below - this is still a placeholder, but in this scenario, 
// this can only ever refer to rectangle because we defined setHeight to be explicitly part of 
// rectangle by defining it as rectangle.setHeight. Also we now no longer have to add it to the
// object separately, we already did this!

var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
    this.width = newWidth;
}
  
// changing the width to 8 and height to 6 using our new methods

rectangle.setWidth(8);
rectangle.setHeight(6);

// Methods can also return stuff:

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here

square.calcArea = function() {
  return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();

// Custom Constructors --> Classes!

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);


// In a constructor, we don't have to define all the properties using parameters. 
// Look at our new Person example on line 1, and see how we set the species to be "Homo Sapiens" (line 4). 
// This means that when we create any Person, their species will be "Homo Sapiens". 
// In this way, the values associated with name and age are not yet assigned, but species will always have the same value.

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39)
var holden = new Person("Holden Caulfield", 16)
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);

// In addition to setting properties, constructors can also define methods. 
// This way, as soon as the object is created it will have its own methods as well.

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function () {
      return this.height * this.width;
  };
  this.calcPerimeter = function () {
      return this.height * 2 + this.width * 2;
  }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

console.log(area);
console.log(perimeter);
// > 21
// > 20

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits

rabbit1 = new Rabbit("fluffy");
rabbit2 = new Rabbit("happy");
rabbit3 = new Rabbit("sleepy");

rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();

// > I am a fluffy rabbit
// > I am a happy rabbit
// > I am a sleepy rabbit

// Arrays of Objects

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);

// Our Person constructor

var Person = function (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people

family = [];

family[0] = new Person ("alice", 40)
family[1] = new Person ("bob", 42)
family[2] = new Person ("michelle", 8)
family[3] = new Person ("timmy", 6)

// loop through our new array

for (i = 0; i < family.length; i++) {
    console.log(family[i].name)
};

// .method() <-- function / method
// .length <-- no brackets, it's an attribute/property of the array!

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes objects (persons) as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

// New example:

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people

var olderAge = function (person1, person2) {
    if (person1.age > person2.age) {
        return person1.age;
    } else {
        return person2.age;
    }
};

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));

// What Are Objects For?
// Objects provide us with a way to represent real-world or virtual things. We can do this by storing information inside the object's properties. There are two basic ways to make objects:

// Literal Notation, where we use

var Name = {};

// Constructor Notation, where we use the keyword new.

// Properties
// Properties are like variables that belong to an object, and are used to hold pieces of information. 
// Properties can be accessed in two ways:
// 1 - Dot notation, with ObjectName.PropertyName
// 2 - Bracket notation, with ObjectName["PropertyName"] (don't forget the quotes!)

// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line

the_hobbit = new Book(320, "J.R.R. Tolkien")

function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    this.perimeter = function () {
        return this.radius * Math.PI * 2;
    }
};


// More People

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary]

console.log(mary.phoneNumber);

// printPerson added here

printPerson = function (person) {
    console.log(person.firstName + " " + person.lastName);
};

printPerson(contacts[0]);
printPerson(contacts[1]);

var list = function () {
    var contactsLength = contacts.length
    for (i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
};

list();

// > Bob Jones
// > Mary Johnson

var search = function (lastName) {
    contactsLength = contacts.length
    for (var i = 0; i < contactsLength; i++) {
        if (contacts[i].lastName === lastName) {
            printPerson(contacts[i]);
        }
    }
};

search("Jones");
// > Bob Jones 

// Since arrays are numbered starting at zero, the number of the last item in 
// the array will be one less than the quantity of items in the array. The size of 
// the array is thus the position to insert at.

var add = function (firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
  }
};

add("Loek", "Landzaat", "test@fb.com", "0612345678");

list();

// > Bob Jones
// > Mary Johnson
// > Loek Landzaat

// 7 - Introduction to Objects II

// Basic overview

var james = {
    job: "programmer",
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
};

// create a "gabby" object using the Person constructor!

var gabby = new Person("student", true);

// Adding methods

function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function () {
        console.log("Hello!");
    }
    
}

var user = new Person("Codecademy Student", false);
user.speak();
// > Hello!

// Adding methods in literal notation

var james = {
    job: "programmer",
    married: false,
    speak: function(suffix) {
        console.log("Hello, I am feeling " + suffix);
    }
};

james.speak("great");
james.speak("just okay");
// > Hello, I am feeling great
// > Hello, I am feeling just okay

//  Remember when defining a method for an object, it's easy to reference other properties in that object: just use this.propertyName!

var james = {
    job: "programmer",
    married: false,
    sayJob: function () {
        console.log("Hi, I work as a " + this.job)
    }
};

// james' first job
james.sayJob();
// > Hi, I work as a programmer

// change james' job to "super programmer" here

james.job = "super programmer"

// james' second job
james.sayJob();
// > Hi, I work as a super programmer

// An advantage of bracket notation is that we are not restricted to just using strings in the brackets. We can also use variables whose values are property names:

var someObj = {propName: someValue};
var myProperty = "propName";
someObj[myProperty]; // same as: someObj["propName"]
// > someValue

var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james" 
// using the variable "aProperty"

console.log(james[aProperty]);
// > programmer

// Identifying data types

var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj); // > object
console.log(typeof aNumber); // > number
console.log(typeof aString); // > string

// Checking for object properties

var myObj = {
    name: "Loek"
};

console.log( myObj.hasOwnProperty('name') ); // true
console.log( myObj.hasOwnProperty('nickname') ); // false

// Within if statement

var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts')) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = true;
};

// Looping over keys

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var i in nyc) {
    console.log(i);
};

// > fullName
// > mayor
// > population
// > boroughs

// Loop over values

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties

for (var i in nyc) {
    console.log(nyc[i]);
};

// > New York City
// > Bill de Blasio
// > 8000000
// > 5

// Object-Oriented Programming [OOP]
// Object == Class

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here

function Circle(radius) {
    this.radius = radius
};

// Adding methods separately to individual objects (not the parent class):

function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
  console.log("Miauw");
};

// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();

// Defining a function that can work with your created class:

function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);
// > Bob Smith

// Here we have very similar code as last time, but there is an important difference. 
// Instead of using buddy.bark to add the bark method to just the buddy object, we use Dog.prototype.bark.

// Now both buddy and snoopy can bark just fine! Snoopy can bark too even though we haven't added a bark 
// method to that object. How is this so? Because we have now changed the prototype for the class Dog. 
// This immediately teaches all Dogs the new method.

function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();
// > Woof

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();
// > Woof

// In general, if you want to add a method to a class such that all members of the class can use it, 
// we use the following syntax to extend the prototype:

className.prototype.newMethod = function() {
  statements;
};

// Example:

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console

Cat.prototype.meow = function () {
    console.log("Meow!");
};

// add code here to make the cats meow!

cheshire.meow();
// > Meow!
gary.meow();
// > Meow!

// Inheritance
// In object-oriented programming, inheritance allows one class to see and use the methods and properties of another class.

// create your Animal class here

// When defining contructors use =, defining objects use :

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
};

// create the sayName method for Animal

Animal.prototype.sayName = function () {
    console.log("Hi my name is " + this.name);
};

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();
// > Hi my name is Captain Cook

// Marching Penguins

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};


// create a Penguin constructor here

function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

// create a sayName method for Penguins here

Penguin.prototype.sayName = function () {
    console.log("Hi my name is " + this.name)
}

// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();

// Creating a brand new Penguin was nice, but we did end up reusing a lot of the same code as the Animal class. 
// This goes against the "DRY" principle of programming: Don't Repeat Yourself.

// Inheritance can help us here! A Penguin is an Animal, so they should have all the same properties and methods as Animal. 
// Whenever this X is-a Y relationship exists, there's a good chance that we should be using inheritance.

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal

Penguin.prototype = new Animal();

penguin = new Penguin("Loek");

penguin.sayName();

// > Hi my name is Loek

// Attribute inheritance:

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin

function Emperor(name) {
    this.name = name;
};

Emperor.prototype = new Penguin();

// create an "emperor" object and print the number of legs it has

emperor = new Emperor("Loek");

console.log(emperor.numLegs);
// > 2

// The "prototype chain" in JavaScript knows this as well. If JavaScript encounters something it can't 
// find in the current class's methods or properties, it looks up the prototype chain to see if it's 
// defined in a class that it inherits from. This keeps going upwards until it stops all the way at the 
// top: the mighty Object.prototype (more on this later). By default, all classes inherit directly from 
// Object, unless we change the class's prototype, like we've been doing for Penguin and Emperor.

// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // > "Waddle waddle"
console.log(myEmperor.numLegs); // > 2
console.log(myEmperor.isAlive); // > true

// Putblic Variables

// In JavaScript all properties of an object are automatically public. 
// Public means that they can be accessed outside the class. 
// Think of these properties as the information a class is willing to share.

// Look at the Person class. It has 3 public properties: firstName, lastName, and age. 
// On lines 8 and 9, we access the firstName and lastName properties of john and assign them to myFirst and myLast.

// Notice that we are free to access the firstName and lastName properties, 
// which is what we mean when we say they are public.

function Person(first, last, age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}

var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;

// Private Variables

// But what if an object wants to keep some information hidden?

// Just as functions can have local variables which can only be accessed from within that function, 
// objects can have private variables. Private variables are pieces of information you do not want 
// to publicly share, and they can only be directly accessed from within the class.

// The Person class has been modified to have a private variable called bankBalance. 
// Notice that it looks just like a normal variable, but it is defined inside the constructor for Person 
// without using this, but instead using var. This makes bankBalance a private variable.

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person 

john = new Person("John", "Doe", 27);

// try to print his bankBalance

console.log(john.bankBalance);
// > undefined

// Although we cannot directly access private variables from outside the class, there is a way to get around this. 
// We can define a public method that returns the value of a private variable.

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
   this.getBalance = function() {
      return bankBalance;
   };
}

var john = new Person('John','Smith', 30);
console.log(john.bankBalance);

myBalance = john.getBalance();
console.log(myBalance);
// > 7500

// An object's private variables can only be accessed by other methods that are part of that same object. 
// So, we just used an object's public method to access a private variable!

// Methods can also be private within a class and inaccessible outside of the class. 
// Changing this.returnBalance from the last exercise to var returnBalance makes this method private. 
// If you run the program trying to access the method you get an undefined error this time.

// The way to access a private method is similar to accessing a private variable. 
// You must create a public method for the class that returns the private method.

// Create a method called askTeller within the Person class that returns the returnBalance method. 
// This means that it returns the method itself and NOT the result of calling that method. So you should NOT have parentheses after returnBalance.

// Because askTeller returns a method, we need to call it to make it any use. 
// This is what var myBalance = myBalanceMethod(); does.

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   this.askTeller = function () {
       return returnBalance;
   }
   
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
// > Undefined
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);
// > 7500

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */

myBalance = john.askTeller(1234);
// > 7500

// Looks For-In To Me

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages

for (var i in languages) {
    if (typeof languages[i] === 'string') {
        console.log(languages[i]);
    }
};

// Hello? Yes, This is Dog

function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello

Dog.prototype.sayHello = function () {
    console.log("Hello this is a " + this.breed + " dog");
}

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();


// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);
// > object

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);
// true

// Remember that Object === {}

// Recall that:
// - Public properties can be accessed from outside the class
// - Private properties can only be accessed from within the class

// Using constructor notation, a property declared as this.property = "someValue;" will be public, 
// whereas a property declared with var property = "hiddenValue;" will be private.

function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());

// Formerly:

function StudentReport() {
    this.grade1 = 4;
    this.grade2 = 2;
    this.grade3 = 1;
    this.getGPA = function() {
        return (this.grade1 + this.grade2 + this.grade3) / 3;
    };
};

// Project - Shut the Shop!

var cashRegister = new Object(
    total = 0
    )

cashRegister.total = 2.99
 
// Part 2

var cashRegister = {
    total:0,
    add: function (itemCost) {
        this.total += itemCost;
    }
};

cashRegister.add(0.98)
cashRegister.add(1.23)
cashRegister.add(4.99)
cashRegister.add(0.45)

console.log('Your bill is '+ cashRegister.total);
// > Your bill is 7.65

// Part 3

var cashRegister = {
    total: 0,
    add: function (itemCost) {
        this.total += itemCost;
    },
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        case "magazine":
            this.add(4.99);
            break;
        
        case "chocolate":
            this.add(0.45);
            break;
        }
        return true;
    }
};

cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");

console.log('Your bill is '+ cashRegister.total);
// > Your bill is 16.93

// Part 4

var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, n) {
        switch (item) {
        case "eggs": this.add(n * 0.98); break;
        case "milk": this.add(n * 1.23); break;
        case "magazine": this.add(n * 4.99); break;
        case "chocolate": this.add(n * 0.45); break;
        }
    }
};

cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);

console.log('Your bill is '+cashRegister.total);
// > 30.6

// Part 5

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction: function() {
        this.total -= this.lastTransactionAmount;
    }
    
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);
//Show the total bill
console.log('Your bill is '+ cashRegister.total);

// Part 6

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction: function() {
        this.total -= this.lastTransactionAmount;
    }
    
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);

console.log('Your bill is '+ cashRegister.total);

// Part 7

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Loek", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction: function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    applyStaffDiscount: function(employee) {
        this.total *= (1 - employee.discountPercent / 100)
    }
    
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);

cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
// > Your bill is 13.74