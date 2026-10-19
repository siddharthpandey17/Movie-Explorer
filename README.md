# Movie Explorer 🎬

Search TV shows using a public API and build a personal watchlist. The starter UI is ready; JavaScript features are intentionally unfinished.

## Checklist
- [ ] Search by title using TVMaze API
- [ ] Show poster, title, year/status and summary
- [ ] Add/remove shows from My Watchlist
- [ ] Persist watchlist with `localStorage`
- [ ] Loading, no-results and error states
- [ ] Responsive cards
- [ ] Bonus: genre filter and recent searches

## API (no API key required)
`https://api.tvmaze.com/search/shows?q=YOUR_SEARCH`

Use `encodeURIComponent()` and `fetch()` with `async/await`. Each result contains a `show` object.

## Run
Extract the ZIP, open the folder in VS Code and open `index.html` or use Live Server.

## GitHub
Create a repository named `movie-explorer`; then run your usual workflow: `git add .`, `git commit -m "Build Movie Explorer"`, `git push`.

## Concepts
Fetch API, async/await, arrays, objects, DOM, events, localStorage and conditional rendering.
