const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    'api_key': API_KEY,
  }
})

async function getTrendingMoviesPreview() {
  const { data } = await api('trending/movie/day')
  console.log(data)

  const movies = data.results
  console.log(movies)
  const trendingMoviesPreviewList = document.querySelector('#trendingPreview .trendingPreview-movieList')
  movies.forEach(movie => {

    const movieContainer = document.createElement('div')
    movieContainer.classList.add('movie-container')

    const movieImg = document.createElement('img')
    movieImg.classList.add('movie-img')
    movieImg.setAttribute('alt', movie.title)
    movieImg.setAttribute(
      'src',
      'https://image.tmdb.org/t/p/w300' + movie.poster_path
    )
    movieContainer.appendChild(movieImg)
    trendingMoviesPreviewList.appendChild(movieContainer)
  })
}

async function getGenrePreview() {
  const { data } = await api('genre/movie/list')
  console.log(data)

  const genres = data.genres
  console.log(genres)
  const genresPreviewList = document.querySelector('#genresPreview .genresPreview-list')
  genres.forEach(genre => {

    const genreContainer = document.createElement('div')
    genreContainer.classList.add('genre-container')

    const genreTitle = document.createElement('h3')
    genreTitle.classList.add('genre-title')
    genreTitle.setAttribute('id', 'id' + genre.id)
    genreTitle.textContent = genre.name

    genreContainer.appendChild(genreTitle)
    genresPreviewList.appendChild(genreContainer)
  })
}