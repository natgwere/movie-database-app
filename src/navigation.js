searchFormBtn.addEventListener('click', () => {
  location.hash = '#search='
})

trendingBtn.addEventListener('click', () => {
  location.hash = '#trends='
})

arrowBtn.addEventListener('click', () => {
  location.hash = ''
})
const navigator = () => {
  console.log({ location })

  if (location.hash.startsWith('#trends')) {
    trendPage()
  } else if (location.hash.startsWith('#search=')) {
    searchPage()
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage()
  } else if (location.hash.startsWith('#genre=')) {
    genresPage()
  } else {
    homePage()
  }
}

function homePage() {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.add('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.remove('inactive')
  headerGenreTitle.classList.add('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.remove('inactive')
  genresPreviewSection.classList.remove('inactive')

  genericSection.classList.add('inactive')
  movieDetailSection.classList.add('inactive')

  getTrendingMoviesPreview()
  getGenrePreview()
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
}

function movieDetailsPage() {
  headerSection.classList.add('header-container--long')
  // headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.add('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerGenreTitle.classList.add('inactive')
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive')
  genresPreviewSection.classList.add('inactive')

  genericSection.classList.add('inactive')
  movieDetailSection.classList.remove('inactive')
}

function searchPage() {
  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  headerTitle.classList.add('inactive')
  headerGenreTitle.classList.remove('inactive')
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.add('inactive')
  genresPreviewSection.classList.add('inactive')

  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')
}

function trendPage() {
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
 } 



window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)