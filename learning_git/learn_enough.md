# Learning GIT

Let's learn GIT, ok?

For more information on Git, see the [official Git documentation](https://git-scm.com/)

---

## 1 - Getting started
### 1.1 - Installation and setup
`which git`  ⇒ Verify if git is already installed

`sudo apt install git-all` ⇒ Install git

#### Setting
```
    $ git config --global user.name "Your Name"
    $ git config --global user.email your.email@example.com
```
`git help` ou `git help | less` ⇒ Help from git

`cat .gitconfig` = Analyze your git data

---

### 1.2 - Initializing the repo

`git init` ⇒ Initialize a repo

---

### 1.3 - Our first commit

`git status` ⇒ Displays every file different from the repo

`git add -A` ⇒ Add every file to the repo

`git commit -m "message"` ⇒ Sync to the remote repo(I think)

`git log` ⇒ Displays the repo's logs

---

### 1.4 - Viewing the diff

`git diff` ⇒ Displays the modifications in the files

`git commit -am "message"` ⇒ Commit without the add command(I think)

`git show <commit>` ⇒ Displays the differences in a especific commit

---

### 1.5 - Adding an HTML tag

`git log -p` ⇒ Displays the commit's differences of the repo

---

### 1.7 - Summary

Command | Description | Example
---|---|---
git help|Get help on a command|$ git help push
git config|Configure Git|$ git config --global …
source <file>|Activate shell changes|$ source ~/.bash_profile
mkdir -p|Make intermediate directories as necessary|$ mkdir -p repos/website
git status|Show the status of the repository|$ git status
touch <name>|Create empty file|$ touch foo
git add -A|Add all files or directories to staging area|$ git add -A
git add <name>|Add given file or directory to staging area|$ git add foo
git commit -m|Commit staged changes with a message|$ git commit -m "Add thing"
git commit -am|Stage and commit changes with a message|$ git commit -am "Add thing"
git diff|Show diffs between commits, branches, etc.|$ git diff
git commit --amend|Amend the last commit|$ git commit --amend
git show <SHA>|Show diff vs. the SHA|$ git show fb738e…

---

## 2 - Backing up and sharing

### 2.1 - Signing up for GitHub

- [x]  **Create a GitHub account**

---

### 2.2 - Remote repo

`git remote add origin [https://github.com/](https://github.com/)<name>/website.git` ⇒ Add a remote repo

`git push -u <loc> <br>` ⇒ Push branch to remote

---

### 2.3 - Adding a README

- [x]  If you don't have, **create a README.md and edit it**

- [x]  Then, **add, commit and push it**

`git push` ⇒ A simple way to push

---

### 2.4 - Summary

Command|Description|Example
---|---|---
git remote add|Add remote repo|$ `git remote add origin`
git push -u <loc> <br>|Push branch to remote|$ `git push -u origin master`
git push|Push to default remote|$ `git push`

---

## 3 - Intermediate workflow

### 3.1 - Commit, push, repeat

`touch <empty_folder>/.gitkeep` ⇒ To add an empty folder to the repository

__\ in the command line__ to keep writing a command in a new line

---

### 3.2 - Ignoring files

[x] Touch a _.gitignore_ file in the repository and put there in each line, every content that you want to be ignored

---

### 3.3 - Branching and Merging

`git checkout -b <branch_name>` ⇒ Create a branch

`git branch` ⇒ Display the branches, and in which them you are

`git checkout <branch_name>` ⇒ Go to another branch

`git diff main` ⇒ Display the differences between the branches and the master branch

`git merge <branch_name>` ⇒ Update the main/master branch from another branch

`git branch -d <branch_name>` ⇒ Delete an especific branch

`git branch <new_branch_name>` ⇒ Create a branch, but stay in the master for a while

`git branch -D <branch_name>` ⇒ Delete an especific branch even though it hasn't been merged into the master branch

---

### 3.4 - Recovering from Errors

`git checkout -f` or `git checkout —force` ⇒ Undo all the modifications before you commit

`git checkout <commit_SHA>` ⇒ Check out other commits

---


File/Command|Description|Example
---|---|---
.gitignore|Tell Git which things to ignore|$ echo .DS_store >> .gitignore
git checkout|Check out a branch|$ `git checkout master`
git checkout -b|Check out & create a branch|$ `git checkout -b about-page`
git branch|Display local branches|$ `git branch`
git merge|Merge in a branch|$ `git merge about-page`
git rebase|Do something possibly weird & confusing|See “Git Commit”
git branch -d |Delete branch (if merged)|$ `git branch -d about-page`
git branch -D|Delete branch (even if unmerged) (dangerous)|$ `git branch -D other-branch`
git checkout -f|Force checkout, discarding changes (dangerous)|$ `git add -A && git checkout -f`

---

## 4 - Collaborations

### 4.1 - Clone, push, pull

`git clone https://github.com/example/ <remote_name>` ⇒ Clone a repo to the local disk

`git pull` ⇒ Pull in changes from remote repository

---

## 4.3 - Pushing branches

`git push -u origin <branch>` ⇒ Push other branches 

`git branch -a` ⇒ Display all the branches(remote branches too)

`git push origin --delete <branch>` ⇒ Delete a remote branch

---

## 4.4 - Extras

`git mv <file_name> <new_file_name>` ⇒ Rename the file

`git rm <file_name>` ⇒ Delete a file

---

## 4.5 - Summary


Command|Description|Example
---|---|---
git clone|<URL>	Copy repo (incl. full history) to local disk|$ `git clone https://ex.co/repo.git` 
git pull|Pull in changes from remote repository|$ `git pull`
git branch -a|List all branches|$ `git branch -a`
git checkout|Check out remote branch and configure for push|$ `git checkout fix-trademark`
