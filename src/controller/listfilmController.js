const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addFilmToList = async (req, res) => {
  try {
    const { filmId } = req.params;
    const { list_status } = req.body;
    const userId = req.user.id;

    // Validasi list_status
    const validStatuses = ['plan_to_watch', 'watching', 'completed', 'on_hold', 'dropped'];
    if (!validStatuses.includes(list_status)) {
      return res.status(400).json({ error: 'Invalid list status' });
    }

    // Cek apakah film ada
    const film = await prisma.films.findUnique({
      where: { id: parseInt(filmId) }
    });

    if (!film) {
      return res.status(404).json({ error: 'Film not found' });
    }

    // Validasi khusus untuk film not_yet_aired
    if (film.status === 'not_yet_aired' && list_status !== 'plan_to_watch') {
      return res.status(400).json({ 
        error: 'Not yet aired films can only be added to plan_to_watch list' 
      });
    }

    // Cek apakah film sudah ada di list user
    const existingEntry = await prisma.user_films.findFirst({
      where: {
        user_id: userId,
        film_id: parseInt(filmId)
      }
    });

    if (existingEntry) {
      // Update status jika sudah ada
      const updatedEntry = await prisma.user_films.update({
        where: {
          user_id_film_id: {
            user_id: userId,
            film_id: parseInt(filmId)
          }
        },
        data: { list_status },
        include: {
          films: {
            select: {
              id: true,
              title: true,
              status: true
            }
          }
        }
      });
      return res.json(updatedEntry);
    }

    // Buat entry baru
    const newEntry = await prisma.user_films.create({
      data: {
        user_id: userId,
        film_id: parseInt(filmId),
        list_status
      },
      include: {
        films: {
          select: {
            id: true,
            title: true,
            status: true
          }
        }
      }
    });

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add film to list', details: error.message });
  }
};

const getUserFilmList = async (req, res) => {
  try {
    const { userId } = req.params;
    const { status } = req.query;

    // Validasi status jika ada
    if (status && !['plan_to_watch', 'watching', 'completed', 'on_hold', 'dropped'].includes(status)) {
      return res.status(400).json({ error: 'Invalid list status filter' });
    }

    const user = await prisma.users.findUnique({
      where: { id: parseInt(userId) },
      select: { list_visibility: true }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Jika list private dan bukan pemiliknya
    if (user.list_visibility === 'private' && (!req.user || req.user.id !== parseInt(userId))) {
      return res.status(403).json({ error: 'This user list is private' });
    }

    const films = await prisma.user_films.findMany({
      where: {
        user_id: parseInt(userId),
        ...(status && { list_status: status })
      },
      select: {
        list_status: true,
        created_at: true,
        updated_at: true,
        films: {
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
            }
          }
        }
      },
      orderBy: {
        updated_at: 'desc'
      }
    });

    // Format response
    const result = films.map(entry => ({
      ...entry,
      film: {
        ...entry.films,
        genres: entry.films.film_genres.map(fg => fg.genres)
      }
    }));

    // Hapus film_genres yang tidak perlu
    result.forEach(entry => {
      delete entry.films;
      delete entry.film.film_genres;
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user film list', details: error.message });
  }
};

module.exports = {
  addFilmToList,
  getUserFilmList
};