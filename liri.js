//Global and required variables
require("dotenv").config();
var fs = require("fs")
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var inquirer = require("inquirer");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var omdb = keys.omdb.secret;
var bit = keys.bit.secret;

//function to rerun
function check() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "confirm",
                message: "Would you like to continue?",
                default: true
            }
        ])
        .then(function (check) {
            if (check.confirm) {
                app();
            } else {
                console.log("Goodbye");
            }

        });
}

//function default
function def() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        search = dataArr[1]
        spotify.search({ type: "track", query: search, limit: 10 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("\nIn that case...");
            console.log(JSON.stringify("Song: " + data.tracks.items[0].name, null, 2));
            console.log(JSON.stringify("By: " + data.tracks.items[0].album.artists[0].name, null, 2));
            console.log(JSON.stringify("Album: " + data.tracks.items[0].album.name, null, 2));
            console.log(JSON.stringify("Spotify Link: " + data.tracks.items[0].preview_url, null, 2));
        });
    });

}

//function that searches spotify
function searchspotify() {
    console.log("Searching Spotify");
    inquirer
        .prompt([
            {
                type: "input",
                name: "search",
                message: "What song would you like to search for?"
            }
        ])
        .then(function (choice) {
            if (choice.search == "") {
                spotify.search({ type: "track", query: "The Sign", limit: 10 }, function (err, data) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    }
                    console.log("\nSomeone saw the sign...");
                    console.log(JSON.stringify("Song: " + data.tracks.items[8].name, null, 2));
                    console.log(JSON.stringify("By: " + data.tracks.items[8].album.artists[0].name, null, 2));
                    console.log(JSON.stringify("Album: " + data.tracks.items[8].album.name, null, 2));
                    console.log(JSON.stringify("Spotify Link: " + data.tracks.items[8].preview_url, null, 2));
                });

            } else {
                spotify.search({ type: "track", query: choice.search, limit: 10 }, function (err, data) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    }
                    console.log("\nDid you mean...");
                    console.log(JSON.stringify("Song: " + data.tracks.items[0].name, null, 2));
                    console.log(JSON.stringify("By: " + data.tracks.items[0].album.artists[0].name, null, 2));
                    console.log(JSON.stringify("Album: " + data.tracks.items[0].album.name, null, 2));
                    console.log(JSON.stringify("Spotify Link: " + data.tracks.items[0].preview_url, null, 2));
                });
            }
        });

}

//function to search omdb
function searchomdb() {
    console.log("Searching OMDB");
    inquirer
        .prompt([
            {
                type: "input",
                name: "search",
                message: "What movie would you like to search for?"
            }
        ])
        .then(function (choice) {
            var movieName = choice.search;
            if (movieName == "") {
                console.log("Don't know what you want to search? May I recommend this movie. It's on Netflix...");
                var queryUrl = "http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=" + omdb;
                axios.get(queryUrl).then(
                    function (response) {
                        console.log("\nTitle: " + response.data.Title);
                        console.log("\nRated: " + response.data.Rated);
                        console.log("\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                        console.log("\nCountry Produced: " + response.data.Country);
                        console.log("\nLanguage: " + response.data.Language);
                        console.log("\nPlot: " + response.data.Plot);
                        console.log("\nActors: " + response.data.Actors);
                    }
                );

            } else {
                var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + omdb;
                axios.get(queryUrl).then(
                    function (response) {
                        console.log("\nTitle: " + response.data.Title);
                        console.log("\nRated: " + response.data.Rated);
                        console.log("\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                        console.log("\nCountry Produced: " + response.data.Country);
                        console.log("\nLanguage: " + response.data.Language);
                        console.log("\nPlot: " + response.data.Plot);
                        console.log("\nActors: " + response.data.Actors);
                    }
                );
            }
        });

}

//function to search Bands in Town
function searchbit() {
    console.log("Searching Bands in Town");
    inquirer
        .prompt([
            {
                type: "input",
                name: "search",
                message: "What Band would you like to search for?"
            }
        ])
        .then(function (choice) {
            if (choice == "") {
                let search = "Willie Nelson";
                var queryurl = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=" + bit + "&date=upcoming";
                axios.get(queryurl).then(
                    function (response) {
                        console.log("\nEvery day is a good day for the Red Headed Stranger")
                        console.log("Upcoming Events:");
                        for (var i = 0; i < 5; i++) {
                            console.log("\nName of Venue: " + response.data[i].venue.name);
                            console.log("Venue Locaton: " + response.data[i].venue.city);
                            console.log("Date of Event: " + response.data[i].datetime);
                        }
                    }
                );
            } else {
                var queryurl = "https://rest.bandsintown.com/artists/" + choice.search + "/events?app_id=" + bit + "&date=upcoming";
                axios.get(queryurl).then(
                    function (response) {
                        console.log("Upcoming Events:");
                        for (var i = 0; i < 5; i++) {
                            console.log("\nName of Venue: " + response.data[i].venue.name);
                            console.log("Venue Locaton: " + response.data[i].venue.city);
                            console.log("Date of Event: " + response.data[i].datetime);
                        }
                    }
                );
            }            
        });

}

//the base App function
function app() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which service would you like to search?",
                choices: ["Spotify", "Bands in Town", "OMDB", "Surprise me"],
                name: "se"
            }
        ])
        .then(function (resp) {
            switch (resp.se) {
                case "Spotify":
                    searchspotify();
                    break;
                case "Bands in Town":
                    searchbit();
                    break;
                case "OMDB":
                    searchomdb();
                    break;
                default:
                    def();
                    break;

            }
        });
}


app();