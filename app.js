// app.js
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors());
// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'ReviewPiLem API',
        version: '1.0.0',
        description: 'API documentation for ReviewPiLem application'
      },
      servers: [
        {
          url: 'http://localhost:3000/api',
          description: 'Development server'
        }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        },
        schemas: {
          Film: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              title: { type: 'string' },
              synopsis: { type: 'string' },
              status: { 
                type: 'string',
                enum: ['not_yet_aired', 'airing', 'finished_airing'] 
              },
              total_episodes: { type: 'integer' },
              release_date: { type: 'string', format: 'date' },
              average_ratings: { type: 'number', format: 'float' }
            }
          },
          User: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              username: { type: 'string' },
              display_name: { type: 'string' },
              bio: { type: 'string' },
              list_visibility: {
                type: 'string',
                enum: ['public', 'private']
              }
            }
          }
        }
      },
      security: [{
        bearerAuth: []
      }]
    },
    apis: ['./src/routes/*.js']
  };

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes
app.use('/api/users', require('./src/routes/admin'));
app.use('/api/auth', require('./src/routes/auth')); //login/register
app.use('/api/users', require('./src/routes/profile')); //ada untuk user ada untuk guest
app.use('/api/films', require('./src/routes/film'));  //guest bisa semua
app.use('/api/reviews', require('./src/routes/review')); //perlu login(auth)
app.use('/api/review-reaction', require('./src/routes/reviewReaction')); //ada untuk user ada untuk guest
app.use('/api/listFilms', require('./src/routes/filmList')); //ada untuk user ada untuk guest
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

