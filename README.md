[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Tic-Tac-Toe-Client URL

- Live app: [Tic-Tac-Toe-Client](https://jkjellan.github.io/tic-tac-toe-client/)

## Overview
This is Project One "Tic-Tac-Toe" for General Assembly Cohort WDI-LM01.

Start Date: April 5th 2017
End Date:  April 10th 2017

## Development Process
I started by sketcing wireframes (linked below) as part of one of the assigned studies. I also wrote my first user stories at that time, which I added to later (see below).
On the weekend leading up to the project start date, I framed up my project in html and css. My design has remained largely unchanged since then. That weekend, I made my first attempt at game logic, and achieved a (mostly) working local version of the game.

On the following Wednesday, April 5th, the project officially kicked off. I spent the first hour or so getting familiar with the project template. After that I set up my user sign-in, sign-up, and change-passward functionality, basing my code on the api-token-auth assignment we did in class. During the afternoon, I spun my wheels trying to figure out how to implement my game logic within the project template framework, which I found frustrating. Originally I attempted import all three of my game logic functions into index.js, which made a mess of things. I found success when I used a single function (my click-handler function) as a single entrypoint into my game logic.

On the second day, I started in on the game AJAX requests, which I got up and running.  I continued to use the authorization AJAX as a model. At that point, I was maintaining two separate mirror processes; I had created local variables to hold my gameboard array, win booleans, etc., and my game logic was operating on those local arrays. The AJAX was not doing anything really except creating a mirror copy of the gameboard array on the server. In other words, I wasn't using the AJAX response data.  Everything was working though, so I didn't worry about it.

By Friday I had finished up most of the requirements, and I turned my attention to tinkering with the user experience, focused on hiding and unhiding all sorts of buttons related to sign-in, sign-up, change password, and sign-out.  That took me a surprising amount of time, because I just kept tinkering.

I continued to focus on UX type concerns on Saturday, until late in the evening I was testing my deployed application, and noticed something disconcerting; I noticed an instance where my PATCH request (to update the gameboard) was out of sync with the local gameboard array on which my game logic operated. I'm still not sure if it was a bug or not, because I wasn't able to replicate the issue after first noticing it, but I thought it might be due to the fact I mentioned earlier, that my game logic was operating on a mirror local array, not the array handed back by the AJAX response.

So I spent all Sunday re-writing my code to operate on the gameboard array ('cells') returned by the AJAX Patch request.  As of 5:30pm on April 9th, I'm still working through some bugs related to this major overhaul of my code, but I hope to have them worked out by the time I go to bed!


## Unsolved Problems
- Other than fixing bugs related to the major overhaul of my code on April 9th, I really would like to get this game working on separate remote devices. I think the work I did today, elimiating my dependence on local variables, is a large step in that direction.
- In general, I really want to refactor my code. Especially after the mess I made during my overhaul today. My code currently just lacks organization and structure, and it makes it very difficult to work with.
- I also would like to make the game responsive, and I want to add nice features like drop down menus instead of buttons.
- I want to add more robust game statistics, including head to head statistics against other players.

## User Stories
Acheived:
- As a user, I want to be able to create an account, sign in, and change my password.
- As a signed-in user, I should be the first to play, using x as my marker.
- As a user, I want there to be visual feedback concerning whose turn it is, and how many potential turns are left in the game.
- As a user, I want to be told when either player has won the game.
- As a user, I want there to be a button that allows me to immediately play another game after a game finishes.
- As a user, when I choose to play again, I don't want my score to reset. The score should only reset upon logging out, changing password, or closing the window.
- As a user, I want to be able to see a history of each completed game board for every past match.

Not Achieved(...yet!):
- As a user, I want to be able to see match statistics, filterable by opponent.
- As a user, I want to be able to select my own unique marker that I use for all my games.
- As user, I want to be able to select either a local or remote game, allowing me to play against another user on a separate device if I want.
- As a player, I want to be randomly assigned Player One or Player Two status, with my opponent assigned the inverse, so that there is a level playing field, and no first mover advantage.

## Wireframes:
- I made a couple of rough sketces to start:  [desktop](http://i.imgur.com/1xwuf1b.jpg) and [mobile](http://i.imgur.com/rFRisS6.jpg)


## Technologies Used
- Bootstrap
- jQuery
- Rails
- Webpack
- Grunt
- Handlebars.js
- imgur.com


## Installation

1. Install with 'npm install'.
2. Start with 'grunt serve'.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
