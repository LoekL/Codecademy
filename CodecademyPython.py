Python Notes # Codecademy

# For commenting, or: 
""" You can use triple quotation marks """

[-- Syntax --]

[Variables]

my_variable = 5    # stores number 5 to my_variable
print my_variable  # prints my_variable

my_boolean = True   # Boolean
my_int = 7  		# Integer
my_float = 1.23     # Floating

[Math]

addition = 72 + 23
subtraction = 108 - 204
multiplication = 108 * 0.5
division = 108/9
exponentiation = 2 ** 3

modulo (%) - returns the remainder from a division # so if you type 3 % 2, it will return 1, because it fits once, remainder is 1. 108 % 100 = 8. 10 % 3 = 1. (3*3+1 = 10)
spam = 450 % 449
print spam 
1

[Tip Calculator]

tax = 6.75 / 100 # to get the decimal form of the percentage
tax = 0.0675
meal = 44.50
tip = 0.15

meal = meal + (meal * tax)
total = meal + (meal * tip)

print("%.2f" % total) # formats and prints to the console the value of total with exactly two numbers after the decimal

[String and Console Output]

brian = "Hello life!" # string values

'There's a snake in my boot!' --> This code breaks because Python thinks the apostrophe in 'There's' ends the string. We can use the backslash [escape character] to fix the problem, like this:
'There\'s a snake in my boot!'

Each character in a string is assigned a number, called the index. 

c = "cats"[0] # Python uses 0 indexing (start at)
n = "Ryan"[3]

[String Methods]
len() 	     # Returns the length of a string
.lower()	 # Removes all capitalisation in your string - make it completely lower case
.upper()	 # Forces capitalisation on your string - make it completely upper case
str()        # Turns non-strings into strings (coercion)

parrot = "Norwegian Blue"
print len(parrot)
14
print parrot.lower()
norwegian blue
print parrot.upper()
NORWEGIAN BLUE
pi = 3.14
print str(pi)

[Dot Notation]

- Methods that use dot notation [e.g. lion.upper()] only work with strings
- On the other hand, len() and str() can work on other data types

[String Concatenation]

print "Life " + "of " + "Brian" # prints the phrase "Life of Brian", not the space after the first two words. Combining strings like this is called concatenation.

Sometimes you need to combine a string with something that is not a string - you have to convert the non-string into string:
print "I have " + str(2) + " coconuts!"

[String Formatting with %]

string_1 = "Camelot"
string_2 = "place"

print "Let's not go to %s. 'Tis a silly %s." % (string_1, string_2) # %s are placeholders, vector after % what it will put in

name = raw_input("What is your name?") # console asks for input here
quest = raw_input("What is your quest?")
color = raw_input("What is your favorite color?")

print "Ah, so your name is %s, your quest is %s, " \
"and your favorite color is %s." % (name, quest, color)

[Date and Time]

datetime # stores the time of when something happened

from datetime import datetime   # The first line imports the datetime library so that we can use it.
now = datetime.now()            # The second line will save the current date and time to variable 'now'.
print now          

current_year = now.year
current_month = now.month
current_day = now.day

from datetime import datetime
now = datetime.now()
print now.year
print now.month
print now.day
print '%s-%s-%s' % (now.year, now.month, now.day) # 2015-03-04 etc. 

now.hour
now.minute
now.second

print '%s:%s:%s' % (now.hour, now.minute, now.second)
print '%s/%s/%s %s:%s:%s' % (now.month, now.day, now.year, now.hour, now.minute, now.second)

[Conditionals & Control Flow]

def clinic(): # this creates a function --> defines it, def. 
    print "You've just entered the clinic!"
    print "Do you take the door on the left or the right?"
    answer = raw_input("Type left or right and hit 'Enter'.").lower()
    if answer == "left" or answer == "l":
        print "This is the Verbal Abuse Room, you heap of parrot droppings!"
    elif answer == "right" or answer == "r":
        print "Of course this is the Argument Room, I've told you that already!"
    else:
        print "You didn't pick left or right! Try again."
        clinic()

clinic()

[Comparators]

1 - Equal to     				(==) # = assings a value, == checks for equality
2 - Not equal to 				(!=)
3 - Less than 					(<)
4 - Less than or equal to 		(<=)
5 - Greater than				(>)
6 - Greather than or equal to   (>=)

A - and check is both statements are True
B - or checks if at least one of the statements is True
C - not gives the opposite of the statement # not True is False, etc.

Hierarchy:
1. not - is evaluated first;
2. and - is evaluated next;
3. or - is evaluated last.

[Conditional Statement Syntax]

answer = "Left"
if answer == "Left":
    print "This is the Verbal Abuse Room, you heap of parrot droppings!"

def using_control_once(): # the : is like the curly braces from R (do)
    if not not True:
        return "Success #1"

def using_control_again():
    if 5 == 25**0.5:
        return "Success #2"

print using_control_once()
print using_control_again()

answer = "'Tis but a scratch!"

def black_knight(answer):
    if answer == "'Tis but a scratch!":
        return True
    else:             
        return False  # Make sure this returns False

def french_soldier(answer):
    if answer == "Go away, or I shall taunt you a second time!":
        return True
    else:             
        return False  # Make sure this returns False

def greater_less_equal_5(answer):
    if answer > 5:
        return 1
    elif answer < 5:          
        return -1
    else:
        return 0
        
print greater_less_equal_5(4) # -1
print greater_less_equal_5(5) # 0
print greater_less_equal_5(6) # 1

def the_flying_circus():
    if 1 < 0:    # Start coding here!
        return True
    elif 1 - 10 == 8 and not True:
        return True
    else:
        return True

[PygLatin]

x = "J123"
x.isalpha() # False --> as x contains numerics

pyg = 'ay'

original = raw_input('Enter a word:') # ask for user input

