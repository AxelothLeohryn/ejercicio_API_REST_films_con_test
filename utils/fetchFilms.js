const apiKey = process.env.API_KEY;

async function fetchFilm(id) {
  try {
    return await fetch(
      `https://www.omdbapi.com/?t=${id}&apikey=${apiKey}`
    ).then((res) => res.json());
  } catch (error) {
    return null;
  }
}

module.exports = {
  fetchFilm,
};
