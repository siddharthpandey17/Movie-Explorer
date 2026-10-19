// Movie Explorer starter. Public API: https://api.tvmaze.com/search/shows?q=batman
const searchForm=document.querySelector("#search-form");
const searchInput=document.querySelector("#movie-search");
const statusText=document.querySelector("#status");
const movieGrid=document.querySelector("#movie-grid");
const resultsHeading=document.querySelector("#results-heading");
const resultCount=document.querySelector("#result-count");
const emptyState=document.querySelector("#empty-state");
const watchlistGrid=document.querySelector("#watchlist-grid");
const watchlistCount=document.querySelector("#watchlist-count");
const watchlistEmpty=document.querySelector("#watchlist-empty");

// TODO 1: Load saved shows from localStorage into an array.
// TODO 2: Write async searchMovies(query) using fetch() and TVMaze API.
// TODO 3: Render each show as a card with poster, title, year/status and summary.
// TODO 4: Add/remove a show from the watchlist.
// TODO 5: Render the watchlist and save changes to localStorage.
// TODO 6: Handle loading, no results and network errors.

searchForm.addEventListener("submit",async(event)=>{
  event.preventDefault();
  const query=searchInput.value.trim();
  if(!query)return;
  statusText.textContent="TODO: Connect the movie API in script.js.";
  resultsHeading.textContent=`Results for "${query}"`;
});

// API URL pattern:
// const url=`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
// const response=await fetch(url);
// const data=await response.json();
// Each item has a `show` property with title, image, summary, premiered and status.
