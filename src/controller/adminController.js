const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createGenre = async (req, res) => {
  const { name } = req.body;
  try {
    const genre = await prisma.genres.create({ data: { name } });
    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create genre', detail: error.message });
  }
};

const updateGenre = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updated = await prisma.genres.update({
      where: { id: parseInt(id) },
      data: { name }
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update genre', detail: error.message });
  }
};

const createFilm = async (req, res) => {
  const {
    title,
    synopsis,
    images, // array of image_url
    genres, // array of genre_id
    status,
    totalEpisodes,
    releaseDate
  } = req.body;

  try {
    const film = await prisma.films.create({
      data: {
        title,
        synopsis,
        status,
        total_episodes: totalEpisodes,
        release_date: new Date(releaseDate),
        film_genres: {
          create: genres.map(id => ({
            genres: { connect: { id } }
          }))
        },
        film_images: {
          create: images.map(url => ({ image_url: url }))
        }
      },
      include: {
        film_genres: {
          include: {
            genres: true
          }
        },
        film_images: true
      }
    });

    res.status(201).json(film);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create film', detail: error.message });
  }
};

module.exports = {
  createGenre,
  updateGenre,
  createFilm
};