if len(original) > 0 and original.isalpha(): # len measures length
    word = original.lower()                  # turn into lower case     
    first = word[0]                          # extract first letter 
    new_word = word + first + pyg            # concatenate 
    new_word = new_word[1:len(new_word)]     # drop first letter
    print new_word
else:
    print 'empty'

[Functions]

def power(base, exponent):  # Add your parameters here!
    result = base**exponent
    print "%d to the power of %d is %d." % (base, exponent, result)

power(37,4)  # Add your arguments here!

--

def one_good_turn(n):
    return n + 1
    
def deserves_another(n):
    return one_good_turn(n) + 2

-- 

def cube(number):
    value = number**3
    return value
    
def by_three(number):
    if number % 3 == 0: return cube(number)
    else: return False

--

[Generic Imports]

import math             # imports math module
print math.sqrt(25)     # tell python where to find the sqrt() function by putting math. in front of the function
5

-- Or import a single function:

from math import sqrt
sqrt(25) 
5

from math import * # imports all functions of math, no longer need to put math. in front of the functions -- * = everything like in SQL // not ideal when you have duplicate functions, or because load a ton of a variables you don't need

import math            # Imports the math module
everything = dir(math) # Sets everything to a list of things from math
print everything       # Prints 'em all!

max = max(1,2,3,4,5) # returns 5
min = min(1,2,3,4,5) # returns 1
abs = abs(-11)       # returns 11, alwasy returns the absolute (positive) value, only takes single numbers

function(arg*) # * indicates that input = vector 

print type() # will return the data type of the arg

def distance_from_zero(value):
    if (type(value) == int or type(value) == float):
        return abs(value)
    else:
        return "Nope"

def hotel_cost(nights):
    costs = nights * 140
    return costs
    
def plane_ride_cost(city):
    if city == "Charlotte":
        return 183
    elif city == "Tampa":
        return 220
    elif city == "Pittsburgh":
        return 222
    elif city == "Los Angeles":
        return 475

(def rental_car_cost(days):
    total = days * 40
    if days >= 7:
        total -= 50 # new total equals total -50
    elif days >= 3:
        total -= 20
    return total

-- This is the same:

def rental_car_cost(days):
    total = days * 40
    if days >= 7:
        total = total - 50
    elif days >= 3:
        total = total - 20
    return total)

def trip_cost(city, days, spending_money):
    return (hotel_cost(days) + plane_ride_cost(city) + rental_car_cost(days) + 
            spending_money)

print trip_cost("Los Angeles", 5, 600)  
1955

[Lists]

list_name = [item_1, item_2] # Lists are a datatype you can use to store a collection of different pieces of information as a sequence under a single variable name. (Datatypes you've already learned about include strings, numbers, and booleans.)
empty_list = [] 

zoo_animals = ["pangolin", "cassowary", "sloth", "giraffe"];

if len(zoo_animals) > 3:
    print "The first animal at the zoo is the " + zoo_animals[0]
    print "The second animal at the zoo is the " + zoo_animals[1]
    print "The third animal at the zoo is the " + zoo_animals[2]
    print "The fourth animal at the zoo is the " + zoo_animals[3]

zoo_animals[2] = "giraffe" # replaces sloth with giraffe

numbers = [5, 6, 7, 8]
print numbers[1] + numbers[3]
14

suitcase = [] 
suitcase.append("sunglasses")
suitcase.append("gel")
suitcase.append("toothpaste")
suitcase.append("bathing suit")

list_length = len(suitcase) # Set this to the length of suitcase

print "There are %d items in the suitcase." % (list_length)
print suitcase

There are 4 items in the suitcase.
['sunglasses', 'gel', 'toothpaste', 'bathing suit']

suitcase = ["sunglasses", "hat", "passport", "laptop", "suit", "shoes"]

first  = suitcase[0:2]  # The first and second items (index zero and one)
middle = suitcase[2:4]  # Third and fourth items (index two and three)
last   = suitcase[4:6]  # The last two items (index four and five)

animals = "catdogfrog"
cat  = animals[:3]   # The first three characters of animals
dog  = animals[3:6]  # The fourth through sixth characters
frog = animals[6:]   # From the seventh character to the end

animals = ["aardvark", "badger", "duck", "emu", "fennec fox"]
duck_index = animals.index("duck")   # Use index() to find "duck"
animals.insert(duck_index, "cobra")  # We insert "cobra" at index 2, which moves everything down by 1.
print animals 

my_list = [1,9,3,8,5,7]

for number in my_list:
    print 2 * number
2 18 6 16 10 14

start_list = [5, 3, 1, 2, 4]
square_list = []
for x in start_list:
    square_list.append(x**2)
square_list.sort()
print square_list

A dictionary is similar to a list, but you access values by looking up a key instead of an index. A key can be any string or number. Dictionaries are enclosed in curly braces, like so:
d = {'key1' : 1, 'key2' : 2, 'key3' : 3}
print d['Key2']
2

menu['Chicken Alfredo'] = 14.50 # Adding new key-value pair
print menu['Chicken Alfredo']
menu['Sate'] = 10.00
menu['Stampot'] = 5.20
menu['Friet Met'] = 4
print "There are " + str(len(menu)) + " items on the menu."
print menu

zoo_animals = { 'Unicorn' : 'Cotton Candy House',
'Sloth' : 'Rainforest Exhibit',
'Bengal Tiger' : 'Jungle House',
'Atlantic Puffin' : 'Arctic Exhibit',
'Rockhopper Penguin' : 'Arctic Exhibit'}
del zoo_animals['Unicorn']
del zoo_animals['Sloth']
del zoo_animals['Bengal Tiger']
zoo_animals['Rockhopper Penguin'] = 'Loek'
print zoo_animals
{'Atlantic Puffin': 'Arctic Exhibit', 'Rockhopper Penguin': 'Loek'}
None

