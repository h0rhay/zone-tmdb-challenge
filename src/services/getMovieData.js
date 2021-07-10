export default function getMovieData() {
  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9fb4c478845710a87ea059b803533ec4&language=en-US&page=1`)
    .then(res => res.json())
    .catch(err => console.log('Error: ', err))
}
