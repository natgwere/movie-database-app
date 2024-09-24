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
  getTrendingMoviesPreview()
  getGenrePreview()
}

function trendPage() {
  console.log('trendi trendi')
} 

function movieDetailsPage() {
  console.log('movie movie')
}

function genresPage() {
  console.log('genri genri')
}

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)