Removing an item from  list:
backpack = ['xylophone', 'dagger', 'tent', 'bread loaf']
backpack.remove("dagger")

Sub-Indexing

my_dict = {
    "fish": ["c", "a", "r", "p"],
    "cash": -4483,
    "luck": "good"
}
print my_dict["fish"][0]
c

inventory = {
    'gold' : 500,
    'pouch' : ['flint', 'twine', 'gemstone'], # Assigned a new list to 'pouch' key
    'backpack' : ['xylophone','dagger', 'bedroll','bread loaf']
}

# Adding a key 'burlap bag' and assigning a list to it
inventory['burlap bag'] = ['apple', 'small ruby', 'three-toed sloth']
inventory['pocket'] = ['seashell', 'strange berry', 'lint']

# Sorting the list found under the key 'pouch'
inventory['pouch'].sort() 
inventory['backpack'].sort()

inventory['backpack'].remove('dagger')
inventory['gold'] += 50

[Control Flow and Looping]

a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

for i in a:
    if i % 2 == 0:
        print i

def fizz_count(x):
    count = 0
    for i in x:
        if i == 'fizz':
            count = count + 1
    return count

for i in "Codecademy":
    print i
    
# Empty lines to make the output pretty
print
print

word = "Programming is fun!"

for i in word:
    # Only print out the letter i
    if i == "i":
        print letter
--

prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}

for i in prices:
    print i
    print "price: %s" % prices[i]
    print "stock: %s" % stock[i]

total = 0 
for i in prices:
    multiple = prices[i] * stock[i]
    print multiple
    total = total + multiple

print total

---

shopping_list = ["banana", "orange", "apple"]

stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}
    
prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

def compute_bill(food):
    total = 0
    for i in food:
        if stock[i] > 0:
            total += prices[i]
            stock[i] -= 1
        else: total = total
    return total

[Division in Python]
5 / 2           # 2
5.0 / 2         # 2.5
float(5) / 2    # 2.5

The '\'' character is a continuation character. The following line is considered a continuation of the current line.

-- Student Becomes the Teacher --

lloyd = {
    "name": "Lloyd",
    "homework": [90.0, 97.0, 75.0, 92.0],
    "quizzes": [88.0, 40.0, 94.0],
    "tests": [75.0, 90.0]
}
alice = {
    "name": "Alice",
    "homework": [100.0, 92.0, 98.0, 100.0],
    "quizzes": [82.0, 83.0, 91.0],
    "tests": [89.0, 97.0]
}
tyler = {
    "name": "Tyler",
    "homework": [0.0, 87.0, 75.0, 22.0],
    "quizzes": [0.0, 75.0, 78.0],
    "tests": [100.0, 100.0]
}

def average(numbers):
    total = sum(numbers)
    total = float(total)
    average = total/len(numbers)
    return average
    
def get_average(student):
    homework = average(student["homework"])
    quizzes = average(student["quizzes"])
    tests = average(student["tests"])
    total = 0.1*homework + 0.3*quizzes + 0.6*tests
    return total
    
def get_letter_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else: 
        return "F"
        
print get_letter_grade(get_average(lloyd))

def get_class_average(students):
    results = []
    for i in students:
        x = get_average(i)
        results.append(x)
    return average(results)
    
students = [lloyd, alice, tyler]
print get_class_average(students)
print get_letter_grade(get_class_average(students))

[Lists and Functions]
n = [1, 3, 5]
n[1] = n[1]*5 --> [1, 15, 5]

n = [1, 3, 5]
n.append(4) --> [1, 3, 5, 4]

Removing elements from lists
- n.pop(index) will remove the item at index from the list and return it to you:
n = [1, 3, 5]
n.pop(1) --> returns 3, removes the item at index 1 --> [1, 5]
- n.remove(item) will remove the actual item if it finds it:
n.remove(1) --> [3, 5]
- del(n[1]) is like .pop in that it will remove the item at the given index, but it wont return it:
del(n[1])

---

n = [3, 5, 7]

def double_list(x):
    for i in range(0, len(x)):
        x[i] = x[i] * 2
    return x

print double_list(n)

range()
range(6) # => [0,1,2,3,4,5] / range(stop)
range(1,6) # => [1,2,3,4,5] / range(start, stop)
range(1,6,3) # => [1,4]     / range(start, stop, step)

If omitted, start defaults to zero and step defaults to one.

n = [[1, 2, 3], [4, 5, 6, 7, 8, 9]] -- Double for loop!
# Add your function here

def flatten(lists):
    results = []
    for numbers in lists:        # looks at the elements within n (2)
        for i in numbers:        # looks at the elements within the elements of n (3 & 6)
            results.append(i)
    return results

print flatten(n) --> [1, 2, 3, 4, 5, 6, 7, 8, 9]

letters = ['a', 'b', 'c', 'd']
print " ".join(letters)   ==> a b c d
print "---".join(letters) ==> a---b---c---d

from random import randint # randint(low, high)
coin = randint(0, 1)
dice = randint(1, 6)

[Battleship!]

from random import randint

board = []

for x in range(5):
    board.append(["O"] * 5)

def print_board(board):
    for row in board:
        print " ".join(row)

print "Let's play Battleship!"
print_board(board)

def random_row(board):
    return randint(0, len(board) - 1)

def random_col(board):
    return randint(0, len(board[0]) - 1)

ship_row = random_row(board)
ship_col = random_col(board)

# Everything from here on should go in your for loop!
# Be sure to indent four spaces!

