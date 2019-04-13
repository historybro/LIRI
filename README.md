# LIRI

## Overview
The purpose of this assignment was to make a LIRI (Language Interpretation and Recognition Interface) that would accept 4 commands in the command line and give back data. These orders were...
* Concert-This
    * A command that would search the Bands in Town Artist Events API for a Band and give back the following information
        * Name of the Venue
        * Venue Location
        * Date of the Event
* Spotify-This
    * A command that would use the Spotify API to search for a song title and give back the following information...
        * Artist(s)
        * The Song's Name
        * A preview link of the song from Spotify
        * The album that the song is from
        * If **no information** is given it will Return info about "The Sign" by Ace of Base
* Movie-This
    * A command that searches the OMDB API for a given movie title and give back the following information
        * Title of the movie
        * Year the move came out
        * IMDB rating
        * Rotten Tomatoes rating
        * Country where it was produced
        * Language of the movie
        * Plot of the movie
        * Actors in the movie
        * If **no information** is given it will return info about "Mr. Nobody"
* Do-What-It-Says
    * A command that will read the text inside of random.txt and use it to run a previous command
        * It should run as an example the spotify-this command for the song "I want it that Way"


## Changes from assignment as written
Instead of running the commands from the command line I added and used inquirer so that the choices were simpler to enter (select from list) otherwise the commands work the same they just don't have to be manually entered.

## Pictures of working LIRI
Since the code runs in the command line and uses sensitive API keys they have been ignored from upload to GIT the following pictures will show the working product.

### Program Start
![Program Opening](/images/1.png)
Format: ![Program Opening](url)

### Spotify
#### Spotify with no user input
![Spotify no input](/images/2.png)
Format: ![Spotify no input](url)
#### Spotify with user input
![spotify search](/images/5.png)
Format: ![spotify search](url)

### OMDB
#### OMDB with no user input
![OMDB no input](/images/3.png)
Format: ![OMDB no input](url)
#### OMDB with user input
![OMDB Search](/images/7.png)
Format: ![OMDB Search](url)

### Bands in Town
![BIT search](/images/6.png)
Format: ![BIT search](url)

### Do what it says (surprise me)
![Surprise Me](/images/4.png)
Format: ![Surprise Me](url)