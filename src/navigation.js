searchFormBtn.addEventListener('click', () => {
  location.hash = '#search=' + searchFormInput.value
})

trendingBtn.addEventListener('click', () => {
  location.hash = '#trends='
})

arrowBtn.addEventListener('click', () => {
  history.back()
})

const navigator = () => {
  console.log({ location })
  location.hash.startsWith('#trends') ? trendPage() :
  location.hash.startsWith('#search=') ? searchPage() :
  location.hash.startsWith('#movie=') ? movieDetailsPage() :
  location.hash.startsWith('#genre=') ? genresPage() :
  homePage()

  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
  relatedMoviesContainer.scrollTo(0, 0)
 }

function homePage() {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.add('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.remove('inactive')
  headerGenreTitle.classList.add('inactive')
  headerTrendsTitle.classList.add('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.remove('inactive')
  genresPreviewSection.classList.remove('inactive')

  genericSection.classList.add('inactive')
  movieDetailSection.classList.add('inactive')

  getTrendingMoviesPreview()
  getGenresPreview(genresPreviewList)
}

function genresPage() {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerGenreTitle.classList.remove('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  genresPreviewSection.classList.add('inactive')

  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [_, genreData] = location.hash.split('=')
  const [genreId, genreName] = genreData.split('/')

  getMoviesByGenre(genreId, genreName)
}

function movieDetailsPage() {
  console.log('hash cambia')
  headerSection.classList.add('header-container--long')
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.add('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerGenreTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  genresPreviewSection.classList.add('inactive')

  genericSection.classList.add('inactive')
  movieDetailSection.classList.remove('inactive')
  
  const [_, idTitle] = location.hash.split('=')
  const [id, ] = idTitle.split('/')
  console.log(id)
  getMovieByID(id)
}

function searchPage() {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerGenreTitle.classList.add('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.add('inactive')
  genresPreviewSection.classList.add('inactive')

  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [_, query] = location.hash.split('=')
  getMoviesBySearch(query)
}

function trendPage() {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerGenreTitle.classList.add('inactive')
  headerTrendsTitle.classList.remove('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  genresPreviewSection.classList.add('inactive')

  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  getTrendingMovies()
 } 

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)