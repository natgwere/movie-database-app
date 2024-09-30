const $ = (selector) => document.querySelector(selector)

// Sections
const headerSection = $('#header');
const trendingPreviewSection = $('#trendingPreview');
const genresPreviewSection = $('#genresPreview');
const genericSection = $('#genericList');
const movieDetailSection = $('#movieDetail');

// Lists & Containers
const searchForm = $('#searchForm');
const trendingMoviesPreviewList = $('.trendingPreview-moviesList');
const genresPreviewList = $('.genresPreview-list');
const movieDetailGenresList = $('#movieDetail .genres-list');
const relatedMoviesContainer = $('.relatedMovies-scrollContainer');

// Elements
const headerTitle = $('.header-title');
const arrowBtn = $('.header-arrow');
const headerGenreTitle = $('.header-title--genrePreview');
const headerTrendsTitle = $('.header-title--trends');

const searchFormInput = $('#searchForm input');
const searchFormBtn = $('#searchBtn');

const trendingBtn = $('.trendingPreview-btn');

const movieDetailTitle = $('.movieDetail-title');
const movieDetailDescription = $('.movieDetail-description');
const movieDetailScore = $('.movieDetail-score');