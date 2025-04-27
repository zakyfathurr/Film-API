const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const updateFilmRating = async (filmId) => {
  try {
    const id = parseInt(filmId);

    // Hitung rata-rata rating dan jumlah review
   const result = await prisma.reviews.aggregate({
    where: { film_id: id },
    _avg: { rating: true }
  });

  await prisma.films.update({
    where: { id: id },
    data: {
      average_ratings: result._avg.rating || null
    }
  });

    // console.log(`Film ID ${id} rating updated: ${averageRating} (${reviewCount} reviews)`);
  } catch (error) {
    console.error('Failed to update film rating', error.message);
    throw error; // Optional: lempar error jika perlu di-handle di controller
  }
};



  module.exports = updateFilmRating;