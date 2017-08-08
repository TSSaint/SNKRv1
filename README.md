# SNKRv1
## Description
This project is a sneaker database management CRUD app that allows a user to store a journal of their favorite footwear. The whole idea was to create a nostalgic and personalised and curated set of items.

## Goals
The intent for the project was to allow a user to:
#### -View public/personalised database of footwear
#### -Add, View, Update and Edit individual pieces of footwear
#### -Log into a custom user profile that displays information about the user

#### Stretch Goals:
-People can "message" each other
-Link to a sneaker forum
-Use a cool npm package or two
-Host/upload images

## Wireframes
-Will insert several images soon.

## User Stories
To get a figure of these, several people were profiled over the course of a few days who represented different kinds of footwear lovers. The general consensus was the following.
## Format: As a < type of user >, I want < some goal > so that < some reason >.

#### "As a lover of street fashion, clothing, and overall style, I want to be able to keep track of my J's so that I can be proud and show them off to my friends."
-Basia Bowens

#### "As a luxury footwear and high fashion obsessive, I want to keep track of what kinds of shoes I'm wearing for the season so that I know what brands I've been really spending money on."
-Emir Bahadir

#### "As a vintage boot collector, specifically interested in 1940s and Indian styles, I want to keep track of what kinds of shoes I have amassed over the years and record and store the memories I've had with them."
-Rahul Krishnamoorthy

#### "As a lifelong fan of Rick Owens, I want to see a long list of footwear I've acquired every season and keep them in a living shelf online."
-Nathan Hamilton

## Technologies
#### The App:
- MVC (Model View Controller) model using CSS, JS and EJS to render the page
- CRUD functionality enabled on local host, stored with SQL, returning JSON and showing page to user in specific views
- RESTful routes using the .post, .get., .put., and .delete
- Heroku deployment with Git as well as an back-end
- API's: none for now but will apply some in the future
- NPM modules, specifically (grabbed from J.'s delorean movie HW):
    1 "bcryptjs": "^2.4.3",
    2 "body-parser": "^1.17.2",
    3 "cookie-parser": "^1.4.3",
    4 "dotenv": "^4.0.0",
    5 "ejs": "^2.5.7",
    6 "express": "^4.15.3",
    7 "express-session": "^1.15.5",
    8 "method-override": "^2.3.9",
    9 "morgan": "^1.8.2",
    10 "nodemon": "^1.11.0",
    11 "passport": "^0.3.2",
    12 "passport-local": "^1.0.0",
    13 "path": "^0.12.7",
    14 "pg-promise": "^6.3.7",
    15 "psql": "0.0.1"
---   
1 bcrypt: used to encrypt/hash the security flaw that occurs when a user submits a password upon registration. Essentially hides the passwords in the database
2 body-parser: essentially used to grab JSON of data; also, this returns middleware that only parses json
3 cookie-parser: essentially used to parse a passed cookie
4 dotenv: essentially aids in authentication by storing environmental variables. the .env file holds the secretkey which ultimately hides the passwords
5 ejs: this is the view engine that allows javascript to be run in the MVC - these also manipulate data rendered in the dom
6 express: the all-important server-side node package that allows front and back ends to communicate
7 express-session: allows the use of middleware for sessions
8 method-override: allows the use of CRUD-style requests like .put/.get almost anywhere
9 morgan: this is a logger that allows for HTTP requests in node
10 nodemon: an awesome tool that helps see processes in node generally helps debug (and keep your cool)
11 passport: allows for/used in authentication in node
12 passport-local: allows authentication in node with username/password 
13 path: allows for moving through files/indexes
14 pg-promise: allows for calling SQL in the application to render data from a database
15 psql: allows the use of Postgres in node

---
A code snippet of a part of the app you're particularly proud of:
TBD

---
Any things you plan to fix or features you plan to add:
TBD

---
Instructions for downloading the code and running it on localhost:
TBD
