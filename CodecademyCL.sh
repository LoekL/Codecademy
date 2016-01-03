[UNIX Basics]

- https://our.intern.facebook.com/intern/dex/getting-started-with-dataswarm/unix-basics/
- http://www.ee.surrey.ac.uk/Teaching/Unix/ 

cd ~/dataswarm
cd #=> change directory
~ #=> is alias for /home/$USER
echo $USER #=> loeklandzaat
history #=> return a list of previously run commands
clear #=> remove everything in the console)
pwd #=> where am i? 'print working directory'
ls #=> list everything which is in there, takes options, e.g. ls -la 
ls -a #=> The -a modifies the behavior of the ls command to also list the files and directories starting with a dot (.). Files started with a dot are hidden, and don't appear when using ls alone.
--> -a is called an option, which modifies the behavior of the command
-a - lists all contents, including hidden files and directories
-l - lists all contents of a directory in long format
-t - order files and directories by the time they were last modified
- Multiple options can be used together, like ls -alt
cat #=> display what is in the file
mkdir unix_basics #=> create folder unix_basics
rmdir #=> remove directory
vim #=> create new file
cd - #=> go to parent directory
cd .. #=> go to parent directory
cd ../../action/ #=> Here we navigate up two directories, and then into the action/ directory.
touch #=> The touch command creates a new file inside the working directory. It takes in a filename as an argument, and then creates an empty file in the current working directory.
history #=> show previously ran commands
env #=> The env command stands for "environment", and returns a list of the environment variables for the current user. Here, the env command returns a number of variables, including PATH, PWD, PS1, and HOME.

cp frida.txt lincoln.txt #=> The cp command copies files or directories. Here, we copy the contents of frida.txt into lincoln.txt.
cp biopic/cleopatra.txt historical/ #=> copy cleopatra into historical directory
cp biopic/ray.txt biopic/notorious.txt historical/ #=> Copies ray.txt and notorious.txt and places them in historical/
cp * satire/ #=> copy all files (not directories) and place them in satire/
cp m*.txt scifi/ #=> copy all files that start with m, end with .txt into scifi/

mv superman.txt superhero/ #=> move superman.txt to superhero/
mv wonderwoman.txt batman.txt superhero/ #=> moves both files into superhero/
mv batman.txt spiderman.txt #=> rename batman.txt as spiderman.txt

rm waterboy.txt #=> remove waterboy.txt
rm -r slapstick #=> remove directory slapstick; -r stands for "recursive," and it's used to delete a directory and all of its child directories.

[1] - standard input, abbreviated as stdin, is information inputted into the terminal through the keyboard or input device.
[2] - standard output, abbreviated as stdout, is the information outputted after a process is run.
[3] - standard error, abbreviated as stderr, is an error message outputted by a failed process.

echo "Hello" > hello.txt #=> The > command redirects the standard output to a file. Here, "Hello" is entered as the standard input. The standard output "Hello" is redirected by > to the file hello.txt.
cat oceans.txt > continents.txt #=> replaces content of continents.txt with that of oceans.txt
# Note that > overwrites all original content in continents.txt. When you view the output data by typing cat on continents.txt, you will see only the contents of oceans.txt.
cat glaciers.txt >> rivers.txt #> >> appends the content of glaciers.txt to rivers.txt
cat < lakes.txt #=> < takes the standard input from the file on the right and inputs it into the program on the left. Here, lakes.txt is the standard input for the cat command. The standard output appears in the terminal.
cat volcanoes.txt | wc #=> feed WordCount (wc) the input of cat volcanoes.txt
cat volcanoes.txt | wc | cat > islands.txt
cat volcanoes.txt | wc | cat > islands.txt #=> not that by using > we've overwritten islands.txt, >> would have appended it
sort lakes.txt #=> sort takes the standard input and orders it alphabetically for the standard output. Here, the lakes in sort lakes.txt are listed in alphabetical order
cat lakes.txt | sort > sorted-lakes.txt #=> Here, the command takes the standard output from cat lakes.txt and "pipes" it to sort. The standard output of sort is redirected to sorted-lakes.txt

uniq deserts.txt #=> distinct set (print in terminal)
# uniq stands for "unique" and filters out adjacent, duplicate lines in a file. Here uniq deserts.txt filters out duplicates of "Sahara Desert", because the duplicate of 'Sahara Desert' directly follows the previous instance. The "Kalahari Desert" duplicates are not adjacent, and thus remain.
sort deserts.txt | uniq #=> first sort then distinct (print in terminal)
# A more effective way to call uniq is to call sort to alphabetize a file, and "pipe" the standard output to uniq. Here by piping sort deserts.txt to uniq, all duplicate lines are alphabetized (and thereby made adjacent) and filtered out.
sort deserts.txt | uniq > uniq-deserts.txt #=> first sort, then distinct, create uniq-deserts.txt file and put there

