"use strict";

const numberOfFilms = prompt('How many movies have you watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last movies have you watched?', ''),
      b = prompt('How much do you rate it?', ''),
      c = prompt('Last movies have you watched?', ''),
      d = prompt('How much do you rate it?', '');


personalMovieDB.movies[a] = [b];
personalMovieDB.movies[c] = [d];

const a1 = prompt('How many actors u now?', ''),
      b1 = prompt('U now any actors names?', '');


personalMovieDB.actors[a1] = [b1];

const a2 = prompt('How many genres u now?', ''),
      b2 = prompt('U now any genres?', '');


personalMovieDB.actors[a2] = [b2];    

console.log(personalMovieDB);

console.log( NaN || 2 || undefined);
console.log( NaN && 2 && undefined);
console.log( 1 && 2 && 3);
console.log( !1 && 2 && !3);
console.log( 25 || null && !3);
console.log( NaN || null && !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);