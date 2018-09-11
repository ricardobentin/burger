# burger

Burger is an application that where users can create a burger to eat. Once a burger is created it is placed in the "Burgers Ready to be Eaten" section and the only option is to eat it. Once the burger is eaten, it will be moved to the "Devoured Burgers" section. The data base will update in real-time for both creation and a state change to devoured.

To get started, you can either go here: https://burger-rb.herokuapp.com/

OR

run npm install in your CLI to load the required packages.

Required Packages
* Express
* Express-Handlebars
* MySql
* Body Parser

Use the provided schema and seeds files to initialize the database and create the required table.

From there, run node server.js in your terminal.

The application has one HTML page that has been styled with bootstrap and a custom css file.

* Example of page after a user has created a burger and it is ready to be eaten: 
<img src="https://github.com/ricardobentin/burger/blob/master/public/assets/img/eat.jpg" alt="EAT">

* Example of page after a user has eaten a burger:
<img src="https://github.com/ricardobentin/burger/blob/master/public/assets/img/eaten.jpg" alt="EATEN">

Demo of the app:
<img src="https://github.com/ricardobentin/burger/blob/master/public/assets/img/demo.gif" alt="DEMO">

Features of the app:
* Runs on an express server
* Uses handlebars as a way to easily integrate the response from the database into an HTML page
* Leverages body parser as a middleware to parse incoming request bodies so they are accessible within the app
* MySQL is used as the local database and Jaws DB is used as the database once the application is deployed to Heroku 
* Uses the Model View Controller (MVC) paradigm
* Uses a custom ORM to help with the translation of objects to tables
* Routes
    * An Express Router handles all of the routing 
        * GET route to display all burgers in all states
        * POST route to create a new burger
        * PUT route to update the state of the burger from "not devoured" to "devoured"