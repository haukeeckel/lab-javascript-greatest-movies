// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => {
  let directors = movies.map((element) => element.director);

  return directors.filter((element, pos) => directors.indexOf(element) === pos);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) =>
  movies.filter(
    (element) =>
      element.director === 'Steven Spielberg' && element.genre.includes('Drama')
  ).length;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (movies) =>
  movies.length
    ? +(
        movies
          .map((element) => element.score)
          .reduce((acc, cur) => (cur === undefined ? acc : acc + cur), 0) /
        movies.length
      ).toFixed(2)
    : 0;

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (movies) =>
  scoresAverage(movies.filter((element) => element.genre.includes('Drama')));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  let sortedMovies = JSON.parse(JSON.stringify(movies)).sort(
    (first, second) => {
      if (first.year > second.year) {
        return 1;
      } else if (first.year < second.year) {
        return -1;
      } else {
        if (first.title > second.title) {
          return 1;
        } else if (first.title < second.title) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  );

  return sortedMovies;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) =>
  movies
    .map((element) => element.title)
    .sort((first, second) => {
      if (first > second) {
        return 1;
      } else if (first < second) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, 20);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
