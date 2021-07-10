export default function getGenresData() {
  return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9fb4c478845710a87ea059b803533ec4&language=en-US`)
    .then(res => res.json())
    .catch(err => console.log('Error: ', err))
}
