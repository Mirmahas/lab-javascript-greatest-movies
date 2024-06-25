// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;

  const totalScore = movies.reduce((acc, movie) => {
    if (typeof movie.score === "number") {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  const averageScore = totalScore / movies.length;
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  // Creamos una copia del arreglo para no mutar el original
  const moviesCopy = JSON.parse(JSON.stringify(movies));

  return moviesCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // Creamos una copia del arreglo para no mutar el original
  const moviesCopy = JSON.parse(JSON.stringify(movies));

  const sortedTitles = moviesCopy
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20); // Tomar solo los primeros 20

  return sortedTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArray = moviesArray.map((movie) => {
    const newMovie = { ...movie };
    const duration = newMovie.duration;
    const match = duration.match(/(\d+)h\s*(\d+)min/);

    if (match) {
      newMovie.duration = parseInt(match[1]) * 60 + parseInt(match[2]);
    } else if (duration.includes("h")) {
      newMovie.duration = parseInt(duration) * 60;
    } else {
      newMovie.duration = parseInt(duration);
    }

    return newMovie;
  });

  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
