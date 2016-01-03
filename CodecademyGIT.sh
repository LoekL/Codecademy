GIT # codecademy

A Git project can be thought of as having three parts:

1 - A Working Directory: where you will be doing all the work: creating, editing, deleting and organizing files
2 - A Staging Area: where you will list changes you make to the working directory
3 - A Repository: where Git permanently stores those changes as different versions of the project

git init --> The command sets up all the tools Git needs to begin tracking changes made to the project.
git status --> check git status
untracked files --> Untracked means that Git sees the file but has not started tracking changes yet
git add 'filename' --> start tracking changes to this file
git diff 'filename' --> we can check the differences between the working directory and the staging area
+ press 'q' to exit diff mode

A commit is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository.

git commit -m "Complete first line of dialogue"

Standard Conventions for Commit Messages:

- Must be in quotation marks
- Written in the present tense
- Should be brief (50 characters or less) when using -m

Often with Git, you will need to refer back an earlier version 
of a project. Commits are stored chronologically in the repository and can be viewed with:

git log

In the output, notice:

- A 40-character code, called a SHA, that uniquely identifies the commit. This appears in orange text.
- The commit author (you!)
- The date and time of the commit
- The commit message

Summary
- Git is the industry-standard version control system for web developers
- Use Git commands to help keep track of changes made to a project:
  + git init creates a new Git repository
  + git status inspects the contents of the working directory and staging area
  + git add adds files from the working directory to the staging area
  + git diff shows the difference between the working directory and the staging area
  + git commit permanently stores file changes from the staging area in the repository
  + git log shows a list of all previous commits

In Git, the commit you are currently on is known as the HEAD commit. In many cases, the most recently made commit is the HEAD commit.

git show HEAD
git checkout HEAD filename --> will restore the file in your working directory to look exactly as it did when you last made a commit
git add 'filename1' 'filename2'

git reset HEAD filename --> his command resets the file in the staging area to be the same as the HEAD commit. It does not discard file changes from the working directory, it just removes them from the staging area.
git reset 5d69206 # first 6 chars of SHA

You have learned three different ways to backtrack in Git. You can use these skills to undo changes made to your Git project.

Lets take a moment to review the new commands:

- git checkout HEAD filename: Discards changes in the working directory.
- git reset HEAD filename: Unstages file changes in the staging area.
- git reset SHA: Can be used to reset to a previous commit in your commit history.

== Branching ==

git branch --> which branch am I on?
git branch new_branch --> create new branch
git checkout branch_name --> switch to branch branch_name
git merge branch_name --> merge your new branch with the master branch

- Your goal is to update master with changes you made to fencing.
- fencing is the giver branch, since it provides the changes.
- master is the receiver branch, since it accepts those changes.

Notice the output: The merge is a "fast forward" because Git recognizes that fencing contains the most recent commit. Git fast forwards master to be up to date with fencing.

The merge was successful because master had not changed since we made a commit on fencing. Git knew to simply update master with changes on fencing.

What would happen if you made a commit on master before you merged the two branches? Furthermore, 
what if the commit you made on master altered the same exact text you worked on in fencing? 
When you switch back to master and ask Git to merge the two branches, Git does not know which 
changes you want to keep. This is called a merge conflict.

We must fix the merge conflict.

In the code editor, look at resume.txt. Git uses markings to indicate the HEAD (master) 
version of the file and the fencing version of the file, like this:

<<<<<<< HEAD
master version of line
=======
fencing version of line
>>>>>>> fencing

Git asks us which version of the file to keep: the version on master or the version on fencing. You decide you want the fencing version.

From the code editor:

Delete the content of the line as it appears in the master branch

Delete all of Gits special markings including the words HEAD and fencing. 
If any of Gits markings remain, for example, >>>>>>> and =======, the conflict remains.


In Git, branches are usually a means to an end. You create them to work on a new project feature, 
but the end goal is to merge that feature into the master branch. After the branch has been integrated into master, 
it has served its purpose and can be deleted.

git branch -d branch_name --> will delete the specified branch from you Git project.

The following commands are useful in the Git branch workflow.

git branch --> Lists all a Git projects branches.
git branch branch_name --> Creates a new branch.
git checkout branch_name --> Used to switch from one branch to another.
git merge branch_name --> Used to join file changes from one branch to another.
git branch -d branch_name --> Deletes the branch specified.

== Collaboration ==

git clone remote_location clone_name --> clone the remote repository
  + remote_location == web address or filepath
  + clone_name == the name you give to the diretory in which Git will clone the repository

Git informs us that its copying everything from science-quizzes into the my-quizzes directory.
my-quizzes is your local copy of the science-quizzes Git project. If you commit changes to the project here, Sally will not know about them.

git remote -v

- Git lists the name of the remote, origin, as well as its location.
- Git automatically names this remote origin, because it refers to the remote repository of origin. However, it is possible to safely change its name.
- The remote is listed twice: once for (fetch) and once for (push). 

git fetch --> a way to see if changes have been made to the remote and bring the changes down to your local copy
git merge origin/master --> we now merge those changes to the local master branch

Workflow:
1 - Fetch and merge changes from the remote
2 - Create a branch to work on a new project feature
3 - Develop the feature on your branch and commit your work
4 - Fetch and merge from the remote again (in case new commits were made while you were working)
5 - Push your branch up to the remote for review

git push origin your_branch_name --> will push your branch up to the remote, origin. 
From there, Sally can review your branch and merge your work into the master branch, making it part of the definitive project version.

1 - A remote is a Git repository that lives outside your Git project folder. Remotes can live on the web, on a shared network or even in a separate folder on your local computer.
2 - The Git Collaborative Workflow are steps that enable smooth project development when multiple collaborators are working on the same Git project.
We also learned the following commands

git clone --> Creates a local copy of a remote.
git remote -v --> Lists a Git projects remotes.
git fetch --> Fetches work from the remote into the local copy.
git merge origin/master --> Merges origin/master into your local branch.
git push origin <branch_name> --> Pushes a local branch to the origin remote.