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
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
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
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/genres', require('./routes/genres'));
// app.use('/api/films', require('./routes/films'));
// app.use('/api/users', require('./routes/users'));
// app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/users', require('./src/routes/admin'));
app.use('/api/auth', require('./src/routes/auth')); //login/register
app.use('/api/users', require('./src/routes/profile')); //ada untuk user ada untuk guest
app.use('/api/films', require('./src/routes/film'));  //guest bisa semua
app.use('/api/reviews', require('./src/routes/review')); //perlu login(auth)
app.use('/api/reviews', require('./src/routes/reviewReaction')); //ada untuk user ada untuk guest
app.use('/api/listFilms', require('./src/routes/filmList')); //ada untuk user ada untuk guest
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));