for turn in range(4):
    
    guess_row = int(raw_input("Guess Row:"))
    guess_col = int(raw_input("Guess Col:"))

    if guess_row == ship_row and guess_col == ship_col:
        print "Congratulations! You sunk my battleship!"
        break
    else:
        if (guess_row < 0 or guess_row > 4 or guess_row is None) or (guess_col < 0 or guess_col > 4 or guess_col is None):
            print "Oops, that's not even in the ocean."
        elif(board[guess_row][guess_col] == "X"):
            print "You guessed that one already."
        else:
            print "You missed my battleship!"
            board[guess_row][guess_col] = "X"
            if turn == 3:
                print "Game Over"
            else:
                print "Turn ", turn + 1
                print_board(board)

TODO: --> Take Extra Credit Options of Battleship !!!

[Loops]

""" While Loop """

count = 0

if count < 5:
    print "Hello, I am an if statement and count is", count
    
while count < 10:
    print "Hello, I am a while and count is", count
    count += 1

--

num = 1

while num < 11:  
    print num**2
    num += 1

choice = raw_input('Enjoying the course? (y/n)')

while choice not in ('y','n'):  # Fill in the condition (before the colon)
    choice = raw_input("Sorry, I didn't catch that. Enter again: ")

---

count = 0

while True:
    print count
    count += 1
    if count >= 10:
        break

---

import random

print "Lucky Numbers! 3 numbers will be generated."
print "If one of them is a '5', you lose!"

count = 0
while count < 3:
    num = random.randint(1, 6)
    print num:
    if num == 5:
        print "Sorry, you lose!"
        break
    count += 1
else:
    print "You win!"

---

from random import randint

# Generates a number from 1 through 10 inclusive
random_number = randint(1, 10)

guesses_left = 3
# Start your game!

while guesses_left > 0:
    guess = int(raw_input("Your guess: "))
    if guess == random_number:
        print "You win!"
        break
    else:
        guesses_left -= 1
else: 
    print "You lose."

---

hobbies = []

for i in range(3):
    hobbies.append(raw_input("hobby: "))

---

thing = "spam!"

for c in thing:
    print c

word = "eggs!"

for i in word:
    print i

s
p
a
m
!
e
g
g
s
!

---

word = "Marble"
for char in word:
    print char,

# The , character after our print statement means that our next print statement keeps printing on the same line.

---

phrase = "A bird in the hand..."

for char in phrase:
    if char == 'A' or char == 'a':
        print 'X',
    else:
        print char,

print

---

d = {'a': 'apple', 'b': 'berry', 'c': 'cherry'}

for i in d:
    print i
    print d[i]

a
apple
c
cherry
b
berry

---

choices = ['pizza', 'pasta', 'salad', 'nachos']

print 'Your choices are:'
for index, item in enumerate(choices):
    print index+1, item

1 pizza
2 pasta
3 salad
4 nachos

---

list_a = [3, 9, 17, 15, 19]
list_b = [2, 4, 8, 10, 30, 40, 50, 60, 70, 80, 90]

for a, b in zip(list_a, list_b):
    if a > b:
        print a
    else:
        print b

# zip will create pairs of elements when passed two lists, and will stop at the end of the shorter list.

---

# Just like with while, for loops may have an else associated with them.
# In this case, the else statement is executed after the for, but only if the for ends normally—that is, not with a break. This code will break when it hits 'tomato', so the else block won't be executed.

fruits = ['banana', 'apple', 'orange', 'tomato', 'pear', 'grape']

print 'You have...'
for f in fruits:
    if f == 'tomato':
        print 'A tomato is not a fruit!' # (It actually is.)
        break
    print 'A', f
else:
    print 'A fine selection of fruits!'

---

def is_even(x):
    if x % 2 == 0:
        return True
    else:
        return False

---

def is_int(x):
    if int(x) - x > 0:
        return False
    elif int(x) - x < 0:
        return False
    else:
        return True

---

def digit_sum(n):
    sum_digit = 0
    n = str(n)
    for i in n:
        sum_digit += int(i)
    return sum_digit

print digit_sum(1234)

---

def digit_sum(x):
    sum_digit = 0
    while x != 0:
        y = x % 10
        sum_digit += y
        x = x // 10 # floor divide
    return sum_digit

print digit_sum(1234)

# If you're looking for a challenge, try this: to get the rightmost digit of a number, you can modulo (%) the number by 10. To remove the rightmost digit you can floor divide (//) the number by 10. (Don't worry if you're not familiar with floor division—you can look up the documentation here [https://docs.python.org/2/reference/expressions.html#binary-arithmetic-operations]. Remember, this is a challenge!)

---

def factorial(x):
    if int(x) - x > 0:
        print "Not an integer!"
    elif int(x) - x < 0:
        return "Not an integer!"
    else:
         list = []
         while x != 0:
                     list.append(x)
                     x -= 1
         y = reduce(lambda x, y: x*y, list)
         return y
         print y

factorial(5)

---

def is_prime(x):
    if x < 2:
        return False
    else:
        for n in range(2,x):
            if x%n == 0:        # here you check if dividing by itself leaves nothing 3/2 = 1 --> 2 fits in 3 once, what remains is 1
                return False
    return True 

---

def reverse(text):
    reverse_text = []
    for i in text:
        reverse_text.append(i)
    print reverse_text

---

def reverse(text):
    reverse_text = []
    for i in text:
        reverse_text.append(i)
    length = len(reverse_text) + 1
    range_test = range(1,length,1)
    empty = []
    for i in range_test:
        empty.append(reverse_text[len(reverse_text)-i])
    string = str("".join(empty))
    return string
    
reverse("Python!")

---

def anti_vowel(text):
    vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    text_list = []
    for i in text:
        text_list.append(i)
    vowels_removed = []
    for i in text_list:
        if i not in vowels:
            vowels_removed.append(i)
    return "".join(vowels_removed)

anti_vowel("Hey look Words!")

---

score = {"a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2, 
         "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3, 
         "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1, 
         "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4, 
         "x": 8, "z": 10}
         
