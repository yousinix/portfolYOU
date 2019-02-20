---
title: How to undo your git failure?
tags: [Git]
style: fill
color: warning
description: Using `git reflog` and `git reset` to save your code.
---

Source: [Rafał Krókowski](https://blog.usejournal.com/how-to-undo-your-git-failure-b76e31ecac74)

So I bet you just wanted to add a little feature to your app. That little feature took a few days to finish, because you’re a software developer and your task estimation skills are comparable with those of Elon Musk’s. The team have moved quite a bit since your checkout, so under all that pressure, you decided to merge your branch into master. You were scared but you went for it. And that’s exactly when all hell broke loose.

Maybe you tried to merge and 10 conflicts appeared out of nowhere. Maybe you tried to squash few commits into one. Or you’ve felt adventurous that day and tried the scary-sounding rebase. And now, it looks like all your changes and commits are gone, you wiped out half of the master branch and you’ve just wasted everybody’s work, while shitting your pants at the same time.

Trust me, I’ve been there. And there is a way out!

## So how we’re going to handle this?
Well, it depends on how bad it already is. I’m going to start with explaining the most basic types of undo, that is reverting or amending a single commit. If you are familiar with those, feel free to skip to the part when I talk about fixing bad rebase/merge or the one on how to undo all the changes you’ve ever made on a branch.

## Undo one change — reverting and amending commits!

There are two most popular ways to undo just one last commit. The first one is usually used, when you made a typo or forgot to add a file to the commit you’ve just made and you wanna fix it without anyone noticing. If that’s the case, you can just git add all the files that you’ve forgotten and run:

{% include figure.html image="https://cdn-images-1.medium.com/max/1600/1*npt0fA8NmIkhGmTqagbxSg.png" caption="git commit --amend" %}

Git will ask you to write a new commit message (although you can skip it by adding the **--no-edit** flag) and you’re good to go. If you check your commits, the embarrassing one just disappeared and no-one will know about this change — it’s really as simple as that!

But remember, that the second you push your changes to the remote, you’re accountable for that commit. If you want to somehow do the same thing as before, you should let other developers know, that you messed up and you’re fixing it. The answer will be the following command:

{% include figure.html image="https://cdn-images-1.medium.com/max/1600/1*wWqGIikEoOmzBaFCkjcZ-w.png" caption="git revert HEAD" %}

This command will first undo your most recent changes by adding new commit, which will **revert** them. Think of it as an antimatter of commits — the sum of the bad one and this reverted one equals no changes at all. Then it’ll add a second commit, that would this time consist of your new committed changes. That way, when you push the revert commit, nobody would have inconsistent, amended commits and their git would know about the changes.

You may also be wondering what does the capitalized **HEAD** mean. Well:

> HEAD is a pointer or a reference to the last commit in the currently checked-out branch.

You may not care about it now, but that will turn out to be a pretty important knowledge if you happen to mess up something bigger than just that recent commit’s message.

## Undo multiple changes — git reflog to the rescue!

> Reflog is like a Big Brother of your workflow. It watches your every step!

Opening reflog for the first time is somehow similar to finding out how much Google knows about you. It’s kinda creepy, but eye-opening and often — life saving. You are probably aware of the fact, that git knows your commit history — it was built for that purpose. But I encourage you to run:

{% include figure.html image="https://cdn-images-1.medium.com/max/1600/1*3s9b9yYYZMUw_KlqluMNRA.png" caption="git reflog" %}

Weird right? Well, at least when you’re working on a project with other people, there should be a lot of **pulling, merging, rebasing, cloning and switching between branches** in here. Everything you did with your committed changes, you can find in that reflog. If you’re reading this after messing something up big time, you can probably see it few lines below.

Remember, when a few paragraphs back, we talked about the HEAD pointer? In the reflog, you can see the current HEAD, with an offset to the specific git action that you’ve made. So, for example, **HEAD@{0}** is the same as just HEAD, but you can probably see, that the most recent moment, when everything was fine, probably has a bigger offset than that. And that is all you need to know to get out of this trouble!

Now, you just have to pick a point in that reflog history, that you’d like to go back to, exit reflog (by simply typing q) and run:

{% include figure.html image="https://cdn-images-1.medium.com/max/1600/1*TkZjeONornt35VtWneaP1w.png" caption="git reset --hard HEAD@{Your offset of choice}" %}

And that’s all! Now you’re back in that moment you’ve picked. Pretty damn cool, huh? But there is one more, really useful case for doing the hard reset and that is squashing all the changes into one simple commit before merging your branch.

## Undo all the changes—with ninja-level, fancy git command!

So you’d like to squash all your commits into one without opening Vim? (or Emacs, I don’t judge) Don’t want to scroll all the way to the bottom of your reflog to find where your branch has actually begun? Prepare for a next level git command. After you type (or copy-paste, like I do) this into your terminal, make sure to enlarge the font so everybody in the office can see that you’re a Git God himself (even though you have no clue whatsoever about what you just did). Here it is, in all its glory:

{% include figure.html image="https://cdn-images-1.medium.com/max/1600/1*BqFHbD3uUVJ-kWJIFOKF8A.png" caption="git reset $(git merge-base master $(git rev-parse --abbrev-ref HEAD))" %}

I know, it’s a lot, but stay with me on that one. As you can probably see, these are three separate commands piped together (so the output of inner command is the input of outer one) and I’ll explain them one-by-one:

- **git rev-parse --abbrev-rev HEAD** will return the name of the branch you’re currently on
- **git merge-base master $(name of your branch)** will find the best common ancestor between master and your branch, which will probably be the moment you first created this branch and return this action’s hash
- **git reset $(hash of the branch creation)** will, as you probably guessed by now, undo all the commits, merges, rebases etc. while preserving your changes to the code

So now, you’ll have all of your changes untracked and you can add them in bulk to the single commit, pick a name and you’re good to go!