grep Mount mountains.txt #=> grep stands for "global regular expression print". It searches files for lines that match a pattern and returns the results. It is also case sensitive. Here, grep searches for "Mount" in mountains.txt.
grep -i Mount mountains.txt #=> grep -i enables the command to be case insensitive. Here, grep searches for capital or lowercase strings that match Mount in mountains.txt.
grep -R Arctic /home/ccuser/workspace/geography #=> grep -R searches all files in a directory and outputs filenames and lines containing matched results. -R stands for "recursive". Here grep -R searches the /home/ccuser/workspace/geography directory for the string "Arctic" and outputs filenames and lines with matched results.
grep -Rl Arctic /home/ccuser/workspace/geography #=> grep -Rl searches all files in a directory and outputs only filenames with matched results. -R stands for "recursive" and l stands for "files with matches". Here grep -Rl searches the /home/ccuser/workspace/geography directory for the string "Arctic" and outputs filenames with matched results.

sed 's/snow/rain/' forests.txt #=> sed stands for "stream editor". It accepts standard input and modifies it based on an expression, before displaying it as output data. It is similar to "find and replace".

Lets look at the expression 's/snow/rain/':

- s: stands for substitution. it is always used when using sed for substitution.
- snow: the search string, the text to find.
- rain: the replacement string, the text to add in place.

In this case, sed searches forests.txt for the word "snow" and replaces it with "rain." Importantly, the above command will only replace the first instance of "snow" on a line.

sed 's/snow/rain/g' forests.txt #=> The above command uses the g expression, meaning "global". Here sed searches forests.txt for the word "snow" and replaces it with "rain", globally. All instances of "snow" on a line will be turned to "rain".

[Summary: Redirection]

Redirection reroutes standard input, standard output, and standard error.
The common redirection commands are:

- '>' : redirects standard output of a command to a file, overwriting previous content.
- '>>': redirects standard output of a command to a file, appending new content to old content.
- '<' : redirects standard input to a command.
- '|' : redirects standard output of a command to another command.

A number of other commands are powerful when combined with redirection commands:

- sort: sorts lines of text alphabetically.
- uniq: filters duplicate, adjacent lines of text.
- grep: searches for a text pattern and outputs it.
- sed : searches for a text pattern, modifies it, and outputs it.

[nano]

nano hello.txt #=> open hello.txt with nano
use Ctrl (^) to use all commands listed at the bottom of the screen

- Ctrl + O saves a file. 'O' stands for output
- Ctrl + X exits the nano program. 'X' stands for exit
- Ctrl + G opens a help menu
- 'clear' clears the terminal 

[environment]

nano ~/.bash_profile #=> is the name of file used to store environment settings. It is commonly called the "bash profile". When a session starts, it will load the contents of the bash profile before executing commands.

- The ~ represents the users home directory.
- The . indicates a hidden file.
- The name ~/.bash_profile is important, since this is how the command line recognizes the bash profile

1 - The command nano ~/.bash_profile opens up ~/.bash_profile in nano.
2 - The text echo "Welcome, Jane Doe" creates a greeting in the bash profile, which is saved. It tells the command line to echo the string "Welcome, Jane Doe" when a terminal session begins.
3 - The command source ~/.bash_profile activates the changes in ~/.bash_profile for the current session. Instead of closing the terminal and needing to start a new session, source makes the changes available right away in the session we are in.

Li + tab (open suggestions) --> ??
history | grep ’ssh’ (contains ssh) --> ??

cp -i /mnt/vol/engshare/admin/scripts/datacamp/datacamp.bashrc ~/.bashrc

+ cp -- Linux command for copy
+ i -- means "warn me if I'm about to overwrite an existing file"
+ /mnt/vol/engshare/admin/scripts/datacamp/datacamp.bashrc -- the file I want to copy
+ ~/.bashrc -- the location I want to put it. ~/ is an alias for home. For me, it is equivalent to /home/katherine/
+ alias pd="pwd"
+ export PS1=">> " #=> sets the command prompt to ">> "

export USER="Jane Doe"

1 - The line USER="Jane Doe" sets the environment variable USER to a name "Jane Doe". Usually the USER variable is set to the name of the computers owner.
2 - The line export makes the variable to be available to all child sessions initiated from the session you are in. This is a way to make the variable persist across programs.
3 - At the command line, the command echo $USER returns the value of the variable. Note that $ is always used when returning a variables value. Here, the command echo $USER returns the name set for the variable.

[Nano Basics]

nano ~/.bashrc --> open .bashrc with nano
nano ~/.gitconfig --> cntrl + X == exit

- most commands are invoked by holding down the Ctrl key (that is, the control key)

^O save contents without exiting (you will be prompted for a filename to save to. If you opened a file, just press enter)
^X exit nano (you will be prompted to save your file if you haven't')

Link to more info: http://mintaka.sdsu.edu/reu/nano.html