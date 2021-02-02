# Learning GIT
Let's learn GIT, ok?
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