def scrabble_score(word):
    word = word.lower()
    text_list = []
    for i in word:
        text_list.append(i)
    final_score = 0
    for i in text_list:
        final_score += score[i]
    return final_score

scrabble_score("pie")

---

def censor(text, word):
    replacement = '*'*len(word)
    split_text = text.split(" ")
    length = len(split_text)
    vector = range(0,length,1)
    for i in vector:
        if split_text[i] == word:
            split_text[i] = replacement
    return " ".join(split_text)

censor("Loek Loek Loek", "Loek")

---

def count(sequence, item):
    vector = [item]
    cnt = 0
    for i in sequence:
        if i in vector:
           cnt += 1
    return cnt

---

def purify(vector):
    ls = []
    for i in vector: 
        if i%2 == 0:
            ls.append(i)
    return ls

---

def product(vector):
    size = range(0,len(vector),1)
    total = 1
    for i in size:
        total *= vector[i]
    return int(total)
    
product([1,8,8])

---

def remove_duplicates(vector):
    ls = set(vector)
    ls_removed = list(ls)
    return ls_removed

---

def median(vector):
    vector = sorted(vector)
    if len(vector)%2 == 0:
         half1 = int(0.5*len(vector))
         half2 = half1-1
         value = (vector[half1]+vector[half2])/2.0
         return value
    else: 
         half1 = int(0.5*len(vector))
         value = vector[half1]
         return value

---

grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]

def print_grades(grades):
    for grade in grades:
        print grade

def grades_sum(grades):
    total = 0
    for grade in grades: 
        total += grade
    return total
    
def grades_average(grades):
    sum_of_grades = grades_sum(grades)
    average = sum_of_grades / float(len(grades))
    return average

def grades_variance(scores):
    average = grades_average(scores)
    variance = 0
    for i in scores:
        variance += (i - average)**2
    variance_final = variance/len(scores)
    return variance_final
    
def grades_std_deviation(variance):
    return variance ** 0.5
    
variance = grades_variance(grades)

for i in grades:
    print i
print grades_sum(grades)
print grades_average(grades)
print grades_variance(grades)
print grades_std_deviation(variance)

---

[Iteration Nation]

d = {
    "Name": "Guido",
    "Age": 56,
    "BDFL": True
}
print d.items() # array of tuples, with each tuple consisting of a key/value pair from the dictionary => [('BDFL', True), ('Age', 56), ('Name', 'Guido')]
print my_dict.keys() # returns an array of the dictionary's keys
print my_dict.values() # returns an array of the dictionary's values

---

my_dict = {
            "Name": "Loek",
            "Age": 25,
            3: 3,
            32414: True,
            "Male": True
}

for key in my_dict:
    print key, my_dict[key]

---

[List Comprehensions]

# What if we wanted to generate a list according to some logic—for example, a list of all the even numbers from 0 to 50?
# Python's answer to this is the list comprehension. List comprehensions are a powerful way to generate lists using the for/in and if keywords we've learned. 

evens_to_50 = [i for i in range(51) if i % 2 == 0]
print evens_to_50 # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]

new_list = [i for i in range(1,6)]
# => [1, 2, 3, 4, 5]

doubles = [i*2 for i in range(1,6)]
# => [2, 4, 6, 8, 10]

doubles_by_3 = [i*2 for i in range(1,6) if (i*2)%3 == 0]
# => [6]

even_squares = [i**2 for i in range(1,12) if (i**2) % 2 == 0]
# => [4, 16, 36, 64, 100]

c = ['C' for x in range(5) if x < 3] # put C for x when x < 3, hence 3 C's, as range(5) equals 0, 1, 2, 3, 4
# => ['C', 'C', 'C']

cubes_by_four = [i*i*i for i in range(1,11) if (i*i*i) % 4 == 0] # or naturally use i**3
# => [8, 64, 216, 512, 1000]

[List Slicing Syntax]: [start:end:stride] # start/stop/step

- Where start describes where the slice starts (inclusive), end is where it ends (exclusive), and stride describes the space between items in the sliced list. For example, a stride of 2 would select every other item from the original list to place in the sliced list.

l = [i ** 2 for i in range(1, 11)]
# Should be [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

print l[2:9:2]
# => [9, 25, 49, 81]

to_five = ['A', 'B', 'C', 'D', 'E']

print to_five[3:]
# prints ['D', 'E'] 

print to_five[:2]
# prints ['A', 'B']

print to_five[::2]
# print ['A', 'C', 'E']

- The default starting index is 0.
- The default ending index is the end of the list.
- The default stride is 0.
- A negative stride progresses through the list from right to left.
- A positive stride length traverses the list from left to right, and a negative one traverses the list from right to left. 
- Further, a stride length of 1 traverses the list "by ones," a stride length of 2 traverses the list "by twos," and so on.

my_list = range(1, 11)
backwards = my_list[::-1]
# => [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

to_one_hundred = range(101)
backwards_by_tens = to_one_hundred[::-10]
print backwards_by_tens
# => [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]

to_21 = range(1,22)
odds = to_21[::2]
# => [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
middle_third = to_21[7:14:1]
# => [8, 9, 10, 11, 12, 13, 14] -- remember the 0-index (7=8, 14=15)!

[Functional Programming] # Lambda Syntax

my_list = range(16)
print filter(lambda x: x % 3 == 0, my_list)
# => [0, 3, 6, 9, 12, 15]

- Lambdas are useful when you need a quick function to do some work for you. 
- If you plan on creating a function you'll use over and over, you're better off using def and giving that function a name.

languages = ["HTML", "JavaScript", "Python", "Ruby"]
print filter(lambda i: i == 'Python', languages)
# => ['Python']

squares = [i**2 for i in range(1,11)]
print filter(lambda x: x >= 30 and x <= 70, squares)
# => [36, 49, 64]

