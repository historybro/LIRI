console.log('Hello.\nWelcome to Liri!');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
  secret: process.env.OMDB_SECRET
};

exports.bit = {
  secret: process.env.BIT_SECRET
};