const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        display_name: true,
        bio: true,
        list_visibility: true,
        created_at: true,
        updated_at: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get profile', details: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { display_name, bio, list_visibility } = req.body;

    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        display_name,
        bio,
        list_visibility
      },
      select: {
        id: true,
        username: true,
        email: true,
        display_name: true,
        bio: true,
        list_visibility: true,
        updated_at: true
      }
    });

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile', details: error.message });
  }
};
const getUserPublicProfile = async (req, res) => {
    try {
      const { username } = req.params;
  
      const user = await prisma.users.findUnique({
        where: { username },
        select: {
          id: true,
          username: true,
          display_name: true,
          bio: true,
          list_visibility: true,
          created_at: true,
          // Include user films if list is public
          user_films: {
            where: {
              films: {
                status: {
                  not: 'not_yet_aired' // Filter out not yet aired films if needed
                }
              }
            },
            select: {
              list_status: true,
              films: {
                select: {
                  id: true,
                  title: true,
                  status: true,
                  total_episodes: true,
                  release_date: true
                }
              }
            }
          },
          reviews: {
            select: {
              id: true,
              rating: true,
              comment: true,
              created_at: true,
              films: {
                select: {
                  id: true,
                  title: true
                }
              }
            },
            orderBy: {
              created_at: 'desc'
            },
            take: 5 // Limit recent reviews
          }
        }
      });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Jika list_visibility private, sembunyikan film list
      if (user.list_visibility === 'private') {
        user.user_films = [];
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get user profile', details: error.message });
    }
  };
  
  // Jangan lupa tambahkan ke exports
  module.exports = {
    getProfile,
    updateProfile,
    getUserPublicProfile
  };