threes_and_fives = [i for i in range(1,16) if (i % 3 == 0 or i % 5 == 0)]
print threes_and_fives 
# => [3, 5, 6, 9, 10, 12, 15]

str = "ABCDEFGHIJ" # You can think of a Python string as a list of characters.
start, end, stride = 1, 6, 2
str[start:end:stride]

garbled = "!XeXgXaXsXsXeXmX XtXeXrXcXeXsX XeXhXtX XmXaX XI"
message = garbled[::-2]
print message
# => I am the secret message!

garbled = "IXXX aXXmX aXXXnXoXXXXXtXhXeXXXXrX sXXXXeXcXXXrXeXt mXXeXsXXXsXaXXXXXXgXeX!XX"
message = filter(lambda i: i != 'X', garbled)
print message
# => I am another secret message!

[Bitwise Operators]

- Bitwise operations are operations that directly manipulate bits. In all computers, numbers are represented with bits, 
a series of zeros and ones. In fact, pretty much everything in a computer is represented by bits. This course will introduce 
you to the basic bitwise operations and then show you what you can do with them.

print 5 >> 4  # Right Shift     : 0
print 5 << 1  # Left Shift      : 10
print 8 & 5   # Bitwise AND     : 0
print 9 | 4   # Bitwise OR      : 13
print 12 ^ 42 # Bitwise XOR     : 38
print ~88     # Bitwise NOT     : -89    

8's bit  4's bit  2's bit  1's bit
    1       0       1      0 
    8   +   0    +  2   +  0  = 10 

- In Python, you can write numbers in binary format by starting the number with 0b.

print 0b1,          # 1
print 0b10,         # 2
print 0b11,         # 3
print 0b100,        # 4
print 0b101,        # 5
print 0b110,        # 6
print 0b111         # 7
print 0b1 + 0b11    # 4
print 0b11 * 0b11   # 9

for i in range(2,6): 
    print bin(i) # Keep in mind that after using the bin function, you can no longer operate on the value like a number.

print int("1",2)            # 1
print int("10",2)           # 2
print int("111",2)          # 7
print int("0b100",2)        # 4
print int(bin(5),2)         # 5
print int("0b11001001",2)   # 201

[Left & Right Shift]

# Left Bit Shift (<<) -- like multiplying by 2 
0b000001 << 2 == 0b000100 (1 << 2 = 4)
0b000101 << 3 == 0b101000 (5 << 3 = 40)       

# Right Bit Shift (>>) -- like floor dividing
0b0010100 >> 3 == 0b000010 (20 >> 3 = 2)
0b0000010 >> 2 == 0b000000 (2 >> 2 = 0) 

shift_right = 0b1100 >> 2
shift_left = 0b1 << 2
print bin(shift_right)
print bin(shift_left)

[AND & operator]

- The bitwise AND (&) operator compares two numbers on a bit level and 
returns a number where the bits of that number are turned on if the corresponding bits of both numbers are on
- Note that using the & operator can only result in a number that is less than or equal to the smaller of the two values.

     a:   00101010   42
     b:   00001111   15       
===================
 a & b:   00001010   10

0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1

0b111 (7) & 0b1010 (10) = 0b10
0b1110 & 0b101 = 0b100

[OR | operator]

- The bitwise OR (|) operator compares two numbers on a bit level and returns a number where 
the bits of that number are turned on if either of the corresponding bits of either number are 1.
- Note that the bitwise | operator can only create results that are greater than or equal to the larger of the two integer inputs.

    a:  00101010  42
    b:  00001111  15       
================
a | b:  00101111  47

110 (6) | 1010 (10) = 1110 (14)
print bin(0b1110 | 0b101) # => 0b1111

[XOR ^ operator]

- The XOR (^) or exclusive or operator compares two numbers on a bit level and returns a number where 
the bits of that number are turned on if either of the corresponding bits of the two numbers are 1, but not both.
- Note that XOR-ing a number with itself will always result in 0.

    a:  00101010   42
    b:  00001111   15       
================
a ^ b:  00100101   37

0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0

111 (7) ^ 1010 (10) = 1101 (13)

[NOT ~ operator]

- The bitwise NOT operator (~) just flips all of the bits in a single number. What this actually means 
to the computer is actually very complicated, so were not going to get into it. Just know 
that mathematically, this is equivalent to adding one to the number and then making it negative.

print ~1    # -2
print ~2    # -3
print ~3    # -4
print ~42   # -43
print ~123  # -124
 
[Bit Mask]

- A bit mask is just a variable that aids you with bitwise operations. 
A bit mask can help you turn specific bits on, turn others off, or just 
collect data from an integer about which bits are on or off.

num  = 0b1100
mask = 0b0100
desired = num & mask
if desired > 0:
    print "Bit was on"

def check_bit4(input):
    mask = 0b1000
    check = mask & input
    if check > 0:
        return "on"
    else:
        return "off"

a = 0b110               # 6
mask = 0b1              # 1
desired =  a | mask     # 0b111, or 7

a = 0b10111011
mask = 0b100
desired = a | mask
print bin(desired)      # 0b10111111

a = 0b110               # 6
mask = 0b111            # 7
desired =  a ^ mask     # 0b1

a = 0b11101110
mask = 0b11111111
desired = a ^ mask
print bin(desired)      # 0b10001

a = 0b101 
# Tenth bit mask
mask = (0b1 << 9)  # One less than ten, we only need to slide the mask nine places over from the first bit to reach the tenth bit.
desired = a ^ mask

def flip_bit(number, n):
    mask = (0b1 << (n-1))
    desired = number ^ mask
    return bin(desired)

[Class Syntax]

