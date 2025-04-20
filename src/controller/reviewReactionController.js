const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const reactToReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { reactionType } = req.body; // 'like' or 'dislike'
    const userId = req.user.id;

    // Validasi reactionType
    if (!['like', 'dislike'].includes(reactionType)) {
      return res.status(400).json({ error: 'Reaction type must be either like or dislike' });
    }

    // Cek apakah review ada
    const review = await prisma.reviews.findUnique({
      where: { id: parseInt(reviewId) }
    });

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Cek apakah user sudah pernah bereaksi sebelumnya
    const existingReaction = await prisma.review_reactions.findFirst({
      where: {
        user_id: userId,
        review_id: parseInt(reviewId)
      }
    });

    let reaction;
    
    if (existingReaction) {
      // Jika reactionType sama, hapus reaction (toggle)
      if (existingReaction.reaction_type === reactionType) {
        await prisma.review_reactions.delete({
          where: {
            user_id_review_id: {
              user_id: userId,
              review_id: parseInt(reviewId)
            }
          }
        });
        return res.json({ message: 'Reaction removed' });
      }
      
      // Jika berbeda, update reaction
      reaction = await prisma.review_reactions.update({
        where: {
          user_id_review_id: {
            user_id: userId,
            review_id: parseInt(reviewId)
          }
        },
        data: { reaction_type: reactionType }
      });
    } else {
      // Buat reaction baru
      reaction = await prisma.review_reactions.create({
        data: {
          user_id: userId,
          review_id: parseInt(reviewId),
          reaction_type: reactionType
        }
      });
    }

    res.json(reaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to react to review', details: error.message });
  }
};

const getReviewReactions = async (req, res) => {
  try {
    const { reviewId } = req.params;

    // Hitung jumlah like dan dislike
    const reactions = await prisma.review_reactions.groupBy({
      by: ['reaction_type'],
      where: { review_id: parseInt(reviewId) },
      _count: { reaction_type: true }
    });

    // Format response
    const result = {
      likes: reactions.find(r => r.reaction_type === 'like')?._count?.reaction_type || 0,
      dislikes: reactions.find(r => r.reaction_type === 'dislike')?._count?.reaction_type || 0
    };

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get review reactions', details: error.message });
  }
};

module.exports = {
  reactToReview,
  getReviewReactions
};