const router = require("express").Router();
const fetchFilms = require("../utils/fetchFilms.js");

router.get("/:id?", async (req, res) => {
  try {
    let results = await fetchFilms.fetchFilm(req.params.id);
    res.status(200).json(results);
    res.status(404).json(`Expected status code 404 for a non-existent movie '${title}', but got ${response.statusCode}.`);
    console.log(results);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
router.post("/", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        message: `Se ha registrado la pelicula: ${req.body.Title}`,
        bodyReceived: req.body,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
router.put("/", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        message: `La pelicula con ID: ${req.params.id} ha sido actualizada`,
        bodyReceived: req.body,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: `La pelicula con ID: ${req.params.id} ha sido eliminada`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
