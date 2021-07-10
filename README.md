
<h1 align="center">
  George Clark Zone Challenge
</h1>

Ready to view [**HERE**](http://zone-movie-challenge.surge.sh/)

_A simple Gatsby starter using TMDB api to display movie info_

This was completed over the course of a weekend, I spent around 6 hours on it.
I added the search functionality, because.. why not. Then ran out of steam a bit when it came to the ratings switcher.. This needs refactoring.

The Basic funtionality is there, as per the brief. Although a bit of a shortcut was taken with the Genre filtering. I used buttons, and singular state for each genre, rather than collecting the state using checkboxes, and then filtering that.

There are bugs with how the Genre and Ratings filtering isnt working together, this would be solved with a more considered approach, and more time to implement better global state.

Tech used:
- React
- Gatsby
- Styled components
- React Context

Would like to improve:
- Fix all the 🐛
- Refactor and tidy up. E.g. index.js needs splitting out into more components.
- Testing
- A11y
- Theming