const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getFilms = async (req, res) => {
  try {
    const { search, genre, status, sort } = req.query;
    
    const films = await prisma.films.findMany({
      where: {
        AND: [
          search ? { title: { contains: search, mode: 'insensitive' } } : {},
          genre ? { film_genres: { some: { genres: { name: genre } } } } : {},
          status ? { status } : {}
        ]
      },
      select: {
        id: true,
        title: true,
        status: true,
        total_episodes: true,
        release_date: true,
        average_ratings: true,
        film_genres: {
          select: {
            genres: {
              select: {
                id: true,
                name: true
              }
            }
          }
        },
        _count: {
          select: {
            reviews: true
          }
        }
      },
      orderBy: sort === 'latest' ? { release_date: 'desc' } : 
               sort === 'rating' ? { average_ratings: 'desc' } : 
               { title: 'asc' }
    });

    // Format response
    const result = films.map(film => ({
      ...film,
      genres: film.film_genres.map(fg => fg.genres),
      average_rating: film.average_ratings ? parseFloat(film.average_ratings.toString()) : null,
      review_count: film._count.reviews
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get films', details: error.message });
  }
};

const getFilmDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const film = await prisma.films.findUnique({
      where: { id: parseInt(id) },
      include: {
        film_genres: {
          include: {
            genres: true
          }
        },
        film_images: true,
        reviews: {
          select: {
            id: true,
            rating: true,
            comment: true,
            created_at: true,
            users: {
              select: {
                id: true,
                username: true,
                display_name: true
              }
            }
          },
          orderBy: {
            created_at: 'desc'
          },
          take: 5
        },
        _count: {
          select: {
            reviews: true,
            user_films: true
          }
        }
      }
    });

    if (!film) {
      return res.status(404).json({ error: 'Film not found' });
    }

    // Format response
    const response = {
      id: film.id,
      title: film.title,
      synopsis: film.synopsis,
      status: film.status,
      total_episodes: film.total_episodes,
      release_date: film.release_date,
      genres: film.film_genres.map(fg => fg.genres),
      images: film.film_images.map(img => img.image_url),
      average_rating: film.average_ratings ? parseFloat(film.average_ratings.toString()) : null,
      review_count: film._count.reviews,
      user_count: film._count.user_films,
      recent_reviews: film.reviews
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get film detail', details: error.message });
  }
};



module.exports = {
  getFilms,
  getFilmDetail,
};