class Fruit(object):
    """A class that makes various tasty fruits."""
    def __init__(self, name, color, flavor, poisonous):
        self.name = name
        self.color = color
        self.flavor = flavor
        self.poisonous = poisonous

    def description(self):
        print "I'm a %s %s and I taste %s." % (self.color, self.name, self.flavor)

    def is_edible(self):
        if not self.poisonous:
            print "Yep! I'm edible."
        else:
            print "Don't eat me! I am super poisonous."

lemon = Fruit("lemon", "yellow", "sour", False)

lemon.description()
lemon.is_edible()

# => I'm a yellow lemon and I taste sour.
# => Yep! I'm edible.

 # A basic class consists only of the class keyword, the name of the class, and the class from which the new class inherits in parentheses. 
# (We'll get to inheritance soon.) For now, our classes will inherit from the object class, like so:'

class NewClass(object):
    # Class magic here

# This gives them the powers and abilities of a Python object. By convention, user-defined Python class names start with a capital letter.

class Animal(object):
    pass # do nothing

# You may have noticed in our example back in the first exercise that we started our class definition off with an odd-looking function: __init__(). 
# This function is required for classes, and it is used to initialize the objects it creates. __init__() always takes at least one argument, self, 
# that refers to the object being created. You can think of __init__() as the function that "boots up" each object the class creates.

class Animal(object):
    def __init__(self):
        pass

# So far, __init__() only takes one parameter: self. This is a Python convention; there is nothing magic about the word self. 
# However, it is overwhelmingly common to use self as the first parameter in __init__(), so you should do this so that other people will understand your code.

# The part that is magic is the fact that self is the first parameter passed to __init__(). 
# Python will use the first parameter that __init__() receives to refer to the object being created; 
# this is why it is often called self, since this parameter gives the object being created its identity.

# We can access attributes of our objects using dot notation Here's how it works:

class Square(object):
  def __init__(self):
    self.sides = 4

my_shape = Square()
print my_shape.sides

---

class Animal(object):
    def __init__(self, name):
        self.name = name
        pass
    
zebra = Animal("Jeffrey")
print zebra.name

# => Jeffrey

---

# Class definition
class Animal(object):
    """Makes cute animals."""
    # For initializing our instance objects
    def __init__(self, name, age, is_hungry):
        self.name = name
        self.age = age
        self.is_hungry = is_hungry

# Note that self is only used in the __init__()
# function definition; we don't need to pass it
# to our instance objects.

zebra = Animal("Jeffrey", 2, True)
giraffe = Animal("Bruce", 1, False)
panda = Animal("Chad", 7, True)

print zebra.name, zebra.age, zebra.is_hungry
print giraffe.name, giraffe.age, giraffe.is_hungry
print panda.name, panda.age, panda.is_hungry

# => Jeffrey 2 True
# => Bruce 1 False
# => Chad 7 True

# Another important aspect of Python classes is scope. 
# The scope of a variable is the context in which it's visible to the program.

# It may surprise you to learn that not all variables are accessible to all parts of a Python program at all times. 
# When dealing with classes, you can have variables that are available everywhere (global variables), variables that 
# are only available to members of a certain class (member variables), and variables that are only available to particular instances of a class (instance variables).

# The same goes for functions: some are available everywhere, some are only available to members of a certain class, 
# and still others are only available to particular instance objects.

class Animal(object):
    """Makes cute animals."""
    is_alive = True
    def __init__(self, name, age):
        self.name = name
        self.age = age

zebra = Animal("Jeffrey", 2)
giraffe = Animal("Bruce", 1)
panda = Animal("Chad", 7)

print zebra.name, zebra.age, zebra.is_alive
print giraffe.name, giraffe.age, giraffe.is_alive
print panda.name, panda.age, panda.is_alive

# => Jeffrey 2 True
# => Bruce 1 True
# => Chad 7 True

class Animal(object):
    """Makes cute animals."""
    is_alive = True
    def __init__(self, name, age):
        self.name = name
        self.age = age
    # Add your method here!
    def description(self):
        print self.name
        print self.age

hippo = Animal("Loek",25)

hippo.description()

---

class Animal(object):
    """Makes cute animals."""
    is_alive = True
    health = "good"
    def __init__(self, name, age):
        self.name = name
        self.age = age
    # Add your method here!
    def description(self):
        print self.name
        print self.age

hippo = Animal("Loek",25)
sloth = Animal("Felix",28)
ocelot = Animal("Ying",28)

print hippo.health
print sloth.health
print ocelot.health

# => good
# => good
# => good

---

class ShoppingCart(object):
    """Creates shopping cart objects
    for users of our fine website."""
    items_in_cart = {}
    def __init__(self, customer_name):
        self.customer_name = customer_name

    def add_item(self, product, price):
        """Add product to the cart."""
        if not product in self.items_in_cart:
            self.items_in_cart[product] = price
            print product + " added."
        else:
            print product + " is already in the cart."

    def remove_item(self, product):
        """Remove product from the cart."""
        if product in self.items_in_cart:
            del self.items_in_cart[product]
            print product + " removed."
        else:
            print product + " is not in the cart."

my_cart = ShoppingCart("Loek")
my_cart.add_item("Shoe",20)

# => Shoe added.

---

# We've defined a class, Customer, as well as a ReturningCustomer class that inherits from Customer. 
# Note that we don't define the display_cart method in the body of ReturningCustomer, 
# but it will still have access to that method via inheritance. Click Save & Submit Code to see for yourself!

class Customer(object):
    """Produces objects that represent customers."""
    def __init__(self, customer_id):
        self.customer_id = customer_id

    def display_cart(self):
        print "I'm a string that stands in for the contents of your shopping cart!"

class ReturningCustomer(Customer):
    """For customers of the repeat variety."""
    def display_order_history(self):
        print "I'm a string that stands in for your order history!"

monty_python = ReturningCustomer("ID: 12345")
monty_python.display_cart()
monty_python.display_order_history()

