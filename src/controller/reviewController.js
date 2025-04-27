const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const updateFilmRating = require('../utils/updateFilmRating');

// Create Review
const createReview = async (req, res) => {
  try {
    const { film_id, rating, comment } = req.body;
    const user_id = req.user.id;
    const parsedFilmId = parseInt(film_id);

    if (isNaN(parsedFilmId)) {
      return res.status(400).json({ error: 'Invalid film_id' });
    }

    // Cek apakah sudah ada review
    const existingReview = await prisma.reviews.findFirst({
      where: {
        user_id,
        film_id: parsedFilmId
      }
    });

    if (existingReview) {
      return res.status(400).json({ error: 'You have already reviewed this film' });
    }

    // Cek apakah film ada di list user (kecuali plan_to_watch)
    const userFilm = await prisma.user_films.findFirst({
      where: {
        user_id,
        film_id: parsedFilmId,
        NOT: { list_status: 'plan_to_watch' }
      }
    });

    if (!userFilm) {
      return res.status(400).json({ 
        error: 'Film must be in your list (except plan_to_watch) to review' 
      });
    }

    const review = await prisma.reviews.create({
      data: {
        user_id,
        film_id: parsedFilmId,
        rating,
        comment
      },
      include: {
        users: {
          select: {
            id: true,
            username: true,
            display_name: true
          }
        }
      }
    });

    await updateFilmRating(parsedFilmId);

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create review', details: error.message });
  }
};


// Update Review
const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment ,film_id} = req.body;
    const user_id = req.user.id;
    const reviewId = parseInt(id);

    if (isNaN(reviewId)) {
      return res.status(400).json({ error: 'Invalid review ID' });
    }

    const existingReview = await prisma.reviews.findUnique({
      where: { id: reviewId }
    });

    if (!existingReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    if (existingReview.user_id !== user_id) {
      return res.status(403).json({ error: 'You can only update your own reviews' });
    }

    const updatedReview = await prisma.reviews.update({
      where: { id: reviewId },
      data: {
        rating,
        comment,
        updated_at: new Date()
      },
      include: {
        users: {
          select: {
            id: true,
            username: true,
            display_name: true
          }
        }
      }
    });

    await updateFilmRating(film_id);

    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update review', details: error.message });
  }
};

// Delete Review
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = req.user.id;
    const reviewId = parseInt(id);

    if (isNaN(reviewId)) {
      return res.status(400).json({ error: 'Invalid review ID' });
    }

    const existingReview = await prisma.reviews.findUnique({
      where: { id: reviewId }
    });

    if (!existingReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    if (existingReview.user_id !== user_id) {
      return res.status(403).json({ error: 'You can only delete your own reviews' });
    }

    await prisma.reviews.delete({
      where: { id: reviewId }
    });

    await updateFilmRating(existingReview.film_id);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete review', details: error.message });
  }
};

module.exports = {
  createReview,
  updateReview,
  deleteReview
};
