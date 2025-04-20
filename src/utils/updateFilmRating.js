const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateFilmRating = async (filmId) => {
    const result = await prisma.reviews.aggregate({
      where: { film_id: filmId },
      _avg: { rating: true },
      _count: { rating: true }
    });
  
    await prisma.films.update({
      where: { id: filmId },
      data: {
        average_ratings: result._count.rating > 0 ? result._avg.rating : null
      }
    });
  };


  module.exports = updateFilmRating;