# => I'm a string that stands in for the contents of your shopping cart!
# => I'm a string that stands in for your order history!

[Inheritance Syntax]

class DerivedClass(BaseClass):
    # code goes here

# where DerivedClass is the new class you're making and BaseClass is the class from which that new class inherits.

class Shape(object):
    """Makes shapes!"""
    def __init__(self, number_of_sides):
        self.number_of_sides = number_of_sides

# Add your Triangle class below!

class Triangle(Shape):
    def __init__(self, side1, side2, side3):
        self.side1 = side1
        self.side2 = side2
        self.side3 = side3

---

class Employee(object):
    def __init__(self, name):
        self.name = name
    def greet(self, other):
        print "Hello, %s" % other.name

class CEO(Employee):
    def greet(self, other):
        print "Get back to work, %s!" % other.name

ceo = CEO("Emily")
emp = Employee("Steve")
emp.greet(ceo)
# Hello, Emily
ceo.greet(emp)
# Get back to work, Steve!

---

# Overwriting Classes & Calling parent methods

class Employee(object):
    """Models real-life employees!"""
    def __init__(self, employee_name):
        self.employee_name = employee_name

    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 20.00

# Add your code below!

class PartTimeEmployee(Employee):
    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 12.00
        
    def full_time_wage(self, hours):
        return super(PartTimeEmployee, self).calculate_wage(hours)
        
milton = PartTimeEmployee("Loek")
print milton.full_time_wage(10)

---

# On the flip side, sometimes you'll be working with a derived class (or subclass) and realize that you've overwritten a method or attribute defined in 
# that class' base class (also called a parent or superclass) that you actually need. Have no fear! You can directly access the attributes or methods 
# of a superclass with Python's built-in super call.

class Derived(Base):
   def m(self):
       return super(Derived, self).m()

# Where m() is a method from the base class.

---

class Triangle(object):
    def __init__(self, angle1, angle2, angle3):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
    
    number_of_sides = 3
    
    def check_angles(self):
        if (self.angle1 + self.angle2 + self.angle3) == 180:
            return True
        else:
            return False

class Equilateral(Triangle):
    angle = 60
    def __init__(self):
        self.angle1 = self.angle
        self.angle2 = self.angle
        self.angle3 = self.angle

my_triangle = Triangle(90,30,60)

print my_triangle.number_of_sides
print my_triangle.check_angles()

---

class Car(object):
    condition = "new"
    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg   = mpg
    
    def display_car(self):
        print "This is a %s %s with %s MPG." % (self.color, self.model, str(self.mpg))

my_car = Car("DeLorean", "silver", 88)
print my_car.display_car()

---

class Car(object):
    condition = "new"
    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg   = mpg
    
    def display_car(self):
        print "This is a %s %s with %s MPG." % (self.color, self.model, str(self.mpg))
    
    def drive_car(self):
        self.condition = "used"

my_car = Car("DeLorean", "silver", 88)
print my_car.condition
my_car.drive_car()
print my_car.condition

# => new
# => used

--

class Car(object):
    condition = "new"
    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg   = mpg
    
    def display_car(self):
        print "This is a %s %s with %s MPG." % (self.color, self.model, str(self.mpg))
    
    def drive_car(self):
        self.condition = "used"

class ElectricCar(Car):
    def __init__(self, battery_type, model, color, mpg):
        self.battery_type = battery_type
        self.model = model
        self.color = color
        self.mpg = mpg
    
    def drive_car(self):
        self.condition = "like new"

my_car = ElectricCar("molten salt", "DeLorean", "silver", 88)
print my_car.condition
my_car.drive_car()
print my_car.condition

# => new
# => like new

---

class Point3D(object):
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z
    
    def __repr__(self):
        return "(%d, %d, %d)" % (self.x, self.y, self.z)

my_point = Point3D(1,2,3)
print my_point

# => (1, 2, 3)

[File Input/Output -- I/O]

my_list = [i**2 for i in range(1,11)]
# Generates a list of squares of the numbers 1 - 10

f = open("output.txt", "w") -- #This told Python to open output.txt in "w" mode ("w" stands for "write"). We stored the result of this operation in a file object, f. Doing this opens the file in write-mode and prepares Python to send data into the file.
# "r+" equals read and write
for item in my_list:
    f.write(str(item) + "\n") -- #"\n" makes sure all elements appear on their own line

f.close()

---

my_list = [i**2 for i in range(1,11)]

my_file = open("output.txt", "r+")

# Add your code below!

for i in my_list:
    my_file.write(str(i) + "\n")

my_file.close()

---

my_file = open("output.txt", "r")

print my_file.read()

my_file.close()

---

my_file_to_write = open("text.txt", "w")

my_file_to_write.write("I'm the first line of the file!" + "\n")
my_file_to_write.write("I'm the second line." + "\n")
my_file_to_write.write("Third line here, boss." + "\n")

my_file_to_write.close()

my_file = open("text.txt", "r")

print my_file.readline()
print my_file.readline()
print my_file.readline()

my_file.close()

# => I'm the first line of the file!

# => I'm the second line.

# => Third line here, boss.

---

# Open the file for reading
read_file = open("text.txt", "r")

# Use a second file handler to open the file for writing
write_file = open("text.txt", "w")
# Write to the file
write_file.write("Not closing files is VERY BAD.")

write_file.close()

# Try to read from the file
print read_file.read()
read_file.close()

---

with open("file", "mode") as variable:
    # Read or write to the file

with open("text.txt", "w") as textfile:
    textfile.write("Success!")

with open("text.txt", "w") as my_file:
    my_file.write("Loek")

---

f = open("bg.txt")
f.closed
# False
f.close()
f.closed
# True

-- Checking whether files are closed.

with open("text.txt", "w") as my_file:
    my_file.write("Loek")

if my_file.closed == False: 
    my_file.close()

print my_file.closed