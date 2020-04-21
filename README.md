# ARG ENIB
This code was used to create an ARG ([Alternate reality game](https://en.wikipedia.org/wiki/Alternate_reality_game)) in my school.

To make it work, you need to add enigmas, the users must solve the first enigma to get the second enigma URL and so on. They can, if they want, let their names. During the event the admin got access to a result page, where you can see the status of every enigma and also every name who solve each enigma.

## Enigmas type
There is 3 type of enigmas


### 1) Flag
For this type the user must find a string, by any mean you want :)

### 2) Geo
For this type the user must find GPS coordinate. you define a box in which the coordinate are correct.

### 2) Eval
For this type the user must solve an equation.

## How to run it?

Locally you can use `docker-compose up`, Create the .env file see .env section
Then execute `docker exec -it ARG_ENIB bash`, you should be in th container
Now run `node utils/fillDB.js ` to fill de database with the enigmas
and then go to http://localhost:8080/, this is the first page (it is probably in French, but it's just exposing the story)
Clique on "Démarrer", you will be sent to the first enigma
It was built to be deploy on Heroku.

If you want to access the admin page go to http://localhost:8080/signup
This URL is only accessible on development, you need to create an account before deploying in prod.

To log in, go to  http://localhost:8080/C4D814047712D944D86E786E9C93AE32672447AFE98220A8941109A3A87375E74F469CC5F4AA418E0A34BEB2E101F7FB367CAEE85BA288F3D77D285278E3C1AF

When logged in you have access to the admin page:

![admin page](data/admin_page.PNG?raw=true "admin page")

Here you can see the number of express session active and the number of Anti cheat ID.

You can also see every enigma with the first print datetime and the time before a hint is shown for this enigma. Clicking on the name display all the information’s, you can also change all the information’s.

As the game continue you will see name appear at the bottom, those are the winner who let their name.


## Anti-cheat-ID 
This is an id generated when a user solve an enigma, and deleted when he submit his name. the server will delete the older one for one reason : we were running on a free postgres addon of heroku and we had limited space.


## enigma
The enigma are store in database, but before that hey are store in /data/data.js
An enigma as the following properties

    - name: ther name of the enigma,
    - enigma_text: the story and question ,
    - url: the url(user something random, the server is design arrround that)
    - hint: the hint to display ,
    - end_text: the text at the end ,
    - type: enigma type flag, eval, geo,
    - flag: the flag in case of flag or eval ,
    - caracter: list of all caracter for eval type,
    - latA: bounding box for geo
    - longA: bounding box for geo
    - latB: bounding box for geo
    - longB: bounding box for geo
    - delay_to_hint: delay in days before displaying the hint, start on first print,
    - custom_js: custom js file for this enigma found in \public\js\custom
    - custom_html: custom template file for this enigma found in \views\enigma
    - custom_css: custom css file for this enigma found in \public\css\custom

## Things to do if you want to run it
    - update all the urls
    - create an .env file at the root of the project (see .env section) 
    - create all the enigmas and fill de database with /utils/fillDB.js


## .env template
DATABASE_URL=postgresql://:@:5432/ARG_ENIB  // url of database
SECRET_KEY=secretkey