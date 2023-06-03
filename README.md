# Pokémon Card Creator - Database Storage

This project is a follow up/update to the one that I [wrote previously](https://github.com/hyrumParamore/pokedex). I originally created the Pokémon card creator project as a way to test my skills in HTML, CSS, JavaScript, and React JS. With this project I wanted to take it a step further and implement a database to store the Pokémon data that is created. What I wanted to accomplish was to allow the user to search for a specific Pokémon and then choose whether or not to save that Pokémon's data to a database to be accessed whenever they want.

The purpose for this project was to learn how I could implement a database into something that I had already made. While this made it easier for me to not have to create an entirely new website base, it was also a bit difficult to implement it into a program that was already working. Overall, I learned a lot about databases, specifically Firebase and would like to look more into it again sometime.

<!-- {Provide a link to your YouTube demonstration. It should be a 4-5 minute demo of the software running, a walkthrough of the code, and a view of the cloud database.} -->

[Software Demo Video](http://youtube.link.goes.here)


# Cloud Database

The cloud database that I decided to use was Firebase Realtime Database by Google. This specific database platform is a NoSQL database meaning it lets you store and sync data between users in realtime.

The main structure is again not an SQL structure and not a relational database, but rather the main structure is most commonly written in a JSON format.
Mine is a very simple JSON format and the data is stored and looks like this:

```json
// JSON format for the Firebase Realtime Database.
// This is what it looks like when it is saved in the database.
{
  "pokedexform": {
    "-NWxlQuvii6nK9gVoA23": {
      "name": "Mewtwo"
    },
    "-NWxlSRH29dGMDxvaVYf": {
      "name": "Charmander"
    },
    "-NWxlTqSw9Cyy9UBA_CA": {
      "name": "Blastoise"
    },
    "-NWxlVM-P_QrWj6dvCpM": {
      "name": "Charizard"
    },
    "-NWxlXFBCUm179l2xSnP": {
      "name": "Eevee"
    }
  }
}
```
I did create other ```keys``` that contained different information for each Pokémon, but took them out because I wanted to get it to work with just the ```name``` first. I 


# Development Environment

* Visual Studio Code
* JavaScript
* HTML / CSS
* React JavaScript Library
* Git / Github
* Node.js
* JSON
* PokeAPI
* Firebase Realtime Database


# Useful Websites

**[Original Project](https://github.com/hyrumParamore/pokedex)** - It goes into more depth into how I created the Pokémon Web App.

* [Firebase Documentation - Realtime Database](https://firebase.google.com/docs/database/web/start)
* [Firebase Documentation - Cloud Firestone](https://firebase.google.com/docs/firestore)
* [W3Schools for Javascript](https://www.w3schools.com/js/default.asp)
* [W3Schools for React](https://www.w3schools.com/react/default.asp)
* And lots of different YouTube videos on how people have connected to a Firebase Realtime Database (Just search "how to connect to a firebase realtime database using react js) ***:D***


# Future Work

There are a lot of future ideas that I have for this project, here are a few that I think would be awesome!

- Implement a better way to store the data, and more types of data.
- Implement a way to allow users to select the different Pokémon from the database list to then recreate the cards that.
- Create a way to display all of the cards that have been created and allow the user to look through them and select or delete specific ones. 
- Create a way to build different decks based off the cards that they have created.