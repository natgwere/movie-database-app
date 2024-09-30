const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    'api_key': API_KEY,
  }
})
// DRY
function createMoviesPreview(movies, container) {
  container.innerHTML = ''
  movies.forEach(movie => {

    const movieContainer = document.createElement('div')
    const shortTitle = movie.title.split(':')[0].split(' ').join('-')
    movieContainer.classList.add('movie-container')
    movieContainer.addEventListener('click', () => {
      console.log(movie)
      location.hash = `#movie=${movie.id}/${shortTitle}`
      headerSection.style.backgroundImage = `url('https://image.tmdb.org/t/p/w300${movie.poster_path}')`
      movieDetailTitle.innerHTML = movie.title
      movieDetailScore.innerHTML = movie.vote_average
      movieDetailDescription.innerHTML = movie.overview
      console.log(movie.genre_ids)
      getGenresPreview(movieDetailGenresList, movie.genre_ids)
      getRecommendations(movie.id)
    })

    const movieImg = document.createElement('img')
    movieImg.classList.add('movie-img')
    movieImg.setAttribute('alt', movie.title)
    movieImg.setAttribute(
      'src',
      'https://image.tmdb.org/t/p/w300' + movie.poster_path
    )
    movieContainer.appendChild(movieImg)
    container.appendChild(movieContainer)
  })
}

function createGenresPreview(genres, container) {

  container.innerHTML = ""
  genres.forEach(genre => {

    const genreContainer = document.createElement('div')
    genreContainer.classList.add('genre-container')

    const genreTitle = document.createElement('h3')
    genreTitle.classList.add('genre-title')
    genreTitle.setAttribute('id', 'id' + genre.id)
    genreTitle.textContent = genre.name 
    genreTitle.addEventListener('click', () => {
      location.hash = `#genre=${genre.id}/${genre.name}`
    })

    genreContainer.appendChild(genreTitle)
    container.appendChild(genreContainer)
  })

}

// API
async function getTrendingMoviesPreview() {
  const { data } = await api('trending/movie/day')
  const movies = data.results
  createMoviesPreview(movies, trendingMoviesPreviewList)
}

async function getGenresPreview(container) {
  const { data } = await api('genre/movie/list')
  console.log(data)

  let genres = data.genres

  console.log(genres)

  createGenresPreview(genres, container)
}

async function getMoviesByGenre(id, genre) {
  const { data } = await api('discover/movie', {
    params: {
      with_genres: id
    }
  })
  headerGenreTitle.innerHTML = decodeURIComponent(genre)
  const movies = data.results
  createMoviesPreview(movies, genericSection)
}

async function getMoviesBySearch(query) {
  const { data } = await api('search/movie', {
    params: {
      query
    }
  })
  const movies = data.results
  createMoviesPreview(movies, genericSection)
}

async function getTrendingMovies() {
  const { data } = await api('trending/movie/day')
  headerTrendsTitle.innerHTML = 'Trends'
  const movies = data.results
  createMoviesPreview(movies, genericSection)
}

async function getRecommendations(id) {
  const { data } = await api('movie/' + id + '/recommendations')
  const movies = data.results
  createMoviesPreview (movies, relatedMoviesContainer)
}